import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/images/logo-arom-white.png" alt="AROM IT" className="h-12 w-auto mb-4" />
            <p className="text-[13px] text-neutral-500 leading-relaxed">
              Votre partenaire informatique de confiance en Suisse romande depuis 2015.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link href="/infogerance" className="text-[13px] text-neutral-500 hover:text-white transition-colors">IT & Cloud Suisse</Link></li>
              <li><Link href="/odoo" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Intégrateur Odoo</Link></li>
              <li><Link href="/ia" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Intelligence Artificielle</Link></li>
              <li><Link href="/tarifs" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Tarifs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Entreprise</h4>
            <ul className="space-y-2.5">
              <li><Link href="/#contact" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/conditions-generales" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Conditions générales</Link></li>
              <li><Link href="/politique-de-cookies-ue" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Politique de cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="text-brand-400" />
                <a href="tel:+41265083232" className="text-[13px] text-neutral-500 hover:text-white transition-colors">+41 26 508 32 32</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-brand-400" />
                <a href="mailto:info@arom.ch" className="text-[13px] text-neutral-500 hover:text-white transition-colors">info@arom.ch</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-brand-400 mt-0.5" />
                <span className="text-[13px] text-neutral-500">Payerne & Lausanne</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-neutral-600">&copy; {new Date().getFullYear()} AROM IT & Cloud Services</p>
          <p className="text-[11px] text-neutral-600">Suisse romande</p>
        </div>
      </div>
    </footer>
  )
}
