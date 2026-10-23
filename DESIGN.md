---
name: Movelaria Reis
description: Um caderno de projeto habitado, onde interiores reais conduzem uma conversa comercial acolhedora.
colors:
  paper: "#F3EFE4"
  paper-deep: "#E0D8C6"
  forest: "#18342D"
  sage: "#8FA99B"
  clay: "#A36D45"
  ink: "#17211E"
  brand-copper: "#C8793A"
typography:
  display:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "clamp(4rem, 7.6vw, 7.2rem)"
    fontWeight: 370
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "clamp(3.4rem, 6.3vw, 6.2rem)"
    fontWeight: 370
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "1.65rem"
    fontWeight: 430
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Outfit Variable, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Outfit Variable, Helvetica Neue, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.09em"
  brand:
    fontFamily: "Allura, cursive"
    fontSize: "1.9rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0"
  full: "999px"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "4rem"
  edge: "clamp(1.25rem, 4.8vw, 5.5rem)"
  section: "clamp(8rem, 14vw, 14rem)"
components:
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.45rem"
    height: "3.65rem"
  button-light-hover:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.paper}"
  button-dark:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.45rem"
    height: "3.65rem"
  filter-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "3.2rem"
  environment-row:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "9.5rem"
---

# Design System: Movelaria Reis

## Overview

**Creative North Star: "Caderno de projeto habitado"**

A interface se comporta como um caderno editorial que já pertence à casa: amplo, tátil e organizado por fotografias de interiores, margens generosas e notas precisas. O resultado é acolhedor sem ser rústico e comercial sem parecer catálogo; primeiro demonstra a qualidade espacial, depois orienta a conversa.

O modo é **persuade**. A abertura concentra o gesto autoral em uma única fotografia de sala, título curto e entrada tipográfica discreta. Logo abaixo, uma declaração de marca ocupa uma superfície própria e estática; o restante da página mantém rolagem natural, superfícies estáveis e hierarquia inequívoca até o contato pelo Instagram. A direção de superfície foi estabelecida a partir do seed `seed:5dc55ae22b7e2b4e`.

**Key Characteristics:**

- Fotografia de interiores em grande escala como principal prova visual.
- Ritmo editorial assimétrico, com alternância entre papel, verde profundo e tinta.
- Newsreader para expressão editorial, Outfit para navegação e leitura, e Allura exclusivamente para o nome da marca.
- Linhas finas, cantos retos e ausência de ornamento digital gratuito.
- Movimento autoral restrito à entrada tipográfica da abertura; a fotografia e a declaração de marca permanecem estáticas.

## Colors

A paleta combina papel quente e verdes de marcenaria em toda a experiência. O cobre da logo aparece como acento raro na assinatura institucional, sem criar uma segunda atmosfera cromática.

### Primary

- **Verde marcenaria** (`forest`): campo institucional, navegação sólida, botões escuros e fechamento comercial.
- **Papel quente** (`paper`): fundo principal, texto sobre superfícies escuras e botões claros.

### Secondary

- **Sálvia de ambiente** (`sage`): apoio em imagens, detalhes, numeração e mistura tonal para texto secundário.
- **Madeira queimada** (`clay`): foco, localização, hover comercial e pequenos acentos; nunca vira grande superfície dominante.

### Neutral

- **Tinta vegetal** (`ink`): texto principal, seção de orientação e sobreposições densas.
- **Papel envelhecido** (`paper-deep`): superfície da localização, separando o mapa do papel principal.
- **Cobre da marca** (`brand-copper`): símbolo, títulos funcionais, ícones e estados de hover do rodapé.

### Named Rules

**The Material Palette Rule.** Cada cor deve parecer extraída de madeira, folha, tinta ou papel; não introduza acentos digitais saturados.

**The Clay Accent Rule.** Use o acento de madeira para foco, orientação e resposta de estado, nunca como preenchimento recorrente de seções.

## Typography

**Display Font:** Newsreader Variable (com Georgia e serif como fallback)  
**Body Font:** Outfit Variable (com Helvetica Neue e sans-serif como fallback)
**Brand Font:** Allura (com cursive como fallback)

**Character:** Newsreader traz a voz ampla e humana de uma publicação de interiores; Outfit dá precisão contemporânea a controles, corpo e metadados. Allura aproxima o nome “Movelaria Reis” da caligrafia fina presente na logo e não é usada fora da assinatura da marca.

### Hierarchy

- **Display** (370, escala fluida de hero, entrelinha 0.85): títulos da primeira dobra e do fechamento, normalmente em duas linhas curtas.
- **Headline** (370, escala fluida de seção, entrelinha 0.85): entradas editoriais das grandes seções.
- **Title** (430, 1.65rem, entrelinha 1): nomes de projetos; títulos do processo podem crescer para 1.8rem com peso 390.
- **Body** (400, 1rem, entrelinha 1.6): explicação curta, com medida usual entre 37ch e 52ch.
- **Label** (700, 0.75rem, espaçamento 0.09em): ações, filtros, notas e navegação em caixa alta.

### Named Rules

**The Three Voices Rule.** Newsreader pertence aos títulos editoriais, Outfit conduz leitura funcional, navegação, filtro e ação, e Allura aparece somente no nome “Movelaria Reis”.

**The Short Line Rule.** Títulos grandes devem formar duas ou três linhas deliberadas, nunca uma coluna estreita de quebras acidentais.

## Layout

O desktop usa uma espinha de 12 colunas e bordas laterais fluidas (`edge`). Declaração de marca, ambientes, portfólio, processo e localização alternam proporções 8/3, 5/7 e assimetrias de altura para criar a sensação de páginas diferentes dentro do mesmo caderno. O portfólio distribui três registros por linha; o segundo recebe deslocamento vertical para quebrar a grade sem comprometer a leitura.

Abaixo de 980px, grades densas passam a duas colunas. Abaixo de 680px, as seções recebem bordas de 1.25rem, as grades viram fluxo vertical e a galeria mantém assimetria com cartões pares a 82% da largura. O cabeçalho preserva apenas marca e orçamento, o mapa vem antes do texto, a orientação divide imagem e conteúdo em blocos empilhados, e o diálogo ocupa a viewport inteira.

**The Editorial Spine Rule.** Assimetria deve organizar leitura, fotografia e ação; não a use como decoração independente do conteúdo.

**The Breathing Room Rule.** Seções principais preservam intervalos verticais generosos; não compacte a página para exibir mais cartões por dobra.

## Elevation & Depth

O sistema não usa `box-shadow`. Profundidade vem de fotografia recortada, campos tonais, overlays sobre imagem, linhas translúcidas e mudanças de escala muito discretas. O diálogo é separado do fundo por um backdrop de tinta quase opaco, não por uma sombra flutuante.

### Named Rules

**The Flat-by-Material Rule.** Separe camadas por imagem, cor, borda e oclusão; não introduza sombra, brilho, vidro ou elevação genérica.

## Shapes

Retângulos de canto reto estruturam botões, imagens, mapas, cartões, diálogos e superfícies. Círculos aparecem apenas em controles compactos e na marca `MR`: são sinais, não uma linguagem de cápsulas. Bordas de 1px e sublinhados direcionais substituem contêineres arredondados.

**The Straight Joinery Rule.** Preserve cantos retos nos elementos estruturais; reserve o círculo completo para marca, seta e indicadores pequenos.

## Components

### Buttons

- **Shape:** retângulo franco, sem raio, com altura mínima de 3.65rem e padding horizontal de 1.45rem.
- **Primary light:** papel sobre contexto escuro, texto verde e seta linear; no hover, assume madeira queimada com texto claro e sobe 2px.
- **Primary dark:** verde sobre papel, texto claro; no hover, assume madeira queimada e sobe 2px.
- **Focus:** contorno de 2px em madeira queimada com offset de 4px.
- **Quiet link:** ação textual sublinhada, usada somente como alternativa de menor prioridade.

### Chips

- **Style:** filtros são abas textuais em caixa alta, sem cápsula e sem preenchimento, apoiadas por uma linha horizontal contínua.
- **State:** a seleção escurece o texto e revela uma régua verde de 2px; a faixa rola horizontalmente no mobile.

### Cards / Containers

- **Corner Style:** sempre reto.
- **Project card:** fotografia vertical dominante, legenda abaixo e ação sobreposta que sobe no hover; no mobile, a ação permanece visível.
- **Environment row:** linha de largura total sobre verde, título serifado, descrição, miniatura inclinada e seta circular; a miniatura desaparece no mobile.
- **Shadow Strategy:** nenhuma sombra; linhas, recorte e contraste tonal definem limites.

### Navigation

O cabeçalho começa transparente sobre a fotografia e se torna verde quase opaco após a rolagem. Uma variação digital transparente usa o símbolo em cobre ao lado do nome em Allura; o atalho de orçamento permanece à direita. A navegação completa fica no rodapé.

### Project Dialog

No desktop, imagem e texto formam uma grade 1.35/0.65; no mobile, o diálogo ocupa toda a tela e distribui 58% para a imagem. O backdrop escuro, o botão reto de fechar, o foco contido e a devolução de foco preservam a clareza funcional.

### Map Panel

O mapa ocupa uma moldura retangular ampla e usa nove tiles locais de OpenStreetMap como fallback sob o iframe. O mapa interativo é centralizado nas coordenadas exatas fornecidas para a Movelaria Reis e a etiqueta verde identifica o ponto comercial em Ubá.

### Rodapé institucional

O rodapé retoma o verde profundo do site, com papel quente para leitura e cobre apenas nos acentos. No desktop, marca, navegação e contato formam três colunas; no celular, o conteúdo fica centralizado e empilhado. A assinatura completa transparente aparece maior que no cabeçalho, seguida da descrição, links, contatos reais e ícones operáveis de Instagram e WhatsApp.

### Abertura e declaração de marca

Uma única fotografia de sala sustenta a primeira dobra e mantém o título legível por meio de um overlay tonal. Apenas título, descrição e ações recebem uma entrada curta. A superfície de papel envelhecido seguinte apresenta “Móveis pensados para o seu jeito de viver.” como declaração fixa. A segunda mensagem institucional aparece somente na seção de processo, distante da abertura e apoiada por conteúdo prático.

## Do's and Don'ts

### Do:

- **Do** usar fotografia ampla como evidência visual e identificar claramente imagens conceituais e registros do acervo.
- **Do** manter texto, filtros, menus e contato em HTML operável, com foco visível e estados de teclado completos.
- **Do** preservar o ritmo de papel, verde profundo, tinta e fotografia ao longo da rolagem.
- **Do** concentrar a animação na entrada tipográfica do hero e respeitar `prefers-reduced-motion` com o conteúdo imediatamente visível.
- **Do** usar o WhatsApp real para conversas comerciais, o Instagram para presença social e o Google Maps para a localização exata.

### Don't:

- **Don't** introduzir sombras, gradientes decorativos, vidro, brilho, cápsulas ou cantos arredondados em superfícies estruturais.
- **Don't** esticar fotografias verticais para parecerem horizontais nem uniformizar a galeria em cartões idênticos.
- **Don't** transformar cada seção em espetáculo de movimento; abaixo da dobra, interação existe para orientar e confirmar estado.
- **Don't** afirmar endereço, região atendida, materiais, prazos ou etapas comerciais que não estejam confirmados.
- **Don't** trocar Newsreader, Outfit e Allura por pilhas genéricas ou usar a caligrafia da marca em textos funcionais.
