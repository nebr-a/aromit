'use client'

import {
  ShoppingCart, Users, Calculator, Package,
  UserCheck, BarChart3, Globe, Factory,
  ArrowRight,
} from 'lucide-react'

const modules = [
  { icon: ShoppingCart, label: 'Ventes' },
  { icon: Users, label: 'CRM' },
  { icon: Calculator, label: 'Comptabilité' },
  { icon: Package, label: 'Stock' },
  { icon: UserCheck, label: 'RH' },
  { icon: BarChart3, label: 'Marketing' },
  { icon: Globe, label: 'E-commerce' },
  { icon: Factory, label: 'Production' },
]

const steps = [
  { n: '01', title: 'Audit', desc: 'Analyse de vos processus et identification des opportunités.' },
  { n: '02', title: 'Configuration', desc: 'Installation, paramétrage et migration de vos données.' },
  { n: '03', title: 'Formation', desc: "Formation sur site pour une adoption immédiate." },
  { n: '04', title: 'Support', desc: 'Accompagnement continu et évolutions au fil du temps.' },
]

export default function Odoo() {
  return (
    <section id="odoo" className="sec-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        {/* Top: image + info */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="/images/section-dashboard.jpg" alt="Dashboard Odoo ERP" className="img-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent" />
          </div>

          {/* Info */}
          <div>
            <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Intégrateur certifié</span>
            <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-4">
              Unifiez votre entreprise avec Odoo
            </h2>
            <p className="text-[15px] text-neutral-500 leading-relaxed mb-8">
              L&apos;ERP open source #1 mondial. Fini les exports Excel entre logiciels — Odoo connecte
              tous vos départements en temps réel. AROM vous accompagne de A à Z.
            </p>

            {/* Module pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {modules.map((m) => (
                <div key={m.label} className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-50 border border-neutral-200 text-[12px] font-medium text-neutral-600">
                  <m.icon size={14} className="text-brand-500" />
                  {m.label}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white text-[14px] font-semibold rounded-md transition-colors"
            >
              Discuter de votre projet Odoo <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-4 gap-px bg-neutral-200 rounded-xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-6">
              <span className="text-[2rem] font-extrabold text-brand-200 block mb-2">{s.n}</span>
              <h4 className="text-[14px] font-bold text-neutral-900 mb-1">{s.title}</h4>
              <p className="text-[12px] text-neutral-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
