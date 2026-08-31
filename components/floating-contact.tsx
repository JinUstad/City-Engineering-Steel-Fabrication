'use client'

import { Phone, MessageSquare, Flame } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'

export function FloatingContact() {
  const whatsappUrl = `https://wa.me/${COMPANY.phoneClean}?text=${encodeURIComponent(
    'Hello CESF Fabrication, I would like to inquire about structural steel fabrication / laser cutting / PEB shed.'
  )}`

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none">
      {/* Floating Info Pill */}
      <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-700/90 bg-[#0b101c]/95 px-3 py-1 text-[11px] font-bold text-amber-300 shadow-2xl backdrop-blur-md">
        <Flame className="size-3 text-brand-orange animate-pulse" />
        <span>Direct Help: +91 93184 00632</span>
      </div>

      {/* Vertical Stack of Floating Buttons */}
      <div className="flex flex-col items-center gap-3">
        {/* WhatsApp Floating Button (Top in stack) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex size-12 sm:size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.8)] active:scale-95"
          aria-label="Chat on WhatsApp with CESF Fabrication"
        >
          <MessageSquare className="size-5 sm:size-6 fill-white/20 transition-transform group-hover:scale-110" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-white whitespace-nowrap group-hover:block shadow-lg">
            WhatsApp Support
          </span>
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3 bg-emerald-300"></span>
          </span>
        </a>

        {/* Call Floating Button (Bottom in stack) */}
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="group relative flex size-12 sm:size-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-[0_4px_20px_rgba(255,85,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_25px_rgba(255,85,0,0.8)] active:scale-95"
          aria-label="Direct Phone Call to CESF Fabrication"
        >
          <Phone className="size-5 sm:size-6 transition-transform group-hover:rotate-12" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-white whitespace-nowrap group-hover:block shadow-lg">
            Call +91 93184 00632
          </span>
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3 bg-amber-400"></span>
          </span>
        </a>
      </div>
    </div>
  )
}
