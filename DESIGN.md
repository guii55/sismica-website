---
name: Sismica Engenharia
description: Monitoramento sísmico e engenharia de explosivos com estética de instrumento de precisão
colors:
  green: "#48DBA1"
  green-deep: "#319B71"
  ink: "#0E1512"
  surface: "#161E19"
  surface-dark: "#0B110E"
  border: "#2A352E"
  text: "#F1F5EF"
  text-muted: "#9AA89B"
  on-green: "#15240A"
  neutral-lt: "#F3F5F0"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "10px"
  md: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.sm}"
    padding: "13px 18px"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "13px 18px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "18px"
---

# Design System: Sismica Engenharia

## Overview

**Creative North Star: "O Sismógrafo de Precisão"**

O verde sobre o grafite escuro é o traçado de um sismógrafo na tela — estética de osciloscópio,
de instrumento de monitoramento, não de produto de consumo. O sistema parte de um único acento
vivo (`#48DBA1`) contra um fundo grafite quase preto, com números e dados técnicos sempre em fonte
monoespaçada, como uma leitura de aparelho. A identidade é **dark-first**: não existe modo claro,
porque o conceito inteiro depende do contraste entre sinal e fundo escuro.

Este sistema rejeita explicitamente o que PRODUCT.md lista como anti-referência: nada de
hero-metric template ou gradient text de SaaS genérico, nada de floreio decorativo de agência de
design, nada de serif display italic editorial, nada de paleta roxo-azul "AI default". A
elegância vem da precisão e da economia visual, não da decoração.

**Key Characteristics:**
- Fundo grafite quase preto, acento verde único e deliberado
- Tipografia técnica: display geométrico, corpo neutro, dados em mono
- Superfícies chapadas, sem sombra, sem glow, sem gradiente
- Waveform (traçado de onda) como assinatura gráfica recorrente
- Bordas finas (0.5px) e cantos suavemente arredondados (10–12px)

## Colors

Paleta restrita: um único acento verde vivo contra uma escala de grafites, com um neutro claro
reservado para a exceção pontual de uma seção clara.

### Primary
- **Verde Sismica** (`#48DBA1`): acento principal — waveform, CTAs, destaques, foco/ring. Usado
  com intenção, nunca como cor de fundo extensa.
- **Verde Profundo** (`#319B71`): estado hover/pressionado do verde principal — nunca usado isolado.

### Neutral
- **Grafite** (`#0E1512`): fundo base de todo o site.
- **Surface** (`#161E19`): superfície de cards e blocos elevados sobre o grafite.
- **Surface Escura** (`#0B110E`): faixas de seção alternada, mais escura que o grafite base.
- **Borda** (`#2A352E`): bordas sutis de 0.5px em cards, inputs e botões secundários.
- **Texto Principal** (`#F1F5EF`): texto sobre fundo escuro.
- **Texto Suave** (`#9AA89B`): texto secundário, legendas, metadados.
- **Texto em Botão** (`#15240A`): texto sobre o verde — nunca preto puro, sempre este grafite escuro.
- **Neutro Claro** (`#F3F5F0`): reservado para a eventual seção clara de quebra de ritmo.

### Named Rules
**The Dark-First Rule.** Não existe tema claro. O verde `#48DBA1` tem ótimo contraste sobre o
grafite escuro mas falha de contraste sobre fundo claro — por isso toda a identidade é construída
em torno do fundo escuro como padrão, não como uma opção de tema.

**The Light Surface Exception Rule.** Na eventual seção clara permitida (fundo `#F3F5F0`), o verde
nunca carrega texto longo — vira só detalhe/acento pontual; a leitura principal fica com grafite
sobre branco.

## Typography

**Display Font:** Space Grotesk (com sans-serif de fallback)
**Body Font:** Inter (com sans-serif de fallback)
**Label/Mono Font:** JetBrains Mono (com monospace de fallback)

**Character:** Geométrico e técnico no display, neutro e legível no corpo, leitura de instrumento
nos dados — a combinação nunca tenta ser decorativa.

### Hierarchy
- **Display** (peso 700, 28–32px, line-height 1.1): títulos principais e hero.
- **Headline/Título** (peso 500, 22px, line-height 1.2): títulos de seção.
- **Title/Subtítulo** (peso 500, 18px, line-height 1.3): subtítulos de bloco.
- **Body/Corpo** (peso 400, 15–16px, line-height 1.6): parágrafos correntes. Sentence case sempre.
- **Label/Micro-label** (peso 500, 11px, letter-spacing 0.12em, uppercase): rótulos curtos e dados
  técnicos como `PPV 12.4 mm/s   30.1 Hz   117 dB`, sempre em JetBrains Mono.

### Named Rules
**The Instrument Reading Rule.** Dados técnicos (PPV, Hz, dB, medições) são sempre tipografados em
JetBrains Mono, nunca na fonte de corpo — a leitura deve parecer saída de aparelho, não prosa.

## Elevation

Sistema **flat por padrão**: sem sombras, sem glow, sem gradientes. A profundidade vem inteiramente
de camadas tonais (grafite → surface → surface escura) e de bordas finas de 0.5px, nunca de
box-shadow.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são chapadas em repouso. Não há sombra decorativa em
nenhum estado — diferenciação de profundidade é só tonal (grafite/surface/surface-dark) e de borda.

## Components

### Buttons
- **Shape:** cantos suavemente arredondados (10px).
- **Primary:** fundo verde (`#48DBA1`), texto grafite escuro (`#15240A`, nunca preto puro),
  padding 13px 18px, fonte display peso 500.
- **Hover / Focus:** fundo muda para verde profundo (`#319B71`); foco usa ring verde.
- **Secondary:** fundo transparente, borda 0.5px na cor de borda, texto principal, mesmo padding e
  raio do primário.

### Cards / Containers
- **Corner Style:** cantos arredondados 12px.
- **Background:** surface (`#161E19`) sobre o fundo grafite.
- **Shadow Strategy:** nenhuma — ver seção Elevation.
- **Border:** 0.5px na cor de borda (`#2A352E`).
- **Internal Padding:** 18px.

### Inputs / Fields
- **Style:** borda 0.5px na cor de borda, fundo surface, cantos 10px.
- **Focus:** ring verde, mesma cor do acento principal.
- **Error:** estado de erro usa vermelho de destrutivo padrão (não definido em DESIGN_SYSTEM.md
  original; herdado do shadcn/ui por ser um estado funcional, não uma escolha de marca).

### Navigation
- Fundo grafite, texto principal, item ativo/hover em verde ou sublinhado verde. Menu mobile via
  drawer (Sheet), mesma paleta dark, sem clarear o fundo.

### Waveform Divider (componente de assinatura)
Linha verde sobre o grafite, traçando uma forma de onda irregular (como um sismograma real) —
usada como divisória de seção, detalhe no hero, e elemento de assinatura recorrente em todo o
site. Stroke verde (`#48DBA1`) de 2px sobre uma linha de base sutil na cor de borda.

## Do's and Don'ts

### Do:
- **Do** usar JetBrains Mono para todo dado técnico (PPV, Hz, dB) — nunca a fonte de corpo.
- **Do** manter bordas em 0.5px e cantos entre 10–12px em todos os componentes.
- **Do** manter respiro generoso entre seções — não amontoar conteúdo.
- **Do** usar sentence case em parágrafos; UPPERCASE só em micro-labels mono.
- **Do** usar o verde com intenção e raridade — CTAs, waveform, destaques pontuais.

### Don't:
- **Don't** usar gradientes, glow ou sombras decorativas em nenhum componente.
- **Don't** colocar texto verde longo sobre fundo claro (falha de contraste comprovada).
- **Don't** introduzir um toggle de modo claro/escuro — a identidade é dark-first fixa, não um tema.
- **Don't** usar hero-metric template, gradient text ou glassmorphism (anti-referência de SaaS
  genérico listada em PRODUCT.md).
- **Don't** usar serif display italic, drop caps, ou floreio decorativo de agência de design.
- **Don't** usar paleta roxo/azul-gradiente "AI default".
