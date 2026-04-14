import { CheckCircle2 } from 'lucide-react'

interface QuickAnswerProps {
  title: string
  answer: string
  points: string[]
}

/**
 * GEO "Quick Answer" block — designed to be cited by AI search engines
 * (ChatGPT, Perplexity, Gemini, Claude). Short, factual, above-the-fold.
 */
export default function QuickAnswer({ title, answer, points }: QuickAnswerProps) {
  return (
    <section className="bg-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-[11px] font-bold uppercase tracking-widest mb-4">
          En bref
        </div>
        <h2 className="text-[1.35rem] sm:text-[1.75rem] font-bold text-neutral-900 tracking-[-0.02em] mb-4">
          {title}
        </h2>
        <p className="text-[15px] text-neutral-700 leading-relaxed mb-5">
          <strong>{answer}</strong>
        </p>
        <ul className="space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[14px] text-neutral-600 leading-relaxed">
              <CheckCircle2 size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
