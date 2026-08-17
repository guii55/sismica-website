"use client"

import { useEffect, useRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Reveal que ENRIQUECE um padrão já visível (regra de motion do Impeccable):
 * o conteúdo nasce visível (SSR / sem-JS / headless / aba oculta = visível). Só
 * quando o JS confirma que pode animar é que aplicamos o estado "antes" via
 * data-attribute (sem setState no corpo do efeito) e revelamos ao entrar na
 * viewport. Em prefers-reduced-motion não há deslocamento — fica estável.
 *
 * A animação é puramente CSS, dirigida por `data-armed` / `data-visible`, então
 * não há re-render por scroll e nada fica preso em opacity-0 se o JS não rodar.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return // mantém visível e estável

    // Assume o controle e esconde — imperativo, sem causar re-render.
    node.dataset.armed = "true"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true"
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[var(--ease-instrument)]",
        // Padrão: visível. Armado e ainda não visível: escondido. Ao revelar: visível.
        "data-[armed=true]:translate-y-6 data-[armed=true]:opacity-0",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        className
      )}
    >
      {children}
    </div>
  )
}
