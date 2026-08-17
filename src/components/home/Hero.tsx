import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/FadeIn"
import { siteConfig, contactLinks } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Mesmo vídeo de fundo, bem discreto, atrás de tudo */}
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/detonacao-poster.jpg"
      >
        <source src="/video/detonacao.mp4" type="video/mp4" />
      </video>

      {/* Grade de osciloscópio, bem sutil, atrás de tudo */}
      <div
        aria-hidden="true"
        className="bg-grid mask-fade-edges pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Coluna de texto */}
          <FadeIn>
            <h1 className="font-display text-[clamp(2.75rem,5.5vw+1rem,4.75rem)] font-bold leading-[1.03] tracking-[-0.02em] text-foreground text-balance">
              Segurança e precisão em cada{" "}
              <span className="text-primary">detonação</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contato" />}>
                Fale com um especialista
              </Button>
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={
                  <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" />
                }
              >
                WhatsApp
              </Button>
            </div>

            {/* Linha de confiança — norma é prova social central (PRODUCT.md) */}
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span>NBR 9653:2018</span>
              <span aria-hidden="true" className="text-border">
                ·
              </span>
              <span>NBR 10151:2020</span>
              <span aria-hidden="true" className="text-border">
                ·
              </span>
              <span>CREA-RS 198300</span>
            </p>
          </FadeIn>

          {/* Vídeo da detonação — contido num painel de outline, sem escrita */}
          <FadeIn delay={150}>
            <figure className="overflow-hidden rounded-xl border border-border bg-surface-dark">
              <video
                className="aspect-video size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video/detonacao-poster.jpg"
                aria-label="Detonação controlada monitorada por sismógrafo de engenharia"
              >
                <source src="/video/detonacao.mp4" type="video/mp4" />
              </video>
              <figcaption className="sr-only">
                Registro em vídeo de uma detonação controlada em pedreira.
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
