import Image from 'next/image'
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react'
import { PRODUCTS, COMPANY } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ProductsGrid() {
  return (
    <section id="products" className="scroll-mt-24 bg-[#0b101c] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Capabilities & Products"
            title="Heavy Structural & Precision Metal Solutions"
            description="From turnkey industrial PEB warehouse sheds to 6kW CNC fiber laser cutting and high-tensile structural beams, all fabricated with certified precision."
          />
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:border-brand-orange hover:text-white transition-colors"
            >
              <PhoneCall className="size-4 text-brand-orange" />
              Direct Support: {COMPANY.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-800 bg-[#101726] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/60 hover:shadow-[0_10px_30px_-5px_rgba(255,85,0,0.25)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />
                
                {/* Category Tag */}
                <span className="absolute top-3 left-3 rounded bg-brand-orange/90 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-300">
                  {product.description}
                </p>

                {/* Features List */}
                {product.features && product.features.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3 text-xs text-slate-400">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-brand-orange shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-amber-400 transition-colors"
                  >
                    <span>Inquire / RFQ</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Custom Sizing Available
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
