import type { Metadata } from "next"

import { PageHero } from "@/components/instrument/PageHero"
import { SegmentFilterBar } from "@/components/services/SegmentFilterBar"
import { ServiceRow } from "@/components/services/ServiceRow"
import { isSegmentId } from "@/lib/segments"
import { services, getServicesBySegment } from "@/lib/services"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Soluções completas em monitoramento sísmico, engenharia de explosivos e assessoria técnica para mineração e construção civil.",
}

export default async function Servicos({
  searchParams,
}: {
  searchParams: Promise<{ segmento?: string }>
}) {
  const { segmento } = await searchParams
  const active = isSegmentId(segmento) ? segmento : "all"
  const filtered = getServicesBySegment(active)

  return (
    <>
      <PageHero
        channel="Serviços"
        title="Catorze leituras de uma mesma operação"
        description="Soluções completas em monitoramento sísmico, engenharia de explosivos e assessoria técnica. Filtre por segmento para ver o que se aplica à sua operação."
        readouts={[
          { label: "Serviços", value: "14" },
          { label: "Segmentos", value: "3" },
          { label: "Normas ABNT", value: "2" },
          { label: "CREA-RS", value: "198300" },
        ]}
      />

      <SegmentFilterBar active={active} resultCount={filtered.length} />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 sm:pb-36">
          <ul className="divide-y divide-border">
            {filtered.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                channel={services.indexOf(service) + 1}
                delay={Math.min(index * 50, 360)}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
