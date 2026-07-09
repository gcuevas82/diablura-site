import { streaming, latestRelease } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight, Disc3, ShoppingBag } from "lucide-react"

export function ListenSection() {
  return (
    <section id="listen" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <SectionHeading eyebrow="Listen" title="Hear It Everywhere" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* New single feature */}
          <div className="flex flex-col justify-between border border-primary/40 bg-background p-8 md:p-10">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Disc3 className="size-5" aria-hidden="true" />
                <p className="eyebrow">{latestRelease.type}</p>
              </div>
              <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
                {latestRelease.title}
              </h3>
              <p className="mt-3 font-display text-lg uppercase tracking-[0.25em] text-muted-foreground">
                {latestRelease.year}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
                Out now and available for direct purchase on Bandcamp. Own it, support the band, and take the sound with
                you.
              </p>
            </div>
            <a
              href={latestRelease.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              Buy on Bandcamp
            </a>
          </div>

          {/* Streaming platforms */}
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Stream the full catalog on your platform of choice — every link goes straight to Diablura.
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {streaming.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-6 transition-colors hover:text-primary"
                  >
                    <span className="font-display text-2xl font-medium uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {s.name}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="eyebrow hidden text-muted-foreground sm:inline">{s.handle}</span>
                      <ArrowUpRight className="size-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
