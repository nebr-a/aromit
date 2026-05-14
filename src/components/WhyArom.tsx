import { UserCheck, MapPin, Receipt, Clock, Lock, Wrench } from 'lucide-react'

const reasons = [
  { icon: UserCheck, title: 'Un seul interlocuteur', text: 'Une personne qui connaît votre entreprise et qui répond à tous vos besoins.' },
  { icon: MapPin, title: 'Proches de vous', text: 'Bureaux à Payerne & Lausanne. On se déplace chez vous quand il le faut.' },
  { icon: Receipt, title: 'Facturé par tranche de 15 min', text: "Vous payez ce qu'on fait, pas une heure entière pour 10 minutes de travail." },
  { icon: Clock, title: 'Réponse en moins de 2h', text: 'Quand vous nous appelez, on vous recontacte vite. Pas de tickets oubliés.' },
  { icon: Lock, title: 'Données 100% Suisse', text: 'Partenaire Infomaniak — vos données restent en Suisse, point.' },
  { icon: Wrench, title: 'Aucune sous-traitance', text: 'Réseau, sécurité, téléphonie, logiciels : tout est fait par notre équipe.' },
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
