import Image from "next/image"
import { band, members } from "@/lib/site"
import { SectionHeading } from "./section-heading"

export function BandSection() {
  return (
    <section id="band" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading eyebrow="The Band" title="Four Players, One Weight" />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">{band.intro}</p>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {members.map((m) => (
          <article key={m.name} className="group flex flex-col bg-card">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={m.image || "/placeholder.svg"}
                alt={`${m.name}, ${m.role} of ${band.name}`}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <p className="eyebrow text-primary">{m.role}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight text-foreground">
                {m.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
