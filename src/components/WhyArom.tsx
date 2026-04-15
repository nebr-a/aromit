import { UserCheck, MapPin, Receipt, Clock, Lock, Wrench } from 'lucide-react'

const reasons = [
  { icon: UserCheck, title: 'Interlocuteur unique', text: 'Un seul contact dédié pour tous vos besoins IT.' },
  { icon: MapPin, title: 'Ancrage romand', text: 'Payerne & Lausanne. Intervention rapide sur site.' },
  { icon: Receipt, title: 'Facturation 15 min', text: "Transparent. Pas d'arrondi à l'heure." },
  { icon: Clock, title: 'Réponse < 2h', text: 'Tickets prioritaires traités en moins de 2 heures.' },
  { icon: Lock, title: 'Données 100% Suisse', text: 'Partenaire Infomaniak — datacenters suisses, conformité garantie.' },
  { icon: Wrench, title: 'Zéro sous-traitance', text: 'Cloud, réseau, téléphonie, sécurité : tout en interne.' },
]

export default function WhyArom() {
  return (
    <section className="sec-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-14">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
            Pourquoi choisir AROM
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-xl border border-neutral-100 hover:border-brand-100 hover:bg-brand-50/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-brand-400 flex-shrink-0">
                <r.icon size={18} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-neutral-900 mb-0.5">{r.title}</h3>
                <p className="text-[13px] text-neutral-500 leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
