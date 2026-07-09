import { events, type BandEvent } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight } from "lucide-react"

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
  return (
    <section id="shows" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading eyebrow="On Tour" title="Upcoming Shows" />

      <ul className="mt-14 border-t border-border">
        {events.map((e) => {
          const { month, day, weekday } = formatParts(e.date)
          const soldOut = e.status === "sold-out"
          const infoTba = e.status === "info-tba"
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
    </section>
  )
}
