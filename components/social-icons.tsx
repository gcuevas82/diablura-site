import type { SVGProps } from "react"

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.2-3.6-.8v5.6c0 3.2-2.3 5.7-5.5 5.7A5.4 5.4 0 0 1 5.5 14c0-3 2.3-5.4 5.6-5.2v2.7c-.3-.1-.7-.1-1-.1-1.5 0-2.6 1.2-2.6 2.7 0 1.5 1.1 2.7 2.6 2.7 1.5 0 2.7-1.1 2.7-3.1V3h3.2Z" />
    </svg>
  )
}
