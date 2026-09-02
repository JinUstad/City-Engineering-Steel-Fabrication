'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Menu, X, ShieldCheck, Flame, Award } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-border/80 transition-all">
      {/* Top Utility Bar with Address & GST */}
      <div className="bg-[#05080e] border-b border-white/5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-300">
            {/* Address */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <MapPin className="size-3.5 text-brand-orange shrink-0" aria-hidden="true" />
              <span className="text-slate-300 font-medium">
                {COMPANY.address}
              </span>
            </div>

            {/* GST Number Badge */}
            <div className="inline-flex items-center gap-1 rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold text-amber-300">
              <Award className="size-3 text-brand-orange" />
              <span>GSTIN: {COMPANY.gstNumber}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1">
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="size-3.5 text-brand-orange" aria-hidden="true" />
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="font-semibold text-slate-200 hover:text-brand-orange transition-colors"
              >
                {COMPANY.phone}
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={`tel:${COMPANY.phone2Clean}`}
                className="font-semibold text-slate-200 hover:text-brand-orange transition-colors"
              >
                {COMPANY.phone2}
              </a>
            </div>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Mail className="size-3.5 text-brand-orange" aria-hidden="true" />
              <span>{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3">
        {/* Brand with Transparent Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative size-12 sm:size-14 overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <Image
              src="/updated-logo-transparent.png"
              alt="CESF FABRICATION Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-brand-orange transition-colors">
                CESF <span className="text-brand-orange">FABRICATION</span>
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-400/90 flex items-center gap-1.5">
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
              className="text-sm font-medium text-slate-300 transition-colors hover:text-brand-orange relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all hover:shadow-[0_0_25px_rgba(255,85,0,0.7)] hover:brightness-110 active:scale-95"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get Instant Quote
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden border border-border"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6 text-brand-orange" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          className="border-t border-border bg-[#090d16] px-4 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200 shadow-2xl"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-2">
            {/* Mobile Address & GST Notice */}
            <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3 text-xs text-slate-300 space-y-1.5 mb-2">
              <div className="flex items-start gap-1.5">
                <MapPin className="size-3.5 mt-0.5 text-brand-orange shrink-0" />
                <span className="text-[11px] leading-relaxed">{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[11px]">
                <Award className="size-3 text-brand-orange" />
                <span>GST: {COMPANY.gstNumber}</span>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="flex items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 py-2.5 text-sm font-semibold text-slate-200"
              >
                <Phone className="size-4 text-brand-orange" />
                Call {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg"
              >
                <Mail className="size-4" aria-hidden="true" />
                Get Instant Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
