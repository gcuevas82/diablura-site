import { band, contact } from "@/lib/site"
import { Mail } from "lucide-react"
import { InstagramIcon, TikTokIcon } from "./social-icons"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-4xl font-bold uppercase tracking-widest text-foreground">{band.name}</p>
          <p className="mt-2 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">{band.tagline}</p>
          <p className="mt-1 text-xs text-muted-foreground">{band.location}</p>
        </div>

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
          <a
            href={`mailto:${contact.bookingEmail}`}
            aria-label="Email booking agent"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            &copy; {year} {band.name}. All rights reserved.
          </p>
          <p>
            Booking: <span className="text-foreground">{contact.bookingAgency}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
