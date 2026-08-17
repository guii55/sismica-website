import Link from "next/link"

import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/instrument/SectionHeading"
import { WaveformDivider } from "@/components/instrument/Waveform"
import { contactInfo, contactLinks } from "@/lib/site-config"

/**
 * Responsável técnico como cartão de calibração do instrumento: barra de
 * status com sinal ativo, campos de registro em mono e a assinatura de
 * waveform no rodapé — quem assina cada laudo, lido como certificado do
 * aparelho. Sem foto: não existe asset real, e não inventamos.
 */
export function TeamBio() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <FadeIn>
            <SectionHeading channel="Responsável técnico" title="Quem assina cada laudo" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              A Sismica é conduzida pelo Dr. Vitor Luconi Rosenhaim, engenheiro de minas com
              registro CREA-RS 198300, responsável técnico por todos os laudos, monitoramentos e
              projetos desenvolvidos pela empresa. Com atuação direta em campo, acompanha cada
              detonação e mantém contato próximo com os clientes para garantir resultados precisos
              e em conformidade com as normas vigentes.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              Doutor em Engenharia de Minas pela UFRGS e mestre em Engenharia de Explosivos pela
              New Mexico Tech (EUA), é autor de artigos publicados em congressos e periódicos no
              Brasil e no exterior.{" "}
              <Link
                href="/equipe"
                className="rounded-sm font-medium text-primary outline-none transition-colors hover:text-green-deep focus-visible:ring-2 focus-visible:ring-ring"
              >
                Conheça a trajetória completa
              </Link>
              .
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="overflow-hidden rounded-xl border border-border bg-surface-dark">
              <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"
                  />
                  Registro ativo
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  CREA-RS
                </span>
              </div>

              <dl className="divide-y divide-border">
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Engenheiro
                  </dt>
                  <dd className="text-sm font-medium text-foreground">Vitor Luconi Rosenhaim</dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Registro
                  </dt>
                  <dd className="tnum font-mono text-sm text-foreground">{contactInfo.crea}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Contato
                  </dt>
                  <dd>
                    <a
                      href={contactLinks.mailtoTechnical}
                      className="break-all rounded-sm font-mono text-sm text-primary outline-none transition-colors hover:text-green-deep focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {contactInfo.emailTechnical}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="border-t border-border px-5">
                <WaveformDivider className="h-10" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
