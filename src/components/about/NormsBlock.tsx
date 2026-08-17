import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/instrument/SectionHeading"

const norms = [
  {
    code: "ABNT NBR 9653",
    year: "2018",
    desc: "Estabelece os limites e critérios para avaliação dos efeitos provocados pelo uso de explosivos no desmonte de rochas.",
  },
  {
    code: "ABNT NBR 10151",
    year: "2020",
    desc: "Trata da avaliação de ruído em áreas habitadas, visando o conforto da comunidade vizinha à operação.",
  },
]

/**
 * Normas com peso visual de leitura principal — a norma é a prova social
 * central (PRODUCT.md), então o código carrega o painel: mono grande,
 * ano como leitura verde, descrição de apoio.
 */
export function NormsBlock() {
  return (
    <section className="bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <FadeIn>
            <SectionHeading
              channel="Conformidade"
              title="Normas e certificações"
              description="Todos os serviços da Sismica são executados em conformidade com as normas técnicas vigentes, garantindo segurança técnica e jurídica para processos de licenciamento ambiental e para o relacionamento com órgãos fiscalizadores."
            />
          </FadeIn>

          <div className="grid gap-5">
            {norms.map((norm, index) => (
              <FadeIn key={norm.code} delay={index * 120}>
                <article className="rounded-xl border border-border bg-surface p-7 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Norma técnica
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-mono text-xl font-medium tracking-[0.01em] text-foreground sm:text-2xl">
                      {norm.code}
                    </h3>
                    <span className="tnum font-mono text-base text-primary">{norm.year}</span>
                  </div>
                  <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-muted-foreground text-pretty">
                    {norm.desc}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
