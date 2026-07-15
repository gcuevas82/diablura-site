import { readFile } from "node:fs/promises"
import path from "node:path"
import JSZip from "jszip"

export const dynamic = "force-static"

// Band assets bundled into the downloadable ZIP. Add new files here and drop
// them into /public/press/assets to include them in the download.
const ASSETS: { file: string; zipName: string }[] = [
  { file: "diablura-vejigante.png", zipName: "logos/diablura-vejigante-mask.png" },
  { file: "diablura-vejigante-template.jpg", zipName: "logos/diablura-vejigante-template.jpg" },
  { file: "diablura-wordmark.png", zipName: "logos/diablura-wordmark.png" },
]

const README = `DIABLURA — BAND ASSETS
=======================

Thank you for supporting Diablura. These assets are provided for press,
promoters, and venues to use on flyers, posters, and event listings.

Contents
--------
- logos/diablura-vejigante-mask.png       Primary logo mark (transparent background)
- logos/diablura-vejigante-template.jpg   Vejigante mask artwork (full illustration)
- logos/diablura-wordmark.png             DIABLURA wordmark / font logo

Usage
-----
Please do not alter, recolor, or distort the logos. Keep clear space around
the marks and use the wordmark for the band name.

Questions or need a specific format (vector/EPS, high-res)?
Contact us via the press kit at the Diablura website.
`

export async function GET() {
  const zip = new JSZip()
  const assetsDir = path.join(process.cwd(), "public", "press", "assets")

  for (const { file, zipName } of ASSETS) {
    try {
      const data = await readFile(path.join(assetsDir, file))
      zip.file(zipName, data)
    } catch {
      // Skip any asset that isn't present so the download still succeeds.
    }
  }

  zip.file("README.txt", README)

  const buffer = await zip.generateAsync({ type: "nodebuffer" })

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="diablura-band-assets.zip"',
    },
  })
}
