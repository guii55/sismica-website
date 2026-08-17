import { Check } from "lucide-react"

import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/instrument/SectionHeading"
import { differentials } from "@/lib/site-config"

/**
 * Diferenciais como checklist de verificação — o tick verde em caixa lê como
 * "conferido pelo instrumento", não como enumeração. (Numeração 01/02 é
 * reservada aos canais reais do índice de serviços.)
 */
export function DifferentialsList() {
  return (
    <section className="border-b border-border bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <SectionHeading
              channel="Verificação"
              title="Por que escolher a Sismica?"
              description="Quatro razões pelas quais operadores confiam na nossa leitura — em campo e no laudo."
            />
          </FadeIn>

          <ul className="grid gap-x-12 gap-y-px sm:grid-cols-2">
            {differentials.map((item, index) => (
              <li key={item.title} className="border-t border-border">
                <FadeIn delay={index * 90} className="flex gap-5 py-7">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[6px] border border-primary/40 bg-primary/10"
                  >
                    <Check className="size-3.5 text-primary" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
