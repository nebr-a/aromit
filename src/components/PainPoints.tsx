'use client'

import { ArrowRight, Clock, ShieldAlert, PhoneOff } from 'lucide-react'

const pains = [
  { icon: Clock, title: "Votre IT vous freine", text: "Pannes, mises à jour, problèmes réseau — vous gérez une entreprise, pas un département IT." },
  { icon: ShieldAlert, title: "Cyber-risques croissants", text: "Ransomwares, fuites de données, conformité. Une seule faille peut coûter des milliers de francs." },
  { icon: PhoneOff, title: "Prestataire injoignable", text: "Tickets sans réponse, délais interminables. Chaque heure perdue vous coûte de l'argent." },
]

export default function PainPoints() {
  return (
    <section className="sec-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left — pain cards */}
          <div className="lg:col-span-3 space-y-4">
            {pains.map((p, i) => (
              <div key={p.title} className="flex gap-5 p-5 rounded-xl border border-neutral-100 bg-neutral-50/50">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <p.icon size={18} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-neutral-900 mb-1">{p.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — CTA block */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px] flex items-center">
            <img src="/images/section-team.jpg" alt="" className="img-cover" loading="lazy" />
            <div className="overlay-brand" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                C&apos;est exactement pour ça qu&apos;AROM existe.
              </h3>
              <p className="text-white/70 text-[14px] mb-6 leading-relaxed">
                Un seul partenaire IT qui répond en moins de 2 heures. Proactif, transparent, basé en Suisse.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-900 font-semibold rounded-md hover:bg-neutral-100 transition-colors text-[13px]">
                Parler à un expert <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
