import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Oswald, Geist_Mono } from "next/font/google"
import "./globals.css"

const displayFont = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
})

const bodyFont = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Diablura — Rhythm & Bruise Metal",
  description:
    "Diablura is a heavy metal band from the San Francisco Bay Area. Stream the music, catch a show, and stay in touch.",
  generator: "v0.app",
  openGraph: {
    title: "Diablura — Rhythm & Bruise Metal",
    description: "Heavy metal from the San Francisco Bay Area. Stream, buy the new single, and catch a show.",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1a0e0c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
