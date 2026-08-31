'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  MapPin,
  Flame,
  ArrowRight,
  Filter,
} from 'lucide-react'
import { GALLERY_ITEMS, GalleryItem } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)

  const categories = [
    'All',
    'Heavy Structural',
    'PEB Sheds',
    'CNC Precision',
    'Architectural',
    'Heavy Tanks',
    'Piping & Skids',
  ]

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  // Modal navigation
  const openModal = (item: GalleryItem) => {
    const indexInFiltered = filteredItems.findIndex((i) => i.id === item.id)
    if (indexInFiltered !== -1) {
      setActiveItemIndex(indexInFiltered)
    }
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
    <section id="gallery" className="scroll-mt-20 bg-[#070b13] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work & Project Gallery"
            title="Executed Fabrication Projects Across India"
            description="Explore our on-site erection, heavy structural fabrication, pre-engineered buildings, and high-precision CNC laser cutting jobs."
          />
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Filter className="size-3.5 text-brand-orange" />
            <span>Click any image for interactive full view</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category)
                setActiveItemIndex(null)
              }}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-[0_0_15px_rgba(255,85,0,0.4)] scale-105'
                  : 'bg-[#101726] border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-[#0f1624] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-[0_10px_30px_-5px_rgba(255,85,0,0.3)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1624] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex size-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_0_20px_rgba(255,85,0,0.8)] scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="size-5" />
                  </div>
                </div>

                {/* Category Tag */}
                <span className="absolute top-3 left-3 rounded bg-[#070b13]/90 border border-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur-md shadow">
                  {item.category}
                </span>

                {/* Location Tag */}
                {item.location && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 text-[10px] text-slate-300 backdrop-blur-sm">
                    <MapPin className="size-3 text-brand-orange" />
                    <span>{item.location}</span>
                  </span>
                )}
              </div>

              {/* Card Footer Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 line-clamp-2">
                  {item.description}
                </p>
                {item.scope && (
                  <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px]">
                    <span className="text-slate-400">{item.scope}</span>
                    <span className="font-semibold text-brand-orange group-hover:underline flex items-center gap-1">
                      View Photos <ArrowRight className="size-3" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Lightbox */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0d131f] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter & Close */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#070b13] px-5 py-3.5 text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Flame className="size-3.5 text-brand-orange" />
                  <span>{currentItem.category}</span>
                </div>
                <span className="text-slate-600">|</span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeItemIndex! + 1} / {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[11px] text-slate-400 mr-2">
                  Use ← → arrows to browse
                </span>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full bg-slate-800 p-1.5 text-slate-300 hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Main Image Area with Left/Right arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[340px] sm:min-h-[480px]">
              <div className="relative h-[340px] sm:h-[480px] w-full">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain select-none"
                  priority
                />
              </div>

              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2.5 sm:p-3 text-white backdrop-blur-md transition-all hover:bg-brand-orange hover:scale-110 hover:border-brand-orange active:scale-95 shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6 sm:size-7" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2.5 sm:p-3 text-white backdrop-blur-md transition-all hover:bg-brand-orange hover:scale-110 hover:border-brand-orange active:scale-95 shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight className="size-6 sm:size-7" />
              </button>
            </div>

            {/* Bottom Details Footer */}
            <div className="border-t border-slate-800 bg-[#0a0f1a] p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {currentItem.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    {currentItem.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    {currentItem.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-brand-orange" />
                        {currentItem.location}
                      </span>
                    )}
                    {currentItem.scope && (
                      <span className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-amber-300 font-mono text-[11px]">
                        Scope: {currentItem.scope}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:brightness-110 transition-all shrink-0"
                >
                  <span>Inquire For This Work</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
