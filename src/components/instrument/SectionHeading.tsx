import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Cabeçalho de seção com marcador de canal — um tick verde curto seguido do
 * título. O marcador é a assinatura de "painel de instrumento"; o `channel`
 * (rótulo mono opcional, ex.: "CH-02 · SERVIÇOS") é usado com parcimônia, não
 * como eyebrow em toda seção.
 */
export function SectionHeading({
  title,
  channel,
  description,
  align = "start",
  as: Tag = "h2",
  className,
}: {
  title: ReactNode
  channel?: string
  description?: ReactNode
  align?: "start" | "center"
  as?: "h1" | "h2" | "h3"
  className?: string
}) {
  const centered = align === "center"
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        <span aria-hidden="true" className="h-px w-7 bg-primary" />
        {channel ? (
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {channel}
          </span>
        ) : null}
      </div>
      <Tag
        className={cn(
          "font-display font-bold text-foreground text-balance",
          Tag === "h1"
            ? "text-4xl leading-[1.05] sm:text-5xl"
            : "text-2xl leading-tight sm:text-3xl"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
