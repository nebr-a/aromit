interface BreadcrumbItem {
  name: string
  url: string
}

interface FaqItem {
  q: string
  a: string
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  serviceType: string
  offers?: { name: string; price: string; priceCurrency?: string; unit?: 'project' | 'month' | 'hour' }[]
  breadcrumbs: BreadcrumbItem[]
  faqs?: FaqItem[]
}

const SITE = 'https://www.arom.ch'

export default function PageSchema({ name, description, url, serviceType, offers, breadcrumbs, faqs }: ServiceSchemaProps) {
  const graph: Record<string, unknown>[] = []

  // Breadcrumbs
  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  })

  // Service
  graph.push({
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    provider: { '@id': `${SITE}/#business` },
    areaServed: [
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'AdministrativeArea', name: 'Suisse romande' },
      { '@type': 'AdministrativeArea', name: 'Canton de Vaud' },
      { '@type': 'AdministrativeArea', name: 'Canton de Fribourg' },
      { '@type': 'AdministrativeArea', name: 'Canton de Genève' },
      { '@type': 'AdministrativeArea', name: 'Canton de Neuchâtel' },
      { '@type': 'AdministrativeArea', name: 'Canton du Valais' },
      { '@type': 'AdministrativeArea', name: 'Canton du Jura' },
    ],
    ...(offers && offers.length > 0
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name,
            itemListElement: offers.map((o) => ({
              '@type': 'Offer',
              name: o.name,
              price: o.price.replace(/[^0-9]/g, ''),
              priceCurrency: o.priceCurrency || 'CHF',
              availability: 'https://schema.org/InStock',
              ...(o.unit === 'month'
                ? {
                    priceSpecification: {
                      '@type': 'UnitPriceSpecification',
                      price: o.price.replace(/[^0-9]/g, ''),
                      priceCurrency: 'CHF',
                      unitCode: 'MON',
                      referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
                    },
                  }
                : {}),
            })),
          },
        }
      : {}),
  })

  // WebPage
  graph.push({
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'fr-CH',
    isPartOf: { '@id': `${SITE}/#website` },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    about: { '@id': `${SITE}/#business` },
  })

  // FAQ Page
  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
