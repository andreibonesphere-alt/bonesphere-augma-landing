import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const APP_ROOT = join(__dirname, '..')

const ROOTS = [
  join(APP_ROOT, 'src/assets'),
  join(APP_ROOT, 'public'),
]

const SKIP_NAMES = new Set([
  'logo-teal.png', 'logo-white.png', 'logo-black.png',
  'favicon.png', 'apple-touch-icon.png',
])
const SKIP_EXTS = new Set(['.svg', '.mp4', '.webp', '.ico'])
const SKIP_DIRS = new Set(['solutions', 'images'])
const MIN_BYTES = 50 * 1024
const MAX_WIDTH = 1600
const QUALITY = 82

async function* walk(dir, depth = 0) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const path = join(dir, e.name)
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue
      yield* walk(path, depth + 1)
    } else {
      yield path
    }
  }
}

let totalBefore = 0
let totalAfter = 0
let processed = 0
let skipped = 0

for (const root of ROOTS) {
  console.log(`\n→ scanning ${root}`)
  try {
    for await (const file of walk(root)) {
      const ext = extname(file).toLowerCase()
      const name = basename(file)
      if (SKIP_EXTS.has(ext) || !['.png', '.jpg', '.jpeg'].includes(ext)) continue
      if (SKIP_NAMES.has(name)) { skipped++; continue }

      const st = await stat(file)
      if (st.size < MIN_BYTES) { skipped++; continue }

      const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp')
      const meta = await sharp(file).metadata()
      const needsResize = meta.width && meta.width > MAX_WIDTH

      let pipeline = sharp(file).rotate()
      if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(webpPath)

      const newSize = (await stat(webpPath)).size
      totalBefore += st.size
      totalAfter += newSize
      processed++

      const pct = ((1 - newSize / st.size) * 100).toFixed(0)
      const sizeFmt = (b) => (b / 1024 < 1024 ? `${(b / 1024).toFixed(0)}KB` : `${(b / 1024 / 1024).toFixed(2)}MB`)
      console.log(`  ✓ ${basename(file).padEnd(34)} ${sizeFmt(st.size).padStart(8)} → ${sizeFmt(newSize).padStart(8)}  (-${pct}%)${needsResize ? `  [resize ${meta.width}→${MAX_WIDTH}]` : ''}`)
    }
  } catch (err) {
    if (err.code === 'ENOENT') console.log(`  (skip — does not exist)`)
    else throw err
  }
}

const fmt = (b) => `${(b / 1024 / 1024).toFixed(1)}MB`
console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
console.log(`Processed: ${processed}    Skipped: ${skipped}`)
console.log(`Before: ${fmt(totalBefore)}    After: ${fmt(totalAfter)}    Saved: ${fmt(totalBefore - totalAfter)}  (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`)
