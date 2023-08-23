"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

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
      <nav className="items-end -translate-y-[1px] space-x-6 text-sm font-bold flex">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
      </nav>
    </div>
  )
}