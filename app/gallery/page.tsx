import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { WorkGallery } from '@/components/work-gallery'
import { Flame, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work Gallery | Industrial Steel Projects Showcase | CESF',
  description:
    'Browse our project gallery of heavy structural steel fabrication, industrial PEB warehouses, 6kW laser cut components, pressure vessels, and architectural staircases executed across India.',
}

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Header Hero Banner */}
        <section className="relative overflow-hidden bg-muted/40 py-14 sm:py-20 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-amber-500/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Project Execution Portfolio</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              Our Work Gallery
            </h1>

            <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Photographs from our fabrication yard, certified welding stations, laser cutting division, and on-site structural installations. Click any image to view in interactive modal.
            </p>
          </div>
        </section>

        {/* Gallery Component */}
        <WorkGallery />

        {/* Bottom Contact Prompt */}
        <section className="bg-secondary/40 py-14 border-t border-border text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Want us to fabricate something similar for your site?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Get direct technical estimation and delivery schedules from our New Delhi engineering team.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:brightness-110 transition-all"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingContact />
      <SiteFooter />
    </div>
  )
}
