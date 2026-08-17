"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Logo } from "@/components/layout/Logo"
import { MobileNav } from "@/components/layout/MobileNav"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Sismica Engenharia — página inicial"
          className="flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-0.5 origin-left bg-primary transition-transform duration-300 ease-[var(--ease-instrument)]",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground lg:inline">
            CREA-RS 198300
          </span>
          <Button nativeButton={false} render={<Link href="/contato" />}>
            Fale com um especialista
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
