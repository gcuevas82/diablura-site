import Image from "next/image"
import { band, latestRelease } from "@/lib/site"
import { ArrowDownRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/band-hero.jpg"
        alt="Diablura, the four-piece heavy metal band, lit in purple and blue neon"
        fill
        priority
        className="object-cover object-center md:object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-32 md:px-6 md:pb-12">
        <p className="eyebrow text-primary">{band.location}</p>
        <h1 className="mt-4 font-display text-6xl font-light uppercase leading-[0.95] tracking-[0.12em] text-foreground text-balance sm:text-7xl md:text-8xl">
          {band.name}
        </h1>
        <p className="mt-4 font-display text-xl uppercase tracking-[0.3em] text-muted-foreground md:text-2xl">
          {band.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={latestRelease.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Buy the New Single
            <ArrowDownRight className="size-4" />
          </a>
          <a
            href="#listen"
            className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            Stream the Music
          </a>
        </div>
      </div>
    </section>
  )
}
