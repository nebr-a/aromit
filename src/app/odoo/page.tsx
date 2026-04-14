import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ShoppingCart, Users, Calculator, Package, UserCheck, BarChart3, Globe, Factory,
  Check, Info, ArrowRight, Zap, Shield, Sparkles,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import QuickAnswer from '@/components/QuickAnswer'
import PageSchema from '@/components/PageSchema'

const PAGE_URL = 'https://www.arom.ch/odoo'

export const metadata: Metadata = {
  title: 'Intégrateur Odoo Suisse romande — Forfaits dès 4\'900 CHF',
  description: "Intégrateur Odoo certifié pour PME en Suisse romande. Forfaits transparents : Starter 4'900 / Business 9'900 / Enterprise dès 19'900 CHF. Licence Odoo en sus. Audit gratuit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Intégrateur Odoo Suisse romande — dès 4\'900 CHF',
    description: 'Ventes, CRM, compta, stock, RH unifiés dans un seul ERP. Forfaits transparents.',
    url: PAGE_URL,
    type: 'website',
    images: ['/images/section-dashboard.jpg'],
  },
}

const faqs = [
  { q: 'Combien coûte une implémentation Odoo pour une PME en Suisse ?', a: "Chez AROM IT, trois forfaits : Odoo Starter à 4'900 CHF (3 modules, 4 semaines), Odoo Business à 9'900 CHF (6 modules, 6-8 semaines), Odoo Enterprise dès 19'900 CHF (sur mesure, 3-4 mois). La licence Odoo est facturée séparément par Odoo SA." },
  { q: 'La licence Odoo est-elle incluse dans vos forfaits ?', a: "Non, la licence Odoo est facturée en sus par Odoo SA. Trois plans existent : Odoo Community (gratuit, open source), Odoo Standard (~24 CHF/utilisateur/mois, 1 app), Odoo Custom (~37 CHF/utilisateur/mois, apps illimitées + développements). Nous vous conseillons le plan optimal lors de l'audit gratuit." },
  { q: 'Combien de temps prend une intégration Odoo ?', a: "Entre 4 semaines (Starter) et 3-4 mois (Enterprise). La moyenne pour une PME classique est de 6-8 semaines avec le forfait Business." },
  { q: 'Où sont hébergées les données Odoo ?', a: "Nous hébergeons votre instance Odoo dans notre datacenter privé à Montreux, en Suisse. Vos données ne sortent pas du pays." },
  { q: 'Quels modules Odoo couvrez-vous ?', a: 'Ventes, CRM, Comptabilité, Stock, RH, Marketing, E-commerce, Production, Achats, Facturation, Projets, Maintenance, etc. Odoo compte plus de 40 modules natifs, nous activons uniquement ceux dont vous avez besoin.' },
]

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

const tiers = [
  {
    name: 'Odoo Starter',
    price: "4'900",
    duration: '4 semaines',
    desc: 'Démarrage rapide pour TPE / petite PME.',
    features: [
      '3 modules au choix',
      'Paramétrage standard',
      'Migration basique (< 5\'000 lignes)',
      '1 journée de formation',
      'Go-live accompagné',
      '30 jours de support inclus',
    ],
    dark: false,
  },
  {
    name: 'Odoo Business',
    price: "9'900",
    duration: '6-8 semaines',
    desc: 'Le choix #1 des PME établies.',
    features: [
      'Jusqu\'à 6 modules',
      'Paramétrage avancé + automatisations',
      'Migration données complète',
      '2 journées de formation (multi-utilisateurs)',
      'Intégrations tierces (banque, e-mail, etc.)',
      '90 jours de support inclus',
      'Hypercare post go-live',
    ],
    dark: true,
    popular: true,
  },
  {
    name: 'Odoo Enterprise',
    price: "dès 19'900",
    duration: '3-4 mois',
    desc: 'Pour PME 20-50 employés & multi-sites.',
    features: [
      'Modules illimités',
      'Développements sur mesure',
      'Migration complexe + ETL',
      'Formation complète équipe',
      'Intégrations API sur mesure',
      '6 mois de support premium',
      'Optimisation & évolutions',
    ],
    dark: false,
  },
]

const why = [
  { icon: Zap, title: 'Intégrateur certifié', text: "Partenaire officiel Odoo — nous connaissons la plateforme en profondeur." },
  { icon: Shield, title: 'Hébergement Suisse', text: "Votre ERP hébergé dans notre datacenter à Montreux. Vos données ne sortent jamais du pays." },
  { icon: Sparkles, title: 'IA intégrée', text: "Lead scoring, prévisions, automatisations : nous branchons l'IA directement dans votre Odoo." },
]

const steps = [
  { n: '01', title: 'Audit gratuit', desc: 'Analyse de vos processus actuels, identification des quick wins et chiffrage précis.' },
  { n: '02', title: 'Configuration', desc: 'Paramétrage, migration de vos données existantes, connexion aux outils tiers.' },
  { n: '03', title: 'Formation', desc: "Sessions sur site avec vos équipes pour une adoption rapide et sans frustration." },
  { n: '04', title: 'Go-live & support', desc: 'Lancement accompagné puis maintenance continue, évolutions et nouveaux modules à la demande.' },
]

export default function OdooPage() {
  return (
    <>
      <PageSchema
        name="Intégration Odoo ERP pour PME Suisse romande"
        description="Intégrateur Odoo certifié en Suisse romande. Forfaits transparents dès 4'900 CHF."
        url={PAGE_URL}
        serviceType="ERP Integration"
        offers={[
          { name: 'Odoo Starter', price: '4900' },
          { name: 'Odoo Business', price: '9900' },
          { name: 'Odoo Enterprise', price: '19900' },
        ]}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.arom.ch/' },
          { name: 'Odoo ERP', url: PAGE_URL },
        ]}
        faqs={faqs}
      />
      <Header />
      <main>
        <PageHero
          image="/images/section-dashboard.jpg"
          overline="Intégrateur Odoo certifié · Suisse romande"
          title={<>Votre entreprise, <span className="text-brand-400">unifiée</span><br/>dans un seul outil</>}
          subtitle="Fini les exports Excel entre logiciels. Odoo connecte ventes, stock, compta, RH et e-commerce en temps réel. AROM vous accompagne de A à Z."
          primaryCta={{ label: 'Discuter de mon projet', href: '/#contact' }}
          secondaryCta={{ label: 'Voir les forfaits', href: '#forfaits' }}
        />

        <QuickAnswer
          title="Combien coûte une implémentation Odoo pour une PME en Suisse ?"
          answer="Les forfaits AROM IT démarrent à 4'900 CHF (Odoo Starter, 3 modules, 4 semaines), 9'900 CHF (Business, 6 modules, 6-8 semaines) et dès 19'900 CHF (Enterprise, sur mesure, 3-4 mois). La licence Odoo est facturée en sus par Odoo SA."
          points={[
            "Licence Odoo en sus : Community gratuit · Standard ~24 CHF/user/mois · Custom ~37 CHF/user/mois",
            "Intégrateur Odoo certifié — partenaire officiel depuis plusieurs années",
            "Hébergement Suisse dans notre datacenter à Montreux",
            "Modules couverts : Ventes, CRM, Comptabilité, Stock, RH, Marketing, E-commerce, Production",
            "Paiement en 2 tranches (50% lancement, 50% go-live) — prix figé au contrat",
          ]}
        />

        {/* Modules */}
        <section className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Un ERP, tous vos métiers</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                40+ modules, parfaitement connectés
              </h2>
              <p className="text-[15px] text-neutral-500 max-w-xl mx-auto">
                Nous activons uniquement ce dont vous avez besoin. Pas de surconfiguration, pas de surcoût.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {modules.map((m) => (
                <div key={m.label} className="flex items-center gap-3 p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-brand-400 hover:bg-white transition-colors">
                  <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <m.icon size={18} />
                  </div>
                  <span className="text-[14px] font-semibold text-neutral-800">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AROM */}
        <section className="sec-pad bg-neutral-950">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
                Pourquoi AROM pour votre Odoo
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {why.map((w) => (
                <div key={w.title} className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 mb-4">
                    <w.icon size={22} />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{w.title}</h3>
                  <p className="text-[13px] text-neutral-400 leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                Notre méthode en 4 étapes
              </h2>
            </div>
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

        {/* Pricing */}
        <section id="forfaits" className="sec-pad bg-neutral-950">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-3 block">Forfaits transparents</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
                Choisissez votre point de départ
              </h2>
              <p className="text-[15px] text-neutral-400 max-w-lg mx-auto">
                Prix en CHF, HT. Paiement en 2 tranches (50% au lancement, 50% au go-live).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 items-start mb-10">
              {tiers.map((t) => (
                <div key={t.name} className={`relative rounded-xl p-7 ${t.dark ? 'bg-brand-500 ring-2 ring-brand-400 scale-[1.02]' : 'bg-white/[0.04] border border-white/[0.08]'}`}>
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-brand-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Plus populaire
                    </div>
                  )}
                  <h3 className="text-[15px] font-bold mb-1 text-white">{t.name}</h3>
                  <p className={`text-[13px] mb-5 ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>{t.desc}</p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-[2.25rem] font-extrabold text-white">{t.price}</span>
                    <span className={`text-[13px] ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>CHF</span>
                  </div>
                  <p className={`text-[12px] mb-7 ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>Durée projet : {t.duration}</p>
                  <ul className="space-y-2.5 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${t.dark ? 'text-white' : 'text-brand-400'}`} />
                        <span className={`text-[13px] ${t.dark ? 'text-white/90' : 'text-neutral-400'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className={`flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold rounded-md transition-colors ${t.dark ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-brand-500 text-white hover:bg-brand-400'}`}>
                    Demander un devis <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Odoo licence disclaimer — VERY EXPLICIT */}
            <div className="max-w-3xl mx-auto p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[14px] font-bold text-amber-200 mb-2">
                    Licence Odoo en sus
                  </h4>
                  <p className="text-[13px] text-amber-100/80 leading-relaxed mb-3">
                    Les forfaits ci-dessus couvrent <strong>la prestation AROM</strong> (audit, configuration, formation, support). La <strong>licence Odoo est facturée séparément par Odoo SA</strong> selon votre plan :
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-amber-100/80">
                    <li className="flex items-start gap-2"><Check size={13} className="text-amber-300 mt-1 flex-shrink-0" /><span><strong>Odoo Community</strong> : gratuit (open source, modules de base)</span></li>
                    <li className="flex items-start gap-2"><Check size={13} className="text-amber-300 mt-1 flex-shrink-0" /><span><strong>Odoo Standard</strong> : ~24 CHF / utilisateur / mois (1 app)</span></li>
                    <li className="flex items-start gap-2"><Check size={13} className="text-amber-300 mt-1 flex-shrink-0" /><span><strong>Odoo Custom</strong> : ~37 CHF / utilisateur / mois (apps illimitées + développements)</span></li>
                  </ul>
                  <p className="text-[12px] text-amber-100/60 mt-3 italic">
                    Nous vous conseillons sur le plan le plus adapté lors de l&apos;audit gratuit. Aucune surprise : tout est chiffré dès le départ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
