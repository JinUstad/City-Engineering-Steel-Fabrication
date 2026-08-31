import Image from 'next/image'
import { Check, ShieldCheck, Flame, Cpu, Award } from 'lucide-react'
import { COMPANY, STATS, CAPABILITIES } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const POINTS = [
  'In-house 25,000+ sq.ft workshop with 50-Ton overhead gantry cranes',
  'Certified welders qualified to AWS D1.1 & ISO 9606 welding standards',
  'Strict Ultrasonic (UT) & Radiographic (RT) quality inspection tests',
  'Turnkey structural design, CAD detailing, fabrication & on-site erection',
  '6kW High-precision CNC fiber laser & CNC hydraulic press brakes',
  'Sa 2.5 grit-blasting & heavy-duty epoxy / polyurethane protective coatings',
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#0b101c] py-16 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Workshop Image & Badges */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900 shadow-2xl">
              <Image
                src="/about-factory.jpg"
                alt="CESF Heavy Steel Fabrication Workshop in New Delhi"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto rounded-xl border border-white/20 bg-[#090d16]/90 p-4 backdrop-blur-md shadow-xl sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-lg bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange">
                    <Award className="size-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">ISO 9001:2015</h4>
                    <p className="text-xs text-amber-300">Certified Quality Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-6 -right-6 -z-10 size-48 rounded-full bg-brand-orange/15 blur-3xl" />
          </div>

          {/* Text Content */}
          <div>
            <SectionHeading
              eyebrow="About CESF Fabrication"
              title="New Delhi's Trusted Heavy Steel Engineering Fabricator"
            />
            
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Founded in {COMPANY.founded}, <span className="text-white font-semibold">{COMPANY.fullName} ({COMPANY.name})</span> is an industry-leading manufacturer and contractor delivering heavy structural steel, industrial PEB sheds, CNC fiber laser components, and custom architectural metal engineering.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Our state-of-the-art facility in New Delhi combines advanced fabrication machinery with master certified craftsmen to deliver structural strength that exceeds industrial benchmarks.
            </p>

            {/* Feature Points */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange">
                    <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats Counter Grid */}
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-800 bg-[#101726] p-3.5 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-black text-amber-400 sm:text-3xl">{stat.value}</dd>
                  <p className="mt-1 text-[11px] font-semibold leading-tight text-slate-400">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-12 border-t border-slate-800">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className="rounded-xl border border-slate-800/80 bg-[#101624]/60 p-5 hover:border-brand-orange/40 transition-colors">
              <div className="text-xs font-mono font-bold text-brand-orange">0{i + 1}.</div>
              <h4 className="mt-2 text-base font-bold text-white">{cap.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
