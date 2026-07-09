"use server"

import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase()
  const name = String(formData.get("name") ?? "").trim()

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    const existing = await db
      .select({ id: subscribers.id })
      .from(subscribers)
      .where(eq(subscribers.email, email))
      .limit(1)

    if (existing.length > 0) {
      return { status: "success", message: "You're already on the list. See you in the pit." }
    }

    await db.insert(subscribers).values({ email, name: name || null })
    return { status: "success", message: "You're in. Watch your inbox for what's next." }
  } catch (err) {
    console.log("[v0] subscribe error:", err)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}
