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
}

export const members: Member[] = [
  {
    name: "Ginger Cuevas",
    role: "Vocals",
    image: "/members/ginger-cuevas.jpg",
    bio: "The voice of Diablura, moving from a low simmer to a full roar without losing the melody underneath. Ginger writes the band's lyrics, plays Bomba and even throws down a riff or two (or three) to help drive the overall songwriting process.",
  },
  {
    name: "Todd Burnham",
    role: "Guitar",
    image: "/members/todd-burnham.jpg",
    bio: "Architect of the band's riffs, Todd favors deliberate, heavy phrasing over speed for its own sake. His playing gives Diablura its signature bruising low end and its sudden, cutting leads.",
  },
  {
    name: "Bobby Jones",
    role: "Guitar",
    image: "/members/bobby-jones.jpg",
    bio: "The counterweight in Diablura's twin-guitar attack, Bobby trades leads and harmonies with Todd, layering texture over weight. A restless writer, he can be counted on to bring a technical and heavy approach to the band's evolving sound.",
  },
  {
    name: "Raul Padilla",
    role: "Drums",
    image: "/members/raul-padilla.jpg",
    bio: "The engine room. Raul's playing is all pocket and power — patient when the song needs it, punishing when it doesn't. His style of drumming is complimentary to the Bomba rhythms which set the pulse that gives the band its name.",
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
  { date: "2026-08-15", venue: "Caravan Lounge", city: "San Jose, CA", ticketUrl: "#", status: "info-tba" },
  { date: "2026-09-13", venue: "Toot's Tavern", city: "Crockett, CA", ticketUrl: "#", status: "info-tba" },
]

export const contact = {
  instagram: "https://instagram.com/diabluraofficial",
  instagramHandle: "@diabluraofficial",
  tiktok: "https://tiktok.com/@diabluraofficial",
  tiktokHandle: "@diabluraofficial",
  bookingAgency: "Sinister Sounds Booking",
  bookingEmail: "sinistersoundsbooking@gmail.com",
  bandEmail: "diabluramusic@gmail.com",
}
