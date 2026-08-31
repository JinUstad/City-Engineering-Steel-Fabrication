import Image from 'next/image'
import { Check } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const POINTS = [
  'In-house manufacturing with strict quality control',
  'Made-to-order sizes and finishes for every space',
  'On-time delivery and professional installation',
  'Trusted by homeowners and interior designers',
]

const STATS = [
  { value: `Est. ${COMPANY.founded}`, label: 'Founded in New Delhi' },
  { value: '2,000+', label: 'Projects delivered' },
  { value: '8', label: 'Product categories' },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
          <Image
            src="/about-workshop.png"
            alt="FM Modular Systems manufacturing workshop in New Delhi"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="About Us Company"
            title="A New Delhi manufacturer you can build with"
          />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Founded in {COMPANY.founded}, {COMPANY.name} is a manufacturer and supplier of
            modular interior products based in New Delhi. We produce acrylic kitchen shutters,
            modular kitchens, sofa sets, office workstations, wardrobes, tables, and more, all
            engineered for durability and finished to a professional standard.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-brand-red text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-3 gap-px border border-border bg-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-background p-4 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-lg font-bold text-brand-navy sm:text-xl">{stat.value}</dd>
                <p className="mt-1 text-xs leading-tight text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
