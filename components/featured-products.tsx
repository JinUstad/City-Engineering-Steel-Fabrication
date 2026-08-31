import Image from 'next/image'
import { ArrowUpRight, Award, Sparkles } from 'lucide-react'
import { FEATURED, COMPANY } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProducts() {
  return (
    <section id="featured" className="scroll-mt-24 bg-[#090d16] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Key Project Showcases"
            title="Engineered Landmark Steel Installations"
            description="From high-span factory warehouses to architectural staircases and high-pressure chemical storage tanks."
          />
          <a
            href="#contact"
            className="inline-flex w-max items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] transition-all hover:scale-105"
          >
            <Sparkles className="size-4" />
            <span>Request Full Project Portfolio</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl overflow-hidden border border-slate-800 bg-[#0f1624] shadow-md transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1624] via-transparent to-black/30" />
                <span className="absolute right-3 top-3 rounded bg-amber-500/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Badges / Chips */}
                {project.features && (
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                    {project.features.map((f) => (
                      <span key={f} className="rounded bg-slate-800/90 border border-slate-700 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-white transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
