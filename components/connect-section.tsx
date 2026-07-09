"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"
import { SectionHeading } from "./section-heading"
import { Loader2 } from "lucide-react"

const initialState: SubscribeState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {pending ? "Joining" : "Join the List"}
    </button>
  )
}

export function ConnectSection() {
  const [state, formAction] = useActionState(subscribe, initialState)

  return (
    <section id="connect" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:px-6 md:py-32">
        <SectionHeading eyebrow="Stay in Touch" title="Get the Drops First" />

        <div>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            New releases, show announcements, and the occasional word from the band — straight to your inbox. No noise,
            no spam.
          </p>

          <form action={formAction} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="eyebrow text-muted-foreground">
                Name <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="eyebrow text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-2">
              <SubmitButton />
            </div>

            {state.status !== "idle" && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${state.status === "success" ? "text-primary" : "text-destructive"}`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
