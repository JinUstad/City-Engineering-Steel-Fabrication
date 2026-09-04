import { SiteHeader } from '@/components/site-header'
import { BannerSlider } from '@/components/banner-slider'
import { ProductsGrid } from '@/components/products-grid'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ArchitecturalFabricationSection } from '@/components/architectural-fabrication-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { Mail, Phone, ArrowRight, Flame } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Banners */}
        <BannerSlider />

        {/* 6 Heavy Structural Steel & Metal Fabrication Capabilities */}
        <section className="relative">
          <ProductsGrid />
          <div className="bg-muted/40 dark:bg-[#0b101c] pb-12 text-center border-b border-border/60">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-border dark:border-slate-700 bg-card dark:bg-slate-900/90 px-6 py-3 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:border-brand-orange hover:text-brand-orange dark:hover:text-white transition-all shadow-md"
            >
              <span>View Full Services & Specifications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* About Workshop & Quality Standards with Link to /about */}
        <section className="relative">
          <AboutSection />
          <div className="bg-muted/40 dark:bg-[#0b101c] pb-12 text-center border-b border-border/60">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border dark:border-slate-700 bg-card dark:bg-slate-900/90 px-6 py-3 text-xs sm:text-sm font-bold text-foreground/80 hover:border-brand-orange hover:text-brand-orange dark:hover:text-white transition-all shadow-md"
            >
              <span>Read Full Company Story & Machinery Specs</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* 4 Core Services: Interior Design, Modular Kitchen, Office Furniture, Bed Room Furniture */}
        <ServicesSection />

        {/* Architectural & Specialized Fabrication: UPVC, Ceiling, MS Shutters, Column Box, MS Grating */}
        <ArchitecturalFabricationSection />

        {/* Quick CTA to Dedicated Contact Page */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-[#0d1524] dark:via-[#101b2e] dark:to-[#0d1524] py-16 border-t border-border">
          <div className="absolute -top-24 -left-24 size-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Direct Estimation Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Submit Your Drawing or BOQ For Fast RFQ
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
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
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center gap-2 rounded-md border border-border dark:border-slate-700 bg-card dark:bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-brand-orange hover:text-brand-orange dark:hover:text-white transition-colors"
              >
                <Phone className="size-4 text-brand-orange" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingContact />
      <SiteFooter />
    </div>
  )
}
