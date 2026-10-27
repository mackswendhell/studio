# Pacote de direção do Demo Tutorial (contrato Roteirista → Studio)

O pacote diz **o que aparece na tela e quando**. O Studio decide **como** (componentes, câmera, zoom). Quem gera: o Roteirista, na Fase 5-demo (`producao-inteligencia-aplicada`). Quem lê: a skill `demo-tutorial` do Studio. Quando não existe pacote, a própria `demo-tutorial` o escreve a partir do roteiro ou da gravação, neste mesmo formato.

> Este arquivo existe igual em `studio/skills/demo-tutorial/references/pacote-direcao.md` e em `roteirista-inteligencia-aplicada/references/pacote-direcao-demo.md`. Mudou um, copie para o outro.

## Pasta

```text
04-direcao/
├─ 04-plano-direcao-<slug>.md     uma cena por bloco de fala
├─ 04a-textos-telas-<slug>.md     tudo que aparece escrito na tela, já em português
├─ 04b-handoff-<slug>.md          o que não pode mudar, o que é exemplo, o que fica fora
├─ cenas-<slug>.json              as cenas em dados; o plano é gerado a partir dele
└─ prints/                        quadros de referência (Pnnn-tMMmSSs.jpg)
```

Na variante **demo com geração** (o vídeo testa um modelo generativo e o Macks gera os próprios clipes), entram também:

```text
├─ videos/            clipes gerados pelo Macks (K01-<o-que-prova>.mp4)
├─ personagens/       personagens e quadros-chave usados nas gerações (C01…, F01…)
├─ prints-<app>/      área logada real do Macks (H01…), base para reconstruir a interface
├─ mediakit/          material autorizado da campanha, quando patrocinado
└─ prints/            ilustrações da fonte só como referência de estilo: redesenhar, nunca usar o frame
```

Vídeos e MediaKit não vão para o git (`*.mp4` ignorado); o pacote vai para o Studio copiado pelo OneDrive.

No Studio, o pacote é copiado para `projetos/<NNN. slug>/direcao/` e os prints de referência para `direcao/prints/` (os prints do app real do Macks ficam em `projetos/<NNN. slug>/prints/`).

## 04-plano-direcao

Cabeçalho curto com: base visual (1920×1080, mesa creme quadriculada, app escuro), os formatos de câmera usados, regras de cursor e zoom, e a continuidade (quais conversas do exemplo atravessam quais cenas).

Em seguida, a **linha do tempo**: uma tabela com cena, início, duração, câmera, tipo e conteúdo, com a duração total estimada (fala a ~150 palavras/min + clipes que tocam sozinhos). O Roteirista gera essa tabela e as cenas com `producao-inteligencia-aplicada/scripts/plano_direcao.py`.

Depois, uma seção por cena:

```markdown
### C08 · Criar uma seção e mover conversas

Câmera **D** · fonte 02:29,0–02:42,0

> Outra mudança simples que ajuda muito: agora dá para separar as conversas em seções. Clica nos três pontos...

- [P020](prints/P020-t02m31s.jpg) Sidebar antes da organização
- [P021](prints/P021-t02m33s.jpg) Menu de contexto da conversa

**Tela:** Cursor abre ⋯, passa por Mover para a seção › Nova seção. Modal: nome "Clientes"; Criar seção. Arrastar "Relatório semanal do cliente" para o grupo.
```

Regras:
- **A fala da cena é o trecho exato do roteiro** (em bloco de citação). É por ela que o Studio acha a cena na gravação.
- **Câmera** com os códigos do estilo: A cheia · G vertical grande à direita · D vertical pequena à direita · E espelhada à esquerda · H 16:9 pequena · Q quadrada · T conteúdo em tela cheia (B-roll). `G>D` = transição.
- **Tela** descreve estados e ações na ordem da fala (clique, digitação, menu, zoom), nunca tempo absoluto. Diz o que é demonstração (app) e o que é explicação (diagrama, cartela).
- Prints com o estado que comprovam; um por estado diferente, sem duplicatas.
- Cartelas de capítulo numeradas (`01 / 07`) quando o vídeo tem blocos.
- **Cena que toca sozinha** (`I01`, `I02`…): um clipe inteiro em tela cheia, sem câmera e sem fala, com duração fixa e a indicação do áudio (do clipe ou mudo). O Macks grava em sequência, sem pausa, então a edição **abre um vão** desse tamanho entre a fala anterior e a próxima. Use quando o clipe precisa ser visto inteiro (briefing de patrocínio, resultado que prova algo).
- Três tipos de momento na tela: **toca sozinho** (T, cenas `I`), **demo com câmera** (D/G, interface reconstruída) e **reação** (H, o clipe ou comparação na tela com a câmera pequena comentando).

## 04a-textos-telas

- **Dicionário da interface** (original → português), conferido contra o app real quando houver print do Macks. Comandos ficam em inglês (`/output-style`, `/btw`).
- Por cena: pedidos digitados, respostas do Claude, tabelas, itens de menu, nomes de conversa, números. Texto pronto para entrar na tela, sem tradução pendente.
- Marcar o que é **dado de exemplo** (números de uma demo que não é do Macks): entra na tela como demonstração, nunca como resultado pessoal.

## 04b-handoff

- Arquivos de entrada e ordem de montagem sugerida (o trecho mais difícil primeiro).
- O que fica fora: marcas, avatares, funil comercial e chamadas de terceiros. Nada do autor da fonte aparece na tela.
- Como casar com a gravação: a duração final vem do áudio; se a fala mudar, a tela segue a fala.
- Critério de conferência: para cada cena, entrada, ação principal e resultado batem com a fala.
