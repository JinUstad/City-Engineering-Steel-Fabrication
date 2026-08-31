'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Phone, ArrowRight, ShieldCheck, Flame, Award, Wrench } from 'lucide-react'
import { BANNERS, COMPANY } from '@/lib/site-data'

export function BannerSlider() {
  const [index, setIndex] = useState(0)
  const count = BANNERS.length

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const id = setInterval(next, 6500)
    return () => clearInterval(id)
  }, [next])

  return (
    <section aria-label="Hero showcase" className="relative bg-[#090d16] overflow-hidden">
      <div className="relative h-[540px] w-full sm:h-[600px] lg:h-[680px]">
        {BANNERS.map((banner, i) => (
          <div
            key={banner.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? 'opacity-100 z-10' : 'pointer-events-none opacity-0 z-0'
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover scale-105 transition-transform duration-10000 ease-out"
            />
            {/* Cinematic Multi-layer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-[#090d16]/60" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
              <div className="max-w-2xl text-white">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-[#0b101c]/90 px-3.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.25)]">
                  <Flame className="size-3.5 text-brand-orange animate-pulse" />
                  <span className="uppercase tracking-wider">{banner.tag}</span>
                </div>

                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl text-balance tracking-tight text-white drop-shadow-md">
                  {banner.title}
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl drop-shadow">
                  {banner.description}
                </p>

                {/* Badges / Highlights */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded">
                    <ShieldCheck className="size-4 text-brand-orange" />
                    <span>Heavy Load Structural Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded">
                    <Wrench className="size-4 text-amber-400" />
                    <span>Turnkey Erection & Fitting</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,85,0,0.5)] transition-all hover:shadow-[0_0_35px_rgba(255,85,0,0.8)] hover:scale-105 active:scale-95"
                  >
                    <span>Request Engineering RFQ</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-600 bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-brand-orange hover:text-white"
                  >
                    <Phone className="size-4 text-brand-orange" />
                    <span>Call Fabricator</span>
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
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-2.5 text-slate-300 backdrop-blur-md transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-white"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next banner"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-2.5 text-slate-300 backdrop-blur-md transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-white"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button>

        {/* Pagination indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {BANNERS.map((banner, i) => (
            <button
              key={banner.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-brand-orange shadow-[0_0_10px_#ff5500]' : 'w-2.5 bg-slate-600/80 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
