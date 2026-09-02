'use client'

import { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Folder,
  Layers,
  Sparkles,
  Phone,
} from 'lucide-react'
import { Product, COMPANY } from '@/lib/site-data'

type Props = {
  product: Product | null
  isOpen: boolean
  initialIndex?: number
  onClose: () => void
}

export function ImageCarouselModal({
  product,
  isOpen,
  initialIndex = 0,
  onClose,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset index when product changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex, product])

  const images = product?.images || (product?.image ? [product.image] : [])

  const nextSlide = useCallback(() => {
    if (images.length <= 1) return
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    if (images.length <= 1) return
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, nextSlide, prevSlide])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen || !product || images.length === 0) return null

  const currentImage = images[currentIndex] || images[0]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Image Gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container - Full size & high viewport height */}
      <div className="relative z-10 flex flex-col w-full max-w-6xl h-[92vh] max-h-[920px] overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0a0f1b] shadow-[0_0_60px_rgba(0,0,0,0.9)]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#060a12] px-4 py-3 sm:px-6 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex size-9 items-center justify-center rounded-lg bg-brand-orange/20 border border-brand-orange/40 text-brand-orange shrink-0">
              <Folder className="size-5 fill-brand-orange/30 text-brand-orange" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-orange px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                  {product.category}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  Folder: <span className="text-amber-400 font-mono">{product.folderName}</span>
                </span>
              </div>
              <h3 className="truncate text-sm sm:text-base font-bold text-white">
                {product.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Counter */}
            <div className="rounded-full bg-slate-800/90 border border-slate-700 px-3 py-1 text-xs font-semibold text-amber-400">
              <span>{currentIndex + 1}</span> / <span>{images.length}</span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex size-9 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all active:scale-95 cursor-pointer shadow-md"
              aria-label="Close popup"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport (Full Size Image Carousel) */}
        <div className="relative flex-1 w-full min-h-0 bg-black flex items-center justify-center select-none overflow-hidden">
          {/* Full Container Image Display */}
          <div className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center">
            <Image
              key={currentImage}
              src={currentImage}
              alt={`${product.name} - Photo ${currentIndex + 1}`}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
              className="object-contain transition-all duration-300 animate-in fade-in"
            />
          </div>

          {/* Navigation Arrows (if > 1 image) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/70 border border-white/30 text-white backdrop-blur-md transition-all hover:bg-brand-orange hover:border-brand-orange hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-7 sm:size-8" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/70 border border-white/30 text-white backdrop-blur-md transition-all hover:bg-brand-orange hover:border-brand-orange hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="size-7 sm:size-8" />
              </button>
            </>
          )}

          {/* Quick Counter Floating on Image */}
          <div className="absolute bottom-3 left-4 z-10 hidden sm:flex items-center gap-1.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 text-xs font-medium text-slate-200 shadow-lg">
            <Layers className="size-3.5 text-brand-orange" />
            <span>Folder Gallery Photo {currentIndex + 1} of {images.length}</span>
          </div>
        </div>

        {/* Thumbnail Navigation Strip */}
        {images.length > 1 && (
          <div className="border-t border-slate-800/90 bg-[#060a12] p-2.5 sm:p-3 overflow-x-auto shrink-0">
            <div className="flex items-center justify-center gap-2 sm:gap-3 min-w-max mx-auto">
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative size-14 sm:size-16 md:size-18 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'border-brand-orange ring-2 ring-brand-orange/50 scale-105 opacity-100 shadow-lg'
                      : 'border-slate-700/60 opacity-60 hover:opacity-100 hover:border-slate-500'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 rounded-tl bg-black/80 px-1 text-[9px] font-mono text-white">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modal ends with clean thumbnail strip */}
      </div>
    </div>
  )
}
