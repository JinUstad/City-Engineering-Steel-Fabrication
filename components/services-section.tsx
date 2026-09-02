'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Layers,
  Images,
  Sparkles,
} from 'lucide-react'
import { SERVICES, COMPANY, type Product } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ImageCarouselModal } from '@/components/image-carousel-modal'

export function ServicesSection() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenGallery = (product: Product) => {
    setActiveProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="services" className="scroll-mt-24 bg-[#090d16] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <SectionHeading
            eyebrow="Our Core Services"
            title="Interior Design, Modular Kitchens & Custom Furniture"
            description="Explore our bespoke residential & commercial interior architecture, modular kitchen setups, office workstations, and luxury bedroom fittings."
          />
        </div>

        {/* 4 Cards in 1 Row Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const photoCount = service.images?.length || 1

            return (
              <article
                key={service.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/70 hover:shadow-[0_15px_35px_-5px_rgba(255,85,0,0.3)]"
              >
                {/* Single Image Container with Click-to-Open Action */}
                <div
                  onClick={() => handleOpenGallery(service)}
                  className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-pointer"
                  title="Click to view full photo gallery"
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-black/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 rounded bg-brand-orange/95 px-2.5 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                    {service.category}
                  </span>

                  {/* Photo Count Chip */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-amber-300 shadow-md">
                    <Images className="size-3 text-brand-orange" />
                    <span>{photoCount}</span>
                  </div>

                  {/* Hover Prompt Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Sparkles className="size-3.5" />
                      <span>View Photos ({photoCount})</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3
                    onClick={() => handleOpenGallery(service)}
                    className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                  >
                    {service.name}
                  </h3>
                  
                  <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3 text-xs text-slate-300">
                      {service.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                          <CheckCircle2 className="size-3.5 mt-0.5 text-brand-orange shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Interactive Photo Carousel Modal */}
      <ImageCarouselModal
        product={activeProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
