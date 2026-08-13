"use client"

import { useEffect, useState } from "react"
import { events, type BandEvent } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight, X } from "lucide-react"

function formatParts(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
  }
}

function statusLabel(status: BandEvent["status"]) {
  switch (status) {
    case "sold-out":
      return "Sold Out"
    case "announced":
      return "Announced"
    default:
      return "Tickets"
  }
}

export function ShowsSection() {
  const [activeFlyer, setActiveFlyer] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!activeFlyer) return
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setActiveFlyer(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeFlyer])

  return (
    <section id="shows" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading eyebrow="On Tour" title="Upcoming Shows" />

      <ul className="mt-14 border-t border-border">
        {events.map((e) => {
          const { month, day, weekday } = formatParts(e.date)
          const soldOut = e.status === "sold-out"
          const infoTba = e.status === "info-tba"
          const flyerAlt = e.flyerAlt ?? `Flyer for ${e.venue} show`
          return (
            <li
              key={`${e.date}-${e.venue}`}
              className="group grid grid-cols-1 items-center gap-4 border-b border-border py-6 sm:grid-cols-[auto_1fr_auto] sm:gap-8"
            >
              <div className="flex items-baseline gap-3 sm:w-24 sm:flex-col sm:gap-0">
                <span className="font-display text-4xl font-bold leading-none text-primary">{day}</span>
                <span className="eyebrow text-muted-foreground">{month}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium uppercase tracking-tight text-foreground md:text-3xl">
                  {e.venue}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {weekday} · {e.city}
                </p>
              </div>

              {soldOut ? (
                <span className="justify-self-start border border-border px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:justify-self-end">
                  Sold Out
                </span>
              ) : infoTba && e.flyer ? (
                <button
                  type="button"
                  onClick={() => setActiveFlyer({ src: e.flyer as string, alt: flyerAlt })}
                  className="group/flyer justify-self-start overflow-hidden border border-border transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:justify-self-end"
                  aria-label={`View flyer for ${e.venue}`}
                >
                  <img
                    src={e.flyer || "/placeholder.svg"}
                    alt={flyerAlt}
                    className="h-32 w-24 object-cover transition-transform duration-300 group-hover/flyer:scale-105 sm:h-36 sm:w-28"
                  />
                </button>
              ) : infoTba ? (
                <span
                  aria-disabled="true"
                  className="justify-self-start border border-border px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:justify-self-end"
                >
                  More Info TBA
                </span>
              ) : (
                <a
                  href={e.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-self-start border border-border px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:justify-self-end"
                >
                  {statusLabel(e.status)}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </li>
          )
        })}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground">
        Want Diablura at your venue or event? Email Cristina at Sinister Sounds Booking &mdash;{" "}
        <a
          href="mailto:sinistersoundsbooking@gmail.com?subject=Booking%20inquiry%20for%20Diablura"
          className="text-primary underline-offset-4 hover:underline"
        >
          sinistersoundsbooking@gmail.com
        </a>
        .
      </p>

      {activeFlyer ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged show flyer"
          onClick={() => setActiveFlyer(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setActiveFlyer(null)}
            aria-label="Close flyer"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <img
            src={activeFlyer.src || "/placeholder.svg"}
            alt={activeFlyer.alt}
            onClick={(ev) => ev.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-full border border-border object-contain shadow-2xl"
          />
        </div>
      ) : null}
    </section>
  )
}
