import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { PRODUCTS, COMPANY } from '@/lib/site-data'
import { ArrowRight, CheckCircle2, Flame, ShieldCheck, Wrench, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products & Services | Heavy Structural Steel & PEB Sheds | CESF',
  description:
    'Explore CESF Fabrication products & services: Heavy structural steel I-beams, Turnkey PEB warehouse sheds, 6kW CNC fiber laser cutting, architectural staircases, silos and tanks in New Delhi.',
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090d16] text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-[#070b13] py-14 sm:py-20 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-amber-500/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              <Flame className="size-3.5 text-brand-orange" />
              <span>Engineered Steel Solutions</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Fabrication Services & Products
            </h1>

            <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base text-slate-300">
              Complete range of heavy structural steel fabrication, pre-engineered building (PEB) solutions, high-speed CNC laser cutting, and certified pressure vessels.
            </p>
          </div>
        </section>

        {/* Products List & Deep Details */}
        <section className="py-16 sm:py-20 bg-[#0b101c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_10px_35px_-5px_rgba(255,85,0,0.25)]"
                >
                  {/* Image Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />
                    <span className="absolute top-4 left-4 rounded bg-brand-orange px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-6 border-t border-slate-800/80 pt-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Key Capabilities & Quality Standards
                      </h3>
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5">
                            <CheckCircle2 className="size-4 text-brand-orange shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs Pill Bar */}
                    {product.specs && (
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-md bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-xs font-mono text-slate-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Card CTA */}
                    <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:brightness-110 transition-all"
                      >
                        <span>Request RFQ For This</span>
                        <ArrowRight className="size-4" />
                      </Link>

                      <a
                        href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <PhoneCall className="size-3.5 text-brand-orange" />
                        <span>Direct Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global RFQ Banner */}
        <section className="bg-gradient-to-r from-brand-orange/10 via-[#0a0f1a] to-amber-500/10 py-16 border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Need a Custom Fabrication Solution Not Listed Above?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
              We specialize in custom structural drawings, bespoke architectural metalwork, and turn-key heavy engineering.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.5)] hover:scale-105 transition-all"
              >
                <span>Contact Engineering Team</span>
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
