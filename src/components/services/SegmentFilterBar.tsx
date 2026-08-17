import Link from "next/link"

import { segments, type SegmentId } from "@/lib/segments"
import { services, getServicesBySegment } from "@/lib/services"
import { cn } from "@/lib/utils"

export type FilterValue = SegmentId | "all"

const filters: { id: FilterValue; label: string }[] = [
  { id: "all", label: "Todos" },
  ...segments.map((s) => ({ id: s.id as FilterValue, label: s.name })),
]

function countFor(id: FilterValue) {
  return id === "all" ? services.length : getServicesBySegment(id).length
}

function hrefFor(id: FilterValue) {
  return id === "all" ? "/servicos" : `/servicos?segmento=${id}`
}

/**
 * Filtro por segmento dirigido pela URL — pills são links, o servidor filtra.
 * URLs compartilháveis (a v2 lia ?segmento= mas nunca escrevia). Barra sticky
 * logo abaixo do header para que filtrar 14 leituras nunca desoriente.
 */
export function SegmentFilterBar({
  active,
  resultCount,
}: {
  active: FilterValue
  resultCount: number
}) {
  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <nav aria-label="Filtrar serviços por segmento">
          <ul className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = active === filter.id
              return (
                <li key={filter.id}>
                  <Link
                    href={hrefFor(filter.id)}
                    scroll={false}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {filter.label}
                    <span
                      className={cn(
                        "tnum font-mono text-[11px]",
                        isActive ? "text-primary-foreground/70" : "text-muted-foreground/70"
                      )}
                    >
                      {countFor(filter.id)}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <p
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          aria-live="polite"
        >
          {resultCount} serviço{resultCount === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  )
}
