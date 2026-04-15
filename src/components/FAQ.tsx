'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Où sont hébergées mes données ?', a: 'Toutes vos données sont hébergées sur l\'infrastructure de notre partenaire officiel Infomaniak, dans des datacenters 100% suisses. Elles ne quittent jamais le territoire suisse.' },
  { q: "J'ai besoin d'un devis, est-ce payant ?", a: 'Non. Nos devis et audits initiaux sont gratuits et sans engagement.' },
  { q: "Ai-je besoin d'un carnet d'heures ?", a: "Non. Vous pouvez nous contacter à tout moment. Le carnet d'heures donne simplement accès au tarif réduit." },
  { q: 'Quel est votre temps de réponse ?', a: 'Moins de 2 heures pour les tickets prioritaires. Les clients forfaitaires sont traités en priorité.' },
  { q: 'Proposez-vous la téléphonie ?', a: 'Oui. Certifiés 3CX, nous proposons des solutions VoIP professionnelles avec PBX, ligne mobile et intégration complète.' },
  { q: 'Pouvez-vous reprendre un parc existant ?', a: "Oui. Audit complet puis prise en charge avec un plan de transition sans interruption de service." },
  { q: "J'ai peur de perdre mes données.", a: 'Sauvegarde automatisée avec rétention configurable, répliquée sur l\'infrastructure Infomaniak en Suisse, avec tests de restauration réguliers.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="sec-pad bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-neutral-100 last:border-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left group"
                >
                  <span className="text-[14px] font-semibold text-neutral-900 pr-6 group-hover:text-brand-600 transition-colors">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 -mt-2">
                    <p className="text-[13px] text-neutral-500 leading-relaxed pl-0">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
