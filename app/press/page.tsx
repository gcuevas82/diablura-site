import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Download, FileText, Image as ImageIcon, Map, Mail, Music2 } from "lucide-react"
import { band, press, streaming, events, contact, type BandEvent } from "@/lib/site"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import { PressVideo } from "@/components/press/press-video"
import { DownloadEpk } from "@/components/press/download-epk"
import { InstagramIcon, TikTokIcon } from "@/components/social-icons"

export const metadata: Metadata = {
  title: "Diablura — Press Kit / EPK",
  description:
    "Official electronic press kit for Diablura: bio, photos, music, upcoming shows, technical rider, and booking contact.",
}

function formatEventDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
  }
}

function eventCta(status: BandEvent["status"]) {
  switch (status) {
    case "sold-out":
      return "Sold Out"
    case "info-tba":
      return "More Info TBA"
    case "announced":
      return "Announced"
    default:
      return "Tickets"
  }
}

export default function PressPage() {
  const upcoming = events.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Slim press bar — clear route back to the main site */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="eyebrow">Back to Site</span>
          </Link>
          <span className="eyebrow hidden text-muted-foreground sm:inline">{band.name} · Press Kit</span>
          <DownloadEpk className="!px-5 !py-2.5 text-xs" />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-24 md:px-6">
        {/* Title */}
        <section className="pt-14 md:pt-20">
          <p className="eyebrow text-primary">Electronic Press Kit</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl">
            {band.name}
          </h1>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-muted-foreground">
            {band.tagline} · {band.location}
          </p>
        </section>

        {/* 1. Hero video */}
        <section className="mt-12 md:mt-16">
          <PressVideo
            src={press.videos.hero.src}
            poster={press.videos.hero.poster}
            label={press.videos.hero.label}
          />
        </section>

        {/* 2. Bio */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Biography" title="The Story" />
          <div className="mt-8 max-w-3xl space-y-5">
            {press.bio.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground text-pretty">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* 3. Band photo */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Press Photo" title="The Band" />
          <figure className="mt-8">
            <div className="relative aspect-[5/4] w-full overflow-hidden border border-border sm:aspect-[16/10]">
              <Image
                src={press.bandPhoto.src || "/placeholder.svg"}
                alt={press.bandPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>
            {press.bandPhoto.credit && (
              <figcaption className="mt-3 text-xs italic text-muted-foreground/70">
                {press.bandPhoto.credit} High-resolution files available on request.
              </figcaption>
            )}
          </figure>
        </section>

        {/* 4. Second clip */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Watch" title="Live at X-Bar" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Diablura performances include original projected visuals.
          </p>
          <div className="mt-8">
            <PressVideo
              src={press.videos.clip.src}
              poster={press.videos.clip.poster}
              label={press.videos.clip.label}
            />
          </div>
        </section>

        {/* 5. Music links */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Listen" title="Music &amp; Streaming" />
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {streaming.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <Music2 className="size-5 text-primary" aria-hidden="true" />
                    <span className="font-display text-2xl font-medium uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {s.name}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="eyebrow hidden text-muted-foreground sm:inline">{s.handle}</span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Upcoming shows */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="On Tour" title="Upcoming Shows" />
          <ul className="mt-8 border-t border-border">
            {upcoming.map((e) => {
              const { month, day, weekday } = formatEventDate(e.date)
              return (
                <li
                  key={`${e.date}-${e.venue}`}
                  className="grid grid-cols-1 items-center gap-3 border-b border-border py-5 sm:grid-cols-[auto_1fr_auto] sm:gap-8"
                >
                  <div className="flex items-baseline gap-3 sm:w-20 sm:flex-col sm:gap-0">
                    <span className="font-display text-3xl font-bold leading-none text-primary">{day}</span>
                    <span className="eyebrow text-muted-foreground">{month}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium uppercase tracking-tight text-foreground md:text-2xl">
                      {e.venue}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {weekday} · {e.city}
                    </p>
                  </div>
                  <span className="justify-self-start border border-border px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:justify-self-end">
                    {eventCta(e.status)}
                  </span>
                </li>
              )
            })}
          </ul>
          <Link
            href="/#shows"
            className="mt-8 inline-flex items-center gap-2 border border-border px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Full Calendar
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </section>

        {/* 7. Technical rider / stage plot */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Production" title="Technical Rider &amp; Stage Plot" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Input list, backline needs, and stage plot for a smooth load-in. Download below or request the latest
            versions from our booking agent.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            <TechnicalItem
              icon={Map}
              label="Stage Plot"
              href={press.technical.stagePlotHref}
              hint="PDF — coming soon"
            />
            <TechnicalItem
              icon={FileText}
              label="Technical Rider"
              href={press.technical.riderHref}
              hint="PDF — coming soon"
            />
          </div>
        </section>

        {/* 8. Contact */}
        <section className="mt-20 md:mt-28">
          <SectionHeading eyebrow="Contact" title="Booking &amp; Inquiries" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Primary — booking */}
            <div className="flex flex-col justify-between gap-6 border border-primary/40 bg-card p-8">
              <div>
                <p className="eyebrow text-primary">Booking · Primary Contact</p>
                <p className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight text-foreground">
                  {contact.bookingAgency}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  For gigs, festivals, and appearances — reach the booking agent first.
                </p>
              </div>
              <a
                href={`mailto:${contact.bookingEmail}?subject=Booking%20inquiry%20for%20${band.name}`}
                className="inline-flex items-center gap-2 font-mono text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="break-all">{contact.bookingEmail}</span>
              </a>
            </div>

            {/* Secondary — band */}
            <div className="flex flex-col justify-between gap-6 border border-border bg-card p-8">
              <div>
                <p className="eyebrow text-muted-foreground">Everything Else</p>
                <p className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight text-foreground">
                  The Band
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Press, collaborations, and anything outside of booking.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${contact.bandEmail}?subject=Inquiry%20for%20${band.name}`}
                  className="inline-flex items-center gap-2 font-mono text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="break-all">{contact.bandEmail}</span>
                </a>
                <div className="flex items-center gap-5">
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <InstagramIcon className="size-5" />
                  </a>
                  <a
                    href={contact.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <TikTokIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="mt-20 border-t border-border pt-12 md:mt-28">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">Take It With You</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Everything you need to book, promote, and design around Diablura.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {/* Full EPK PDF */}
            <div className="flex flex-col justify-between gap-8 bg-card p-8">
              <div>
                <FileText className="size-7 text-primary" aria-hidden="true" />
                <p className="mt-4 font-display text-xl font-medium uppercase tracking-tight text-foreground">
                  Press Kit (PDF)
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The full EPK as a single PDF — bio, photo, links, dates, and contacts in one file.
                </p>
              </div>
              <DownloadEpk className="w-full sm:w-auto" />
            </div>

            {/* Band assets ZIP */}
            <div className="flex flex-col justify-between gap-8 bg-card p-8">
              <div>
                <div className="flex items-center gap-4">
                  <span className="relative size-12 shrink-0 overflow-hidden">
                    <Image
                      src="/press/assets/diablura-vejigante.png"
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </span>
                  <ImageIcon className="size-7 text-primary" aria-hidden="true" />
                </div>
                <p className="mt-4 font-display text-xl font-medium uppercase tracking-tight text-foreground">
                  Band Assets (ZIP)
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Logo mark, vejigante artwork, and the wordmark logo for flyers, posters, and listings.
                </p>
              </div>
              <a
                href="/press/assets"
                className="inline-flex w-full items-center justify-center gap-2 border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Assets (ZIP)
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function TechnicalItem({
  icon: Icon,
  label,
  href,
  hint,
}: {
  icon: typeof Map
  label: string
  href: string
  hint: string
}) {
  const available = Boolean(href)
  const content = (
    <>
      <div className="flex items-center justify-between">
        <Icon className="size-7 text-primary" aria-hidden="true" />
        <ArrowUpRight
          className={`size-5 ${available ? "text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" : "text-muted-foreground/30"}`}
        />
      </div>
      <div>
        <p className="font-display text-xl font-medium uppercase tracking-tight text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{available ? "Download PDF" : hint}</p>
      </div>
    </>
  )

  if (available) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col justify-between gap-10 bg-card p-8 transition-colors hover:bg-secondary"
      >
        {content}
      </a>
    )
  }

  return (
    <div aria-disabled="true" className="flex flex-col justify-between gap-10 bg-card p-8 opacity-80">
      {content}
    </div>
  )
}
