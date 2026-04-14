import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.arom.ch'
  const now = new Date()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/infogerance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/odoo`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ia`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/tarifs`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/conditions-generales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/politique-de-cookies-ue`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
