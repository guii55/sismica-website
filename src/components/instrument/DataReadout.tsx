import { cn } from "@/lib/utils"

export interface Readout {
  /** Rótulo curto do canal — ex.: "PPV", "FREQ", "RUÍDO". */
  label: string
  /** Valor já formatado — ex.: "12.4", "30.1", "Ivoti-RS". */
  value: string
  /** Unidade — ex.: "mm/s", "Hz", "dB". Vazio para valores não-numéricos. */
  unit?: string
}

type ReadoutTone = "primary" | "foreground"

/**
 * Leitura de instrumento (The Instrument Reading Rule, DESIGN_SYSTEM.md):
 * dados técnicos sempre em JetBrains Mono, com aspecto de saída de aparelho —
 * rótulo em micro-label, valor em destaque, unidade discreta. Nunca prosa.
 * `tone` controla a cor do valor: "primary" (verde, para medições — sinal) ou
 * "foreground" (branco, para dados informativos — o verde é sinal, não decoração).
 */
export function DataReadout({
  label,
  value,
  unit,
  tone = "primary",
  className,
}: Readout & { tone?: ReadoutTone; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <span className="font-mono text-foreground">
        <span
          className={cn(
            "tnum text-xl font-medium sm:text-2xl",
            tone === "primary" ? "text-primary" : "text-foreground"
          )}
        >
          {value}
        </span>
        {unit ? <span className="ml-1 text-xs text-muted-foreground">{unit}</span> : null}
      </span>
    </div>
  )
}

/**
 * Faixa de leituras separadas por divisórias finas. No mobile: 2 colunas (item
 * ímpar final ocupa a linha inteira); no desktop: uma coluna por leitura,
 * qualquer que seja a contagem. Bordas internas apenas — sem sombra.
 */
export function DataReadoutBar({
  readouts,
  tone = "primary",
  className,
}: {
  readouts: Readout[]
  tone?: ReadoutTone
  className?: string
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 overflow-hidden rounded-md border border-border bg-surface-dark/60 sm:auto-cols-fr sm:grid-flow-col",
        className
      )}
    >
      {readouts.map((r) => (
        <div
          key={r.label}
          className={cn(
            "flex flex-col gap-1 border-border px-4 py-3",
            "[&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t [&:nth-child(odd):last-child]:col-span-2",
            "sm:[&:nth-child(n+2)]:border-l sm:[&:nth-child(n+3)]:border-t-0 sm:[&:nth-child(odd):last-child]:col-span-1"
          )}
        >
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {r.label}
          </dt>
          <dd className="font-mono leading-none">
            <span
              className={cn(
                "tnum text-lg font-medium",
                tone === "primary" ? "text-primary" : "text-foreground"
              )}
            >
              {r.value}
            </span>
            {r.unit ? (
              <span className="ml-1 text-[11px] text-muted-foreground">{r.unit}</span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  )
}
