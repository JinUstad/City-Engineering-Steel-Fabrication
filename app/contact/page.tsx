import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { MapPin, Phone, Mail, Clock, Flame, ShieldCheck } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us | CESF Fabrication New Delhi',
  description:
    'Contact City Engineering & Steel Fabrication (CESF) for structural steel estimates, PEB shed quotation, CNC laser cutting and heavy fabrication. Phone: +91 93184 00632, Email: cityengineering0008@gmail.com',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090d16] text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header Hero Banner */}
        <section className="relative overflow-hidden bg-[#070b13] py-14 sm:py-20 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-amber-500/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Get In Touch With Chief Fabricator</span>
            </div>
            
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Contact & RFQ Center
            </h1>
            
            <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base text-slate-300">
              Direct engineering consultation for heavy structural steel fabrication, pre-engineered buildings, and CNC laser cutting in New Delhi & across India.
            </p>
          </div>
        </section>

        {/* The Dedicated Contact Form & Address Section */}
        <ContactSection />

        {/* Map & Factory Location Block */}
        <section className="bg-[#0b101c] py-12 border-t border-slate-800/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="size-5 text-brand-orange" />
                    <span>Works Plant & Heavy Fabrication Yard</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Plot No. 48, Industrial Area Phase-II, New Delhi - 110020, India
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Industrial+Area+Phase-II+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition-colors"
                >
                  <MapPin className="size-4 text-brand-orange" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Map visual card */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-center p-6">
                <div className="flex flex-col items-center">
                  <div className="size-14 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange mb-3 shadow-[0_0_25px_rgba(255,85,0,0.5)]">
                    <MapPin className="size-7" />
                  </div>
                  <h4 className="text-base font-bold text-white">City Engineering & Steel Fabrication (CESF)</h4>
                  <p className="text-xs text-amber-300 mt-1">Phase-II Industrial Area, New Delhi, India</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-md">
                    Conveniently accessible for heavy trailers and material dispatch. Visiting hours 8:30 AM - 7:30 PM (Mon-Sat).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingContact />
      <SiteFooter />
    </div>
  )
}
