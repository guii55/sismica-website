"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Waveform — assinatura gráfica da Sismica (DESIGN_SYSTEM.md): traçado verde de
 * sismograma sobre o grafite. Duas variantes:
 *  - "divider": linha de base + sismograma irregular que se desenha ao entrar na
 *    viewport (divisória de seção).
 *  - "live": traçado contínuo em <canvas>, animado como um osciloscópio real,
 *    para o hero. Ambas respeitam prefers-reduced-motion.
 */

const SEISMO_POINTS =
  "0,28 90,28 130,28 150,12 170,44 190,20 205,36 225,28 320,28 350,28 " +
  "372,6 392,50 410,22 430,28 540,28 575,28 595,16 612,40 630,28 680,28"

export function WaveformDivider({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      width="100%"
      height="56"
      viewBox="0 0 680 56"
      preserveAspectRatio="none"
      className={cn("text-border", className)}
      role="presentation"
      aria-hidden="true"
    >
      <line x1="0" y1="28" x2="680" y2="28" stroke="currentColor" strokeWidth="0.5" />
      <polyline
        fill="none"
        stroke="var(--color-green)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength={1}
        style={{ strokeDasharray: 1, strokeDashoffset: visible ? 0 : 1 }}
        className="transition-[stroke-dashoffset] duration-[1400ms] ease-out motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]"
        points={SEISMO_POINTS}
      />
    </svg>
  )
}

/**
 * Traçado vivo de osciloscópio — uma onda sísmica que percorre a tela
 * continuamente. Renderizado em canvas para um movimento fluido e barato.
 * Em prefers-reduced-motion, desenha um quadro estático (sem animação).
 */
export function WaveformLive({
  className,
  height = 120,
  speed = 0.6,
}: {
  className?: string
  height?: number
  speed?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const parentEl = canvasEl.parentElement
    if (!parentEl) return
    const context = canvasEl.getContext("2d")
    if (!context) return

    // Aliases não-anuláveis para uso dentro das funções aninhadas (hoisted).
    const canvas: HTMLCanvasElement = canvasEl
    const parent: HTMLElement = parentEl
    const ctx: CanvasRenderingContext2D = context

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let width = 0
    let dpr = 1

    const green = "#48dba1"
    const baseline = "#2a352e"

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      // Mede a largura CSS já aplicada (o canvas é width:100% via classe), em vez
      // de gravar uma largura fixa em px — assim ele nunca força overflow nem
      // "trava" largo quando o container encolhe.
      width = Math.round(canvas.getBoundingClientRect().width) || parent.clientWidth
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Soma de senoides + um "evento" pontiagudo que cruza a tela: parece
    // sismograma, não onda decorativa lisa.
    function amplitudeAt(x: number, t: number) {
      const mid = height / 2
      const carrier =
        Math.sin(x * 0.018 + t * 1.6) * 6 +
        Math.sin(x * 0.045 - t * 2.2) * 3 +
        Math.sin(x * 0.09 + t * 3.1) * 1.6
      // Pulso sísmico que viaja da esquerda para a direita.
      const eventX = ((t * 80) % (width + 300)) - 150
      const d = x - eventX
      const burst = Math.exp(-(d * d) / 900) * Math.sin(d * 0.5) * (height * 0.34)
      return mid + carrier + burst
    }

    function draw(t: number) {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // Linha de base.
      ctx.strokeStyle = baseline
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      ctx.lineTo(width, height / 2)
      ctx.stroke()

      // Traçado.
      ctx.strokeStyle = green
      ctx.lineWidth = 2
      ctx.lineJoin = "round"
      ctx.lineCap = "round"
      ctx.beginPath()
      for (let x = 0; x <= width; x += 2) {
        const y = amplitudeAt(x, t)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    resize()

    if (reduceMotion) {
      draw(0.8)
    } else {
      let start: number | null = null
      const loop = (now: number) => {
        if (start === null) start = now
        const t = ((now - start) / 1000) * speed
        draw(t)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(() => {
      resize()
      if (reduceMotion) draw(0.8)
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [height, speed])

  return (
    <canvas
      ref={canvasRef}
      className={cn("block w-full max-w-full", className)}
      role="presentation"
      aria-hidden="true"
    />
  )
}
