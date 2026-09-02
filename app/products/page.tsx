'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { ImageCarouselModal } from '@/components/image-carousel-modal'
import { SERVICES, PRODUCTS, ARCHITECTURAL_FABRICATION, COMPANY, type Product } from '@/lib/site-data'
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  PhoneCall,
  Images,
  Sparkles,
  Layers,
} from 'lucide-react'

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenGallery = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const allItems = [...SERVICES, ...PRODUCTS]

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
              <span>Full Portfolio & Capabilities</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Services & Fabrication Solutions
            </h1>

            <p className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-base text-slate-300">
              Explore our complete range of bespoke interior design, luxury modular kitchens, commercial office furniture, and heavy structural steel fabrication. Click any card to open the interactive photo gallery.
            </p>
          </div>
        </section>

        {/* Section 1: Interior & Furniture Services (4 Cards) */}
        <section className="py-16 sm:py-20 bg-[#090d16] border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Section 01</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                Interior Design & Custom Furniture
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Bespoke residential & commercial interior architecture, modular kitchen setups, workstations, and luxury bedroom aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => {
                const photoCount = service.images?.length || 1

                return (
                  <div
                    key={service.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_10px_35px_-5px_rgba(255,85,0,0.25)]"
                  >
                    <div
                      onClick={() => handleOpenGallery(service)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                      title="Click to view full photo slider"
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />
                      <span className="absolute top-3 left-3 rounded bg-brand-orange px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                        {service.category}
                      </span>
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300 shadow-md">
                        <Images className="size-3 text-brand-orange" />
                        <span>{photoCount}</span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3
                        onClick={() => handleOpenGallery(service)}
                        className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {service.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-2">
                        {service.description}
                      </p>

                      <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3 text-xs text-slate-300">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[11px]">
                            <CheckCircle2 className="size-3.5 text-brand-orange shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Heavy Structural Steel & Metal Fabrication (6 Cards) */}
        <section className="py-16 sm:py-20 bg-[#0b101c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Section 02</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                Heavy Structural Steel & Industrial Fabrication
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Certified heavy industrial steel fabrication, pre-engineered building (PEB) warehouse sheds, 6kW CNC fiber laser cutting, and architectural metalwork.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => {
                const photoCount = product.images?.length || 1

                return (
                  <div
                    key={product.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_10px_35px_-5px_rgba(255,85,0,0.25)]"
                  >
                    <div
                      onClick={() => handleOpenGallery(product)}
                      className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 cursor-pointer"
                      title="Click to view full photo slider"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />
                      <span className="absolute top-4 left-4 rounded bg-brand-orange px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                        {product.category}
                      </span>
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-amber-300 shadow-md">
                        <Images className="size-3.5 text-brand-orange" />
                        <span>{photoCount} Photos</span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3
                        onClick={() => handleOpenGallery(product)}
                        className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {product.description}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-300">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5">
                            <CheckCircle2 className="size-4 text-brand-orange shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {product.specs && (
                        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/80 pt-3">
                          {product.specs.map((spec) => (
                            <span
                              key={spec}
                              className="rounded-md bg-slate-900 border border-slate-700/80 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Architectural & Specialized Fabrication Solutions (5 Cards) */}
        <section className="py-16 sm:py-20 bg-[#070b13] border-t border-slate-800">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Section 03</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                Architectural & Specialized Fabrication Solutions
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                UPVC & aluminium windows, gypsum false ceiling systems, motorized MS rolling shutters, column box shuttering plates, and heavy MS industrial gratings.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {ARCHITECTURAL_FABRICATION.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_10px_35px_-5px_rgba(255,85,0,0.25)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />
                      <span className="absolute top-2.5 left-2.5 rounded bg-brand-orange px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-3">
                        {item.description}
                      </p>

                      <ul className="mt-3.5 space-y-1.5 border-t border-slate-800/80 pt-3 text-[11px] text-slate-300">
                        {item.features.slice(0, 2).map((f) => (
                          <li key={f} className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3 text-brand-orange shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Global RFQ Banner */}
        <section className="bg-gradient-to-r from-brand-orange/10 via-[#0a0f1a] to-amber-500/10 py-16 border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Need a Custom Fabrication or Interior Solution?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
              We specialize in custom structural drawings, bespoke architectural metalwork, and turn-key modular interior engineering.
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

      {/* Interactive Photo Carousel Modal */}
      <ImageCarouselModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FloatingContact />
      <SiteFooter />
    </div>
  )
}
