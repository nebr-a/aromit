import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Check, ArrowRight, ShieldCheck, Clock, AlertCircle, Zap,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import QuickAnswer from '@/components/QuickAnswer'
import PageSchema from '@/components/PageSchema'

const PAGE_URL = 'https://www.arom.ch/tarifs'

export const metadata: Metadata = {
  title: 'Tarifs IT, Odoo & IA — Prix publics | AROM IT',
  description: "Tous nos forfaits IT, Odoo et IA. Infogérance dès 490 CHF/mois, Odoo dès 4'900 CHF, IA dès 2'900 CHF. Garantie 90 jours, SLA contractuel, prix publics.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tarifs transparents — AROM IT & Cloud Services',
    description: 'Prix publics pour tous nos services. Garantie 90 jours.',
    url: PAGE_URL,
    type: 'website',
    images: ['/images/section-earth.jpg'],
  },
}

const faqs = [
  { q: 'Affichez-vous vraiment tous vos prix publiquement ?', a: 'Oui. Contrairement à la quasi-totalité des prestataires IT en Suisse romande, nous publions tous nos forfaits : infogérance (490 / 990 / 1\'890 CHF/mois), Odoo (4\'900 / 9\'900 / 19\'900 CHF) et IA (2\'900 / 6\'900 / 14\'900 CHF). Le tarif horaire ponctuel est de 145 CHF/h, facturé par tranche de 15 minutes.' },
  { q: 'Comment fonctionne la garantie 90 jours ?', a: 'Si durant les 90 premiers jours de votre forfait d\'infogérance vous n\'êtes pas satisfait, nous remboursons intégralement les mensualités versées. Sans condition, sans justification.' },
  { q: 'Qu\'est-ce qui est inclus dans le SLA ?', a: 'Engagement contractuel de réponse sous 2h ouvrables (1h sur le DSI Externalisé). Si nous ratons cet engagement, le mois est offert.' },
  { q: 'Y a-t-il des frais cachés ?', a: 'Non. Ce qui est affiché est ce que vous payez. Pas de supplément week-end, pas de frais de dossier, pas d\'escalade surprise. Les seuls coûts externes clairement identifiés : la licence Odoo (facturée par Odoo SA) et les API tierces pour l\'IA (OpenAI, Anthropic) facturées au réel sans marge.' },
  { q: 'Pourquoi limitez-vous à 5 nouveaux clients par trimestre ?', a: 'Pour garantir la qualité du suivi. Nous préférons servir excellemment 20 PME par an que mal en servir 100. Si notre quota trimestriel est atteint, vous êtes mis sur liste d\'attente prioritaire.' },
]

const infogerance = [
  {
    name: 'Sérénité',
    price: '490',
    unit: 'CHF / mois',
    desc: '3-5 postes · support illimité',
    href: '/infogerance#forfaits',
  },
  {
    name: 'Bouclier',
    price: '990',
    unit: 'CHF / mois',
    desc: '6-12 postes · sécurité renforcée',
    href: '/infogerance#forfaits',
    popular: true,
  },
  {
    name: 'DSI Externalisé',
    price: "dès 1'890",
    unit: 'CHF / mois',
    desc: '15-30 postes · stratégie incluse',
    href: '/infogerance#forfaits',
  },
]

const odoo = [
  { name: 'Starter', price: "4'900", unit: 'CHF · projet', desc: '3 modules · 4 semaines', href: '/odoo#forfaits' },
  { name: 'Business', price: "9'900", unit: 'CHF · projet', desc: '6 modules · 6-8 semaines', href: '/odoo#forfaits', popular: true },
  { name: 'Enterprise', price: "dès 19'900", unit: 'CHF · projet', desc: 'Sur mesure · 3-4 mois', href: '/odoo#forfaits' },
]

const ia = [
  { name: 'Quickstart', price: "2'900", unit: 'CHF · projet', desc: '1 cas d\'usage · 2-3 semaines', href: '/ia#forfaits' },
  { name: 'Business', price: "6'900", unit: 'CHF · projet', desc: '3 cas d\'usage · 4-6 semaines', href: '/ia#forfaits', popular: true },
  { name: 'Transformation', price: "dès 14'900", unit: 'CHF · projet', desc: 'À l\'échelle · 2-4 mois', href: '/ia#forfaits' },
]

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Garantie Sérénité 90 jours',
    text: 'Si durant les 90 premiers jours vous n\'êtes pas satisfait, nous remboursons intégralement les forfaits d\'infogérance. Sans condition.',
  },
  {
    icon: Clock,
    title: 'SLA garanti contractuellement',
    text: 'Réponse en moins de 2h ouvrables (1h sur le DSI Externalisé). Si on rate notre engagement, le mois est offert.',
  },
  {
    icon: AlertCircle,
    title: 'Prix publics, aucun piège',
    text: 'Ce que vous lisez, c\'est ce que vous payez. Pas de frais cachés, pas de supplément week-end, pas d\'escalade.',
  },
  {
    icon: Zap,
    title: 'Capacité limitée',
    text: 'Pour garantir la qualité du suivi, nous intégrons au maximum 5 nouveaux clients infogérance par trimestre.',
  },
]

function TierCard({ tier }: { tier: { name: string; price: string; unit: string; desc: string; href: string; popular?: boolean } }) {
  return (
    <div className={`relative rounded-xl p-6 ${tier.popular ? 'bg-brand-500 ring-2 ring-brand-400' : 'bg-white/[0.04] border border-white/[0.08]'}`}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-brand-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Populaire
        </div>
      )}
      <h4 className="text-[14px] font-bold text-white mb-1">{tier.name}</h4>
      <p className={`text-[12px] mb-4 ${tier.popular ? 'text-brand-100' : 'text-neutral-500'}`}>{tier.desc}</p>
      <div className="flex items-baseline gap-1.5 mb-5">
        <span className="text-[1.75rem] font-extrabold text-white">{tier.price}</span>
        <span className={`text-[12px] ${tier.popular ? 'text-brand-100' : 'text-neutral-500'}`}>{tier.unit}</span>
      </div>
      <Link href={tier.href} className={`flex items-center justify-center gap-2 w-full py-2.5 text-[12px] font-bold rounded-md transition-colors ${tier.popular ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-brand-500 text-white hover:bg-brand-400'}`}>
        Voir le détail <ArrowRight size={12} />
      </Link>
    </div>
  )
}

export default function TarifsPage() {
  return (
    <>
      <PageSchema
        name="Tarifs AROM IT — Infogérance, Odoo & IA"
        description="Tous les tarifs publics : infogérance dès 490 CHF/mois, Odoo dès 4'900 CHF, IA dès 2'900 CHF."
        url={PAGE_URL}
        serviceType="IT Services Pricing"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.arom.ch/' },
          { name: 'Tarifs', url: PAGE_URL },
        ]}
        faqs={faqs}
      />
      <Header />
      <main>
        <PageHero
          image="/images/section-earth.jpg"
          overline="Tarifs publics · tous nos services"
          title={<>Des prix <span className="text-brand-400">clairs</span>,<br/>une promesse <span className="text-brand-400">tenue</span></>}
          subtitle="Ce que vous voyez est ce que vous payez. Garantie 90 jours, SLA contractuel, capacité limitée : la transparence comme signature."
          primaryCta={{ label: 'Parler à un expert', href: '/#contact' }}
        />

        <QuickAnswer
          title="Quels sont les tarifs de AROM IT pour les PME en Suisse romande ?"
          answer="Infogérance : 490 / 990 / dès 1'890 CHF/mois. Intégration Odoo ERP : 4'900 / 9'900 / dès 19'900 CHF (licence Odoo en sus). Solutions IA : 2'900 / 6'900 / dès 14'900 CHF. Tarif horaire ponctuel : 145 CHF/h facturé par tranche de 15 minutes."
          points={[
            "Prix publics — rareté dans le secteur IT suisse romand",
            "Garantie Sérénité 90 jours (remboursement intégral si insatisfaction)",
            "SLA contractuel : réponse en moins de 2h ouvrables, sinon le mois est offert",
            "Capacité limitée à 5 nouveaux clients d'infogérance par trimestre",
            "Aucun frais caché : licence Odoo (facturée par Odoo SA) et API IA (OpenAI/Anthropic) clairement identifiés",
          ]}
        />

        {/* Infogérance */}
        <section className="sec-pad bg-neutral-950 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-2 block">Récurrent · mensuel</span>
                <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-white tracking-[-0.02em]">Infogérance IT & Cloud</h2>
              </div>
              <Link href="/infogerance" className="text-[13px] font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1">
                Voir la page infogérance <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {infogerance.map((t) => <TierCard key={t.name} tier={t} />)}
            </div>
            <p className="text-center text-[12px] text-neutral-500 mt-6">Support ponctuel hors forfait : 145 CHF/h</p>
          </div>
        </section>

        {/* Odoo */}
        <section className="sec-pad bg-neutral-950 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-2 block">Projet · forfait</span>
                <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-white tracking-[-0.02em]">Intégration Odoo ERP</h2>
              </div>
              <Link href="/odoo" className="text-[13px] font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1">
                Voir la page Odoo <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {odoo.map((t) => <TierCard key={t.name} tier={t} />)}
            </div>
            <p className="text-center text-[12px] text-amber-400/80 mt-6 font-medium">
              ⚠ Licence Odoo en sus (facturée par Odoo SA) · dès 0 CHF (Community) à ~37 CHF/user/mois (Custom)
            </p>
          </div>
        </section>

        {/* IA */}
        <section className="sec-pad bg-neutral-950">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-2 block">Projet · forfait</span>
                <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-white tracking-[-0.02em]">Intelligence Artificielle</h2>
              </div>
              <Link href="/ia" className="text-[13px] font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1">
                Voir la page IA <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {ia.map((t) => <TierCard key={t.name} tier={t} />)}
            </div>
            <p className="text-center text-[12px] text-neutral-500 mt-6">
              Coûts d&apos;API tiers (OpenAI, Anthropic...) facturés au réel, sans marge
            </p>
          </div>
        </section>

        {/* Guarantees */}
        <section className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Nos engagements</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                Zéro risque de votre côté
              </h2>
              <p className="text-[15px] text-neutral-500 max-w-xl mx-auto">
                On s&apos;engage. Si on ne tient pas, c&apos;est nous qui payons.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {guarantees.map((g) => (
                <div key={g.title} className="p-7 rounded-xl border border-neutral-200 hover:border-brand-400 transition-colors bg-neutral-50/50">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 mb-5">
                    <g.icon size={24} />
                  </div>
                  <h3 className="text-[16px] font-bold text-neutral-900 mb-2">{g.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
