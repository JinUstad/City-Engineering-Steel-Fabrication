import { SiteHeader } from '@/components/site-header'
import { BannerSlider } from '@/components/banner-slider'
import { ProductsGrid } from '@/components/products-grid'
import { WorkGallery } from '@/components/work-gallery'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { Mail, Phone, ArrowRight, ShieldCheck, Flame } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090d16] text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Banners */}
        <BannerSlider />

        {/* Services & Capabilities */}
        <ProductsGrid />

        {/* Work Gallery with Interactive Lightbox Modal */}
        <WorkGallery />

        {/* About Workshop & Quality Standards */}
        <AboutSection />

        {/* Quick CTA to Dedicated Contact Page */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0d1524] via-[#101b2e] to-[#0d1524] py-16 border-t border-slate-800">
          <div className="absolute -top-24 -left-24 size-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Ready To Start Your Project?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Get an Immediate Engineering Estimate & RFQ
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Submit your drawing specifications or speak with our Chief Engineer directly at our New Delhi fabrication facility.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,85,0,0.5)] transition-all hover:shadow-[0_0_35px_rgba(255,85,0,0.8)] hover:scale-105 active:scale-95"
              >
                <Mail className="size-4" />
                <span>Go to RFQ & Contact Page</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-brand-orange hover:text-white transition-colors"
              >
                <Phone className="size-4 text-brand-orange" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingContact />

      <SiteFooter />
    </div>
  )
}
