import { readFile } from "node:fs/promises"
import path from "node:path"
import { renderToBuffer } from "@react-pdf/renderer"
import { EpkDocument } from "./epk-document"
import { band } from "@/lib/site"

export const runtime = "nodejs"
export const dynamic = "force-static"

export async function GET() {
  let photo: Buffer | undefined
  try {
    photo = await readFile(path.join(process.cwd(), "public", "press", "band-photo.jpg"))
  } catch {
    photo = undefined
  }

  const buffer = await renderToBuffer(EpkDocument({ photo }))
  const fileName = `${band.name.replace(/\s+/g, "-").toLowerCase()}-epk.pdf`

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  })
}
