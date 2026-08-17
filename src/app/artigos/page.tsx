import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/instrument/PageHero"
import { SectionHeading } from "@/components/instrument/SectionHeading"
import { FadeIn } from "@/components/motion/FadeIn"
import { ArticleCard } from "@/components/articles/ArticleCard"
import { articles, theses, allPublications, publicationYears } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Produção técnica e científica de Vitor Luconi Rosenhaim: artigos sobre desmonte de rochas, controle de vibrações e resposta de estruturas, publicados em congressos e periódicos no Brasil e no exterior.",
}

export default function Artigos() {
  return (
    <>
      <PageHero
        channel="Artigos"
        title="Pesquisa publicada, aplicada em campo"
        description="A produção técnica que sustenta cada laudo da Sismica: artigos sobre desmonte de rochas, controle de vibrações e resposta de estruturas, publicados em congressos e periódicos no Brasil, nos Estados Unidos e na Europa."
        readouts={[
          { label: "Publicações", value: String(allPublications.length) },
          { label: "Artigos", value: String(articles.length) },
          { label: "Teses", value: String(theses.length) },
          { label: "Período", value: `${publicationYears.first}–${publicationYears.last}` },
        ]}
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
          <FadeIn>
            <SectionHeading
              channel="CH · Publicações"
              title="Artigos técnicos"
              description="Trabalhos apresentados em congressos da ISEE, FRAGBLAST, EFEE, CBMina e CBCM, e publicados em periódicos como o Journal of Explosives Engineering e o Journal of Performance of Constructed Facilities (ASCE)."
            />
          </FadeIn>

          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {articles.map((article, index) => (
              <li key={article.id}>
                <ArticleCard article={article} delay={Math.min((index % 2) * 80, 160)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
          <FadeIn>
            <SectionHeading
              channel="CH · Academia"
              title="Teses acadêmicas"
              description="A base acadêmica do trabalho: mestrado em Engenharia de Explosivos na New Mexico Tech (EUA) e doutorado em Engenharia de Minas na UFRGS."
            />
          </FadeIn>

          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {theses.map((thesis, index) => (
              <li key={thesis.id}>
                <ArticleCard article={thesis} delay={index * 80} />
              </li>
            ))}
          </ul>

          <FadeIn delay={160}>
            <p className="mt-14 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Toda essa pesquisa é assinada por quem conduz a Sismica em campo.{" "}
              <Link
                href="/equipe"
                className="rounded-sm font-medium text-primary outline-none transition-colors hover:text-green-deep focus-visible:ring-2 focus-visible:ring-ring"
              >
                Conheça o responsável técnico
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
