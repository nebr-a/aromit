'use client'

import { Bot, Workflow, BarChart3, LayoutGrid, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Bot,
    title: 'Chatbots & Assistants IA',
    text: "Assistant IA 24h/24 : demandes courantes, qualification des leads, prise de rendez-vous.",
  },
  {
    icon: Workflow,
    title: 'Automatisation intelligente',
    text: "Emails, saisie, génération de documents, workflows multi-systèmes — sans intervention humaine.",
  },
  {
    icon: BarChart3,
    title: 'Analyse & prédiction',
    text: "Prévisions de ventes, détection d'anomalies, dashboards intelligents en temps réel.",
  },
  {
    icon: LayoutGrid,
    title: 'IA intégrée dans Odoo',
    text: "Lead scoring, suggestions de réassort, analyse des sentiments — l'IA dans votre ERP.",
  },
]

export default function AISolutions() {
  return (
    <section id="ia" className="relative overflow-hidden">
      {/* Full-bleed background */}
      <img src="/images/section-ai.jpg" alt="" className="img-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/85 to-neutral-950/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — title */}
          <div className="lg:sticky lg:top-32">
            <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-3 block">Intelligence Artificielle</span>
            <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-4">
              L&apos;IA au service de votre PME
            </h2>
            <p className="text-[15px] text-neutral-400 leading-relaxed mb-8 max-w-md">
              Pas de buzzwords. Des solutions concrètes qui créent de la valeur.
              Nous intégrons l&apos;IA là où elle a un vrai impact sur votre business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white text-[14px] font-semibold rounded-md transition-colors"
            >
              Explorer les possibilités <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — cards */}
          <div className="grid gap-4">
            {solutions.map((s) => (
              <div key={s.title} className="p-5 rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-[13px] text-neutral-400 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
