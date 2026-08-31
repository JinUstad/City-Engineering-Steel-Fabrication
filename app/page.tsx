import { SiteHeader } from '@/components/site-header'
import { BannerSlider } from '@/components/banner-slider'
import { ProductsGrid } from '@/components/products-grid'
import { WorkGallery } from '@/components/work-gallery'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { Mail, Phone, ArrowRight, ShieldCheck, Flame, Sparkles } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090d16] text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Banners */}
        <BannerSlider />

        {/* Services & Capabilities Section with Link to /products */}
        <section className="relative">
          <ProductsGrid />
          <div className="bg-[#0b101c] pb-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3 text-xs sm:text-sm font-bold text-amber-400 hover:border-brand-orange hover:text-white transition-all shadow-md"
            >
              <span>View Full Services & Specifications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Interactive Work Gallery Section with Link to /gallery */}
        <section className="relative">
          <WorkGallery />
          <div className="bg-[#070b13] pb-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3 text-xs sm:text-sm font-bold text-amber-400 hover:border-brand-orange hover:text-white transition-all shadow-md"
            >
              <span>Explore Complete 12+ Projects Gallery</span>
              <Sparkles className="size-4" />
            </Link>
          </div>
        </section>

        {/* About Workshop & Quality Standards with Link to /about */}
        <section className="relative">
          <AboutSection />
          <div className="bg-[#0b101c] pb-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3 text-xs sm:text-sm font-bold text-slate-300 hover:border-brand-orange hover:text-white transition-all shadow-md"
            >
              <span>Read Full Company Story & Machinery Specs</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Quick CTA to Dedicated Contact Page (No Form on Home Page) */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0d1524] via-[#101b2e] to-[#0d1524] py-16 border-t border-slate-800">
          <div className="absolute -top-24 -left-24 size-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Direct Estimation Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Submit Your Drawing or BOQ For Fast RFQ
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Visit our dedicated Contact page to submit project specifications, steel tonnage, or speak with our Chief Engineer.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,85,0,0.5)] transition-all hover:shadow-[0_0_35px_rgba(255,85,0,0.8)] hover:scale-105 active:scale-95"
              >
                <Mail className="size-4" />
                <span>Go to Contact & RFQ Page</span>
                <ArrowRight className="size-4" />
              </Link>

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

      {/* Floating Call & WhatsApp Buttons in Vertical Stack */}
      <FloatingContact />

      <SiteFooter />
    </div>
  )
}
