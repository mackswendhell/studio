# Referências de fora

Repertório trazido de fora do estúdio. Serve para **ampliar o cardápio de formatos**: quando você
não souber o que pedir, ou quando o estilo da [galeria](../estilos/README.md) não cobrir o que
você quer, é aqui que o Claude vem buscar ideia.

Nada aqui é obrigatório, e nada aqui é código que roda. São **referências**.

---

## awesome-opus5-5-videos

[`awesome-opus5-5-videos/`](awesome-opus5-5-videos/) · de [yihui-dev](https://github.com/yihui-dev/awesome-opus5-5-videos) · licença MIT · trazido em 28/10/2026

Uma coleção de **703 prompts** de vídeos que outras pessoas fizeram pedindo ao Claude para
escrever a animação **como código** — HTML, Canvas, SVG, Three.js, shaders, GSAP. Cada entrada
tem o prompt, o autor, o link do post original e, em 418 casos, um remake assistível.

| | |
|---|---|
| `data/videos.json` | o catálogo inteiro em um arquivo: categoria, técnica, prompt, autor, link |
| `prompts/` | um arquivo por vídeo, com o prompt em bloco de código |
| `README.md` | a parede de miniaturas, 100 destaques com imagem |

**O que tem dentro:** 369 motion graphics, 117 cenas 3D, 116 explainers, 101 interativos.
Por técnica: Canvas 267, SVG 183, Three.js 131, shader 92, GSAP 86, CSS 57.

### Como isto se encaixa no estúdio

O repertório é todo de animação em HTML. Isso casa com duas ferramentas que já estão aqui:

- **HyperFrames** (`hyperframes`, já instalado) renderiza HTML direto para vídeo. É o caminho
  mais curto: a ideia de lá nasceu em HTML e pode voltar a ser HTML aqui.
- **Remotion** (Nível 1) é React, não HTML cru, mas a *linguagem visual* atravessa sem problema —
  o que se aproveita é a estrutura do movimento, não o arquivo.

A câmera do Igor continua entrando por cima, pelas regras do [CLAUDE.md](../CLAUDE.md): o vídeo
gravado é intocável, e nada cobre o rosto.

### O que vale mesmo: os 26 prompts-molde

A maioria dos 703 é um pedido curto e vago — "Go all out", "make a video that could go viral".
Sem o vídeo ao lado, não dizem nada, e **207 estão incompletos** porque o autor não publicou tudo.

O ouro são os **26 prompts escritos como molde**, com seções `<inputs>`, `<rules>`, `<structure>`
e `<motion>`. Esses são briefings de direção de verdade: dizem o que pedir à pessoa, o que é
proibido, em quantos compassos o vídeo se divide e como o movimento se comporta. Eles se adaptam
a qualquer assunto, inclusive aos seus.

Para listá-los:

```bash
py -I -c "import json,io,sys; sys.stdout.reconfigure(encoding='utf-8'); d=json.load(io.open('referencias/awesome-opus5-5-videos/data/videos.json',encoding='utf-8')); [print(x['slug'],'|',x['category'],'|',','.join(x['tech_tags'])) for x in d if '<inputs>' in x['prompt']]"
```

Três que valem a leitura, porque o que eles ensinam serve para educação financeira:

| prompt | o que dá para roubar |
|---|---|
| `verbove-268381` | uma forma só que nunca é cortada, mudando de tamanho, raio e cor enquanto o conteúdo troca dentro dela; grade de 120 BPM, algo acontecendo a cada tempo; o conteúdo entra depois que o contêiner começa a mudar e sai antes da mudança seguinte, então texto nunca se sobrepõe |
| `twoclipping-000267` | uma lista explícita do que é **proibido** (brilho neon, tremor de câmera, estouro de partículas, easing saltitante) — o jeito mais rápido de um vídeo parar de parecer amador |
| `morse-369333` | uma forma que vira oito a doze estados de interface em sequência, bom para mostrar um app passo a passo sem print |

### Dois avisos honestos

**Prompt alheio não é resultado garantido.** Cada um desses vídeos saiu de uma conversa inteira,
com idas e voltas que não estão publicadas. Copiar o prompt não devolve o vídeo.

**Boa parte do acervo usa marca ou personagem de terceiros** — Star Wars, Spotify, produtos de
outras empresas. Isso é referência de técnica, não permissão: nos seus vídeos, o que entra na
tela é o seu material ou coisa que você pode usar.

### Atualizar depois

Entrou como subtree, então os arquivos estão aqui de verdade — quem clonar o estúdio já tem tudo,
sem comando extra. Para buscar o que o autor publicar depois:

```bash
git subtree pull --prefix="referencias/awesome-opus5-5-videos" https://github.com/yihui-dev/awesome-opus5-5-videos.git main --squash
```
