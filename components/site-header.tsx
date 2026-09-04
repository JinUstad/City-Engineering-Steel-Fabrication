'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Menu, X, Flame, Award } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/site-data'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/80 transition-colors duration-200">
      {/* Main Nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3">
        {/* Brand with Visible Enhanced Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative size-12 sm:size-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900/90 p-1 border border-border dark:border-slate-700 shadow-[0_0_15px_rgba(255,85,0,0.25)] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center shrink-0">
            <Image
              src="/updated-logo-transparent.png"
              alt="CESF FABRICATION Logo"
              fill
              className="object-contain p-0.5 filter drop-shadow-[0_0_8px_rgba(255,85,0,0.45)] brightness-105 dark:brightness-125 contrast-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-foreground group-hover:text-brand-orange transition-colors">
                CESF <span className="text-brand-orange">FABRICATION</span>
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400/90 flex items-center gap-1.5">
              <Flame className="size-3 text-brand-orange inline-block" />
              BUILD • SHAPE • STRONGER
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-orange relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary border border-border"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6 text-brand-orange" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200 shadow-2xl"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-2">
            {/* Mobile Address & GST Notice */}
            <div className="rounded-lg bg-card border border-border p-3 text-xs text-foreground space-y-1.5 mb-2">
              <div className="flex items-start gap-1.5">
                <MapPin className="size-3.5 mt-0.5 text-brand-orange shrink-0" />
                <span className="text-[11px] leading-relaxed text-muted-foreground">{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-300 font-mono text-[11px]">
                <Award className="size-3 text-brand-orange" />
                <span>GST: {COMPANY.gstNumber}</span>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary hover:text-brand-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="flex items-center justify-center gap-2 rounded-md bg-secondary border border-border py-2.5 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4 text-brand-orange" />
                Call {COMPANY.phone}
              </a>

            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
