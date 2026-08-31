type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="inline-block border-l-2 border-brand-red pl-3 text-xs font-semibold uppercase tracking-widest text-brand-red">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
