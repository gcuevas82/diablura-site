"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login, type LoginState } from "@/app/actions/admin-auth"
import { Loader2, Lock } from "lucide-react"

const initialState: LoginState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {pending ? "Signing In" : "Sign In"}
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useActionState(login, initialState)

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="eyebrow text-muted-foreground">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
          placeholder="Enter admin password"
        />
      </div>

      <SubmitButton />

      {state.status === "error" && (
        <p role="status" aria-live="polite" className="text-sm text-destructive">
          {state.message}
        </p>
      )}
    </form>
  )
}
