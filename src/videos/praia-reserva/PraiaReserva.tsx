import React from 'react';
import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {
  CARTELA,
  CARTELA_FAIXA,
  CARTELA_FAIXA_INICIO,
  COR,
  FAIXA,
  FONTE,
  LARGURA_UTIL,
  MARGEM,
  QUADROS_CARTELA,
  QUADROS_MASTER,
  VIDEO,
  blocosDaVariante,
  corpoQueCabe,
  f,
  type Bloco,
  type Tok,
  type Variante,
} from './base';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const corDoTok = (tok: Tok) =>
  tok.c === 'destaque' ? COR.turquesa : tok.c === 'alerta' ? COR.coral : COR.branco;

const textoDe = (toks: Tok[]) => toks.map((tok) => tok.t).join(' ');

/** Degradê navy que garante a leitura sobre o peito e o fundo de praia. Nunca sobe até o rosto. */
const Degrade: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(to bottom,
        rgba(7,37,58,0) 70%,
        rgba(7,37,58,0.55) 78%,
        rgba(7,37,58,0.88) 90%,
        rgba(7,37,58,0.94) 100%)`,
    }}
  />
);

/** Régua de 6 meses: vazia quando a pergunta é feita, preenchida de 3 a 6 no clímax. */
const Regua: React.FC<{top: number; altura: number; ate3?: number; ate6?: number}> = ({
  top,
  altura,
  ate3 = 0,
  ate6 = 0,
}) => {
  const vao = 8;
  const largura = (LARGURA_UTIL - 5 * vao) / 6;
  return (
    <div style={{position: 'absolute', left: MARGEM, top, display: 'flex', gap: vao}}>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const grupo = i < 3 ? ate3 : ate6;
        const indice = i < 3 ? i : i - 3;
        const cheio = interpolate(grupo, [indice / 3, (indice + 1) / 3], [0, 1], clamp);
        return (
          <div
            key={i}
            style={{
              width: largura,
              height: altura,
              borderRadius: altura / 2,
              border: `2px solid rgba(255,255,255,${0.6 - 0.45 * cheio})`,
              background: i < 3 ? COR.turquesa : COR.turquesaClaro,
              opacity: 0.18 + 0.82 * cheio,
              transform: `scaleY(${0.7 + 0.3 * cheio})`,
            }}
          />
        );
      })}
    </div>
  );
};

/** Palavras que entram uma a uma, no segundo exato em que são ditas. */
const Palavras: React.FC<{toks: Tok[]; inicio: number; sombra: boolean}> = ({toks, inicio, sombra}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <>
      {toks.map((tok) => {
        const nasce = f(tok.s - inicio);
        if (frame < nasce) return null;
        const pop = spring({frame: frame - nasce, fps, config: {damping: 14, stiffness: 190}});
        return (
          <span
            key={tok.t + tok.s}
            style={{
              color: corDoTok(tok),
              display: 'inline-block',
              transform: `scale(${0.78 + 0.22 * pop})`,
              textShadow: sombra ? '0 4px 18px rgba(4,23,35,.85)' : 'none',
            }}
          >
            {tok.t}
          </span>
        );
      })}
    </>
  );
};

const Legenda: React.FC<{bloco: Extract<Bloco, {tipo: 'legenda'}>}> = ({bloco}) => {
  const frame = useCurrentFrame();
  const duracao = f(bloco.e) - f(bloco.s);
  const corpo = corpoQueCabe(textoDe(bloco.toks), 40);
  const entrada = interpolate(frame, [0, 5], [0, 1], clamp);
  const saida = interpolate(frame, [duracao - 5, duracao], [1, 0], clamp);
  const tremorFrame = bloco.tremor === undefined ? -999 : frame - f(bloco.tremor - bloco.s);
  const tremor =
    tremorFrame >= 0 && tremorFrame < 7
      ? Math.sin(tremorFrame * 2.3) * 11 * (1 - tremorFrame / 7)
      : 0;

  return (
    <AbsoluteFill style={{opacity: Math.min(entrada, saida)}}>
      <div
        style={{
          position: 'absolute',
          left: MARGEM,
          width: LARGURA_UTIL,
          top: FAIXA.topo,
          height: bloco.regua ? 92 : FAIXA.altura,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px 14px',
          fontFamily: FONTE,
          fontSize: corpo,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          transform: `translateX(${tremor}px)`,
        }}
      >
        <Palavras toks={bloco.toks} inicio={bloco.s} sombra />
      </div>
      {bloco.regua ? <Regua top={886} altura={8} /> : null}
    </AbsoluteFill>
  );
};

/** Carimbo: mesma faixa, mas sobre uma placa navy. É a placa que o distingue da legenda. */
const Carimbo: React.FC<{bloco: Extract<Bloco, {tipo: 'carimbo'}>}> = ({bloco}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const duracao = f(bloco.e) - f(bloco.s);
  const corpo = corpoQueCabe(textoDe(bloco.toks), 46);
  const mola = spring({frame, fps, config: {damping: 16, stiffness: 150}});
  const saida = interpolate(frame, [duracao - 6, duracao], [1, 0], clamp);
  const alerta = bloco.toks.some((tok) => tok.c === 'alerta');

  return (
    <AbsoluteFill style={{opacity: saida}}>
      <div
        style={{
          position: 'absolute',
          left: MARGEM - 12,
          width: LARGURA_UTIL + 24,
          top: FAIXA.topo - 10,
          height: FAIXA.altura + 20,
          borderRadius: 18,
          background: alerta ? 'rgba(4,23,35,.86)' : 'rgba(4,23,35,.78)',
          borderLeft: `6px solid ${alerta ? COR.coral : COR.turquesa}`,
          transform: `scale(${0.92 + 0.08 * mola})`,
          transformOrigin: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 18px',
          boxSizing: 'border-box',
          gap: '2px 14px',
          fontFamily: FONTE,
          fontSize: corpo,
          lineHeight: 1.08,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        <Palavras toks={bloco.toks} inicio={bloco.s} sombra={false} />
      </div>
    </AbsoluteFill>
  );
};

/** Clímax: "3 a 6" com a régua se preenchendo de 3 até 6 enquanto ele fala. */
const Medidor: React.FC<{bloco: Extract<Bloco, {tipo: 'medidor'}>}> = ({bloco}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const duracao = f(bloco.e) - f(bloco.s);
  const mola = spring({frame, fps, config: {damping: 16, stiffness: 150}});
  const saida = interpolate(frame, [duracao - 6, duracao], [1, 0], clamp);
  const ate3 = interpolate(frame - f(bloco.tres - bloco.s), [0, 8], [0, 1], clamp);
  const ate6 = interpolate(frame - f(bloco.seis - bloco.s), [0, 8], [0, 1], clamp);
  const veredito = interpolate(frame - f(bloco.veredito.s - bloco.s), [0, 8], [0, 1], clamp);

  return (
    <AbsoluteFill style={{opacity: saida}}>
      <div
        style={{
          position: 'absolute',
          left: MARGEM,
          width: LARGURA_UTIL,
          top: FAIXA.topo,
          height: 66,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          fontFamily: FONTE,
          transform: `scale(${0.9 + 0.1 * mola})`,
          textShadow: '0 4px 18px rgba(4,23,35,.9)',
        }}
      >
        <span style={{fontSize: 56, color: COR.turquesa, opacity: ate3}}>3</span>
        <span style={{fontSize: 26, color: COR.branco, opacity: ate6}}>a</span>
        <span style={{fontSize: 56, color: COR.turquesaClaro, opacity: ate6}}>6</span>
        <span style={{fontSize: 24, color: COR.branco, letterSpacing: 3, marginLeft: 6}}>MESES</span>
      </div>
      {/* A régua prova o número; sai quando o veredito entra, para não disputar os mesmos pixels. */}
      <div style={{opacity: 1 - veredito}}>
        <Regua top={862} altura={14} ate3={ate3} ate6={ate6} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: MARGEM,
          width: LARGURA_UTIL,
          top: 860,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONTE,
          fontSize: 34,
          color: COR.coral,
          textTransform: 'uppercase',
          textShadow: '0 4px 18px rgba(4,23,35,.9)',
          opacity: veredito,
          transform: `translateY(${10 * (1 - veredito)}px)`,
        }}
      >
        {bloco.veredito.t}
      </div>
    </AbsoluteFill>
  );
};

/** Cartela de CTA dentro da faixa inferior, sem estender a duração. Entra em 30,05 s. */
const CartelaFaixa: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const mola = spring({frame, fps, config: {damping: 18, stiffness: 130}});

  return (
    <AbsoluteFill>
      <div
        style={{
          position: 'absolute',
          left: 16,
          width: 544,
          top: CARTELA_FAIXA.topo,
          padding: '12px 12px 14px',
          boxSizing: 'border-box',
          borderRadius: 18,
          background: 'rgba(4,23,35,.88)',
          borderLeft: `6px solid ${COR.turquesa}`,
          fontFamily: FONTE,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: mola,
          transform: `translateY(${16 * (1 - mola)}px)`,
        }}
      >
        {CARTELA_FAIXA.linhas.map((linha) => {
          const partes = linha.pilula ? linha.texto.split(linha.pilula) : [linha.texto];
          return (
            <div
              key={linha.texto}
              style={{fontSize: linha.corpo, lineHeight: 1.08, color: linha.cor, whiteSpace: 'nowrap'}}
            >
              {linha.pilula ? (
                <>
                  {partes[0]}
                  <span
                    style={{
                      background: COR.turquesa,
                      color: COR.navyProfundo,
                      borderRadius: 7,
                      padding: '1px 8px',
                    }}
                  >
                    {linha.pilula}
                  </span>
                  {partes[1]}
                </>
              ) : (
                linha.texto
              )}
            </div>
          );
        })}
        <div style={{fontSize: 20, color: COR.turquesa, letterSpacing: 1, marginTop: 2, whiteSpace: 'nowrap'}}>
          {CARTELA_FAIXA.assinatura}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Clipe: React.FC<{variante: Variante}> = ({variante}) => (
  <AbsoluteFill>
    {/* Uma única instância contínua do master, em escala 1,00. Sem zoom, crop ou card. */}
    <OffthreadVideo src={VIDEO} style={{width: '100%', height: '100%'}} />
    <Degrade />
    {blocosDaVariante(variante).map((bloco) => (
      <Sequence
        key={`${bloco.tipo}-${bloco.s}`}
        from={f(bloco.s)}
        durationInFrames={f(bloco.e) - f(bloco.s)}
        premountFor={30}
      >
        {bloco.tipo === 'legenda' ? <Legenda bloco={bloco} /> : null}
        {bloco.tipo === 'carimbo' ? <Carimbo bloco={bloco} /> : null}
        {bloco.tipo === 'medidor' ? <Medidor bloco={bloco} /> : null}
      </Sequence>
    ))}
    {variante === 'faixa' ? (
      <Sequence
        from={f(CARTELA_FAIXA_INICIO)}
        durationInFrames={QUADROS_MASTER - f(CARTELA_FAIXA_INICIO)}
        premountFor={30}
      >
        <CartelaFaixa />
      </Sequence>
    ) : null}
  </AbsoluteFill>
);

/** Cartela de CTA: entra em corte seco depois do último quadro do master, com o áudio já encerrado. */
const Cartela: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const assinatura = interpolate(frame - f(CARTELA.assinatura.s), [0, 10], [0, 1], clamp);

  return (
    <AbsoluteFill style={{background: COR.navy, fontFamily: FONTE}}>
      <div
        style={{
          position: 'absolute',
          left: MARGEM,
          width: LARGURA_UTIL,
          top: 250,
          display: 'flex',
          flexDirection: 'column',
          gap: 54,
        }}
      >
        {CARTELA.linhas.map((linha) => {
          const nasce = f(linha.s);
          if (frame < nasce) return null;
          const mola = spring({frame: frame - nasce, fps, config: {damping: 18, stiffness: 140}});
          const partes = linha.pilula ? linha.texto.split(linha.pilula) : [linha.texto];
          return (
            <div
              key={linha.texto}
              style={{
                fontSize: linha.corpo,
                lineHeight: 1.12,
                color: linha.cor,
                textAlign: 'center',
                opacity: mola,
                transform: `translateY(${18 * (1 - mola)}px)`,
              }}
            >
              {linha.pilula ? (
                <>
                  {partes[0]}
                  <span
                    style={{
                      background: COR.turquesa,
                      color: COR.navyProfundo,
                      borderRadius: 10,
                      padding: '2px 12px',
                      display: 'inline-block',
                    }}
                  >
                    {linha.pilula}
                  </span>
                  {partes[1]}
                </>
              ) : (
                linha.texto
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          top: 742,
          textAlign: 'center',
          opacity: assinatura,
        }}
      >
        <div style={{fontSize: 30, color: COR.branco, letterSpacing: 1}}>{CARTELA.assinatura.texto}</div>
        <div style={{fontSize: 20, color: COR.turquesa, letterSpacing: 3, marginTop: 10}}>
          {CARTELA.assinatura.serie.toUpperCase()}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const PraiaReserva: React.FC<{variante: Variante}> = ({variante}) => (
  <AbsoluteFill style={{background: COR.navy}}>
    <Sequence durationInFrames={QUADROS_MASTER} premountFor={30}>
      <Clipe variante={variante} />
    </Sequence>
    {variante === 'fim' ? (
      <Sequence from={QUADROS_MASTER} durationInFrames={QUADROS_CARTELA} premountFor={30}>
        <Cartela />
      </Sequence>
    ) : null}
  </AbsoluteFill>
);
