import Link from "next/link"

import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { proofPoints } from "@/lib/site-config"

/**
 * "Quem somos" — quebra editorial deliberada: sem rótulo de canal, o statement
 * display carrega a seção sozinho (variação de ritmo — o eyebrow mono não é
 * gramática de toda seção). À direita, as normas como um ledger de conformidade,
 * com peso visual (PRODUCT.md: norma é prova social central).
 */
export function AboutSummary() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <FadeIn>
            <h2 className="max-w-xl font-display text-3xl font-bold leading-[1.12] text-foreground text-balance sm:text-4xl">
              Um instrumento de precisão a serviço da segurança
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              A Sismica é especializada no monitoramento de vibração e ruído gerados por
              detonações, atuando em pedreiras, mineração e construção civil. Com base em Ivoti-RS,
              transformamos dados de campo em laudos técnicos que comprovam conformidade e dão
              suporte a decisões de engenharia.
            </p>
            <div className="mt-9">
              <Button variant="secondary" nativeButton={false} render={<Link href="/a-sismica" />}>
                Conheça a Sismica
              </Button>
            </div>
          </FadeIn>

          {/* Ledger de conformidade — código mono com peso, ano como leitura */}
          <FadeIn delay={120}>
            <ul className="divide-y divide-border border-y border-border">
              {proofPoints.map((p) => (
                <li key={p.value} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-lg font-medium tracking-[0.02em] text-foreground sm:text-xl">
                      {p.value}
                    </p>
                    {p.year ? (
                      <span className="tnum shrink-0 font-mono text-sm text-primary">
                        {p.year}
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full bg-primary"
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
