import type { ReactNode } from "react"

import { FadeIn } from "@/components/motion/FadeIn"
import { WaveformDivider } from "@/components/instrument/Waveform"
import { DataReadoutBar, type Readout } from "@/components/instrument/DataReadout"

/**
 * Cabeçalho padrão das páginas internas — grade de osciloscópio sutil, rótulo de
 * canal mono, título display e descrição, fechado por uma divisória de waveform.
 * `readouts` opcional: faixa de leituras informativas (tom branco — dados de
 * identificação, não medições) entre a descrição e a divisória.
 */
export function PageHero({
  channel,
  title,
  description,
  readouts,
  children,
}: {
  channel: string
  title: ReactNode
  description?: ReactNode
  readouts?: Readout[]
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="bg-grid mask-fade-edges pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-primary" />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {channel}
            </p>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          ) : null}
          {readouts?.length ? (
            <DataReadoutBar readouts={readouts} tone="foreground" className="mt-10 max-w-3xl" />
          ) : null}
          {children}
        </FadeIn>

        <WaveformDivider className="mt-14" />
      </div>
    </section>
  )
}
