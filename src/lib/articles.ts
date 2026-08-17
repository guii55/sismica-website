export type ArticleKind = "artigo" | "tese"

export interface Article {
  id: string
  /** Título original da publicação, como foi publicado. */
  title: string
  /** Ano de publicação. */
  year: string
  /** Veículo — congresso, revista ou programa de pós-graduação. */
  venue: string
  /** Idioma do documento completo. */
  language: "PT" | "EN"
  kind: ArticleKind
  /** Resumo em português, escrito a partir do abstract original. */
  summary: string
  /** Caminho do PDF em /public. */
  file: string
}

/** Produção técnica de Vitor Luconi Rosenhaim — ordenada da mais recente para a mais antiga. */
export const articles: Article[] = [
  {
    id: "plugs-tampao-desmonte",
    title:
      "Avaliação da influência da aplicação de plugs para tampão no desmonte de rochas com explosivos",
    year: "2022",
    venue: "Revista Areia & Brita nº 78 — ANEPAC",
    language: "PT",
    kind: "artigo",
    summary:
      "Avaliação técnica de plugs para tampão no desmonte de rochas com explosivos, medindo sua eficácia no controle de lançamento de fragmentos e na fragmentação da pilha. Os testes incluíram a redução do comprimento do tampão e modificações na geometria da malha de perfuração, com análise do impacto no custo das operações de desmonte, carregamento e transporte.",
    file: "/artigos/2022-anepac-plugs-tampao-desmonte-rochas-explosivos.pdf",
  },
  {
    id: "resposta-alvenaria-brasileira",
    title:
      "Measuring the Response of a Typical Brazilian Masonry Type Structure to Coal Mine Blasting Vibrations",
    year: "2016",
    venue: "Journal of Performance of Constructed Facilities — ASCE",
    language: "EN",
    kind: "artigo",
    summary:
      "Estudo conduzido em mina de carvão a céu aberto no sul do Brasil, com detonações diárias a partir de 100 m de residências. Uma estrutura típica de alvenaria foi instrumentada com sensores de velocidade e medidor de deslocamento sobre uma rachadura existente. As deformações induzidas pelas detonações ficaram abaixo dos limites de ruptura dos materiais das paredes, e as variações climáticas de longo prazo mostraram influência maior sobre a rachadura do que as vibrações do desmonte.",
    file: "/artigos/2016-jpcf-response-brazilian-masonry-structure-coal-blast-vibrations.pdf",
  },
  {
    id: "comparacao-rocha-dura-branda-isee",
    title: "Comparison of Structure Response to Hard and Soft Rock Blasting",
    year: "2015",
    venue: "41ª Conferência Anual da ISEE (EUA)",
    language: "EN",
    kind: "artigo",
    summary:
      "Comparação da resposta de duas estruturas a vibrações de desmonte: uma residência próxima a uma mina de carvão (rocha branda) e um prédio comercial em pedreira de basalto (rocha dura). Para os mesmos níveis de vibração no solo, as estruturas apresentaram movimentações e deformações distintas conforme a geologia e o plano de fogo. A resposta das rachaduras às variações climáticas de longo prazo foi 2,5 a 3,5 vezes maior que a influência das detonações.",
    file: "/artigos/2015-isee-comparison-structure-response-hard-soft-rock-blasting.pdf",
  },
  {
    id: "resposta-estrutura-rachadura-carvao",
    title: "Structure and Crack Response to Coal Blasting in Brazil",
    year: "2014",
    venue: "40ª Conferência Anual da ISEE (EUA)",
    language: "EN",
    kind: "artigo",
    summary:
      "Uma estrutura de tijolo e argamassa dentro da área de operação de uma mina de carvão foi submetida a detonações diárias, a distâncias de 32 a 810 m e cargas por espera de 14 a 250 kg — 115 detonações registradas em seis meses. A abertura e o fechamento da rachadura instrumentada por efeito do clima foram cerca de 2,7 vezes maiores que o máximo deslocamento induzido por detonação, e as deformações calculadas nas paredes ficaram abaixo das deformações de ruptura dos materiais.",
    file: "/artigos/2014-isee-structure-crack-response-coal-blasting-brazil.pdf",
  },
  {
    id: "impacto-rocha-dura-branda-cbmina",
    title:
      "Comparação do impacto gerado pelo desmonte de rochas com explosivos em rocha dura e rocha branda na movimentação de estruturas",
    year: "2014",
    venue: "8º Congresso Brasileiro de Mina a Céu Aberto (CBMina)",
    language: "PT",
    kind: "artigo",
    summary:
      "Sensores de velocidade foram instalados nas paredes de duas estruturas típicas da construção civil nacional — uma próxima a uma mina de carvão e outra a uma pedreira — para correlacionar a movimentação das paredes com as ondas sísmicas e acústicas das detonações. As deformações de cisalhamento, tração e flexão induzidas foram comparadas com as deformações de ruptura dos materiais, e a movimentação de uma rachadura existente foi comparada com a influência diária das variações climáticas.",
    file: "/artigos/2014-cbmina-impacto-desmonte-rocha-dura-branda-movimentacao-estruturas.pdf",
  },
  {
    id: "reducao-vibracao-close-in",
    title:
      "Reducing Blast Vibration Amplitudes Close-In to Structures of Sub-Standard Construction",
    year: "2013",
    venue: "39ª Conferência Anual da ISEE (EUA)",
    language: "EN",
    kind: "artigo",
    summary:
      "Com detonações de produção previstas a 100 m de um bairro residencial no sul do Brasil, foram testadas modificações no plano de fogo — mudanças de afastamento e espaçamento, combinações de tempos de retardo e uso de reforçador (cast primer) — para reduzir as vibrações abaixo dos limites da norma brasileira e mitigar a percepção da comunidade. Cada alteração foi avaliada quanto ao efeito nos níveis de vibração e no custo operacional.",
    file: "/artigos/2013-isee-reducing-blast-vibration-close-in-structures.pdf",
  },
  {
    id: "vibracoes-clima-rachadura",
    title:
      "Comparação entre a influência das vibrações oriundas do desmonte com explosivos e as variações climáticas em uma rachadura existente em uma residência",
    year: "2013",
    venue: "IV Congresso Brasileiro de Carvão Mineral (CBCM)",
    language: "PT",
    kind: "artigo",
    summary:
      "Uma residência na área de operação de uma mina de carvão foi instrumentada com geofones nas paredes e um medidor de deslocamento sobre uma rachadura existente. Foram registradas 104 detonações em seis meses, a distâncias de 50 a mais de 800 m. Os resultados mostram que as variações de temperatura e umidade afetam os materiais da construção duas a três vezes mais que as vibrações do desmonte de rochas.",
    file: "/artigos/2013-cbcm-vibracoes-desmonte-variacoes-climaticas-rachadura-residencia.pdf",
  },
  {
    id: "malha-retardos-reforcadores",
    title:
      "Influência da malha de perfuração, combinação de tempos de retardos e uso de reforçadores no controle de vibrações",
    year: "2013",
    venue: "IV Congresso Brasileiro de Carvão Mineral (CBCM)",
    language: "PT",
    kind: "artigo",
    summary:
      "Testes de controle de vibração realizados em mina de carvão que opera a cerca de 100 m de residências, buscando níveis bem abaixo dos limites da ABNT NBR 9653 para minimizar o incômodo da comunidade. Foram avaliadas alterações na malha de perfuração, diferentes combinações de tempos de retardo e o uso de reforçadores como carga de fundo, com análise de custo de cada alternativa para identificar a opção de menor vibração com menor impacto operacional.",
    file: "/artigos/2013-cbcm-malha-perfuracao-tempos-retardo-reforcadores-controle-vibracoes.pdf",
  },
  {
    id: "burden-spacing-atenuacao",
    title:
      "Burden and Spacing Influence in Ground Vibration Attenuation at Coal Overburden Blast",
    year: "2012",
    venue: "FRAGBLAST 10 — Int. Symposium on Rock Fragmentation by Blasting",
    language: "EN",
    kind: "artigo",
    summary:
      "Equações de atenuação de onda sísmica foram obtidas por monitoramento sismográfico para o estéril (siltito) e o carvão de uma mina no sul do Brasil, revelando que o desmonte de carvão — menos confinado — gera vibrações muito menores. A partir dessa constatação, a geometria do plano de fogo do estéril foi modificada em uma série de testes, e o artigo apresenta os resultados ótimos alcançados apenas com a mudança do confinamento do desmonte.",
    file: "/artigos/2012-fragblast10-burden-spacing-ground-vibration-attenuation.pdf",
  },
  {
    id: "otimizacao-journal-explosives",
    title: "Blast Optimization and Vibration Control at a Multi-Seam Coal Mine, Brazil",
    year: "2012",
    venue: "Journal of Explosives Engineering, Vol. 29, nº 4 — ISEE",
    language: "EN",
    kind: "artigo",
    summary:
      "Versão em periódico do estudo de otimização de desmonte na mina B3: mudanças no sequenciamento de iniciação (serpentina, paralelo e diagonal), nas combinações de tempos de retardo e na malha de perfuração melhoraram a fragmentação, aumentaram a produção dos escavadores e reduziram os níveis de vibração — mesmo com aumento da carga por espera — com redução de custos em explosivos, acessórios e perfuração.",
    file: "/artigos/2012-isee-journal-blast-optimization-vibration-control-coal-mine.pdf",
  },
  {
    id: "otimizacao-isee-38",
    title: "Blast Optimization and Vibration Control at a Multi-Seam Coal Mine, Brazil",
    year: "2012",
    venue: "38ª Conferência Anual da ISEE (EUA)",
    language: "EN",
    kind: "artigo",
    summary:
      "Em uma mina de carvão com múltiplas camadas no Rio Grande do Sul, o plano de fogo é ajustado camada a camada com razões de carga muito baixas para evitar a diluição do carvão. Monitoramento extensivo de vibração e equações de atenuação permitiram avaliar mudanças de malha, sequência de detonação furo a furo e combinações de retardos, resultando em melhor fragmentação, menor vibração e redução de custos.",
    file: "/artigos/2012-isee-blast-optimization-vibration-control-multi-seam-coal-mine.pdf",
  },
  {
    id: "espoleta-eletronica-agregados",
    title: "Análise de iniciação com espoleta eletrônica para produção de agregados no RS",
    year: "2012",
    venue: "7º Congresso Brasileiro de Mina a Céu Aberto (CBMina)",
    language: "PT",
    kind: "artigo",
    summary:
      "Iniciação com espoletas eletrônicas foi testada em um desmonte de diabásio para obter fragmentação homogênea abaixo de 30 cm e reduzir os níveis de vibração, aproveitando a precisão de 1 a 2 milissegundos nos tempos de retardo. A equação de atenuação obtida com sismógrafos em linha foi comparada à do desmonte com tubo de choque, com análise granulométrica da pilha resultante.",
    file: "/artigos/2012-cbmina-iniciacao-espoleta-eletronica-agregados.pdf",
  },
  {
    id: "otimizacao-fragmentacao-carvao",
    title:
      "Otimização da fragmentação e minimização de vibrações por mudanças no grau de liberdade e sequenciamento do desmonte de carvão no RS",
    year: "2011",
    venue: "III Congresso Brasileiro de Carvão Mineral (CBCM)",
    language: "PT",
    kind: "artigo",
    summary:
      "A substituição do sequenciamento de iniciação em “serpentina” pelos métodos “paralelo” e “diagonal”, com mudanças nos tempos de retardo e aumento do grau de liberdade do desmonte, reduziu significativamente as vibrações mesmo com incremento da carga máxima por espera. O melhor aproveitamento da energia do explosivo na fragmentação permitiu ampliar a malha de perfuração e reduzir acessórios e metragem perfurada, diminuindo os custos da operação.",
    file: "/artigos/2011-cbcm-otimizacao-fragmentacao-minimizacao-vibracoes-desmonte-carvao.pdf",
  },
  {
    id: "medicoes-comparativas-fragblast9",
    title:
      "Comparative Measurements of Structure and Crack Motions during Blasting and Other Environmental Forces",
    year: "2009",
    venue: "FRAGBLAST 9 — Int. Symposium on Rock Fragmentation by Blasting",
    language: "EN",
    kind: "artigo",
    summary:
      "Síntese de três estudos de caso em que residências próximas a operações de desmonte foram instrumentadas para comparar as movimentações induzidas por detonações com outras forças dinâmicas e estáticas. Forças cotidianas — variações de temperatura e umidade, vento, atividades humanas e umidade do solo — produziram deflexões nas rachaduras muito maiores que as detonações dentro dos critérios de segurança, indicando que o desmonte controlado não é a causa do fissuramento das estruturas.",
    file: "/artigos/2009-fragblast9-structure-crack-motions-blasting-environmental-forces.pdf",
  },
  {
    id: "resposta-estrutura-valas-estradas",
    title: "Structure Response to Trench and Road Blasting",
    year: "2005",
    venue: "3ª Conferência Mundial da EFEE — European Federation of Explosives Engineers",
    language: "EN",
    kind: "artigo",
    summary:
      "A resposta de uma casa de estrutura de madeira com revestimento de estuque a detonações de vala em obra civil foi medida a distâncias de 232 a 368 m, com registro de velocidade de partícula, sobrepressão acústica e variação de abertura de uma rachadura existente. As deformações calculadas nas paredes ficaram muito abaixo das necessárias para fissurar o revestimento, e a resposta da rachadura ao clima foi muito maior que a induzida pelas detonações.",
    file: "/artigos/2005-efee-structure-response-trench-road-blasting.pdf",
  },
]

/** Teses acadêmicas — doutorado e mestrado. */
export const theses: Article[] = [
  {
    id: "tese-doutorado-ufrgs",
    title:
      "Influência dos níveis de vibração e pressão acústica produzidos pelo desmonte de rochas com explosivos em construções de alvenaria",
    year: "2015",
    venue: "Tese de Doutorado — PPGE3M / UFRGS",
    language: "PT",
    kind: "tese",
    summary:
      "Tese de doutorado em Engenharia de Minas que investiga como construções de alvenaria — o padrão construtivo brasileiro — respondem às vibrações no solo e à pressão acústica geradas pelo desmonte de rochas com explosivos. O trabalho instrumenta estruturas reais próximas a operações de desmonte, quantifica as deformações induzidas nas paredes e as compara com os efeitos das variações climáticas de longo prazo.",
    file: "/artigos/2015-tese-doutorado-ufrgs-vitor-rosenhaim.pdf",
  },
  {
    id: "dissertacao-mestrado-nmt",
    title:
      "Response of a Residential Structure and Buried Pipelines to Construction Blasting in Basalt on the West Side of Albuquerque, NM",
    year: "2005",
    venue: "Dissertação de Mestrado — New Mexico Tech (EUA)",
    language: "EN",
    kind: "tese",
    summary:
      "Dissertação de mestrado em Engenharia Mineral, com especialização em Engenharia de Explosivos, que monitora a resposta de uma residência e de duas tubulações enterradas a detonações de obra civil em basalto. Movimentações de estrutura e de rachadura foram correlacionadas no tempo com vibração e sobrepressão acústica, e as tensões calculadas nas tubulações foram comparadas com os limites dos materiais.",
    file: "/artigos/2005-dissertacao-mestrado-new-mexico-tech-vitor-rosenhaim.pdf",
  },
]

export const allPublications: Article[] = [...articles, ...theses]

/** Janela temporal da produção — usada nos readouts da página. */
export const publicationYears = {
  first: "2005",
  last: "2022",
}
