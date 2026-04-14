import { Suspense } from 'react'
import SuccessContent from './SuccessContent'

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080E1A] flex items-center justify-center text-white">Chargement…</div>}>
      <SuccessContent />
    </Suspense>
  )
}
