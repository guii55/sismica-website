import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * Ícones oficiais da marca (public/icons) — selos circulares em traço verde
 * com o motivo de sonar/waveform, desenhados para a Sismica. `id` é o id do
 * serviço (services.ts) ou do segmento (mp/cc/ie). Sempre decorativos: o nome
 * ao lado é quem carrega a informação.
 */
export function BrandIcon({
  id,
  size = 48,
  className,
}: {
  id: string
  size?: number
  className?: string
}) {
  return (
    <Image
      src={`/icons/${id}.png`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={cn("shrink-0 select-none", className)}
    />
  )
}
