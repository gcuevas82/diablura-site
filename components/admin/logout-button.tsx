import { logout } from "@/app/actions/admin-auth"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="inline-flex items-center gap-2 border border-border px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
      >
        <LogOut className="size-4" aria-hidden="true" />
        Sign Out
      </button>
    </form>
  )
}
