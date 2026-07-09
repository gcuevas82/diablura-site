import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { BandSection } from "@/components/band-section"
import { ListenSection } from "@/components/listen-section"
import { ShowsSection } from "@/components/shows-section"
import { ConnectSection } from "@/components/connect-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BandSection />
        <ListenSection />
        <ShowsSection />
        <ConnectSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
