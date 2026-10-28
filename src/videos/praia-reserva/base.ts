import {staticFile} from 'remotion';

export const FPS = 30;
export const LARGURA = 576;
export const ALTURA = 1024;

// ffprobe do master: 33,633333 s, 1008 quadros de vídeo, áudio até 33,605646 s.
export const DURACAO_MASTER = 33.633333;
export const QUADROS_MASTER = Math.round(DURACAO_MASTER * FPS); // 1009
// Cartela de CTA depois do último quadro: 3 linhas × 1,5 s + 0,5 s de respiro.
export const DURACAO_CARTELA = 5;
export const QUADROS_CARTELA = DURACAO_CARTELA * FPS; // 150
export const QUADROS_TOTAL = QUADROS_MASTER + QUADROS_CARTELA; // 1159

export const f = (s: number) => Math.round(s * FPS);
export const arq = (p: string) => staticFile(`001. Praia - Reserva de Emergencia/${p}`);
export const VIDEO = arq('video/IMG_2956.MP4');

// Zona do rosto medida em frames/sheet_queixo2.jpg: 1 quadro por segundo do vídeo inteiro,
// 34 quadros, união das caixas. A cabeça sai pelo topo e encosta nas duas laterais.
export const ZONA_ROSTO = {x0: 0, y0: 0, x1: 576, y1: 775} as const;

// Faixa útil: abaixo do rosto e acima da área onde o app desenha a própria interface.
export const FAIXA = {topo: 790, altura: 110} as const;
export const MARGEM = 36;
export const LARGURA_UTIL = LARGURA - 2 * MARGEM; // 504

export const COR = {
  navy: '#07253A',
  navyProfundo: '#041723',
  branco: '#FFFFFF',
  turquesa: '#19D3C5',
  turquesaClaro: '#7FEAE0',
  coral: '#FF6B4A',
};

export const FONTE = "'Arial Black', 'Arial Bold', Arial, Helvetica, sans-serif";

// Largura média de um caractere em Arial Black caixa alta, em unidades de em.
// Usada só para escolher o corpo da fonte: o texto quebra de verdade no flex-wrap.
const AVANCO = 0.62;

/** Maior corpo em que `texto` cabe em `linhas` linhas da faixa útil. */
export const corpoQueCabe = (texto: string, maximo: number, linhas = 2) =>
  Math.min(maximo, (linhas * LARGURA_UTIL) / (texto.length * AVANCO));

export type Cor = 'destaque' | 'alerta';
/** Uma palavra e o segundo exato em que ela é dita (do transcricao/palavras.json). */
export type Tok = {t: string; s: number; c?: Cor};

export type Bloco =
  | {tipo: 'legenda'; s: number; e: number; toks: Tok[]; regua?: true; tremor?: number}
  | {tipo: 'carimbo'; s: number; e: number; toks: Tok[]}
  | {tipo: 'medidor'; s: number; e: number; tres: number; seis: number; veredito: {t: string; s: number}};

// Todo gatilho vem de transcricao/palavras.json. Nada aparece antes de ser dito.
export const BLOCOS: Bloco[] = [
  // 1. Gancho: o hook inteiro se monta como um carimbo, palavra por palavra.
  {
    tipo: 'carimbo',
    s: 0.46,
    e: 3.38,
    toks: [
      {t: 'Você', s: 0.46},
      {t: 'aí,', s: 1.0},
      {t: 'tem', s: 1.98},
      {t: 'controle', s: 2.18, c: 'destaque'},
      {t: 'da', s: 2.48},
      {t: 'sua', s: 2.64},
      {t: 'vida?', s: 2.76},
    ],
  },

  // 2. A pergunta.
  {tipo: 'legenda', s: 3.38, e: 4.12, toks: [{t: 'Se', s: 3.38}, {t: 'você', s: 3.76}, {t: 'parar', s: 3.94}]},
  {tipo: 'legenda', s: 4.12, e: 5.5, toks: [{t: 'de', s: 4.12}, {t: 'trabalhar', s: 4.26}, {t: 'hoje,', s: 4.58}]},
  {
    tipo: 'legenda',
    s: 5.5,
    e: 6.22,
    regua: true,
    toks: [{t: 'quantos', s: 5.5, c: 'destaque'}, {t: 'meses', s: 5.88, c: 'destaque'}],
  },
  {
    tipo: 'legenda',
    s: 6.22,
    e: 8.7,
    regua: true,
    toks: [{t: 'você', s: 6.22}, {t: 'consegue', s: 7.04}, {t: 'sobreviver', s: 7.42}],
  },
  {
    tipo: 'legenda',
    s: 8.7,
    e: 10.06,
    toks: [
      {t: 'só', s: 8.7}, {t: 'com', s: 9.18}, {t: 'o', s: 9.34},
      {t: 'que', s: 9.44}, {t: 'você', s: 9.48}, {t: 'tem,', s: 9.68},
    ],
  },
  {tipo: 'legenda', s: 10.06, e: 11.04, toks: [{t: 'seu', s: 10.06}, {t: 'patrimônio,', s: 10.28, c: 'destaque'}]},
  {
    tipo: 'legenda',
    s: 11.04,
    e: 12.3,
    toks: [
      {t: 'o', s: 11.04}, {t: 'que', s: 11.08}, {t: 'você', s: 11.14},
      {t: 'tem', s: 11.28}, {t: 'investido?', s: 11.4, c: 'destaque'},
    ],
  },

  // 3. O nome da coisa.
  {tipo: 'legenda', s: 12.3, e: 12.94, toks: [{t: 'Você', s: 12.3}, {t: 'tem', s: 12.78}, {t: 'uma', s: 12.86}]},
  {
    tipo: 'carimbo',
    s: 12.94,
    e: 14.38,
    toks: [
      {t: 'reserva', s: 12.94, c: 'destaque'},
      {t: 'de', s: 13.4, c: 'destaque'},
      {t: 'emergência?', s: 13.5, c: 'destaque'},
    ],
  },

  // 4. O exemplo concreto.
  {
    tipo: 'legenda',
    s: 14.38,
    e: 16.06,
    toks: [{t: 'Se', s: 14.38}, {t: 'você', s: 14.7}, {t: 'é', s: 14.94}, {t: 'autônomo,', s: 15.26, c: 'alerta'}],
  },
  {
    tipo: 'legenda',
    s: 16.06,
    e: 17.36,
    toks: [{t: 'você', s: 16.06}, {t: 'quebra', s: 16.22}, {t: 'teu', s: 16.48}, {t: 'braço.', s: 16.6}],
  },
  {
    tipo: 'legenda',
    s: 17.36,
    e: 18.2,
    toks: [{t: 'Quanto', s: 17.36}, {t: 'tempo', s: 17.68}, {t: 'você', s: 17.88}, {t: 'consegue', s: 17.98}],
  },
  {
    tipo: 'legenda',
    s: 18.2,
    e: 20.28,
    toks: [
      {t: 'sustentar', s: 18.2, c: 'destaque'},
      {t: 'tua', s: 18.56, c: 'destaque'},
      {t: 'casa?', s: 18.72, c: 'destaque'},
    ],
  },

  // 5. Respiro: 20,28–21,86 ("Isso é pra pensar, né?") fica em câmera limpa, de propósito.

  // 6. Clímax.
  {
    tipo: 'legenda',
    s: 21.86,
    e: 22.72,
    toks: [{t: 'Se', s: 21.86}, {t: 'você', s: 22.3}, {t: 'não', s: 22.46}, {t: 'tem', s: 22.6}],
  },
  {
    tipo: 'legenda',
    s: 22.72,
    e: 24.2,
    toks: [
      {t: 'o', s: 22.72}, {t: 'mínimo', s: 22.84, c: 'destaque'}, {t: 'pra', s: 23.18},
      {t: 'se', s: 23.56}, {t: 'sustentar', s: 23.7}, {t: 'por', s: 24.04},
    ],
  },
  // O número é o herói e fica os 2 s inteiros. A fala corre: entre "três" (24,20) e "já" (25,12)
  // há menos de 1 s, então trocar o medidor por um carimbo deixaria "3 a 6" legível por 2 quadros.
  // O veredito entra embaixo, sem tirar o número da tela.
  {
    tipo: 'medidor',
    s: 24.2,
    e: 26.22,
    tres: 24.2,
    seis: 24.64,
    veredito: {t: 'já tá muito errado.', s: 25.12},
  },

  // 7. A consequência.
  {
    tipo: 'legenda',
    s: 26.22,
    e: 26.96,
    toks: [{t: 'Se', s: 26.22}, {t: 'você', s: 26.44}, {t: 'não', s: 26.58}, {t: 'pensa', s: 26.7}],
  },
  {tipo: 'legenda', s: 26.96, e: 28.06, toks: [{t: 'no', s: 26.96}, {t: 'futuro,', s: 27.06, c: 'destaque'}]},
  {
    tipo: 'legenda',
    s: 28.06,
    e: 29.16,
    toks: [{t: 'qualquer', s: 28.06}, {t: 'coisa', s: 28.3}, {t: 'que', s: 28.5}, {t: 'aconteça', s: 28.6}],
  },
  {
    tipo: 'legenda',
    s: 29.16,
    e: 30.62,
    tremor: 29.4,
    toks: [
      {t: 'vai', s: 29.16}, {t: 'quebrar', s: 29.4, c: 'alerta'},
      {t: 'tua', s: 29.66, c: 'alerta'}, {t: 'vida.', s: 29.8, c: 'alerta'},
    ],
  },

  // 8. Fecho.
  {tipo: 'legenda', s: 30.62, e: 31.68, toks: [{t: 'Então,', s: 30.62}, {t: 'de', s: 31.28}, {t: 'repente', s: 31.46}]},
  {
    tipo: 'legenda',
    s: 31.68,
    e: 32.24,
    toks: [{t: 'é', s: 31.68}, {t: 'hora', s: 31.78}, {t: 'de', s: 31.84}, {t: 'começar', s: 31.94}],
  },
  {
    tipo: 'legenda',
    s: 32.24,
    e: 33.3,
    toks: [{t: 'a', s: 32.24}, {t: 'pensar', s: 32.34}, {t: 'sobre', s: 32.5}, {t: 'isso.', s: 32.74}],
  },
];

// Variante "faixa": a cartela entra na faixa inferior, dentro da duração do master.
// Entra em 30,05 s, logo depois de "vida." (29,80 s), e segura até o último quadro: 3,58 s.
// As legendas do fecho saem para não disputar a mesma faixa — o CTA substitui a última frase,
// que é justamente onde ele diz "é hora de começar a pensar sobre isso".
export const CARTELA_FAIXA_INICIO = 30.05;

export const blocosDaVariante = (variante: Variante): Bloco[] =>
  variante === 'fim'
    ? BLOCOS
    : BLOCOS.filter((b) => b.s < CARTELA_FAIXA_INICIO).map((b) =>
        b.e > CARTELA_FAIXA_INICIO ? {...b, e: CARTELA_FAIXA_INICIO} : b,
      );

export type Variante = 'faixa' | 'fim';

// Cartela de CTA (aprovada em 23/10): mesmo mecanismo de comentário do criativo 004.
export const CARTELA = {
  linhas: [
    {texto: 'QUANTOS MESES VOCÊ AGUENTA?', s: 0, corpo: 46, cor: COR.branco},
    {texto: 'COMENTA RESERVA AQUI EMBAIXO', s: 1.5, corpo: 44, cor: COR.branco, pilula: 'RESERVA'},
    {texto: 'QUE EU TE MANDO O PASSO A PASSO', s: 3.0, corpo: 38, cor: COR.turquesaClaro},
  ],
  assinatura: {texto: '@naluinvest', serie: 'parte 1 de 4', s: 4.0},
};

// Cartela na faixa inferior: tudo abaixo da zona do rosto (y 775) e acima do rodapé do app.
// Corpos medidos no render, não estimados: em Arial Black caixa alta um caractere ocupa
// ~0,70 em, e não os 0,62 que `corpoQueCabe` assume. Cada linha é dimensionada à mão
// para caber numa linha só nos 520 px úteis do painel.
export const CARTELA_FAIXA = {
  // 786 é o mais alto possível: a zona do rosto termina em 775 e o painel precisa de folga.
  topo: 786,
  linhas: [
    {texto: 'QUANTOS MESES VOCÊ AGUENTA?', corpo: 27, cor: COR.branco},
    {texto: 'COMENTA RESERVA AQUI EMBAIXO', corpo: 25, cor: COR.branco, pilula: 'RESERVA'},
    {texto: 'QUE EU TE MANDO O PASSO A PASSO', corpo: 23, cor: COR.turquesaClaro},
  ],
  assinatura: '@naluinvest · parte 1 de 4',
};
