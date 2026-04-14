import Stripe from 'stripe'

const key = process.env.STRIPE_SECRET_KEY

// Stripe instance — null si clé non configurée (mode démo)
export const stripe: Stripe | null = key && key.startsWith('sk_')
  ? new Stripe(key, { apiVersion: '2023-10-16', typescript: true })
  : null

export const stripeConfigured = Boolean(stripe)
