// ---------------------------------------------------------------------------
// DIABLURA — site content & links
// Replace the PLACEHOLDER urls/emails below with the band's real links.
// ---------------------------------------------------------------------------

export const band = {
  name: "Diablura",
  tagline: "Rhythm & Bruise metal",
  location: "San Francisco Bay Area, CA",
  intro:
    "Hailing from all over the San Francisco Bay Area, Diablura is a rising force in the region's metal scene and beyond. The band fuses Afro Puerto Rican bomba rhythms with hardcore, doom, and other metal genres for a sound all its own. Rooted in a partnership between founding members Ginger Cuevas and Todd Burnham that goes back more than a decade, Diablura is led by Ginger's vocals, which move seamlessly between bone-chilling screams and melodic clean singing — delivering a powerful, diverse sonic experience that captivates audiences with its intensity.",
}

// Streaming platforms — the band's specific artist page URLs.
export const streaming = [
  { name: "Spotify", url: "https://open.spotify.com/artist/6xpEJMKE1qQw0UKTFGxrSs", handle: "Listen on Spotify" },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/diablura/1732142618",
    handle: "Listen on Apple Music",
  },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCIfeC8yIBIkEmva3CJkjmUg", handle: "Watch on YouTube" },
  { name: "Bandcamp", url: "https://diablura.bandcamp.com/", handle: "Buy on Bandcamp" },
]

// The newly released single, sold directly on Bandcamp.
export const latestRelease = {
  title: "Rough Night in Poughkeepsie",
  type: "New Single",
  year: "2026",
  buyUrl: "https://diablura.bandcamp.com/track/rough-night-in-poughkeepsie",
}

export type Member = {
  name: string
  role: string
  bio: string
  image: string
  photoCredit?: string
}

export const members: Member[] = [
  {
    name: "Ginger Cuevas",
    role: "Vocals",
    image: "/members/ginger-cuevas.jpg",
    bio: "The voice of Diablura, moving from a low simmer to a full roar without losing the melody underneath. Ginger writes the band's lyrics, plays Bomba and even throws down a riff or two (or three) to help drive the overall songwriting process.",
    photoCredit: "Photo by Sarah Arnold Photography.",
  },
  {
    name: "Todd Burnham",
    role: "Guitar",
    image: "/members/todd-burnham.jpg",
    bio: "Architect of the band's riffs, Todd favors deliberate, heavy phrasing over speed for its own sake. His playing gives Diablura its signature bruising low end and its sudden, cutting leads.",
    photoCredit: "Photo by Sarah Arnold Photography.",
  },
  {
    name: "Bobby Jones",
    role: "Guitar",
    image: "/members/bobby-jones.jpg",
    bio: "The counterweight in Diablura's twin-guitar attack, Bobby trades leads and harmonies with Todd, layering texture over weight. A restless writer, he can be counted on to bring a technical and heavy approach to the band's evolving sound.",
    photoCredit: "Photo by Sarah Arnold Photography.",
  },
  {
    name: "Bones",
    role: "Drums",
    image: "/members/raul-padilla.jpg",
    bio: "The engine room. Bones' playing is all pocket and power — patient when the song needs it, punishing when it doesn't. His style of drumming is complimentary to the Bomba rhythms which set the pulse that gives the band its name.",
    photoCredit: "Photo by Sarah Arnold Photography.",
  },
]

export type BandEvent = {
  date: string // ISO date
  venue: string
  city: string
  ticketUrl: string
  status: "on-sale" | "sold-out" | "announced" | "info-tba"
}

// Upcoming events — replace with real dates, venues, and ticket links.
export const events: BandEvent[] = [
  { date: "2026-08-09", venue: "Spats", city: "Berkeley, CA", ticketUrl: "#", status: "info-tba" },
  { date: "2026-08-15", venue: "Caravan Lounge", city: "San Jose, CA", ticketUrl: "#", status: "info-tba" },
  { date: "2026-09-13", venue: "Toot's Tavern", city: "Crockett, CA", ticketUrl: "#", status: "info-tba" },
]

// ---------------------------------------------------------------------------
// PRESS KIT (EPK) — content for the /press page and downloadable PDF.
// Drop video files into /public/press and set the `src` fields below to make
// the placeholders playable. Same for the stage plot / technical rider file.
// ---------------------------------------------------------------------------
export const press = {
  // Full-length bio. Each string is a paragraph.
  bio: [
    "Diablura began in 2009, when guitarist Todd Burnham and vocalist Ginger Cuevas started a band called Heretic Faction, playing shows around Livermore, CA. That lineup eventually parted ways, and an album's worth of recordings was lost to a computer failure before it ever saw the light of day. Todd and Ginger kept writing together over the years, and after reconnecting at their old bass player's wedding, they decided it was time to finish what they started.",
    "That reunion became Praise The Void. The songs were old, but Ginger brought something new to them: Bomba, the folkloric Puerto Rican genre she has spent years performing and composing as a seasoned player, including shows at SF Carnaval and her own Bomba event on KQED. The album's closing track, Dust, became the blueprint for the sound Diablura is known for today: metal built on doom and metalcore, vocals that swing between guttural and melodic, and Bomba percussion woven in wherever it earns its place, not on every song, but where it matters. Praise The Void was mixed and mastered by Reto Peter at Teahouse Studio in Oakland, with cover art by tattoo artist Louis Riddick, a Puerto Rican vejigante mask.",
    "Drummer Bones joined soon after, bringing the Praise The Void songs to life on stage, followed by guitarist Bobby Jones, who rounded out the band alongside Todd and Ginger for both performing and songwriting. With the full lineup in place, Diablura sharpened its sound further on the new single Rough Night In Poughkeepsie, recorded, mixed, and mastered at Earhammer Studio in Oakland by Greg Wilkinson (Deathgrave, Autopsy), alongside two more songs currently being readied for release.",
    "Diablura's sound sits at the experimental edge of metal: doom and metalcore as the foundation, vocals that push past comfortable, lyrics that are unflinchingly personal, and Bomba percussion that ties it all together with respect for a genre generations older than the band itself.",
  ],
  bandPhoto: {
    src: "/press/band-photo.jpg",
    alt: "Diablura, the four-piece metal band, lit in purple and blue neon",
    credit: "Photo by Sarah Arnold Photography.",
  },
  // Set `src` to a YouTube link or a file in /public/press (e.g. "/press/live-clip.mp4") to enable playback.
  videos: {
    hero: {
      src: "https://youtu.be/67B2H_OMABs",
      poster: "/press/band-photo.jpg",
      label: "Live Performance Reel",
    },
    clip: {
      src: "https://youtu.be/Hhf32Z-XhrM",
      poster: "/band-hero.jpg",
      label: "Live at X-Bar",
    },
  },
  // Technical rider & stage plot. Drop the file in /public/press and update `href`.
  technical: {
    stagePlotHref: "/press/diablura-stage-plot.pdf",
    riderHref: "", // e.g. "/press/diablura-tech-rider.pdf"
  },
}

export const contact = {
  instagram: "https://instagram.com/diabluraofficial",
  instagramHandle: "@diabluraofficial",
  tiktok: "https://tiktok.com/@diabluraofficial",
  tiktokHandle: "@diabluraofficial",
  bookingAgency: "Sinister Sounds Booking",
  bookingEmail: "sinistersoundsbooking@gmail.com",
  bandEmail: "diabluramusic@gmail.com",
}
