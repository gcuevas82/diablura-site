import { Film } from "lucide-react"

type PressVideoProps = {
  src?: string
  poster?: string
  label: string
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{11})/,
  ]
  for (const p of patterns) {
    const match = url.match(p)
    if (match) return match[1]
  }
  return null
}

export function PressVideo({ src, poster, label }: PressVideoProps) {
  const youTubeId = src ? getYouTubeId(src) : null

  if (youTubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-border bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${youTubeId}`}
          title={label}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  if (src) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-border bg-black">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
          aria-label={label}
        >
          <source src={src} />
          {"Your browser does not support the video tag."}
        </video>
      </div>
    )
  }

  return (
    <div
      className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden border border-dashed border-border bg-card/60"
      role="img"
      aria-label={`${label} — video coming soon`}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster || "/placeholder.svg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        />
      )}
      <div className="relative flex size-16 items-center justify-center rounded-full border border-border bg-background/80">
        <Film className="size-7 text-primary" aria-hidden="true" />
      </div>
      <div className="relative text-center">
        <p className="eyebrow text-primary">{label}</p>
        <p className="mt-2 text-sm text-muted-foreground">Video coming soon</p>
      </div>
    </div>
  )
}
