'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const COOKIE_KEY = 'arom-cookie-consent'

type Consent = 'accepted' | 'declined' | null

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args as unknown as Record<string, unknown>)
}

function applyConsent(value: 'granted' | 'denied') {
  gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY) as Consent
      if (saved === 'accepted') {
        applyConsent('granted')
        return
      }
      if (saved === 'declined') {
        applyConsent('denied')
        return
      }
      setVisible(true)
    } catch {
      // localStorage indisponible → on affiche le bandeau
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
    applyConsent('granted')
    setVisible(false)
  }

  const decline = () => {
    try {
      localStorage.setItem(COOKIE_KEY, 'declined')
    } catch {
      /* ignore */
    }
    applyConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto sm:max-w-md z-[60]"
    >
      <div className="bg-neutral-950 text-white rounded-xl shadow-2xl border border-white/10 p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">
            <Cookie size={18} />
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-bold mb-1">On utilise quelques cookies</h3>
            <p className="text-[12.5px] text-neutral-400 leading-relaxed">
              Pour mesurer l&apos;audience et améliorer le site. Aucune donnée personnelle n&apos;est partagée. Conforme nLPD (Suisse) et RGPD.{' '}
              <Link href="/politique-de-cookies-ue" className="text-brand-400 hover:text-brand-300 underline">
                En savoir plus
              </Link>
            </p>
          </div>
          <button
            onClick={decline}
            aria-label="Fermer"
            className="text-neutral-500 hover:text-white transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={accept}
            className="flex-1 px-4 py-2.5 bg-brand-500 hover:bg-brand-400 text-white text-[13px] font-bold rounded-md transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={decline}
            className="flex-1 px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-white text-[13px] font-semibold rounded-md transition-colors border border-white/10"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
