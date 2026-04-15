import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import SchemaOrg from '@/components/SchemaOrg'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const GTM_ID = 'GTM-WNNP52LK'

const SITE_URL = 'https://www.arom.ch'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AROM IT & Cloud Services — Infogérance, Odoo & IA en Suisse romande',
    template: '%s | AROM IT & Cloud Services',
  },
  description:
    "Infogérance IT, intégration Odoo ERP et Intelligence Artificielle pour PME en Suisse romande. Forfaits dès 490 CHF/mois. Données hébergées en Suisse. Audit gratuit. Payerne · Lausanne · Fribourg · Genève.",
  keywords: [
    // Core
    'infogérance PME Suisse',
    'support informatique entreprise',
    'IT managed services Switzerland',
    'DSI externalisé Suisse romande',
    // GEO — cities
    'support informatique Lausanne',
    'infogérance Payerne',
    'infogérance Fribourg',
    'infogérance Genève',
    'support IT Neuchâtel',
    'infogérance Bulle',
    'infogérance Yverdon',
    'infogérance Morges',
    'infogérance Nyon',
    'infogérance Vevey',
    'infogérance Montreux',
    'infogérance Sion',
    // GEO — cantons
    'infogérance canton de Vaud',
    'infogérance canton de Fribourg',
    'IT Suisse romande',
    // Odoo
    'intégrateur Odoo Suisse',
    'intégrateur Odoo Lausanne',
    'partenaire Odoo Suisse romande',
    'ERP PME Suisse',
    'Odoo Valais Vaud Fribourg',
    // AI
    'intelligence artificielle PME Suisse',
    'chatbot entreprise Suisse',
    'automatisation IA PME',
    'IA Odoo',
    // Cloud / security
    'cloud privé suisse',
    'hébergement suisse PME',
    'cybersécurité PME Suisse',
    'sauvegarde cloud suisse',
    'datacenter Montreux',
    // Brand
    'AROM IT',
    'AROM Cloud Services',
  ],
  authors: [{ name: 'AROM IT & Cloud Services', url: SITE_URL }],
  creator: 'AROM IT',
  publisher: 'AROM IT',
  category: 'Technology',
  applicationName: 'AROM IT & Cloud Services',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AROM IT & Cloud Services — Infogérance, Odoo & IA en Suisse romande',
    description:
      'Forfaits transparents dès 490 CHF/mois. Données hébergées en Suisse. Garantie 90 jours. Payerne · Lausanne.',
    url: SITE_URL,
    siteName: 'AROM IT & Cloud Services',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: '/images/hero-datacenter.jpg',
        width: 1200,
        height: 630,
        alt: 'AROM IT & Cloud Services — Partenaire informatique PME en Suisse romande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AROM IT — Infogérance, Odoo & IA en Suisse romande',
    description: 'Forfaits transparents dès 490 CHF/mois. Audit gratuit.',
    images: ['/images/hero-datacenter.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-CH': SITE_URL,
      fr: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  verification: {
    // TODO: add once codes are issued
    // google: 'xxxxxxxxxxxxxxxxxxxxx',
    // other: { 'msvalidate.01': 'xxxxxxxxxxxxxxxxxxxxxxxx' },
  },
  other: {
    'geo.region': 'CH-VD',
    'geo.placename': 'Payerne, Lausanne',
    'geo.position': '46.8218;6.9432',
    ICBM: '46.8218, 6.9432',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CH" className={jakarta.variable}>
      <head>
        <SchemaOrg />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
