'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, Images } from 'lucide-react'
import { PRODUCTS, type Product } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ImageCarouselModal } from '@/components/image-carousel-modal'

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featured = PRODUCTS.slice(0, 4)

  const handleOpenGallery = (project: Product) => {
    setSelectedProduct(project)
    setIsModalOpen(true)
  }

  return (
    <section id="featured" className="scroll-mt-24 bg-background py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Key Project Showcases"
            title="Engineered Landmark Steel Installations"
            description="From high-span factory warehouses to architectural staircases and high-pressure chemical storage tanks."
          />
          <Link
            href="/contact"
            className="inline-flex w-max items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] transition-all hover:scale-105"
          >
            <Sparkles className="size-4" />
            <span>Request Full Project Portfolio</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project: Product) => {
            const photoCount = project.images?.length || 1

            return (
              <article
                key={project.name}
                className="group flex flex-col rounded-xl overflow-hidden border border-border bg-card shadow-md transition-all duration-300 hover:border-brand-orange/60 hover:shadow-xl"
              >
                <div
                  onClick={() => handleOpenGallery(project)}
                  className="relative aspect-square overflow-hidden bg-muted cursor-pointer"
                  title="Click to view all photos in this folder"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 dark:from-[#0f1624] dark:via-transparent dark:to-black/30" />
                  
                  <span className="absolute left-3 top-3 rounded bg-amber-500/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow">
                    {project.category}
                  </span>

                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded bg-black/75 backdrop-blur-sm border border-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                    <Images className="size-3 text-brand-orange" />
                    <span>{photoCount}</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[1px]">
                    <span className="rounded-full bg-brand-orange px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      View Photos
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3
                    onClick={() => handleOpenGallery(project)}
                    className="text-base font-bold text-foreground leading-snug group-hover:text-brand-orange dark:group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Badges / Chips */}
                  {project.features && (
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border">
                      {project.features.map((f: string) => (
                        <span key={f} className="rounded bg-secondary border border-border px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenGallery(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:underline transition-colors cursor-pointer"
                    >
                      <span>View Gallery ({photoCount})</span>
                      <ArrowUpRight className="size-3.5" />
                    </button>
                    <Link
                      href="/contact"
                      className="text-[11px] text-muted-foreground hover:text-brand-orange"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <ImageCarouselModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
