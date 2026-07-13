import { redirect } from "next/navigation"
import { desc } from "drizzle-orm"
import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"
import { isAuthenticated } from "@/lib/auth"
import { SectionHeading } from "@/components/section-heading"
import { LogoutButton } from "@/components/admin/logout-button"
import { Users } from "lucide-react"

export const metadata = {
  title: "Subscribers · Admin",
  robots: { index: false, follow: false },
}

// Always read the latest subscribers on each request.
export const dynamic = "force-dynamic"

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
})

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login")
  }

  const rows = await db
    .select({
      id: subscribers.id,
      email: subscribers.email,
      name: subscribers.name,
      createdAt: subscribers.createdAt,
    })
    .from(subscribers)
    .orderBy(desc(subscribers.createdAt))

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Admin" title="Subscribers" />
        <LogoutButton />
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="size-4 text-primary" aria-hidden="true" />
        <span>
          {rows.length} {rows.length === 1 ? "subscriber" : "subscribers"} total
        </span>
      </div>

      {rows.length === 0 ? (
        <p className="mt-12 border border-dashed border-border bg-card/40 p-10 text-center text-sm text-muted-foreground">
          No subscribers yet. New signups from the site will appear here.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-card/60">
                <th scope="col" className="eyebrow px-4 py-4 font-normal text-muted-foreground">
                  Email
                </th>
                <th scope="col" className="eyebrow px-4 py-4 font-normal text-muted-foreground">
                  Name
                </th>
                <th scope="col" className="eyebrow px-4 py-4 font-normal text-muted-foreground">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0 hover:bg-card/40">
                  <td className="break-all px-4 py-4 font-mono text-foreground">{row.email}</td>
                  <td className="px-4 py-4 text-foreground">
                    {row.name ?? <span className="text-muted-foreground/60">—</span>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
                    {dateFormatter.format(new Date(row.createdAt))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
