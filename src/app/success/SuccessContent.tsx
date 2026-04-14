'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Calendar, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AromLogo from '@/components/AromLogo'

export default function SuccessContent() {
  const params = useSearchParams()
  const productName = params.get('product') ?? 'votre commande'
  const calendlyPath = params.get('calendly') ?? ''

  useEffect(() => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as { dataLayer?: unknown[] }).dataLayer) {
      ;(window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
        event: 'purchase',
        product: productName,
      })
    }
  }, [productName])

  const calendlyUrl = calendlyPath
    ? `https://calendly.com/arom-it/${calendlyPath}`
    : 'https://calendly.com/arom-it'

  return (
    <div className="min-h-screen bg-[#080E1A] text-white flex flex-col">
      <header className="border-b border-white/8 px-6 py-4">
        <Link href="/">
          <AromLogo />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center">
              <CheckCircle size={40} className="text-green-400" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold mb-3">Paiement confirmé !</h1>
          <p className="text-gray-400 text-lg mb-2">
            Merci pour votre confiance.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Votre commande <span className="text-white font-semibold">{decodeURIComponent(productName)}</span> est enregistrée.
            Vous recevrez une confirmation par email dans quelques minutes.
          </p>

          {/* Next steps */}
          <div className="rounded-2xl border border-white/8 bg-white/3 p-6 mb-6 text-left">
            <h2 className="font-bold text-white mb-4">Prochaines étapes</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email de confirmation</p>
                  <p className="text-xs text-gray-500 mt-0.5">Vérifiez votre boîte mail (et les spams). La facture TVA est jointe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Réservez votre appel d&apos;onboarding</p>
                  <p className="text-xs text-gray-500 mt-0.5">Notre équipe vous accueille dans les 2h ouvrables pour démarrer.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Lancement du service</p>
                  <p className="text-xs text-gray-500 mt-0.5">Activation et configuration selon le plan acheté.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Calendly */}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all mb-3"
          >
            <Calendar size={16} />
            Réserver mon appel d&apos;onboarding
            <ArrowRight size={14} />
          </a>

          <a
            href="tel:+41265083232"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm"
          >
            <Phone size={14} />
            Ou appelez-nous : +41 26 508 32 32
          </a>

          <Link
            href="/"
            className="inline-block mt-6 text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
