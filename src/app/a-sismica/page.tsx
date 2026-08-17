import type { Metadata } from "next"

import { PageHero } from "@/components/instrument/PageHero"
import { MissionVisionValues } from "@/components/about/MissionVisionValues"
import { TeamBio } from "@/components/about/TeamBio"
import { NormsBlock } from "@/components/about/NormsBlock"

export const metadata: Metadata = {
  title: "A Sismica",
  description:
    "Empresa especializada em engenharia de explosivos e monitoramento sísmico, sediada em Ivoti-RS.",
}

export default function ASismica() {
  return (
    <>
      <PageHero
        channel="A Sismica"
        title="Engenharia de explosivos com a disciplina de um instrumento"
        description="Sediada em Ivoti-RS, a Sismica atua em pedreiras, mineração e construção civil em todo o Rio Grande do Sul e demais estados do Brasil — transformando cada detonação em dado, e cada dado em decisão segura."
        readouts={[
          { label: "Base", value: "Ivoti-RS" },
          { label: "Atuação", value: "RS + Brasil" },
          { label: "CREA-RS", value: "198300" },
        ]}
      />
      <MissionVisionValues />
      <TeamBio />
      <NormsBlock />
    </>
  )
}
