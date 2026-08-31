'use client'

import { useState } from 'react'
import { Phone, MessageSquare, Flame } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'

export function FloatingContact() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = '919318400632'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello CESF Fabrication, I would like to inquire about structural steel fabrication / laser cutting / PEB shed.'
  )}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none">
      {/* Floating Tooltip info */}
      <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-700/80 bg-[#0b101c]/95 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-2xl backdrop-blur-md animate-bounce">
        <Flame className="size-3.5 text-brand-orange animate-pulse" />
        <span>Instant Quote: +91 93184 00632</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Call Floating Button */}
        <a
          href={`tel:+919318400632`}
          className="group relative flex size-13 sm:size-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-[0_4px_20px_rgba(255,85,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_25px_rgba(255,85,0,0.8)] active:scale-95"
          aria-label="Direct Phone Call to CESF Fabrication"
        >
          <Phone className="size-6 sm:size-7 transition-transform group-hover:rotate-12" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-white whitespace-nowrap group-hover:block shadow-lg">
            Call +91 93184 00632
          </span>
          <span className="absolute -top-1 -right-1 flex size-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3.5 bg-amber-400"></span>
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex size-13 sm:size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.8)] active:scale-95"
          aria-label="Chat on WhatsApp with CESF Fabrication"
        >
          <MessageSquare className="size-6 sm:size-7 fill-white/20 transition-transform group-hover:scale-110" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-white whitespace-nowrap group-hover:block shadow-lg">
            Chat on WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 flex size-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3.5 bg-emerald-300"></span>
          </span>
        </a>
      </div>
    </div>
  )
}
