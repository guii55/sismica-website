import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/instrument/SectionHeading"
import { BrandIcon } from "@/components/instrument/BrandIcon"
import { services, homeHighlightServiceIds } from "@/lib/services"

/**
 * Serviços em destaque como linhas de um índice de leituras — não cards. O
 * número de canal (CH-NN) é o índice real do serviço no catálogo completo, o
 * mesmo que aparece em /servicos: a home mostra quatro canais do instrumento.
 * Cada linha aponta para a âncora do serviço na página de serviços, com o
 * selo oficial da marca ao lado do título.
 */
export function ServicesIndex() {
  const highlights = homeHighlightServiceIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  return (
    <section className="border-b border-border bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <SectionHeading
              channel="CH · Serviços"
              title="O que monitoramos e otimizamos"
              description="Soluções completas em monitoramento sísmico, engenharia de explosivos e assessoria técnica."
            />
          </FadeIn>
          <FadeIn delay={80}>
            <Button variant="secondary" nativeButton={false} render={<Link href="/servicos" />}>
              Ver todos os serviços
            </Button>
          </FadeIn>
        </div>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {highlights.map((service, index) => {
            const channel = String(services.indexOf(service) + 1).padStart(2, "0")
            return (
              <li key={service.id}>
                <FadeIn delay={index * 80}>
                  <Link
                    href={`/servicos#${service.id}`}
                    className="group/row grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 py-7 outline-none transition-colors duration-[250ms] ease-[var(--ease-instrument)] hover:bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-x-6 sm:px-4 sm:py-8"
                  >
                    <span className="tnum font-mono text-[11px] text-muted-foreground transition-colors duration-[250ms] ease-[var(--ease-instrument)] group-hover/row:text-primary">
                      CH-{channel}
                    </span>
                    <span className="col-span-3 col-start-1 flex items-center gap-4 sm:col-span-1 sm:col-start-auto sm:gap-5">
                      <BrandIcon
                        id={service.id}
                        size={48}
                        className="size-10 transition-transform duration-300 ease-[var(--ease-instrument)] group-hover/row:-translate-y-0.5 sm:size-12"
                      />
                      <span>
                        <span className="block font-display text-lg font-medium leading-snug text-foreground">
                          {service.title}
                        </span>
                        <span className="mt-1 line-clamp-2 block max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:line-clamp-1">
                          {service.description}
                        </span>
                      </span>
                    </span>
                    <span className="col-start-3 row-start-1 justify-self-end font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:col-start-auto sm:row-start-auto sm:justify-self-auto">
                      {service.segments.join(" · ")}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="hidden size-4 text-muted-foreground transition-all duration-[250ms] ease-[var(--ease-instrument)] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-primary sm:block"
                    />
                  </Link>
                </FadeIn>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
