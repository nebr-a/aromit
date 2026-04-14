const stats = [
  { value: '9+', label: "Ans d'expérience" },
  { value: '50+', label: 'PME accompagnées' },
  { value: '99.9%', label: 'Uptime garanti' },
  { value: '<2h', label: 'Temps de réponse' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <img src="/images/section-earth.jpg" alt="" className="img-cover" loading="lazy" />
      <div className="absolute inset-0 bg-neutral-950/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="text-[3rem] sm:text-[3.5rem] font-extrabold text-white tracking-tight leading-none mb-1">{s.value}</div>
              <div className="text-[13px] font-medium text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
