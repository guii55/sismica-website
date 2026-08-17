"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { navLinks } from "@/lib/site-config"
import { Logo } from "@/components/layout/Logo"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Abrir menu" className="md:hidden" />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-3/4 border-border bg-surface">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Navegação principal" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <SheetClose key={link.href} render={<Link href={link.href} />}>
                <span
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary",
                    isActive && "text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </span>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
