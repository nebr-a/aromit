'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Server, Database, Sparkles, AlertTriangle, Clock, ArrowRight, Star } from 'lucide-react'

type TabKey = 'infogerance' | 'odoo' | 'ia'

interface Tier {
  name: string
  price: string
  unit: string
  tagline: string
  features: string[]
  cta: { label: string; href: string }
  highlight?: boolean
}

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ size?: number }>; desc: string }[] = [
  { key: 'infogerance', label: 'Infogérance IT', icon: Server, desc: 'Support & infrastructure mensuels' },
  { key: 'odoo', label: 'Odoo ERP', icon: Database, desc: 'Intégration & développement' },
  { key: 'ia', label: 'Intelligence Artificielle', icon: Sparkles, desc: 'Automatisations & agents' },
]

const pricingData: Record<TabKey, Tier[]> = {
  infogerance: [
    {
      name: 'Essentiel',
      price: "490",
      unit: 'CHF / mois',
      tagline: 'Pour TPE jusqu\'à 10 postes',
      features: [
        'Supervision proactive 24/7',
        'Support illimité en heures ouvrables',
        'Mises à jour & patchs de sécurité',
        'Sauvegardes quotidiennes vérifiées',
        'Rapport mensuel détaillé',
        'SLA 2h ouvrables',
      ],
      cta: { label: 'Choisir Essentiel', href: '/#contact' },
    },
    {
      name: 'Business',
      price: "990",
      unit: 'CHF / mois',
      tagline: 'Pour PME de 10 à 25 postes',
      features: [
        'Tout Essentiel +',
        'Support étendu soir & samedi',
        'Gestion Microsoft 365 / Google Workspace',
        'Firewall & VPN professionnels',
        'Revue sécurité trimestrielle',
        'SLA 2h ouvrables',
      ],
      cta: { label: 'Choisir Business', href: '/#contact' },
      highlight: true,
    },
    {
      name: 'DSI Externalisé',
      price: "1'890",
      unit: 'CHF / mois',
      tagline: 'Pour PME de 25 à 75 postes',
      features: [
        'Tout Business +',
        'DSI dédié à temps partiel',
        'Roadmap IT stratégique annuelle',
        'Pilotage budgets & fournisseurs',
        'Audit sécurité semestriel',
        'SLA 1h ouvrable',
      ],
      cta: { label: 'Choisir DSI Externalisé', href: '/#contact' },
    },
  ],
  odoo: [
    {
      name: 'Starter',
      price: "4'900",
      unit: 'CHF · projet',
      tagline: 'Démarrage ciblé sur 2-3 modules',
      features: [
        'Analyse des besoins (1-2 jours)',
        '2 à 3 modules configurés',
        'Import des données principales',
        'Formation utilisateurs (1 journée)',
        'Support 30 jours post-GoLive',
        'Mise en production accompagnée',
      ],
      cta: { label: 'Choisir Starter', href: '/#contact' },
    },
    {
      name: 'Business',
      price: "9'900",
      unit: 'CHF · projet',
      tagline: 'ERP complet pour PME structurée',
      features: [
        'Tout Starter +',
        '5 à 7 modules intégrés',
        'Personnalisations métier',
        'Intégration 1 outil tiers (API)',
        'Formation sur 2 journées',
        'Support 90 jours post-GoLive',
      ],
      cta: { label: 'Choisir Business', href: '/#contact' },
      highlight: true,
    },
    {
      name: 'Entreprise',
      price: "19'900",
      unit: 'CHF · projet',
      tagline: 'Transformation digitale complète',
      features: [
        'Tout Business +',
        'Modules sur-mesure développés',
        'Intégrations multiples (e-commerce, EDI...)',
        'Migration depuis ancien ERP',
        'Formation multi-équipes',
        'Support 6 mois post-GoLive',
      ],
      cta: { label: 'Choisir Entreprise', href: '/#contact' },
    },
  ],
  ia: [
    {
      name: 'Pilote IA',
      price: "2'900",
      unit: 'CHF · projet',
      tagline: 'Un premier cas d\'usage ciblé',
      features: [
        'Atelier cadrage (1 journée)',
        '1 automatisation ou agent IA',
        'Intégration à vos outils actuels',
        'Documentation & handover',
        'Formation équipe (½ journée)',
        'Support 30 jours',
      ],
      cta: { label: 'Choisir Pilote', href: '/#contact' },
    },
    {
      name: 'Déploiement',
      price: "6'900",
      unit: 'CHF · projet',
      tagline: '3 cas d\'usage métier connectés',
      features: [
        'Tout Pilote +',
        '3 automatisations ou agents',
        'Connexion CRM / ERP / mail',
        'Base de connaissances interne (RAG)',
        'Tableau de bord suivi',
        'Support 90 jours',
      ],
      cta: { label: 'Choisir Déploiement', href: '/#contact' },
      highlight: true,
    },
    {
      name: 'Transformation',
      price: "14'900",
      unit: 'CHF · projet',
      tagline: 'IA comme avantage concurrentiel',
      features: [
        'Tout Déploiement +',
        'Agents autonomes multi-étapes',
        'Copilotes métier sur-mesure',
        'Fine-tuning / RAG avancé',
        'Accompagnement change management',
        'Support 6 mois',
      ],
      cta: { label: 'Choisir Transformation', href: '/#contact' },
    },
  ],
}

export default function PricingSwitcher() {
  const [active, setActive] = useState<TabKey>('infogerance')
  const tiers = pricingData[active]

  return (
    <section className="sec-pad bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Tarifs publics</span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
            Choisissez le service qui vous intéresse
          </h2>
          <p className="text-[15px] text-neutral-500 max-w-2xl mx-auto">
            Trois lignes de services, des prix publics. Pas de devis opaque, pas de négociation à l&apos;aveugle.
          </p>
        </div>

        {/* Tab selector */}
        <div className="grid sm:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = active === t.key
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`group text-left p-5 rounded-xl border-2 transition-all ${
                  isActive
                    ? 'border-brand-500 bg-white shadow-lg shadow-brand-500/10'
                    : 'border-neutral-200 bg-white/60 hover:border-neutral-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-brand-500 text-white' : 'bg-brand-500/10 text-brand-600'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className={`font-bold text-[15px] ${isActive ? 'text-neutral-900' : 'text-neutral-700'}`}>
                    {t.label}
                  </span>
                </div>
                <p className="text-[13px] text-neutral-500">{t.desc}</p>
              </button>
            )
          })}
        </div>

        {/* Context banner (changes per tab) */}
        {active === 'infogerance' && (
          <div className="max-w-4xl mx-auto mb-8 p-4 rounded-lg bg-brand-50 border border-brand-200 flex items-start gap-3">
            <Clock size={18} className="text-brand-600 mt-0.5 shrink-0" />
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">Besoin ponctuel, sans forfait ?</strong> Tarif horaire de <strong>145 CHF/h</strong>, facturé par tranche de 15 minutes, sans minimum d&apos;intervention.
            </p>
          </div>
        )}

        {active === 'odoo' && (
          <div className="max-w-4xl mx-auto mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">Licence Odoo non incluse.</strong> Les forfaits ci-dessous couvrent notre prestation d&apos;intégration. La licence Odoo (Community gratuit, Standard ~31 CHF/user/mois, Custom ~47 CHF/user/mois) est facturée directement par Odoo SA.
            </p>
          </div>
        )}

        {active === 'ia' && (
          <div className="max-w-4xl mx-auto mb-8 p-4 rounded-lg bg-brand-50 border border-brand-200 flex items-start gap-3">
            <Sparkles size={18} className="text-brand-600 mt-0.5 shrink-0" />
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">API tierces facturées au réel.</strong> Les coûts des API (OpenAI, Anthropic, etc.) sont refacturés sans marge, sur justificatifs. Budget typique : 50 à 300 CHF/mois selon usage.
            </p>
          </div>
        )}

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-7 rounded-2xl bg-white transition-all ${
                tier.highlight
                  ? 'border-2 border-brand-500 shadow-xl shadow-brand-500/10 md:-translate-y-2'
                  : 'border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-[11px] font-bold uppercase tracking-wider">
                  <Star size={12} fill="currentColor" /> Le plus choisi
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-[18px] font-bold text-neutral-900 mb-1">{tier.name}</h3>
                <p className="text-[13px] text-neutral-500">{tier.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-neutral-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[2.5rem] font-extrabold text-neutral-900 tracking-[-0.03em] leading-none">
                    {tier.price}
                  </span>
                  <span className="text-[13px] text-neutral-500 font-medium">{tier.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-neutral-700 leading-relaxed">
                    <Check size={16} className="text-brand-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-bold text-[14px] transition-all ${
                  tier.highlight
                    ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                }`}
              >
                {tier.cta.label} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[12px] text-neutral-400 mt-10">
          Tous les prix sont indiqués hors TVA · Engagement minimum 12 mois sur l&apos;infogérance · Résiliation 3 mois
        </p>
      </div>
    </section>
  )
}
