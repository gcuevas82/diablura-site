import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { LoginForm } from "@/components/admin/login-form"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "Admin Sign In",
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage() {
  if (await isAuthenticated()) {
    redirect("/admin")
  }

  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-24">
      <div className="w-full max-w-md border border-border bg-card p-8 md:p-10">
        <SectionHeading eyebrow="Admin" title="Sign In" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
          Enter the admin password to view the subscriber list.
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
