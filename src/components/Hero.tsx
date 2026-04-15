'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hero-datacenter.jpg"
        alt="Datacenter suisse AROM IT — infrastructure IT pour PME en Suisse romande"
        className="img-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center pt-20 pb-24">
        {/* Overline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-[13px] font-medium text-white/80 tracking-wide">
            Votre partenaire informatique en Suisse romande
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6">
          On s&apos;occupe de{' '}
          <span className="text-brand-400">toute votre informatique</span>.
          <br className="hidden sm:block" />
          {' '}Vous, de votre métier.
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Ordinateurs, messagerie, logiciels de gestion, sécurité, automatisations avec l&apos;IA —
          un seul partenaire s&apos;occupe de toute la technique de votre entreprise.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-md transition-all text-[15px] shadow-lg shadow-brand-500/25 hover:shadow-brand-400/30"
          >
            Demander un audit gratuit
            <ArrowRight size={18} />
          </a>
          <a
            href="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-md transition-all text-[15px] backdrop-blur-sm"
          >
            Voir les tarifs
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-8 border-t border-white/10">
          {['Données hébergées en Suisse', 'Datacenter à Montreux', 'Réponse en moins de 2h', 'Certifié 3CX & Odoo'].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              <span className="text-[13px] text-white/50 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
