import type { Metadata } from "next"

import { PageHero } from "@/components/instrument/PageHero"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfoTable } from "@/components/contact/ContactInfoTable"
import { FadeIn } from "@/components/motion/FadeIn"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Sismica para tirar dúvidas, solicitar uma proposta ou agendar uma avaliação técnica.",
}

export default function Contato() {
  return (
    <>
      <PageHero
        channel="Contato"
        title="Fale com a Sismica"
        description="Entre em contato para tirar dúvidas, solicitar uma proposta ou agendar uma avaliação técnica. Respondemos em até 24h úteis e estamos prontos para entender a necessidade da sua operação."
        readouts={[
          { label: "Resposta", value: "≤ 24h", unit: "úteis" },
          { label: "Atuação", value: "RS + Brasil" },
          { label: "CREA-RS", value: "198300" },
        ]}
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            <FadeIn>
              <ContactForm />
            </FadeIn>
            <FadeIn delay={150}>
              <ContactInfoTable />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
