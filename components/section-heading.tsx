import { Flame } from 'lucide-react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div className={`inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3`}>
        <Flame className="size-3.5 text-brand-orange" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
