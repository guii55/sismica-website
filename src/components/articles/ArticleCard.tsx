import { ArrowUpRight, FileText } from "lucide-react"

import { FadeIn } from "@/components/motion/FadeIn"
import type { Article } from "@/lib/articles"

/**
 * Registro de publicação como cartão de leitura do instrumento — cabeçalho
 * mono com ano, veículo e idioma (metadados do registro), título display,
 * resumo em prosa e a ação de abrir o PDF original em nova aba. O rodapé é
 * fixado na base (`mt-auto`) para alinhar a ação entre cards de alturas
 * diferentes na mesma linha do grid.
 */
export function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-border bg-surface">
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 sm:px-6">
          <span className="tnum font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            {article.year}
          </span>
          <span className="min-w-0 flex-1 truncate text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {article.venue}
          </span>
          <span
            title={article.language === "PT" ? "Publicação em português" : "Publicação em inglês"}
            className="shrink-0 rounded-[6px] border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
          >
            {article.language}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-5 py-6 sm:px-6">
          <h3 className="font-display text-lg font-medium leading-snug text-foreground text-balance">
            {article.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {article.summary}
          </p>

          <a
            href={article.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group/open mt-auto inline-flex items-center gap-2 self-start rounded-md pt-2 text-sm font-medium text-primary outline-none transition-colors hover:text-green-deep focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FileText aria-hidden="true" className="size-4" />
            Abrir artigo completo
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-[250ms] ease-[var(--ease-instrument)] group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5"
            />
            <span className="sr-only">— PDF, abre em nova aba</span>
          </a>
        </div>
      </article>
    </FadeIn>
  )
}
