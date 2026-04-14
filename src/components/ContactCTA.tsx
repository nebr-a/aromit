'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'

function pushConversionEvent() {
  if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
      event: 'generate_lead',
      event_category: 'Contact',
      event_label: 'Formulaire principal',
    })
  }
}

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    pushConversionEvent()
  }

  const inputCls = "w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-[14px] text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-colors"

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <img src="/images/section-team.jpg" alt="" className="img-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/90 to-neutral-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] font-bold text-white tracking-[-0.02em] mb-4 leading-tight">
              Prêt à transformer<br />votre IT ?
            </h2>
            <p className="text-[15px] text-neutral-400 mb-10 max-w-md leading-relaxed">
              Décrivez-nous vos besoins. Nous vous recontacterons sous 2 heures avec une première analyse gratuite.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:+41265083232" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-brand-400" />
                <span className="text-[14px] font-medium">+41 26 508 32 32</span>
              </a>
              <a href="mailto:info@arom.ch" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="text-brand-400" />
                <span className="text-[14px] font-medium">info@arom.ch</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={16} className="text-brand-400" />
                <span className="text-[14px] font-medium">Payerne & Lausanne, Suisse</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-xl p-7 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Message envoyé</h3>
                <p className="text-[14px] text-neutral-500">Nous vous recontacterons sous 2 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Prénom</label>
                    <input type="text" required className={inputCls} placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Nom</label>
                    <input type="text" required className={inputCls} placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Email</label>
                  <input type="email" required className={inputCls} placeholder="votre@email.ch" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Téléphone</label>
                  <input type="tel" className={inputCls} placeholder="+41 XX XXX XX XX" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Sujet</label>
                  <select className={inputCls}>
                    <option>Support IT & Cloud</option>
                    <option>Projet Odoo ERP</option>
                    <option>Intelligence Artificielle</option>
                    <option>Audit gratuit</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-700 mb-1.5">Message</label>
                  <textarea rows={3} required className={`${inputCls} resize-none`} placeholder="Décrivez votre besoin..." />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white text-[14px] font-bold rounded-md transition-colors shadow-lg shadow-brand-500/25"
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Envoi en cours...</>
                  ) : (
                    <><Send size={15} /> Envoyer le message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
