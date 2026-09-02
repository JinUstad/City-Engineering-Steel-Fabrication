'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { ARCHITECTURAL_FABRICATION } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ArchitecturalFabricationSection() {
  return (
    <section id="architectural-solutions" className="scroll-mt-24 bg-[#070b13] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <SectionHeading
            eyebrow="Architectural & Specialized Fabrication"
            title="UPVC Windows, Ceiling Work, Shutter Motors & Formwork"
            description="Explore our specialized precision architectural solutions including soundproof UPVC/aluminium glazing, false ceilings, motorized rolling shutters, column box formwork, and heavy MS gratings."
          />
        </div>

        {/* 5 Cards in a Single Row Grid on Desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {ARCHITECTURAL_FABRICATION.map((item) => {
            return (
              <article
                key={item.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-[#101726] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/70 hover:shadow-[0_15px_35px_-5px_rgba(255,85,0,0.3)]"
              >
                {/* Single Static Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-black/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-2.5 left-2.5 rounded bg-brand-orange/95 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Features List */}
                  {item.features && item.features.length > 0 && (
                    <ul className="mt-3.5 space-y-1.5 border-t border-slate-800/80 pt-3 text-[11px] text-slate-300">
                      {item.features.slice(0, 2).map((feat) => (
                        <li key={feat} className="flex items-start gap-1.5">
                          <CheckCircle2 className="size-3 mt-0.5 text-brand-orange shrink-0" />
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
    </section>
  )
}
