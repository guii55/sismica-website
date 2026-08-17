import { FadeIn } from "@/components/motion/FadeIn"
import { BrandIcon } from "@/components/instrument/BrandIcon"
import { getSegment } from "@/lib/segments"
import type { Service } from "@/lib/services"

/**
 * Uma leitura do índice — linha full-width com número de canal fixo (CH-NN é a
 * posição do serviço no catálogo completo, estável sob qualquer filtro),
 * glifo, título e a descrição completa. Cada linha é âncora (`id`) para
 * deep-links vindos da home; `scroll-mt` compensa o header + filtro sticky.
 * `target:` destaca a linha quando alcançada por âncora.
 */
export function ServiceRow({
  service,
  channel,
  delay = 0,
}: {
  service: Service
  channel: number
  delay?: number
}) {
  return (
    <li id={service.id} className="scroll-mt-40 target:bg-surface">
      <FadeIn delay={delay}>
        <article className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-4 py-9 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-6 sm:px-4 sm:py-10">
        <span className="tnum pt-1 font-mono text-[11px] text-muted-foreground">
          CH-{String(channel).padStart(2, "0")}
        </span>
        <div className="col-span-2 col-start-1 flex items-start gap-4 sm:col-span-1 sm:col-start-auto sm:gap-5">
          <BrandIcon id={service.id} size={56} className="size-11 sm:size-14" />
          <div>
            <h2 className="font-display text-xl font-medium leading-snug text-foreground text-balance">
              {service.title}
            </h2>
            <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-muted-foreground text-pretty">
              {service.description}
            </p>
          </div>
        </div>
        <ul className="col-start-2 row-start-1 flex justify-end gap-1.5 sm:col-start-auto sm:row-start-auto sm:flex-col sm:items-end sm:justify-start sm:gap-2 sm:pt-1">
          {service.segments.map((segmentId) => {
            const segment = getSegment(segmentId)
            if (!segment) return null
            return (
              <li
                key={segmentId}
                title={segment.name}
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {segment.id}
              </li>
            )
          })}
          </ul>
        </article>
      </FadeIn>
    </li>
  )
}
