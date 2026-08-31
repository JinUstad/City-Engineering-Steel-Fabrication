import Image from 'next/image'
import { FEATURED } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProducts() {
  return (
    <section id="featured" className="scroll-mt-24 bg-accent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured"
            title="Popular picks from our catalogue"
            description="Best-selling designs chosen by homeowners and interior designers across Delhi NCR."
          />
          <a
            href="#contact"
            className="inline-flex w-max items-center bg-brand-navy px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Full Catalogue
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((product) => (
            <article key={product.name} className="flex flex-col border border-border bg-background">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute right-0 top-0 bg-brand-red px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  {product.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold leading-snug">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
