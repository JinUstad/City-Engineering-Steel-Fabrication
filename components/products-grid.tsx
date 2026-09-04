'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Images,
  Sparkles,
} from 'lucide-react'
import { PRODUCTS, COMPANY, type Product } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ImageCarouselModal } from '@/components/image-carousel-modal'

export function ProductsGrid() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenGallery = (product: Product) => {
    setActiveProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="products" className="scroll-mt-24 bg-background py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Heavy Fabrication Capabilities"
            title="Heavy Structural & Precision Metal Solutions"
            description="Explore our complete range of certified industrial fabrication, PEB warehouse sheds, CNC fiber laser cutting, and architectural steel."
          />
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm"
            >
              <PhoneCall className="size-4 text-brand-orange" />
              Direct Support: {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* 6 Industrial Fabrication Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => {
            const photoCount = product.images?.length || 1

            return (
              <article
                key={product.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/70 hover:shadow-[0_15px_35px_-5px_rgba(255,85,0,0.25)]"
              >
                {/* Single Image Container with Click-to-Open Action */}
                <div
                  onClick={() => handleOpenGallery(product)}
                  className="relative aspect-[16/10] overflow-hidden bg-muted cursor-pointer"
                  title="Click to view full photo gallery"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-[#101726] dark:via-black/20 dark:to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 rounded bg-brand-orange/95 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                    {product.category}
                  </span>

                  {/* Photo Count Chip */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-amber-300 shadow-md transition-transform group-hover:scale-105">
                    <Images className="size-3.5 text-brand-orange" />
                    <span>{photoCount} Photos</span>
                  </div>

                  {/* Hover Prompt Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-xs font-bold text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Sparkles className="size-4" />
                      <span>Open Photo Slider ({photoCount})</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3
                    onClick={() => handleOpenGallery(product)}
                    className="text-xl font-bold text-foreground group-hover:text-brand-orange dark:group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Features List */}
                  {product.features && product.features.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-foreground/80">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 mt-0.5 text-brand-orange shrink-0" />
                          <span>{feat}</span>
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
