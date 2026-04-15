const clients = [
  { name: 'Medifit', logo: '/images/clients/medifit.jpg' },
  { name: 'de Blasio', logo: '/images/clients/de-blasio.jpg' },
  { name: 'En Douce Heure', logo: '/images/clients/en-douce-heure.jpg' },
  { name: 'SM Espace Design', logo: '/images/clients/sm-espace-design.jpg' },
  { name: 'Sanitherme', logo: '/images/clients/sanitherme.png' },
  { name: 'Technibat', logo: '/images/clients/technibat.png' },
  { name: 'Superpose', logo: '/images/clients/superpose.jpg' },
  { name: 'Baraki', logo: '/images/clients/baraki.jpg' },
  { name: 'Beaulieu', logo: '/images/clients/beaulieu.png' },
  { name: 'Boulevard Santé', logo: '/images/clients/boulevard-sante.png' },
  { name: 'Rochart', logo: '/images/clients/rochart.jpg' },
]

export default function Clients() {
  return (
    <section className="py-16 bg-white border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">
            Ils nous font confiance
          </span>
          <h2 className="text-[1.5rem] sm:text-[1.875rem] font-bold text-neutral-900 tracking-[-0.02em]">
            Des PME de Suisse romande qui nous confient leur IT au quotidien
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center p-4 h-24 rounded-lg bg-neutral-50 border border-neutral-100 grayscale hover:grayscale-0 transition-all"
              title={c.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={`Logo ${c.name}`}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
