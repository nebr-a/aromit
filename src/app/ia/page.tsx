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
  { icon: Bot, title: 'Assistant qui répond 24h/24', text: "Sur votre site, WhatsApp ou Messenger : il répond aux questions clients, qualifie les prospects et prend des rendez-vous, même la nuit." },
  { icon: Workflow, title: 'Tâches répétitives automatisées', text: 'Réponses standards aux e-mails, rédaction de devis, génération de documents — l\'IA fait le travail à votre place.' },
  { icon: BarChart3, title: 'Prévisions & alertes', text: "Prévoir les ventes du mois prochain, détecter les anomalies dans vos chiffres, voir l'état de votre activité en un coup d'œil." },
  { icon: LayoutGrid, title: 'IA branchée dans Odoo', text: "Scoring automatique des prospects, suggestion de réassort de stock, analyse des avis clients — directement dans votre logiciel de gestion." },
  { icon: FileText, title: 'Lire vos documents à votre place', text: 'L\'IA lit vos factures, contrats et PDF, en extrait les informations clés et les classe automatiquement.' },
  { icon: MessageSquare, title: 'Résumés & recherche interne', text: 'Résumé automatique des réunions, et un moteur de recherche qui répond à partir de tous vos documents internes.' },
]

const tiers = [
  {
    name: 'IA Quickstart',
    price: "2'900",
    duration: '2-3 semaines',
    desc: 'Votre premier projet IA, concret et rapide.',
    features: [
      '1 assistant IA ou 1 automatisation',
      "Branchement sur 1 outil que vous utilisez déjà (site, e-mail, Odoo...)",
      'Formation de votre équipe (½ journée)',
      'Mise en production accompagnée',
      '30 jours de support après lancement',
    ],
    dark: false,
  },
  {
    name: 'IA Business',
    price: "6'900",
    duration: '4-6 semaines',
    desc: 'Plusieurs usages combinés dans votre entreprise.',
    features: [
      'Jusqu\'à 3 cas d\'usage IA différents',
      'Branchement sur plusieurs outils (CRM, ERP, e-mail)',
      'Tableau de bord pour suivre les résultats',
      'Formation approfondie de l\'équipe',
      '90 jours de support après lancement',
      'Optimisation continue le 1er trimestre',
    ],
    dark: true,
    popular: true,
  },
  {
    name: 'IA Transformation',
    price: "dès 14'900",
    duration: '2-4 mois',
    desc: 'L\'IA déployée dans toute votre entreprise.',
    features: [
      'Nombre d\'usages illimité',
      'Agents IA sur mesure pour votre métier',
      'Intégrations avancées avec vos systèmes',
      'IA spécialisée avec vos propres données',
      'Mise en conformité et règles d\'utilisation',
      '6 mois de support premium',
    ],
    dark: false,
  },
]

const benefits = [
  { icon: Zap, title: 'Gain de temps mesurable', text: 'En moyenne 10 à 20 heures par semaine gagnées sur les tâches répétitives, dès le premier mois.' },
  { icon: Brain, title: 'Pas de bullshit', text: 'On ne fait de l\'IA que là où elle apporte un vrai gain. Sinon, on vous le dit franchement.' },
  { icon: Check, title: 'Vos données protégées', text: 'Conforme aux lois suisses (nLPD) et européennes (RGPD). Hébergement Suisse autant que possible.' },
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
          title={<>L&apos;IA qui vous <span className="text-brand-400">fait gagner</span> du temps,<br/>pas du blabla</>}
          subtitle="L'IA branchée directement dans vos outils existants pour automatiser ce qui vous prend des heures aujourd'hui. On démarre petit, on prouve le gain, puis on étend."
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
                Où l&apos;IA vous fait vraiment gagner du temps
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
