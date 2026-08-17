import Image from "next/image"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/sismica-color.svg"
      alt="Sismica Engenharia"
      width={650}
      height={200}
      priority
      className={cn("h-8 w-auto", className)}
    />
  )
}
