export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, clinic } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Câmpuri obligatorii lipsă' })
  }

  const token = process.env.TG_TOKEN
  const chatId = process.env.TG_CHAT

  const text = `🦷 *Aplicare Program — Bonesphere*\n\n👤 *Nume:* ${name}\n📞 *Telefon:* ${phone}\n🏥 *Clinică / Oraș:* ${clinic || '—'}`

  const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  })

  if (!tgRes.ok) {
    return res.status(502).json({ error: 'Eroare trimitere mesaj' })
  }

  return res.status(200).json({ ok: true })
}
