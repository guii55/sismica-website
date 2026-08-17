import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/instrument/PageHero"
import { SectionHeading } from "@/components/instrument/SectionHeading"
import { FadeIn } from "@/components/motion/FadeIn"
import { WaveformDivider } from "@/components/instrument/Waveform"
import { allPublications } from "@/lib/articles"
import { contactInfo } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Dr. Vitor Luconi Rosenhaim — engenheiro de minas (UFRGS), mestre em Engenharia de Explosivos (New Mexico Tech) e doutor em Engenharia de Minas (UFRGS), responsável técnico da Sismica.",
}

/** Formação acadêmica — do título mais recente ao mais antigo. */
const education = [
  {
    year: "2015",
    degree: "Doutorado em Engenharia de Minas",
    institution: "UFRGS — Porto Alegre, Brasil",
    detail: "Tese sobre a influência de vibração e pressão acústica do desmonte de rochas em construções de alvenaria",
  },
  {
    year: "2005",
    degree: "Mestrado em Engenharia Mineral — Engenharia de Explosivos",
    institution: "New Mexico Tech — Socorro, EUA",
    detail: "Resposta de estruturas e tubulações enterradas a detonações de obra civil em basalto",
  },
  {
    year: "",
    degree: "Graduação em Engenharia de Minas",
    institution: "UFRGS — Porto Alegre, Brasil",
    detail: "",
  },
]

/** Trajetória profissional resumida a partir das afiliações da produção publicada. */
const trajectory = [
  {
    label: "Pesquisa nos EUA",
    body: "Formado mestre pela New Mexico Tech, integrou a Aimone-Martin Associates, em Socorro, Novo México, instrumentando estruturas residenciais próximas a detonações de minas, pedreiras e obras civis para medir como paredes e rachaduras respondem a vibração, sobrepressão acústica e às forças do dia a dia.",
  },
  {
    label: "Mineração no RS",
    body: "De volta ao Brasil, atuou como engenheiro de minas na Copelmi Mineração, na lavra de carvão a céu aberto no Rio Grande do Sul — otimizando planos de fogo, obtendo equações de atenuação e reduzindo vibrações em detonações realizadas a apenas 100 metros de áreas residenciais.",
  },
  {
    label: "Sismica Engenharia",
    body: "Hoje conduz a Sismica como responsável técnico, aplicando duas décadas de pesquisa e campo em monitoramento sísmico, otimização de desmonte e laudos para licenciamento — cada serviço do catálogo nasce de um problema que ele já estudou, mediu e publicou.",
  },
]

const affiliations = [
  {
    sigla: "ISEE",
    name: "International Society of Explosives Engineers",
    role: "Membro",
  },
  {
    sigla: "AGEM",
    name: "Associação Gaúcha de Engenheiros de Minas",
    role: "Membro",
  },
  {
    sigla: "CREA-RS",
    name: "Conselho Regional de Engenharia e Agronomia",
    role: "Registro 198300",
  },
]

export default function Equipe() {
  return (
    <>
      <PageHero
        channel="Equipe"
        title="Dr. Vitor Luconi Rosenhaim"
        description="Engenheiro de minas com mais de vinte anos dedicados ao desmonte de rochas com explosivos e ao controle de vibrações — do mestrado em Engenharia de Explosivos nos Estados Unidos ao doutorado na UFRGS, da pesquisa publicada ao acompanhamento de cada detonação em campo."
        readouts={[
          { label: "Experiência", value: "20+", unit: "anos" },
          { label: "Publicações", value: String(allPublications.length) },
          { label: "Formação", value: "Dr. Eng. Minas" },
          { label: "CREA-RS", value: "198300" },
        ]}
      />

      {/* Bio + formação acadêmica */}
      <section className="border-b border-border bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <FadeIn>
              <SectionHeading channel="Responsável técnico" title="Quem está por trás da Sismica" />
              <div className="mt-6 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-muted-foreground text-pretty">
                <p>
                  A Sismica é a empresa de uma pergunta que Vitor Rosenhaim persegue desde 2005:
                  o que uma detonação realmente faz com as estruturas ao redor? Engenheiro de
                  minas formado pela UFRGS, ele partiu para os Estados Unidos para responder a
                  essa pergunta com instrumentos — no mestrado em Engenharia Mineral, com ênfase
                  em Engenharia de Explosivos, pela New Mexico Tech.
                </p>
                <p>
                  Nos anos seguintes, instrumentou casas, prédios comerciais e tubulações
                  próximas a detonações no Brasil e nos EUA, medindo como paredes e rachaduras
                  respondem à vibração — e comparando esse efeito com o que o clima, o vento e a
                  rotina de uma família já fazem com a mesma parede todos os dias. Essa pesquisa
                  virou o doutorado em Engenharia de Minas pela UFRGS e uma sequência de artigos
                  publicados em congressos e periódicos internacionais.
                </p>
                <p>
                  É esse mesmo rigor que ele traz para cada cliente da Sismica: laudos assinados
                  por quem estudou o fenômeno na fonte, com registro no {contactInfo.crea} e
                  presença direta em campo, do plano de fogo ao relatório final.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-2.5">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"
                    />
                    Formação acadêmica
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    UFRGS · NMT
                  </span>
                </div>

                <ol className="divide-y divide-border">
                  {education.map((item) => (
                    <li key={item.degree} className="grid gap-1 px-5 py-5">
                      {item.year ? (
                        <span className="tnum font-mono text-[11px] text-primary">{item.year}</span>
                      ) : null}
                      <span className="text-sm font-medium text-foreground">{item.degree}</span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.institution}
                      </span>
                      {item.detail ? (
                        <span className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                          {item.detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>

                <div className="border-t border-border px-5">
                  <WaveformDivider className="h-10" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trajetória + afiliações */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="flex flex-col divide-y divide-border">
              {trajectory.map((step, index) => (
                <FadeIn key={step.label} delay={index * 100} className="py-8 first:pt-0 last:pb-0">
                  <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      {step.label}
                    </p>
                    <p className="text-base leading-relaxed text-foreground text-pretty">
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={150}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                Afiliações e registro
              </p>
              <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border">
                {affiliations.map((item) => (
                  <li key={item.sigla} className="flex items-baseline justify-between gap-4 py-4">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground">{item.sigla}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                        {item.name}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.role}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA — produção técnica e contato */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-36">
          <FadeIn className="flex flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              A pesquisa por trás de cada laudo
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              São {allPublications.length} publicações entre artigos e teses — todas disponíveis
              para leitura. Ou fale direto com quem as escreveu.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/artigos" />}>
                Ver artigos publicados
              </Button>
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={<Link href="/contato" />}
              >
                Fale com um especialista
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
