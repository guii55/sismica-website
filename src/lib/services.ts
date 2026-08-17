import type { SegmentId } from "@/lib/segments"

export interface Service {
  id: string
  title: string
  description: string
  segments: SegmentId[]
}

export const services: Service[] = [
  {
    id: "monitoramento-vibracao-ruido",
    title: "Monitoramento de Vibração e Ruído",
    description:
      "Utilizamos sismógrafos de engenharia para registrar os níveis de vibração e ruído gerados por detonações, em um ou mais pontos de monitoramento ao redor da área de influência. Os dados coletados são analisados e comparados aos limites estabelecidos pela ABNT NBR 9653:2018, gerando relatórios técnicos que comprovam a conformidade da operação e dão suporte a ajustes no plano de fogo.",
    segments: ["mp", "cc", "ie"],
  },
  {
    id: "estacao-monitoramento-continuo",
    title: "Estação de Monitoramento Contínuo",
    description:
      "Instalamos sismógrafos em pontos fixos estratégicos para monitoramento contínuo de vibração e ruído, com coleta de dados via telemetria em tempo real. Essa estrutura permite acompanhar a operação de forma permanente, identificar tendências e agir rapidamente em caso de desvios, sem a necessidade de deslocamento de equipe a cada detonação.",
    segments: ["mp"],
  },
  {
    id: "avaliacao-desempenho-detonacao",
    title: "Avaliação do Desempenho da Detonação",
    description:
      "Acompanhamos o carregamento e a amarração de fogo em campo, analisando ultralançamento, sobrequebra e fragmentação do material desmontado. A partir dessa avaliação, apresentamos sugestões objetivas de melhoria ao plano de fogo, contribuindo para detonações mais seguras, eficientes e econômicas.",
    segments: ["mp", "ie"],
  },
  {
    id: "otimizacao-desmonte-rochas",
    title: "Otimização do Desmonte de Rochas",
    description:
      "Avaliamos os planos de fogo em uso para identificar oportunidades de melhoria na fragmentação da rocha, redução de danos à bancada, diminuição dos níveis de vibração e dos custos operacionais. O resultado é um desmonte mais eficiente, com menor impacto ao maciço rochoso e à vizinhança.",
    segments: ["mp", "ie"],
  },
  {
    id: "equacao-atenuacao-onda-sismica",
    title: "Equação de Atenuação de Onda Sísmica",
    description:
      "Determinamos como os níveis de vibração e ruído se reduzem com a distância da detonação, a partir de dados coletados em campo. Com base nessa análise, geramos uma equação de atenuação específica para o local, que permite calcular a carga máxima por espera dentro dos limites normativos.",
    segments: ["mp", "cc", "ie"],
  },
  {
    id: "assessoria-tecnica",
    title: "Assessoria Técnica",
    description:
      "Oferecemos planejamento e acompanhamento técnico de carregamento, amarração e execução de detonações, com elaboração de planos de fogo voltados ao licenciamento ambiental. Atuamos como suporte direto à equipe operacional, garantindo que cada etapa esteja alinhada às boas práticas de engenharia e à legislação vigente.",
    segments: ["mp", "ie"],
  },
  {
    id: "analise-furo-assinatura",
    title: "Análise de Furo Assinatura",
    description:
      "Monitoramos os tempos de retardo entre as detonações individuais de cada furo para identificar desvios na sequência de iniciação. Essa análise permite otimizar o uso de espoletas eletrônicas, melhorando a fragmentação e reduzindo vibrações por meio do ajuste fino dos tempos de retardo.",
    segments: ["mp"],
  },
  {
    id: "analise-dados-historicos",
    title: "Análise de Dados Históricos",
    description:
      "Analisamos o histórico de dados sismográficos da operação para verificar a conformidade com as normas técnicas ao longo do tempo e identificar padrões de comportamento da vibração. Esse trabalho resulta em equações de atenuação local mais precisas e em diagnósticos para a tomada de decisão sobre o plano de fogo.",
    segments: ["mp"],
  },
  {
    id: "avaliacao-impactos-estruturas",
    title: "Avaliação de Impactos em Estruturas",
    description:
      "Avaliamos a movimentação estrutural de edificações próximas às áreas de detonação, calculando as tensões induzidas pelas vibrações. Quando aplicável, monitoramos a variação de rachaduras e fissuras pré-existentes, fornecendo embasamento técnico para a gestão de riscos e o relacionamento com a comunidade.",
    segments: ["cc", "ie"],
  },
  {
    id: "monitoramento-equipamentos-construcao-civil",
    title: "Monitoramento de Equipamentos de Construção Civil",
    description:
      "Avaliamos os níveis de vibração gerados por rolos compactadores, rompedores hidráulicos e bate-estacas em obras de construção civil. O monitoramento permite verificar o risco de dano a estruturas vizinhas e ajustar a operação dos equipamentos dentro de limites seguros.",
    segments: ["cc"],
  },
  {
    id: "relacoes-com-comunidade",
    title: "Relações com a Comunidade",
    description:
      "Realizamos vistorias em residências e edificações na área de influência das detonações, com documentação fotográfica de danos pré e pós-detonação. Esse trabalho fortalece a relação de confiança entre a operação e a comunidade vizinha, com registros técnicos que respaldam qualquer reclamação ou questionamento.",
    segments: ["mp", "cc", "ie"],
  },
  {
    id: "treinamentos",
    title: "Treinamentos",
    description:
      "Promovemos capacitações sobre o uso seguro e eficiente de explosivos, incluindo a preparação de equipes para a obtenção da Carta Blaster. Os treinamentos são desenvolvidos sob medida para a realidade operacional de cada cliente, com foco em segurança e conformidade normativa.",
    segments: ["mp", "ie"],
  },
  {
    id: "monitoramento-ruido-ambiental",
    title: "Monitoramento de Ruído Ambiental",
    description:
      "Realizamos a medição de ruído ambiental gerado por detonações e demais atividades operacionais, em conformidade com a ABNT NBR 10151:2020. Os relatórios produzidos auxiliam no controle dos impactos sonoros sobre a vizinhança e no atendimento às exigências de órgãos ambientais.",
    segments: ["mp", "cc", "ie"],
  },
  {
    id: "laudos-licenciamento",
    title: "Laudos para Licenciamento Ambiental e DNPM",
    description:
      "Elaboramos laudos técnicos detalhados para apresentação a órgãos ambientais e ao DNPM, com base nos dados de monitoramento de vibração, ruído e desempenho de detonação. Esses documentos dão suporte aos processos de licenciamento e renovação de licenças de operação.",
    segments: ["mp", "cc", "ie"],
  },
]

export const homeHighlightServiceIds = [
  "monitoramento-vibracao-ruido",
  "otimizacao-desmonte-rochas",
  "assessoria-tecnica",
  "laudos-licenciamento",
]

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}

export function getServicesBySegment(segmentId: SegmentId | "all"): Service[] {
  if (segmentId === "all") return services
  return services.filter((service) => service.segments.includes(segmentId))
}
