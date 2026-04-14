'use client'

import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Ponctuel',
    price: '145',
    unit: '/ heure',
    desc: 'À la demande, sans engagement.',
    features: [
      'Facturation 15 min',
      'Support ticket & téléphone',
      'Intervention sur site',
      "Pas de carnet d'heures requis",
    ],
    cta: 'Demander un devis',
    dark: false,
  },
  {
    name: 'Essentiel',
    price: '490',
    unit: '/ mois',
    desc: 'Suivi proactif pour votre PME.',
    features: [
      'Tout du forfait Ponctuel',
      '5h de support incluses',
      'Monitoring proactif 24/7',
      'Mises à jour & maintenance',
      'Interlocuteur dédié',
      'Tarif horaire réduit',
    ],
    cta: 'Choisir Essentiel',
    dark: true,
  },
  {
    name: 'Premium',
    price: 'Sur mesure',
    unit: '',
    desc: 'Votre DSI externalisé.',
    features: [
      'Tout du forfait Essentiel',
      'Heures illimitées',
      'Priorité maximale',
      'Stratégie IT & roadmap',
      'Audits sécurité trimestriels',
      'Formation équipe incluse',
    ],
    cta: 'Nous contacter',
    dark: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="sec-pad bg-neutral-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
            Des tarifs clairs et sans surprise
          </h2>
          <p className="text-[15px] text-neutral-400 max-w-lg mx-auto">
            Tous les prix sont en CHF, HT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl p-7 ${
                t.dark
                  ? 'bg-brand-500 ring-2 ring-brand-400 scale-[1.02]'
                  : 'bg-white/[0.04] border border-white/[0.08]'
              }`}
            >
              <h3 className={`text-[15px] font-bold mb-1 ${t.dark ? 'text-white' : 'text-white'}`}>
                {t.name}
              </h3>
              <p className={`text-[13px] mb-5 ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>
                {t.desc}
              </p>
              <div className="flex items-baseline gap-1.5 mb-7">
                <span className="text-[2.25rem] font-extrabold text-white">{t.price}</span>
                {t.unit && (
                  <span className={`text-[13px] ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>
                    CHF {t.unit}
                  </span>
                )}
              </div>
              <ul className="space-y-2.5 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${t.dark ? 'text-white' : 'text-brand-400'}`} />
                    <span className={`text-[13px] ${t.dark ? 'text-white/90' : 'text-neutral-400'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold rounded-md transition-colors ${
                  t.dark
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                    : 'bg-brand-500 text-white hover:bg-brand-400'
                }`}
              >
                {t.cta} <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
