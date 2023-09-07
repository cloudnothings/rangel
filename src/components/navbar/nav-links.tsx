"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
const LINKS = [
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/benchmarks", name: "Benchmarks" },
  { href: "/contact", name: "Contact" },
  // { href: "/blog", name: "Blog" },
]
export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex gap-4">
      <Link href="/" className="flex space-x-2 md:mr-6">
        <Icons.logo className="w-6 h-6" />
        <span className="font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="items-end -translate-y-[1px] sm:hidden space-x-6 text-sm font-bold flex">
        <Link
          key={LINKS[0].name}
          href={LINKS[0].href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === LINKS[0].href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {LINKS[0].name}
        </Link>
      </nav>
      <nav className="items-end -translate-y-[1px] hidden sm:flex space-x-6 text-sm font-bold">
        {LINKS.map(({ href, name }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}