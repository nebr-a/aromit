'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  image: string
  overline: string
  title: React.ReactNode
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function PageHero({ image, overline, title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <img src={image} alt="" className="img-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950/95" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-[13px] font-medium text-white/80 tracking-wide">{overline}</span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link href={primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-md transition-all text-[15px] shadow-lg shadow-brand-500/25">
              {primaryCta.label} <ArrowRight size={18} />
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-md transition-all text-[15px] backdrop-blur-sm">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
