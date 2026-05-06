import { readFile, writeFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const APP_ROOT = join(__dirname, '..')

const FILES = [
  join(APP_ROOT, 'src/App.jsx'),
  join(APP_ROOT, 'src/ProgramStart.jsx'),
]

const exists = async (p) => { try { await access(p); return true } catch { return false } }

const pattern = /(['"])((?:\.\/assets\/|\/)[\w\-./]+?)\.(png|jpe?g)\1/g

for (const file of FILES) {
  const original = await readFile(file, 'utf8')
  const matches = [...original.matchAll(pattern)]
  let next = original
  let changes = 0

  for (const m of matches) {
    const [full, quote, base, ext] = m
    const isPublic = base.startsWith('/')
    const diskPath = isPublic
      ? join(APP_ROOT, 'public', base.slice(1) + '.webp')
      : join(APP_ROOT, 'src/assets', base.replace('./assets/', '') + '.webp')

    if (await exists(diskPath)) {
      const replacement = `${quote}${base}.webp${quote}`
      next = next.split(full).join(replacement)
      changes++
    }
  }

  await writeFile(file, next)
  console.log(`✓ ${file.replace(APP_ROOT + '/', '')}: ${changes} reference(s) updated`)
}
