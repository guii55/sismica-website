import type { Metadata } from "next"

import { Hero } from "@/components/home/Hero"
import { AboutSummary } from "@/components/home/AboutSummary"
import { ServicesIndex } from "@/components/home/ServicesIndex"
import { SegmentsBand } from "@/components/home/SegmentsBand"
import { DifferentialsList } from "@/components/home/DifferentialsList"
import { FinalCta } from "@/components/home/FinalCta"

export const metadata: Metadata = {
  title: "Sismica Engenharia e Mineração",
  description:
    "Monitoramento sísmico, assessoria técnica e otimização de desmonte de rochas para mineração e construção civil.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ServicesIndex />
      <SegmentsBand />
      <DifferentialsList />
      <FinalCta />
    </>
  )
}
