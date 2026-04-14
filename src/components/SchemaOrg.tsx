export default function SchemaOrg() {
  const SITE = 'https://www.arom.ch'

  const areasServed = [
    // Villes principales
    'Payerne', 'Lausanne', 'Fribourg', 'Genève', 'Neuchâtel', 'Sion', 'Bulle',
    'Yverdon-les-Bains', 'Morges', 'Nyon', 'Vevey', 'Montreux', 'Renens',
    'Pully', 'La Chaux-de-Fonds', 'Delémont', 'Martigny', 'Monthey',
    'Estavayer-le-Lac', 'Avenches', 'Romont', 'Châtel-Saint-Denis',
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness / ProfessionalService
      {
        '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
        '@id': `${SITE}/#business`,
        name: 'AROM IT & Cloud Services',
        alternateName: ['AROM IT', 'AROM Cloud'],
        url: SITE,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/images/logo-arom-white.png`,
          width: 400,
          height: 120,
        },
        image: `${SITE}/images/hero-datacenter.jpg`,
        description:
          "Infogérance IT, intégration Odoo ERP et Intelligence Artificielle pour PME en Suisse romande. Forfaits transparents dès 490 CHF/mois. Données hébergées en Suisse. Depuis 2015.",
        slogan: 'Votre partenaire informatique de confiance en Suisse romande',
        foundingDate: '2015',
        telephone: '+41265083232',
        email: 'info@arom.ch',
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: 'Z.I. Champ Cheval 2',
            postalCode: '1530',
            addressLocality: 'Payerne',
            addressRegion: 'VD',
            addressCountry: 'CH',
          },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.8218,
          longitude: 6.9432,
        },
        hasMap: 'https://www.google.com/maps?q=AROM+IT+Payerne',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        priceRange: 'CHF 145–200/h · Forfaits dès 490 CHF/mois',
        paymentAccepted: ['Invoice', 'Credit Card', 'Bank Transfer', 'TWINT'],
        currenciesAccepted: 'CHF',
        areaServed: [
          { '@type': 'Country', name: 'Suisse', alternateName: 'Switzerland' },
          { '@type': 'AdministrativeArea', name: 'Suisse romande' },
          { '@type': 'AdministrativeArea', name: 'Canton de Vaud' },
          { '@type': 'AdministrativeArea', name: 'Canton de Fribourg' },
          { '@type': 'AdministrativeArea', name: 'Canton de Genève' },
          { '@type': 'AdministrativeArea', name: 'Canton de Neuchâtel' },
          { '@type': 'AdministrativeArea', name: 'Canton du Valais' },
          { '@type': 'AdministrativeArea', name: 'Canton du Jura' },
          ...areasServed.map((c) => ({ '@type': 'City', name: c })),
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: 46.8218, longitude: 6.9432 },
          geoRadius: 100000,
        },
        knowsAbout: [
          'Infogérance informatique', 'Cloud computing', 'Cybersécurité PME',
          'Odoo ERP', 'Intelligence artificielle', 'Automatisation',
          'Sauvegarde cloud', 'Téléphonie 3CX VoIP', 'Microsoft 365',
          'Google Workspace', 'Réseau informatique', 'WiFi entreprise',
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'Intégrateur Odoo certifié' },
          { '@type': 'EducationalOccupationalCredential', name: 'Certifié 3CX' },
        ],
        sameAs: [
          'https://www.linkedin.com/company/arom-it',
          'https://www.google.com/maps?q=AROM+IT+Payerne',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '47',
          bestRating: '5',
          worstRating: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services AROM IT',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Infogérance & support IT',
              url: `${SITE}/infogerance`,
              itemListElement: [
                { '@type': 'Offer', name: 'Forfait Sérénité', price: '490', priceCurrency: 'CHF', priceSpecification: { '@type': 'UnitPriceSpecification', price: '490', priceCurrency: 'CHF', unitCode: 'MON' } },
                { '@type': 'Offer', name: 'Forfait Bouclier', price: '990', priceCurrency: 'CHF', priceSpecification: { '@type': 'UnitPriceSpecification', price: '990', priceCurrency: 'CHF', unitCode: 'MON' } },
                { '@type': 'Offer', name: 'DSI Externalisé', price: '1890', priceCurrency: 'CHF', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1890', priceCurrency: 'CHF', unitCode: 'MON' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Intégration Odoo ERP',
              url: `${SITE}/odoo`,
              itemListElement: [
                { '@type': 'Offer', name: 'Odoo Starter', price: '4900', priceCurrency: 'CHF' },
                { '@type': 'Offer', name: 'Odoo Business', price: '9900', priceCurrency: 'CHF' },
                { '@type': 'Offer', name: 'Odoo Enterprise', price: '19900', priceCurrency: 'CHF' },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Intelligence Artificielle',
              url: `${SITE}/ia`,
              itemListElement: [
                { '@type': 'Offer', name: 'IA Quickstart', price: '2900', priceCurrency: 'CHF' },
                { '@type': 'Offer', name: 'IA Business', price: '6900', priceCurrency: 'CHF' },
                { '@type': 'Offer', name: 'IA Transformation', price: '14900', priceCurrency: 'CHF' },
              ],
            },
            { '@type': 'Offer', name: 'Audit IT gratuit', price: '0', priceCurrency: 'CHF' },
          ],
        },
        makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infogérance PME Suisse romande' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégration Odoo ERP' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solutions IA pour entreprise' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud privé suisse' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersécurité PME' } },
        ],
      },

      // Website
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'AROM IT & Cloud Services',
        description: 'Infogérance, Odoo ERP et IA pour PME en Suisse romande',
        inLanguage: 'fr-CH',
        publisher: { '@id': `${SITE}/#business` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
