import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    label: 'Infogérance',
    title: 'IT & Cloud Suisse',
    text: 'Support réactif, réseau, sécurité et hébergement dans notre datacenter à Montreux. Dès 490 CHF/mois.',
    image: '/images/section-network.jpg',
    href: '/infogerance',
    gradient: 'from-blue-900/90 to-neutral-950/90',
  },
  {
    label: 'ERP Open Source',
    title: 'Intégrateur Odoo',
    text: "L'ERP #1 mondial : ventes, compta, stocks et RH unifiés. Forfaits dès 4'900 CHF.",
    image: '/images/section-dashboard.jpg',
    href: '/odoo',
    gradient: 'from-purple-900/90 to-neutral-950/90',
  },
  {
    label: 'Innovation',
    title: 'Intelligence Artificielle',
    text: "Chatbots, automatisation, analyse prédictive. Premier projet dès 2'900 CHF.",
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
            Trois expertises, un seul partenaire
          </h2>
          <p className="text-[15px] text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Du poste de travail à l&apos;ERP en passant par l&apos;IA — AROM est votre DSI externalisé.
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
