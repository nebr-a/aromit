import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Cloud, Shield, Headphones, Server, Lock, Network,
  Check, ArrowRight, Phone,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import QuickAnswer from '@/components/QuickAnswer'
import ServiceAreas from '@/components/ServiceAreas'
import PageSchema from '@/components/PageSchema'

const PAGE_URL = 'https://www.arom.ch/infogerance'

export const metadata: Metadata = {
  title: 'Infogérance IT PME Suisse romande — dès 490 CHF/mois',
  description: "Infogérance et support informatique pour PME en Suisse romande. Forfaits transparents dès 490 CHF/mois. Cloud suisse, cybersécurité, sauvegarde. Payerne · Lausanne · Fribourg · Genève.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Infogérance IT PME Suisse romande — dès 490 CHF/mois',
    description: 'Support illimité, cloud suisse, cybersécurité. Garantie 90 jours. SLA 2h.',
    url: PAGE_URL,
    type: 'website',
    images: ['/images/section-network.jpg'],
  },
}

const faqs = [
  { q: 'Combien coûte l\'infogérance d\'une PME en Suisse romande ?', a: 'Chez AROM IT, les forfaits d\'infogérance démarrent à 490 CHF/mois (3-5 postes), 990 CHF/mois (6-12 postes) et dès 1\'890 CHF/mois pour le DSI externalisé (15-30 postes). Le tarif horaire ponctuel est de 145 CHF/h, facturé par tranche de 15 minutes.' },
  { q: 'Vos données sont-elles hébergées en Suisse ?', a: 'Oui. En tant que partenaire officiel Infomaniak, nous hébergeons l\'intégralité des données de nos clients sur leurs datacenters 100% suisses. Elles ne quittent jamais le territoire suisse.' },
  { q: 'Quelles villes de Suisse romande couvrez-vous ?', a: 'Nous intervenons dans les 6 cantons romands : Vaud, Fribourg, Genève, Neuchâtel, Valais, Jura. Principales villes servies : Lausanne, Genève, Fribourg, Neuchâtel, Sion, Bulle, Yverdon, Morges, Nyon, Vevey, Montreux, Payerne.' },
  { q: 'Quel est votre délai de réponse ?', a: 'SLA contractuel de 2 heures ouvrables sur les forfaits Sérénité et Bouclier, 1 heure sur le DSI Externalisé. Si nous ne tenons pas notre engagement, le mois est offert.' },
  { q: 'Puis-je résilier mon forfait ?', a: 'Engagement minimum 12 mois, résiliable à chaque échéance annuelle avec préavis de 3 mois. Garantie satisfait ou remboursé de 90 jours sur tous les nouveaux contrats.' },
]

const services = [
  { icon: Headphones, title: 'Helpdesk & support', text: 'Tickets illimités, réponse en moins de 2h, intervention sur site en Suisse romande.' },
  { icon: Cloud, title: 'Cloud privé suisse', text: "Hébergement sur l'infrastructure Infomaniak (datacenters suisses). Vos données ne sortent jamais du pays." },
  { icon: Shield, title: 'Cybersécurité', text: 'EDR nouvelle génération, anti-phishing, formation équipe, audits réguliers.' },
  { icon: Server, title: 'Infrastructure & serveurs', text: "Conception, migration, supervision 24/7, maintenance préventive et corrective." },
  { icon: Network, title: 'Réseau & WiFi', text: 'Câblage, switches managés, WiFi pro, VPN, connexions multi-sites sécurisées.' },
  { icon: Lock, title: 'Sauvegarde & PRA', text: 'Backup automatisé, réplication sur l\'infrastructure Infomaniak (Suisse), plan de reprise testé.' },
]

const tiers = [
  {
    name: 'Sérénité',
    price: '490',
    desc: 'Pour TPE de 3 à 5 postes.',
    features: [
      'Support illimité (tickets + téléphone)',
      '5h d\'intervention/mois incluses',
      'Monitoring proactif 24/7',
      'Mises à jour & patchs sécurité',
      'Sauvegarde cloud Suisse',
      'Anti-virus entreprise',
      'Rapport mensuel',
    ],
    dark: false,
  },
  {
    name: 'Bouclier',
    price: '990',
    desc: 'Pour PME de 6 à 12 postes.',
    features: [
      'Tout du forfait Sérénité',
      '12h d\'intervention/mois incluses',
      'Cybersécurité renforcée (EDR)',
      'Formation anti-phishing équipe',
      'Audit sécurité trimestriel',
      'Interlocuteur technique dédié',
      'SLA garanti 2h',
      'Tarif horaire réduit 120 CHF/h',
    ],
    dark: true,
    popular: true,
  },
  {
    name: 'DSI Externalisé',
    price: "dès 1'890",
    desc: 'Pour PME de 15 à 30 postes.',
    features: [
      'Tout du forfait Bouclier',
      'Heures illimitées',
      'Priorité maximale (SLA 1h)',
      'Stratégie IT & roadmap annuelle',
      'Comité de pilotage trimestriel',
      'Audits sécurité mensuels',
      'Formation équipe illimitée',
      'Veille technologique',
    ],
    dark: false,
  },
]

const included = [
  'Tarif horaire ponctuel : 145 CHF/h',
  'Facturation par tranche de 15 minutes',
  'Intervention sur site en Suisse romande',
  'Accès portail client 24/7',
  'Téléphonie 3CX certifiée disponible en option',
]

export default function InfogerancePage() {
  return (
    <>
      <PageSchema
        name="Infogérance IT & Cloud PME Suisse romande"
        description="Support informatique, cloud privé suisse, cybersécurité et sauvegarde pour PME. Forfaits dès 490 CHF/mois."
        url={PAGE_URL}
        serviceType="IT Managed Services"
        offers={[
          { name: 'Forfait Sérénité', price: '490', unit: 'month' },
          { name: 'Forfait Bouclier', price: '990', unit: 'month' },
          { name: 'DSI Externalisé', price: '1890', unit: 'month' },
        ]}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.arom.ch/' },
          { name: 'Infogérance', url: PAGE_URL },
        ]}
        faqs={faqs}
      />
      <Header />
      <main>
        <PageHero
          image="/images/section-network.jpg"
          overline="Infogérance IT & Cloud · Suisse romande"
          title={<>Votre IT qui <span className="text-brand-400">ne vous réveille jamais</span> la nuit</>}
          subtitle="Support, cloud suisse, sécurité, sauvegarde. Un seul interlocuteur, des prix publics, zéro surprise. Vos données restent en Suisse."
          primaryCta={{ label: 'Demander un audit gratuit', href: '/#contact' }}
          secondaryCta={{ label: 'Voir les forfaits', href: '#forfaits' }}
        />

        <QuickAnswer
          title="Combien coûte l'infogérance d'une PME en Suisse romande ?"
          answer="Les forfaits d'infogérance AROM IT démarrent à 490 CHF/mois (3-5 postes), 990 CHF/mois (6-12 postes) et dès 1'890 CHF/mois pour le DSI externalisé (15-30 postes). Tarif horaire ponctuel : 145 CHF/h facturé par tranche de 15 min."
          points={[
            "Données hébergées en Suisse (infrastructure Infomaniak) — elles ne quittent jamais le pays",
            "SLA contractuel : réponse sous 2h (1h pour le DSI Externalisé)",
            "Garantie Sérénité 90 jours : remboursement intégral si insatisfaction",
            "Intervention sur site dans les 6 cantons romands (VD · FR · GE · NE · VS · JU)",
            "Capacité limitée à 5 nouveaux clients infogérance par trimestre pour garantir la qualité",
          ]}
        />

        {/* Services */}
        <section className="sec-pad bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Tout ce que couvre votre forfait</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
                Une équipe complète, un seul contrat
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-brand-300 hover:bg-white transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 mb-4">
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-[15px] font-bold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="forfaits" className="sec-pad bg-neutral-950">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-[12px] font-bold text-brand-400 uppercase tracking-widest mb-3 block">Forfaits mensuels</span>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white tracking-[-0.02em] mb-3">
                Des prix publics. Une rareté dans le secteur.
              </h2>
              <p className="text-[15px] text-neutral-400 max-w-lg mx-auto">
                Prix en CHF, HT. Engagement 12 mois, résiliable à chaque échéance.
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
                  <div className="flex items-baseline gap-1.5 mb-7">
                    <span className="text-[2.25rem] font-extrabold text-white">{t.price}</span>
                    <span className={`text-[13px] ${t.dark ? 'text-brand-100' : 'text-neutral-500'}`}>CHF / mois</span>
                  </div>
                  <ul className="space-y-2.5 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${t.dark ? 'text-white' : 'text-brand-400'}`} />
                        <span className={`text-[13px] ${t.dark ? 'text-white/90' : 'text-neutral-400'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className={`flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold rounded-md transition-colors ${t.dark ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-brand-500 text-white hover:bg-brand-400'}`}>
                    Choisir {t.name} <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="max-w-3xl mx-auto p-6 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <h4 className="text-[13px] font-bold text-white mb-4 uppercase tracking-wider">Inclus dans toutes les formules</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-neutral-300">
                    <Check size={13} className="text-brand-400 mt-1 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-10">
              <a href="tel:+41265083232" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/70 hover:text-white transition-colors">
                <Phone size={15} className="text-brand-400" />
                Envie d&apos;en discuter ? +41 26 508 32 32
              </a>
            </div>
          </div>
        </section>

        <ServiceAreas />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
