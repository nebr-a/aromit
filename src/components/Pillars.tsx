import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    label: 'Au quotidien',
    title: 'Support informatique',
    text: "Quelqu'un répond quand votre PC plante, votre Wi-Fi tombe ou un mail bloque. Sécurité, sauvegardes et supervision tournent en arrière-plan. Dès 490 CHF/mois.",
    image: '/images/section-network.jpg',
    href: '/infogerance',
    gradient: 'from-blue-900/90 to-neutral-950/90',
  },
  {
    label: 'Logiciel de gestion',
    title: 'Tout votre business dans Odoo',
    text: "Un seul logiciel pour les ventes, les factures, les stocks, les clients et les RH. Fini les exports Excel entre 5 outils. Forfaits dès 4'900 CHF.",
    image: '/images/section-dashboard.jpg',
    href: '/odoo',
    gradient: 'from-purple-900/90 to-neutral-950/90',
  },
  {
    label: 'Automatisation',
    title: "Faire travailler l'IA pour vous",
    text: "Répondre aux clients, traiter des documents, automatiser les tâches répétitives. L'IA branchée à vos outils existants. Premier projet dès 2'900 CHF.",
    image: '/images/section-ai.jpg',
    href: '/ia',
    gradient: 'from-teal-900/90 to-neutral-950/90',
  },
]

export default function Pillars() {
  return (
    <section className="bg-neutral-950 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center pt-16 pb-12">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
            Trois façons de vous simplifier la vie
          </h2>
          <p className="text-[15px] text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Le support au quotidien, le logiciel qui gère tout votre business, et l&apos;IA pour automatiser le reste. Un seul interlocuteur pour les trois.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pb-16">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative rounded-xl overflow-hidden min-h-[360px] flex flex-col justify-end"
            >
              <img src={p.image} alt="" className="img-cover bento-img" loading="lazy" />
              <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient}`} />
              <div className="relative z-10 p-6">
                <span className="inline-block text-[11px] font-bold text-brand-400 uppercase tracking-widest mb-3">{p.label}</span>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[13px] text-white/60 leading-relaxed mb-4">{p.text}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
