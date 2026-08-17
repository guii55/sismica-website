import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/FadeIn"
import { contactLinks } from "@/lib/site-config"

/**
 * CTA final — texto sobre fundo limpo, sem competição visual: a última
 * seção pede uma decisão, não outra leitura.
 */
export function FinalCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-36">
        <FadeIn className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
            Pronto para tornar suas operações mais seguras?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Fale com um especialista para solicitar uma proposta ou agendar uma avaliação técnica.
            Respondemos em até 24h úteis.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" nativeButton={false} render={<Link href="/contato" />}>
              Entre em contato
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
        </FadeIn>
      </div>
    </section>
  )
}
