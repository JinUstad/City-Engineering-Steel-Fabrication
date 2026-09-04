'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Folder,
} from 'lucide-react'
import { GALLERY_ITEMS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)

  const categories = [
    'All',
    'Architectural',
    'CNC',
    'Heavy Equipment',
    'PEB Buildings',
    'Security & Gates',
    'Structural Steel',
  ]

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  // Modal navigation
  const openModal = (index: number) => {
    setActiveItemIndex(index)
  }

  const closeModal = useCallback(() => {
    setActiveItemIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => ((prev! + 1) % filteredItems.length))
    }
  }, [activeItemIndex, filteredItems.length])

  const prevImage = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(
        (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
      )
    }
  }, [activeItemIndex, filteredItems.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeItemIndex, closeModal, nextImage, prevImage])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeItemIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeItemIndex])

  const currentItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null

  return (
    <section id="gallery" className="scroll-mt-20 bg-background py-14 sm:py-20 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Folder Photo Gallery"
            title="Executed Fabrication & Plant Projects"
            description="Explore our high-resolution photos from plant workshops, CNC cutting bays, PEB sheds, and heavy structural installations across India."
          />
        </div>

        {/* Category / Folder Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-lg shadow-brand-orange/30 scale-105'
                    : 'bg-card border border-border text-foreground/80 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                <Folder className="size-3.5" />
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    selectedCategory === cat
                      ? 'bg-white/20 text-white'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* 5 Images in 1 Row Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openModal(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border cursor-pointer shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:shadow-[0_10px_25px_-5px_rgba(255,85,0,0.3)]"
              title="Click to expand photo"
            >
              <Image
                src={item.image}
                alt={`Gallery photo ${item.id}`}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Pill on Image Top */}
              <span className="absolute top-2 left-2 rounded bg-black/70 backdrop-blur-sm border border-white/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-sm opacity-90 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {item.category}
              </span>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="size-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Image Carousel Lightbox Modal */}
      {activeItemIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div className="relative flex flex-col w-full max-w-5xl max-h-[94vh] rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0c121e] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#080d17] px-4 py-3 sm:px-6 shrink-0">
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-orange px-2.5 py-0.5 text-xs font-black uppercase text-white tracking-wider">
                  {currentItem.category}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  Photo {activeItemIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-full bg-slate-800 p-2 text-slate-300 hover:bg-brand-orange hover:text-white transition-all cursor-pointer"
                aria-label="Close photo modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Main Carousel Image Viewport */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[60vh] max-h-[70vh] bg-black/95 flex items-center justify-center p-2">
              <div className="relative w-full h-full min-h-[48vh] sm:min-h-[58vh]">
                <Image
                  src={currentItem.image}
                  alt={`Expanded photo ${currentItem.id}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 border border-white/20 p-2.5 text-white hover:bg-brand-orange transition-all shadow-lg cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 border border-white/20 p-2.5 text-white hover:bg-brand-orange transition-all shadow-lg cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-6" />
                </button>
              )}
            </div>

            {/* Thumbnail Strip */}
            {filteredItems.length > 1 && (
              <div className="border-t border-slate-800 bg-[#060a12] p-2.5 sm:p-3 overflow-x-auto shrink-0">
                <div className="flex items-center justify-center gap-2 min-w-max mx-auto">
                  {filteredItems.map((imgItem, idx) => (
                    <button
                      key={imgItem.id}
                      type="button"
                      onClick={() => setActiveItemIndex(idx)}
                      className={`relative size-12 sm:size-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeItemIndex === idx
                          ? 'border-brand-orange ring-2 ring-brand-orange/50 scale-105 opacity-100'
                          : 'border-slate-700/60 opacity-60 hover:opacity-100 hover:border-slate-500'
                      }`}
                      aria-label={`View thumbnail ${idx + 1}`}
                    >
                      <Image
                        src={imgItem.image}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
