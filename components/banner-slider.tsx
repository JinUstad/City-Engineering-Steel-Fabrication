'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BANNERS } from '@/lib/site-data'

export function BannerSlider() {
  const [index, setIndex] = useState(0)
  const count = BANNERS.length

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section aria-label="Featured banners" className="relative">
      <div className="relative h-[440px] w-full overflow-hidden bg-brand-navy sm:h-[520px] lg:h-[600px]">
        {BANNERS.map((banner, i) => (
          <div
            key={banner.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={banner.image || '/placeholder.svg'}
              alt={banner.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-brand-navy/10" />
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
              <div className="max-w-xl text-primary-foreground">
                <span className="inline-block bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {banner.eyebrow}
                </span>
                <h1 className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
                  {banner.title}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                  {banner.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="inline-flex items-center bg-background px-6 py-3 text-sm font-semibold text-brand-navy transition-opacity hover:opacity-90"
                  >
                    Browse Products
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-brand-red hover:text-brand-red"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous banner"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-background/90 p-2 text-brand-navy transition-colors hover:bg-brand-red hover:text-primary-foreground"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next banner"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-background/90 p-2 text-brand-navy transition-colors hover:bg-brand-red hover:text-primary-foreground"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Pagination */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {BANNERS.map((banner, i) => (
            <button
              key={banner.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to banner ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 w-8 transition-colors ${
                i === index ? 'bg-brand-red' : 'bg-background/60 hover:bg-background'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
