const clients = [
  'Fiduciaire Helvétique', 'Garage du Lac', 'Cabinet Médical Riviera',
  'Boulangerie Artisanale SA', 'Immobilière Vaudoise', 'Restaurant Le Panorama',
  'Transport Broyard', 'Clinique Dentaire Payerne', 'Vignoble du Lavaux',
  "Bureau d'architectes MPR", 'Pharmacie Centrale',
]

export default function Clients() {
  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-shrink-0">
            <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-wider">50+ PME nous font confiance</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {clients.map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 bg-white rounded-md border border-neutral-200 text-[11px] font-medium text-neutral-500"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
