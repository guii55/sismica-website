import Link from "next/link"

import { Logo } from "@/components/layout/Logo"
import {
  navLinks,
  footerText,
  copyrightText,
  contactInfo,
  contactLinks,
} from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.3fr]">
          {/* Institucional */}
          <div className="flex flex-col gap-5">
            <Logo className="h-9" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              {footerText}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {contactInfo.crea}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Links rápidos">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Navegação
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Contato
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li className="max-w-xs leading-relaxed text-muted-foreground">
                {contactInfo.address}
              </li>
              <li>
                <a
                  href={contactLinks.tel}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.mailtoGeneral}
                  className="break-all text-foreground transition-colors hover:text-primary"
                >
                  {contactInfo.emailGeneral}
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.mailtoTechnical}
                  className="break-all text-foreground transition-colors hover:text-primary"
                >
                  {contactInfo.emailTechnical}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">{copyrightText}</p>
          <p className="font-mono text-xs text-muted-foreground">
            Ivoti-RS · Rio Grande do Sul, Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
