import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { FadeIn } from "@/components/motion/FadeIn"
import { BrandIcon } from "@/components/instrument/BrandIcon"
import { segments } from "@/lib/segments"
import { getServicesBySegment } from "@/lib/services"

/**
 * Segmentos de atuação — o selo oficial da marca ancora cada tile, com a
 * sigla mono como etiqueta de canal e a contagem de serviços como leitura
 * real do catálogo. Cabeçalho lado a lado, sem rótulo de canal (variação de
 * ritmo). Tiles separados por linhas finas, chapados.
 */
export function SegmentsBand() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12">
            <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance sm:text-3xl">
              Cada setor exige uma leitura diferente
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
              Filtramos toda a operação pelo seu segmento — da lavra à obra urbana.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {segments.map((segment, index) => {
            const count = getServicesBySegment(segment.id).length
            return (
              <FadeIn key={segment.id} delay={index * 100} className="h-full">
                <Link
                  href={`/servicos?segmento=${segment.id}`}
                  className="group/seg flex h-full flex-col bg-surface-dark p-7 outline-none transition-colors duration-[250ms] ease-[var(--ease-instrument)] hover:bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:p-8"
                >
                  <span className="flex items-start justify-between gap-4">
                    <BrandIcon
                      id={segment.id}
                      size={64}
                      className="size-14 transition-transform duration-300 ease-[var(--ease-instrument)] group-hover/seg:-translate-y-0.5 sm:size-16"
                    />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {segment.id}
                    </span>
                  </span>
                  <h3 className="mt-7 font-display text-lg font-medium leading-snug text-foreground">
                    {segment.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {segment.description}
                  </p>
                  <span className="mt-8 flex items-center justify-between border-t border-border pt-4">
                    <span className="tnum font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {count} serviços
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-all duration-[250ms] ease-[var(--ease-instrument)] group-hover/seg:translate-x-0.5 group-hover/seg:-translate-y-0.5 group-hover/seg:text-primary"
                    />
                  </span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
