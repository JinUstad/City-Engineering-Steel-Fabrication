'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-50 bg-background">
      {/* Utility bar */}
      <div className="bg-brand-navy text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            <span>{COMPANY.addressShort}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-brand-red"
            >
              <Phone className="size-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 hover:text-brand-red"
            >
              <Mail className="size-4" aria-hidden="true" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center bg-brand-red text-lg font-bold text-primary-foreground">
              FM
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight">{COMPANY.name}</span>
              <span className="text-xs text-muted-foreground">{COMPANY.tagline}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send Email
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            className="border-t border-border px-4 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-foreground hover:text-brand-red"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                Send Email
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
