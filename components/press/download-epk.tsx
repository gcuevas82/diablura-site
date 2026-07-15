import { Download } from "lucide-react"

export function DownloadEpk({
  variant = "solid",
  className = "",
}: {
  variant?: "solid" | "outline"
  className?: string
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest transition-colors"
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"

  return (
    <a href="/press/epk" target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <Download className="size-4" aria-hidden="true" />
      Download EPK (PDF)
    </a>
  )
}
