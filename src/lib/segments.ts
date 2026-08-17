export type SegmentId = "mp" | "cc" | "ie"

export interface Segment {
  id: SegmentId
  name: string
  description: string
}

export const segments: Segment[] = [
  {
    id: "mp",
    name: "Mineração e Pedreiras",
    description:
      "Monitoramento de detonações, otimização de desmonte e laudos para licenciamento em lavras e pedreiras.",
  },
  {
    id: "cc",
    name: "Construção Civil",
    description:
      "Monitoramento de vibração de detonações, bate-estacas e equipamentos pesados próximos a edificações.",
  },
  {
    id: "ie",
    name: "Infraestrutura e Obras Especiais",
    description:
      "Acompanhamento técnico de desmonte em obras viárias, terraplenagem e demais obras de grande porte.",
  },
]

export function getSegment(id: SegmentId): Segment | undefined {
  return segments.find((segment) => segment.id === id)
}

export function isSegmentId(value: string | undefined): value is SegmentId {
  return segments.some((segment) => segment.id === value)
}
