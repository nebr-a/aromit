'use client'

import { ArrowRight, Clock, ShieldAlert, PhoneOff } from 'lucide-react'

const pains = [
  { icon: Clock, title: "Vos outils vous ralentissent", text: "Ordinateurs qui rament, Wi-Fi qui coupe, logiciels qui plantent. Vous perdez des heures sur ce qui devrait juste marcher." },
  { icon: ShieldAlert, title: "La peur du piratage et de la perte de données", text: "Virus, rançongiciels, fuites de données. Une seule attaque peut coûter des milliers de francs et faire fuir vos clients." },
  { icon: PhoneOff, title: "Personne ne vous rappelle quand ça casse", text: "Vous laissez un message, vous attendez. Pendant ce temps, votre équipe est à l'arrêt et vous perdez de l'argent." },
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
                Un seul partenaire qui répond en moins de 2 heures, qui anticipe les problèmes avant qu&apos;ils n&apos;arrivent et qui vous parle sans jargon.
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
