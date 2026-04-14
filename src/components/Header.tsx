'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'

const solutions = [
  { label: 'IT & Cloud Suisse', href: '/infogerance', desc: 'Support, cloud, réseau, sécurité' },
  { label: 'Intégrateur Odoo', href: '/odoo', desc: 'ERP open source pour PME' },
  { label: 'Intelligence Artificielle', href: '/ia', desc: 'Chatbots, automatisation, analyse' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo-arom-white.png"
              alt="AROM IT & Cloud Services"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-colors">
                Solutions
                <ChevronDown size={13} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-neutral-900 rounded-lg shadow-2xl border border-white/10 py-1.5">
                  {solutions.map((s) => (
                    <Link key={s.label} href={s.href} className="block px-4 py-2.5 hover:bg-white/5 transition-colors">
                      <div className="text-[13px] font-medium text-white">{s.label}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/tarifs" className="px-3.5 py-2 text-[13px] font-medium text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-colors">
              Tarifs
            </Link>
            <Link href="/#contact" className="px-3.5 py-2 text-[13px] font-medium text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+41265083232" className="flex items-center gap-1.5 text-[13px] font-medium text-white/50 hover:text-white transition-colors">
              <Phone size={13} />
              +41 26 508 32 32
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2 bg-brand-500 hover:bg-brand-400 text-white text-[13px] font-bold rounded-md transition-colors"
            >
              Audit gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white/70">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-neutral-950 border-t border-white/5 px-5 pb-6 pt-3">
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider px-3 pt-3 pb-2">Solutions</p>
            {solutions.map((s) => (
              <Link key={s.label} href={s.href} onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 rounded-md">
                {s.label}
              </Link>
            ))}
            <Link href="/tarifs" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 rounded-md">Tarifs</Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 rounded-md">Contact</Link>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
            <a href="tel:+41265083232" className="flex items-center gap-2 px-3 text-sm text-white/50">
              <Phone size={14} /> +41 26 508 32 32
            </a>
            <Link href="/#contact" onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-2.5 bg-brand-500 text-white text-sm font-bold rounded-md">
              Audit gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
