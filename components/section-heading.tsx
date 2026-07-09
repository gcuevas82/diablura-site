export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={className}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance md:text-6xl">
        {title}
      </h2>
    </div>
  )
}
