import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

const BASE_URL = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Paiement en ligne non encore configuré. Appelez-nous au +41 26 508 32 32.' },
      { status: 503 },
    )
  }

  try {
    const { productId } = await req.json()

    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) {
      return NextResponse.json({ error: 'Produit introuvable.' }, { status: 404 })
    }

    const isSubscription = product.type === 'subscription'

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      locale: 'fr',
      // payment_method_types: ['card', 'twint'], // Activer TWINT depuis le dashboard Stripe
      line_items: [
        {
          price_data: {
            currency: 'chf',
            product_data: {
              name: product.name,
              description: product.tagline,
            },
            unit_amount: product.price * 100,
            ...(isSubscription && {
              recurring: { interval: 'month' },
            }),
          },
          quantity: 1,
        },
      ],
      billing_address_collection: 'required',
      tax_id_collection: { enabled: true },
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&product=${encodeURIComponent(product.name)}&calendly=${product.calendlyPath ?? ''}`,
      cancel_url: `${BASE_URL}/boutique`,
      metadata: {
        productId: product.id,
        category: product.category,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement. Contactez-nous au +41 26 508 32 32.' },
      { status: 500 },
    )
  }
}
