'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, Shield, CreditCard, ArrowRight, Star } from 'lucide-react'
import { PRODUCTS, CATEGORIES, getProductsByCategory, type ProductCategory } from '@/lib/products'
import AromLogo from '@/components/AromLogo'
import Link from 'next/link'

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('it-support')
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const visibleProducts = getProductsByCategory(activeCategory)

  async function handleCheckout(productId: string) {
    setLoadingId(productId)
    setError(null)

    // Google Ads / GTM conversion event
    if (typeof window !== 'undefined' && (window as { dataLayer?: unknown[] }).dataLayer) {
      ;(window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
        event: 'begin_checkout',
        product_id: productId,
      })
    }

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Une erreur est survenue.')
      }
    } catch {
      setError('Impossible de joindre le serveur. Veuillez réessayer.')
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#080E1A] text-white">
      {/* Minimal header */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <AromLogo />
        </Link>
        <Link
          href="/#contact"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Besoin d&apos;aide ? <span className="text-brand-400">+41 26 508 32 32</span>
        </Link>
      </header>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-6">
          <Shield size={12} /> Paiement sécurisé · Stripe · TWINT · CHF
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Nos offres{' '}
          <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-transparent">
            disponibles en ligne
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Abonnements, projets et formations — démarrez immédiatement après paiement. Toutes les
          offres incluent un appel d&apos;onboarding avec notre équipe.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><CreditCard size={14} className="text-brand-400" /> Carte de crédit, TWINT</span>
          <span className="flex items-center gap-1.5"><Shield size={14} className="text-green-400" /> Paiement SSL sécurisé</span>
          <span className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-400" /> Activation sous 2h ouvrables</span>
          <span className="flex items-center gap-1.5"><Check size={14} className="text-brand-400" /> Facture TVA incluse</span>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-0 z-20 bg-[#080E1A]/95 backdrop-blur border-b border-white/8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-6 ${
              visibleProducts.length === 2
                ? 'sm:grid-cols-2 max-w-2xl mx-auto'
                : visibleProducts.length === 3
                ? 'sm:grid-cols-3'
                : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {visibleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                  product.popular
                    ? 'border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-transparent shadow-xl shadow-brand-500/10'
                    : 'border-white/8 bg-white/2 hover:border-white/16'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg">
                      <Star size={10} fill="white" /> Le plus populaire
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                    {product.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-2xl font-extrabold text-white">
                    CHF {product.price.toLocaleString('fr-CH')}
                  </span>
                  <span className="text-gray-500 text-sm ml-1.5">
                    {product.type === 'subscription' ? '/ mois' : '— paiement unique'}
                  </span>
                  {product.note && (
                    <p className="text-xs text-gray-500 mt-1">{product.note}</p>
                  )}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={15} className="text-brand-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {error && loadingId === product.id && (
                  <p className="text-red-400 text-xs mb-3">{error}</p>
                )}

                <button
                  onClick={() => handleCheckout(product.id)}
                  disabled={loadingId !== null}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    product.popular
                      ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30 disabled:opacity-60'
                      : 'bg-white/8 hover:bg-white/14 text-white border border-white/10 disabled:opacity-60'
                  }`}
                >
                  {loadingId === product.id ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Redirection…
                    </span>
                  ) : (
                    <>
                      {product.cta}
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom / Enterprise CTA */}
        <div className="mt-12 rounded-2xl border border-white/8 bg-white/2 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-white text-lg">Besoin d&apos;une solution sur mesure ?</h3>
            <p className="text-gray-400 text-sm mt-1">
              Odoo Enterprise, implémentations complexes, IA avancée — parlons-en directement.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 text-white font-semibold text-sm transition-all"
          >
            Demander un devis <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="border-t border-white/8 py-8 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} AROM IT & Cloud Services SA · Z.I. Champ Cheval 2, 1530 Payerne · CHE-XXX.XXX.XXX TVA</p>
        <p className="mt-1">
          Paiements traités par{' '}
          <span className="text-gray-500">Stripe</span> · Les prix sont indiqués en CHF HT
        </p>
      </footer>
    </div>
  )
}
