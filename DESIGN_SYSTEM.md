# DESIGN_SYSTEM.md — Sismica Engenharia

Referência visual do site. Apenas tokens e elementos de design.

---

## Conceito

**Precisão de instrumento.** O verde sobre o grafite escuro é o traçado de um sismógrafo
na tela — estética de osciloscópio / monitoramento. Fundo grafite, verde como "sinal
vivo", números em fonte monoespaçada (leitura de aparelho), waveform como assinatura
gráfica recorrente. Identidade **dark-first**.

---

## Paleta de cores

> Atualizado para bater com o verde real da logo oficial da Sismica (`#48DBA1`). O tom anterior
> (`#B4F23C`, lime) era um placeholder anterior ao recebimento dos arquivos de marca.

| Token            | Hex       | Uso                                         |
|------------------|-----------|---------------------------------------------|
| Verde Sismica    | `#48DBA1` | Acento principal: waveform, CTAs, destaques |
| Verde profundo   | `#319B71` | Hover / estado pressionado                  |
| Grafite (fundo)  | `#0E1512` | Fundo base do site                          |
| Surface (cards)  | `#161E19` | Superfície de cards e blocos                |
| Surface escura   | `#0B110E` | Faixas de seção alternada (mais escura)     |
| Borda            | `#2A352E` | Bordas sutis (0.5px)                         |
| Texto principal  | `#F1F5EF` | Texto sobre fundo escuro                     |
| Texto suave      | `#9AA89B` | Texto secundário, legendas                  |
| Texto em botão   | `#15240A` | Texto sobre o verde (nunca preto)           |
| Neutro claro     | `#F3F5F0` | Eventual seção clara (quebra de ritmo)      |

```css
:root {
  --green:        #48DBA1;
  --green-deep:   #319B71;
  --ink:          #0E1512;
  --surface:      #161E19;
  --surface-dark: #0B110E;
  --border:       #2A352E;
  --text:         #F1F5EF;
  --text-muted:   #9AA89B;
  --on-green:     #15240A;
  --neutral-lt:   #F3F5F0;
}
```

---

## Tipografia

Três fontes, todas no Google Fonts:

- **Space Grotesk** — títulos / display. Técnico, geométrico, preciso.
- **Inter** — corpo de texto. Neutro e legível.
- **JetBrains Mono** — dados e números (PPV, Hz, mm/s, dB). "Leitura de instrumento".

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

Escala sugerida: display 28–32px / título 22px / subtítulo 18px / corpo 15–16px
(line-height 1.6) / micro-label mono 11px (uppercase, letter-spacing 0.12em).

Exemplo de dado técnico (mono, verde): `PPV 12.4 mm/s   30.1 Hz   117 dB`

---

## Assinatura gráfica — waveform

Linha verde sobre o grafite. Usar como divisória de seção, no hero e em detalhes.

```html
<svg width="100%" height="56" viewBox="0 0 680 56" preserveAspectRatio="none">
  <line x1="0" y1="28" x2="680" y2="28" stroke="#2A352E" stroke-width="0.5"/>
  <polyline fill="none" stroke="#48DBA1" stroke-width="2"
   stroke-linejoin="round" stroke-linecap="round"
   points="0,28 90,28 130,28 150,12 170,44 190,20 205,36 225,28 320,28 350,28
           372,6 392,50 410,22 430,28 540,28 575,28 595,16 612,40 630,28 680,28"/>
</svg>
```

---

## Princípios visuais

- **Flat.** Sem gradientes, sem sombras pesadas, sem glow. Superfícies chapadas.
- **Bordas** de 0.5px na cor `--border`.
- **Cantos** arredondados 10–12px em cards e botões.
- **Respiro generoso** — não amontoar conteúdo.
- **Sentence case** em parágrafos; UPPERCASE só em micro-labels mono.

---

## Tokens de componente

```css
/* Botão primário */
.btn-primary {
  background: var(--green);
  color: var(--on-green);
  border: none;
  border-radius: 10px;
  padding: 13px 18px;
  font-family: var(--font-display);
  font-weight: 500;
}
.btn-primary:hover { background: var(--green-deep); }

/* Botão secundário */
.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 13px 18px;
  font-family: var(--font-display);
  font-weight: 500;
}

/* Card */
.card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 18px;
}
```

---

## Acessibilidade

O verde `#48DBA1` tem ótimo contraste **sobre o grafite escuro**, mas **péssimo sobre
branco** — ali some e falha em legibilidade. Por isso a identidade é **dark-first**.

Regra: **o verde nunca carrega texto longo sobre fundo claro.** Em eventual seção clara,
o verde vira só detalhe/acento; a leitura fica com grafite sobre branco.
