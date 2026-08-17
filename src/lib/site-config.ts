export const siteConfig = {
  name: "Sismica",
  legalName: "Sismica Engenharia e Mineração Ltda.",
  crea: "CREA-RS 198300",
  tagline:
    "Monitoramento sísmico, assessoria técnica e otimização de desmonte de rochas para mineração e construção civil.",
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/a-sismica", label: "A Sismica" },
  { href: "/equipe", label: "Equipe" },
  { href: "/servicos", label: "Serviços" },
  { href: "/artigos", label: "Artigos" },
  { href: "/contato", label: "Contato" },
]

export const contactInfo = {
  address: "Rua Mario Quintana, 369 — Jardim Panorâmico, Ivoti-RS — CEP 93900-000",
  phone: "(51) 99540.0693",
  emailGeneral: "sismicaengenharia@gmail.com",
  emailTechnical: "vitor@sismica.eng.br",
  crea: "CREA-RS 198300",
}

/** Links derivados dos dados de contato — fonte única para tel/mailto/WhatsApp. */
export const contactLinks = {
  tel: "tel:+5551995400693",
  whatsapp: "https://wa.me/5551995400693",
  whatsappLabel: "WhatsApp",
  mailtoGeneral: `mailto:${contactInfo.emailGeneral}`,
  mailtoTechnical: `mailto:${contactInfo.emailTechnical}`,
}

/** Provas de competência exibidas com peso visual (PRODUCT.md: norma é prova social). */
export const proofPoints = [
  { value: "ABNT NBR 9653", detail: "Vibração de detonações", year: "2018" },
  { value: "ABNT NBR 10151", detail: "Ruído em áreas habitadas", year: "2020" },
  { value: "CREA-RS 198300", detail: "Responsável técnico registrado", year: "" },
]

/** Diferenciais — "Por que escolher a Sismica?" (copy.md). */
export const differentials = [
  {
    title: "Conformidade normativa",
    body: "Todos os serviços seguem a ABNT NBR 9653 e a ABNT NBR 10151, com respaldo técnico e jurídico para licenciamento.",
  },
  {
    title: "Registro CREA",
    body: "Laudos e projetos assinados por engenheiro com registro CREA-RS 198300, responsável técnico em campo.",
  },
  {
    title: "Campo e telemetria",
    body: "Atendimento in-loco em cada detonação e monitoramento remoto contínuo por telemetria em tempo real.",
  },
  {
    title: "Laudos para órgãos",
    body: "Relatórios técnicos detalhados para licenciamento ambiental e DNPM, prontos para fiscalização.",
  },
]

export const footerText =
  "Sismica Engenharia e Mineração — especializada em monitoramento sísmico, assessoria técnica e otimização de desmonte de rochas para mineração e construção civil."

export const copyrightText = `© 2026 Sismica Engenharia e Mineração Ltda. — ${siteConfig.crea}`
