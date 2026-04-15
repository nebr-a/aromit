'use client'

import { Headphones, Cloud, Shield, Phone, Users, HardDrive } from 'lucide-react'

const services = [
  {
    icon: Headphones,
    title: 'Support & Helpdesk',
    text: 'Réponse rapide par ticket, téléphone ou sur site. Facturation à la tranche de 15 min.',
    span: '',
  },
  {
    icon: Cloud,
    title: 'Cloud Privé Suisse',
    text: 'Hébergement sur l\'infrastructure Infomaniak (Suisse). Vos données ne quittent jamais le pays.',
    span: '',
  },
  {
    icon: Shield,
    title: 'Réseau & Sécurité',
    text: 'WiFi, VPN, pare-feu, accès distant sécurisé. Infrastructure réseau gérée de A à Z.',
    span: '',
  },
  {
    icon: Phone,
    title: 'Téléphonie IP (3CX)',
    text: "Téléphonie professionnelle certifiée 3CX. Travaillez de n'importe où avec votre numéro fixe.",
    span: '',
  },
  {
    icon: Users,
    title: 'Consulting IT',
    text: 'Audit, conseil en architecture et accompagnement de vos projets technologiques.',
    span: '',
  },
  {
    icon: HardDrive,
    title: 'Sauvegarde & PRA',
    text: "Backup automatisés et plans de reprise d'activité pour protéger votre entreprise.",
    span: '',
  },
]

export default function Services() {
  return (
    <section id="services" className="sec-pad bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-3 block">Nos services</span>
            <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em]">
              Tout ce dont votre PME a besoin, sous un même toit
            </h2>
          </div>
          <p className="text-[15px] text-neutral-400 leading-relaxed lg:text-right">
            De la gestion de votre parc informatique à la téléphonie, nous couvrons 100% de vos besoins IT.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-500/20 transition-all duration-300"
            >
              <s.icon size={22} className="text-brand-400 mb-5" strokeWidth={1.5} />
              <h3 className="text-[15px] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[13px] text-neutral-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
