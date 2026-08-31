import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ProductsGrid() {
  return (
    <section id="products" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Products"
          title="Everything you need for a complete interior"
          description="From acrylic kitchen shutters to office workstations, every product is manufactured to order and built for durability."
        />

        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-brand-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {product.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-colors hover:text-brand-navy"
                >
                  Inquire Now
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
