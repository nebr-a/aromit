'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Où sont hébergées mes données ?', a: 'Toutes vos données sont hébergées chez notre partenaire officiel Infomaniak, dans des datacenters 100% suisses. Elles ne quittent jamais le territoire suisse.' },
  { q: "J'ai besoin d'un devis, est-ce payant ?", a: 'Non. Le premier rendez-vous, l\'audit et le devis sont gratuits et sans engagement.' },
  { q: "Dois-je m'engager pour qu'on m'aide ?", a: "Non. Vous pouvez nous appeler à tout moment au tarif horaire (145 CHF/h). L'engagement annuel donne juste accès aux forfaits et au tarif réduit." },
  { q: 'En combien de temps me rappelez-vous ?', a: 'En moins de 2 heures pendant les heures de bureau, garanti par contrat. Les clients en forfait sont prioritaires.' },
  { q: 'Vous occupez-vous aussi de la téléphonie ?', a: 'Oui. Nous installons et gérons des centraux téléphoniques modernes pour PME : ligne fixe, mobile, transferts, accueil vocal — le tout intégré à vos ordinateurs.' },
  { q: 'Pouvez-vous reprendre une informatique déjà en place ?', a: "Oui. On commence par un audit complet, puis on prend la relève selon un plan clair — sans coupure de service pour vous." },
  { q: "J'ai peur de perdre mes données.", a: 'Vos données sont sauvegardées automatiquement chaque jour chez Infomaniak (Suisse), et on teste régulièrement la restauration pour s\'assurer que tout est récupérable.' },
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
