import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contactInfo, contactLinks } from "@/lib/site-config"

type Channel = {
  label: string
  value: string
  href?: string
  mono?: boolean
  icon: typeof Phone
}

const channels: Channel[] = [
  { label: "Telefone", value: contactInfo.phone, href: contactLinks.tel, mono: true, icon: Phone },
  {
    label: "E-mail geral",
    value: contactInfo.emailGeneral,
    href: contactLinks.mailtoGeneral,
    mono: true,
    icon: Mail,
  },
  {
    label: "E-mail técnico",
    value: contactInfo.emailTechnical,
    href: contactLinks.mailtoTechnical,
    mono: true,
    icon: Mail,
  },
  { label: "Endereço", value: contactInfo.address, icon: MapPin },
]

/**
 * Canais diretos — cada canal com glifo de traço fino e valor em mono
 * (leitura de instrumento), WhatsApp em destaque e a leitura de tempo de
 * resposta como dado, não como promessa solta.
 */
export function ContactInfoTable() {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <h2 className="border-b border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Canais diretos
        </h2>
        <dl className="divide-y divide-border">
          {channels.map((row) => (
            <div key={row.label} className="flex gap-4 px-6 py-4">
              <row.icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              />
              <div className="min-w-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd
                  className={
                    row.mono
                      ? "tnum mt-1.5 font-mono text-sm text-foreground"
                      : "mt-1.5 text-sm leading-relaxed text-foreground"
                  }
                >
                  {row.href ? (
                    <a
                      href={row.href}
                      className="break-words rounded-sm outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between gap-4 border-t border-border px-6 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Resposta
          </span>
          <span className="tnum font-mono text-sm text-primary">≤ 24h úteis</span>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full"
        nativeButton={false}
        render={<a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" />}
      >
        <MessageCircle className="size-4" />
        Conversar no WhatsApp
      </Button>

      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
        Atendimento em todo o Rio Grande do Sul e demais estados do Brasil.
      </p>
    </div>
  )
}
