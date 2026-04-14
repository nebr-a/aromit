import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Bot, Workflow, BarChart3, LayoutGrid, Check, ArrowRight,
  Zap, Brain, FileText, MessageSquare,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import QuickAnswer from '@/components/QuickAnswer'
import PageSchema from '@/components/PageSchema'

const PAGE_URL = 'https://www.arom.ch/ia'

export const metadata: Metadata = {
  title: 'Intelligence Artificielle pour PME Suisse — dès 2\'900 CHF',
  description: "Chatbots, automatisation, analyse prédictive, IA dans Odoo. Solutions IA concrètes pour PME en Suisse romande. Forfaits transparents dès 2'900 CHF. Conformité nLPD.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Solutions IA pour PME Suisse — dès 2\'900 CHF',
    description: 'Pas de buzzwords. Des solutions concrètes et mesurables.',
    url: PAGE_URL,
    type: 'website',
    images: ['/images/section-ai.jpg'],
  },
}

const faqs = [
  { q: "Combien coûte un projet IA pour une PME en Suisse ?", a: "Trois forfaits AROM IT : IA Quickstart à 2'900 CHF (1 cas d'usage, 2-3 semaines), IA Business à 6'900 CHF (3 cas d'usage, 4-6 semaines), IA Transformation dès 14'900 CHF (déploiement à l'échelle, 2-4 mois). Les coûts d'API tiers (OpenAI, Anthropic) sont facturés au réel, sans marge." },
  { q: 'Quels cas d\'usage IA apportent le plus de ROI ?', a: 'Les plus rentables pour une PME : automatisation emails/devis (10-20h économisées/semaine), chatbot SAV 24/7, traitement OCR de factures, lead scoring dans le CRM, résumés de réunions et recherche sémantique dans la documentation interne.' },
  { q: 'Mes données sont-elles protégées ?', a: 'Oui. Traitement conforme nLPD (Suisse) et RGPD. Hébergement suisse privilégié quand c\'est techniquement possible. Nous ne ré-entraînons jamais de modèles sur vos données sans autorisation écrite.' },
  { q: 'Peut-on intégrer l\'IA directement dans Odoo ?', a: 'Oui. Lead scoring automatique, suggestions de réassort, analyse de sentiments sur les tickets, génération de descriptifs produits : nous branchons l\'IA directement dans votre ERP Odoo.' },
  { q: 'Faut-il déjà avoir une infrastructure pour démarrer ?', a: "Non. Le forfait IA Quickstart à 2'900 CHF est conçu précisément pour démarrer : nous intégrons l'IA à un outil existant (site web, boîte mail, CRM, Odoo) sans nouvelle infrastructure." },
]

const usecases = [
  { icon: Bot, title: 'Chatbots & assistants IA', text: "Assistant 24h/24 : SAV, qualification de leads, prise de RDV. Connecté à votre site, WhatsApp, Messenger." },
  { icon: Workflow, title: 'Automatisation intelligente', text: 'Emails, devis, génération de documents, workflows multi-systèmes — sans intervention humaine.' },
  { icon: BarChart3, title: 'Analyse & prédiction', text: "Prévisions de ventes, détection d'anomalies, dashboards intelligents en temps réel." },
  { icon: LayoutGrid, title: 'IA intégrée dans Odoo', text: "Lead scoring, suggestions de réassort, analyse des sentiments — l'IA directement dans votre ERP." },
  { icon: FileText, title: 'Traitement de documents', text: 'OCR, extraction de données depuis factures/contrats, classification automatique.' },
  { icon: MessageSquare, title: 'Résumés & recherche', text: 'Synthèse de réunions, recherche sémantique dans vos documents, réponses depuis votre base de connaissances.' },
]

const tiers = [
  {
    name: 'IA Quickstart',
    price: "2'900",
    duration: '2-3 semaines',
    desc: 'Votre premier projet IA, concret et rapide.',
    features: [
      '1 chatbot OU 1 automatisation',
      "Intégration à 1 outil existant (site, email, Odoo...)",
      'Formation équipe (½ journée)',
      'Déploiement & mise en production',
      '30 jours de support',
    ],
    dark: false,
  },
  {
    name: 'IA Business',
    price: "6'900",
    duration: '4-6 semaines',
    desc: 'Plusieurs cas d\'usage combinés.',
    features: [
      'Jusqu\'à 3 cas d\'usage IA',
      'Intégrations multiples (CRM, ERP, e-mail)',
      'Dashboard de pilotage',
      'Formation approfondie',
      '90 jours de support',
      'Optimisation continue 1er trimestre',
    ],
    dark: true,
    popular: true,
  },
  {
    name: 'IA Transformation',
    price: "dès 14'900",
    duration: '2-4 mois',
    desc: 'Déploiement IA à l\'échelle de la PME.',
    features: [
      'Cas d\'usage illimités',
      'Agents IA sur mesure',
      'Intégrations API avancées',
      'Modèles fine-tunés sur vos données',
      'Conformité & gouvernance',
      '6 mois de support premium',
    ],
    dark: false,
  },
]

const benefits = [
  { icon: Zap, title: 'Gain de temps mesurable', text: 'En moyenne 10-20h / semaine économisées sur les tâches répétitives.' },
  { icon: Brain, title: 'Pas de buzzwords', text: 'Uniquement des cas d\'usage ROI-positifs. On vous dit non si l\'IA n\'apporte rien.' },
  { icon: Check, title: 'Données protégées', text: 'Traitement conforme nLPD/RGPD. Hébergement Suisse quand c\'est possible.' },
]

export default function IAPage() {
  return (
    <>
      <PageSchema
        name="Solutions Intelligence Artificielle pour PME Suisse romande"
        description="Chatbots, automatisation, analyse prédictive et IA dans Odoo. Forfaits dès 2'900 CHF."
        url={PAGE_URL}
        serviceType="AI Solutions"
        offers={[
          { name: 'IA Quickstart', price: '2900' },
          { name: 'IA Business', price: '6900' },
          { name: 'IA Transformation', price: '14900' },
        ]}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.arom.ch/' },
          { name: 'Intelligence Artificielle', url: PAGE_URL },
        ]}
        faqs={faqs}
      />
      <Header />
      <main>
        <PageHero
          image="/images/section-ai.jpg"
          overline="Intelligence Artificielle · Suisse romande"
          title={<>L&apos;IA qui <span className="text-brand-400">crée de la valeur</span><br/>dès le premier jour</>}
          subtitle="Pas de buzzwords. Des solutions concrètes, mesurables, intégrées à vos outils existants. De la première automatisation à la transformation complète."
          primaryCta={{ label: 'Explorer mon projet IA', href: '/#contact' }}
          secondaryCta={{ label: 'Voir les forfaits', href: '#forfaits' }}
        />

        <QuickAnswer
          title="Combien coûte un projet IA pour une PME en Suisse ?"
          answer="Les forfaits IA AROM IT démarrent à 2'900 CHF (Quickstart, 1 cas d'usage), 6'900 CHF (Business, 3 cas d'usage) et dès 14'900 CHF (Transformation à l'échelle). En moyenne, nos clients économisent 10 à 20 heures par semaine sur les tâches répétitives."
          points={[
            "Cas d'usage ROI-positifs : chatbot SAV 24/7, automatisation emails/devis, OCR factures, lead scoring dans Odoo, résumés de réunions",
            "Conformité nLPD (Suisse) et RGPD — hébergement suisse quand techniquement possible",
            "Aucune infrastructure préalable nécessaire — nous intégrons l'IA à vos outils existants",
            "Coûts d'API tiers (OpenAI, Anthropic) facturés au réel, sans marge",
            "Pas de buzzwords : nous refusons les projets où l'IA n'apporte pas de valeur mesurable",
          ]}
        />

        {/* Use cases */}
        <section className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Cas d&apos;usage</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                Où l&apos;IA apporte un vrai ROI
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {usecases.map((u) => (
                <div key={u.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-brand-300 hover:bg-white transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 mb-4">
                    <u.icon size={22} />
                  </div>
                  <h3 className="text-[15px] font-bold text-neutral-900 mb-2">{u.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="sec-pad bg-neutral-950">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
                L&apos;approche AROM
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 mb-4">
                    <b.icon size={22} />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-[13px] text-neutral-400 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="forfaits" className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Forfaits projets</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                Un tarif clair pour chaque ambition
              </h2>
              <p className="text-[15px] text-neutral-500 max-w-lg mx-auto">
                Prix en CHF, HT. Audit initial gratuit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 items-start">
              {tiers.map((t) => (
                <div key={t.name} className={`relative rounded-xl p-7 ${t.dark ? 'bg-neutral-950 ring-2 ring-brand-500 scale-[1.02]' : 'bg-white border border-neutral-200'}`}>
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Plus populaire
                    </div>
                  )}
                  <h3 className={`text-[15px] font-bold mb-1 ${t.dark ? 'text-white' : 'text-neutral-900'}`}>{t.name}</h3>
                  <p className={`text-[13px] mb-5 ${t.dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.desc}</p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className={`text-[2.25rem] font-extrabold ${t.dark ? 'text-white' : 'text-neutral-900'}`}>{t.price}</span>
                    <span className={`text-[13px] ${t.dark ? 'text-neutral-400' : 'text-neutral-500'}`}>CHF</span>
                  </div>
                  <p className={`text-[12px] mb-7 ${t.dark ? 'text-neutral-400' : 'text-neutral-500'}`}>Durée : {t.duration}</p>
                  <ul className="space-y-2.5 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${t.dark ? 'text-brand-400' : 'text-brand-500'}`} />
                        <span className={`text-[13px] ${t.dark ? 'text-neutral-300' : 'text-neutral-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className={`flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold rounded-md transition-colors ${t.dark ? 'bg-brand-500 text-white hover:bg-brand-400' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
                    Démarrer le projet <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-[12px] text-neutral-500 mt-8 max-w-2xl mx-auto">
              Les coûts d&apos;API tiers (OpenAI, Anthropic, etc.) et d&apos;hébergement éventuel sont facturés au réel, sans marge.
            </p>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
