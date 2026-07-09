import { contact, band } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { Mail, ArrowUpRight } from "lucide-react"
import { InstagramIcon, TikTokIcon } from "./social-icons"

export function ContactSection() {
  const items = [
    {
      label: "Instagram",
      value: contact.instagramHandle,
      href: contact.instagram,
      icon: InstagramIcon,
      external: true,
    },
    {
      label: "TikTok",
      value: contact.tiktokHandle,
      href: contact.tiktok,
      icon: TikTokIcon,
      external: true,
    },
    {
      label: `Booking · ${contact.bookingAgency}`,
      value: contact.bookingEmail,
      href: `mailto:${contact.bookingEmail}?subject=Booking%20inquiry%20for%20${band.name}`,
      icon: Mail,
      external: false,
      isEmail: true,
    },
    {
      label: "Collaborations & Inquiries",
      value: contact.bandEmail,
      href: `mailto:${contact.bandEmail}?subject=Inquiry%20for%20${band.name}`,
      icon: Mail,
      external: false,
      isEmail: true,
    },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading eyebrow="Contact" title="Get In Touch" />

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        For gigs, shows, and appearances, {band.name} is represented by{" "}
        <span className="text-foreground">{contact.bookingAgency}</span>. For musical collaborations and other
        inquiries, reach the band directly. Otherwise, find us on social.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between gap-8 bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">{item.label}</p>
                {item.isEmail ? (
                  <p className="mt-2 break-all font-mono text-sm text-foreground">{item.value}</p>
                ) : (
                  <p className="mt-2 break-words font-display text-xl font-medium uppercase tracking-tight text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
