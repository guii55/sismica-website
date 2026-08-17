import { Check } from "lucide-react"

import { FadeIn } from "@/components/motion/FadeIn"

const values = [
  "Segurança em primeiro lugar",
  "Rigor técnico e conformidade normativa",
  "Transparência e proximidade com o cliente",
]

const statements = [
  {
    label: "Missão",
    body: "Garantir a segurança e a eficiência das operações de desmonte de rocha, oferecendo monitoramento sísmico de precisão e assessoria técnica especializada para mineradoras, pedreiras e construtoras.",
  },
  {
    label: "Visão",
    body: "Ser referência em engenharia de explosivos e monitoramento sísmico no Brasil, reconhecida pela precisão técnica, pela conformidade normativa e pela relação de confiança construída com clientes e comunidades.",
  },
]

export function MissionVisionValues() {
  return (
    <section className="border-b border-border bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Missão + Visão */}
          <div className="flex flex-col divide-y divide-border">
            {statements.map((s, index) => (
              <FadeIn key={s.label} delay={index * 100} className="py-8 first:pt-0 last:pb-0">
                <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    {s.label}
                  </p>
                  <p className="text-lg leading-relaxed text-foreground text-pretty">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Valores */}
          <FadeIn delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Valores
            </p>
            <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="flex size-6 shrink-0 items-center justify-center rounded-[6px] border border-primary/40 bg-primary/10"
                  >
                    <Check className="size-3.5 text-primary" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
