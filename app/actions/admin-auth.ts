"use server"

import { redirect } from "next/navigation"
import { createSession, destroySession, isAdminConfigured, verifyPassword } from "@/lib/auth"

export type LoginState = {
  status: "idle" | "error"
  message: string
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return {
      status: "error",
      message: "Admin access is not configured. Set the ADMIN_PASSWORD environment variable.",
    }
  }

  const password = String(formData.get("password") ?? "")

  if (!verifyPassword(password)) {
    return { status: "error", message: "Incorrect password. Try again." }
  }

  await createSession()
  redirect("/admin")
}

export async function logout(): Promise<void> {
  await destroySession()
  redirect("/admin/login")
}
