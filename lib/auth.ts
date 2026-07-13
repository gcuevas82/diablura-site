import "server-only"

import { cookies } from "next/headers"
import crypto from "node:crypto"

const COOKIE_NAME = "diablura_admin"
const SESSION_MESSAGE = "diablura-admin-session"

/**
 * Deterministic session token derived from ADMIN_PASSWORD. The raw password is
 * never stored in the cookie — only an HMAC of a fixed message keyed by it.
 */
function expectedToken(): string | null {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return null
  return crypto.createHmac("sha256", password).update(SESSION_MESSAGE).digest("hex")
}

function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

/** Verifies a submitted password against the configured ADMIN_PASSWORD. */
export function verifyPassword(submitted: string): boolean {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  return timingSafeEqual(submitted, password)
}

/** Whether ADMIN_PASSWORD has been configured for the project. */
export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD)
}

/** Reads the session cookie and validates it against the expected token. */
export async function isAuthenticated(): Promise<boolean> {
  const token = expectedToken()
  if (!token) return false
  const store = await cookies()
  const current = store.get(COOKIE_NAME)?.value
  if (!current) return false
  return timingSafeEqual(current, token)
}

/** Sets the signed admin session cookie. Call after a successful password check. */
export async function createSession(): Promise<void> {
  const token = expectedToken()
  if (!token) return
  const store = await cookies()
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}

/** Clears the admin session cookie. */
export async function destroySession(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}
