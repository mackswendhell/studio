"""Transcrição local, gratuita, com o tempo exato de cada palavra.

Uso:
    python tools/transcrever.py "projetos/001. meu-video/video/master.mp4" "projetos/001. meu-video/transcricao" [idioma]

Gera palavras.json ({w, s, e} = palavra, início, fim em segundos) e transcript.md ([MM:SS.mmm] por frase).
Na primeira execução o faster-whisper baixa o modelo (~1,6 GB). Depois tudo roda offline.
Tenta a placa de vídeo (CUDA) e, se não houver, usa o processador sozinho.
"""

import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from faster_whisper import WhisperModel

MODELO = "large-v3-turbo"
DISPOSITIVOS = [("cuda", "float16"), ("cpu", "int8")]


def mmss(t):
    return f"{int(t // 60):02d}:{t % 60:06.3f}"


def carregar_audio(fonte):
    # decodifica com o ffmpeg (16 kHz mono) em vez do PyAV, cujas versões novas quebram o faster-whisper
    cmd = ["ffmpeg", "-nostdin", "-v", "error", "-i", str(fonte), "-f", "s16le", "-ac", "1", "-ar", "16000", "-"]
    pcm = subprocess.run(cmd, capture_output=True, check=True).stdout
    return np.frombuffer(pcm, np.int16).astype(np.float32) / 32768.0


def transcrever(fonte, idioma):
    audio = carregar_audio(fonte)
    erros = []
    for device, compute in DISPOSITIVOS:
        try:
            m = WhisperModel(MODELO, device=device, compute_type=compute)
            segs, info = m.transcribe(audio, language=idioma, word_timestamps=True, vad_filter=True)
            # o gerador só decodifica aqui; erros de CUDA/CUBLAS aparecem nesta linha
            return list(segs), info, device
        except Exception as e:
            erros.append(f"{device}: {e}")
    sys.exit("a transcrição falhou:\n" + "\n".join(erros))


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    fonte, saida = Path(sys.argv[1]), Path(sys.argv[2])
    idioma = sys.argv[3] if len(sys.argv) > 3 else "pt"
    saida.mkdir(parents=True, exist_ok=True)
    segs, info, device = transcrever(fonte, idioma)

    palavras = [{"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)} for s in segs for w in s.words]
    (saida / "palavras.json").write_text(json.dumps(palavras, ensure_ascii=False, indent=1), encoding="utf-8")

    linhas = [f"<!-- {MODELO} | {device} | {info.duration:.3f}s -->"]
    linhas += [f"[{mmss(s.start)}] {s.text.strip()}" for s in segs]
    (saida / "transcript.md").write_text("\n".join(linhas) + "\n", encoding="utf-8")
    print(f"{len(palavras)} palavras, {len(segs)} frases, {device} -> {saida}")


if __name__ == "__main__":
    main()
