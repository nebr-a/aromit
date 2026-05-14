import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface ContactPayload {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  // honeypot
  website?: string
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload

    // Honeypot — silently accept and discard bots
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ ok: true })
    }

    const firstName = (body.firstName || '').trim().slice(0, 100)
    const lastName = (body.lastName || '').trim().slice(0, 100)
    const email = (body.email || '').trim().slice(0, 200)
    const phone = (body.phone || '').trim().slice(0, 50)
    const subject = (body.subject || 'Demande générale').trim().slice(0, 200)
    const message = (body.message || '').trim().slice(0, 5000)

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Champs requis manquants.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Email invalide.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_FROM || 'AROM IT <noreply@arom.ch>'
    const to = (process.env.CONTACT_TO || 'info@arom.ch')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY missing.')
      return NextResponse.json(
        { ok: false, error: 'Configuration serveur incomplète. Réessayez plus tard.' },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)

    const fullName = `${firstName} ${lastName}`.trim()
    const safeName = escapeHtml(fullName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || '—')
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const html = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
        <h2 style="margin: 0 0 16px; color: #1A7693;">Nouveau message via le site arom.ch</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; color: #666; width: 100px;"><strong>Nom</strong></td><td style="padding: 6px 0;">${safeName}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;"><strong>Email</strong></td><td style="padding: 6px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;"><strong>Téléphone</strong></td><td style="padding: 6px 0;">${safePhone}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;"><strong>Sujet</strong></td><td style="padding: 6px 0;">${safeSubject}</td></tr>
        </table>
        <div style="background: #f5f5f5; border-left: 3px solid #1A7693; padding: 14px 18px; margin-top: 12px;">
          <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;"><strong>Message</strong></p>
          <p style="margin: 0; line-height: 1.6;">${safeMessage}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">Envoyé depuis le formulaire de contact arom.ch — répondre à ce mail répondra directement à ${safeName}.</p>
      </div>
    `

    const text =
      `Nouveau message via le site arom.ch\n\n` +
      `Nom : ${fullName}\nEmail : ${email}\nTéléphone : ${phone || '—'}\nSujet : ${subject}\n\n` +
      `Message :\n${message}\n`

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[arom.ch] ${subject} — ${fullName}`,
      html,
      text,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { ok: false, error: "Une erreur est survenue lors de l'envoi. Réessayez ou appelez-nous." },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('[contact] handler error:', err)
    return NextResponse.json(
      { ok: false, error: "Une erreur est survenue lors de l'envoi. Réessayez ou appelez-nous." },
      { status: 500 },
    )
  }
}
