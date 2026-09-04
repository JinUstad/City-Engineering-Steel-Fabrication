import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { AboutSection } from '@/components/about-section'
import { COMPANY } from '@/lib/site-data'
import { Flame, ShieldCheck, Award, ArrowRight, Wrench, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us & Plant Capabilities | CESF Fabrication New Delhi',
  description:
    'Learn about City Engineering & Steel Fabrication (CESF): Founded in 2008 in New Delhi, 25,000 sq.ft facility, certified welding standards AWS D1.1, ISO 9001:2015, and 1,500+ executed landmark projects.',
}

export default function AboutPage() {
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
              <span>Engineering Excellence Since {COMPANY.founded}</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              About CESF Fabrication & Capabilities
            </h1>

            <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Discover our manufacturing infrastructure, certified welding quality protocols, heavy lifting equipment, and track record across industrial, commercial and PEB sectors.
            </p>
          </div>
        </section>

        {/* The Main About Section */}
        <AboutSection />

        {/* Detailed Machinery & Quality Assurance Deep Dive */}
        <section className="py-16 sm:py-20 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
                  <Cpu className="size-3.5" />
                  <span>State-Of-The-Art Equipment</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                  Advanced Machinery & Fabrication Fleet
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Our New Delhi workshop houses dedicated bays for heavy structural assembly, automated CNC fiber laser plate cutting, hydraulic bending, grit blasting, and industrial PU painting.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-border bg-card p-4 flex items-start gap-3.5 shadow-sm">
                    <div className="size-9 rounded-lg bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange shrink-0">
                      <Wrench className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Heavy Lifting & Gantry Cranes</h4>
                      <p className="text-xs text-muted-foreground mt-1">Dual 50-Ton overhead gantry cranes for handling massive bridge girders and built-up columns safely.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-4 flex items-start gap-3.5 shadow-sm">
                    <div className="size-9 rounded-lg bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange shrink-0">
                      <Flame className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">6kW High-Speed Fiber Laser</h4>
                      <p className="text-xs text-muted-foreground mt-1">Laser cutting up to 25mm thickness with automated CAD nesting and mirror-edge finish.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-4 flex items-start gap-3.5 shadow-sm">
                    <div className="size-9 rounded-lg bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange shrink-0">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Non-Destructive Testing (NDT)</h4>
                      <p className="text-xs text-muted-foreground mt-1">Ultrasonic (UT), Magnetic Particle (MPT), and Radiography (RT) inspections on 100% of critical structural joints.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant Stats & Certification Card */}
              <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange">
                    <Award className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Quality Assurance Protocols</h3>
                    <p className="text-xs text-amber-600 dark:text-amber-300 font-semibold">Certified Welding & NDT Inspection</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-secondary/50 p-4 text-center">
                    <span className="text-3xl font-black text-amber-600 dark:text-amber-400">25K+</span>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">Tons Steel Fabricated</p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-4 text-center">
                    <span className="text-3xl font-black text-amber-600 dark:text-amber-400">1,500+</span>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">Projects Delivered</p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-4 text-center">
                    <span className="text-3xl font-black text-amber-600 dark:text-amber-400">25,000</span>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">Sq.Ft Factory Area</p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-4 text-center">
                    <span className="text-3xl font-black text-amber-600 dark:text-amber-400">18+</span>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">Years in Industry</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 py-3.5 text-sm font-bold text-white shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>Contact Us For Factory Visit / RFQ</span>
                    <ArrowRight className="size-4" />
                  </Link>
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
