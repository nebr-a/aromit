import { MapPin } from 'lucide-react'

const cantons = [
  {
    name: 'Canton de Vaud',
    cities: ['Lausanne', 'Yverdon-les-Bains', 'Morges', 'Nyon', 'Vevey', 'Montreux', 'Renens', 'Pully', 'Payerne'],
  },
  {
    name: 'Canton de Fribourg',
    cities: ['Fribourg', 'Bulle', 'Romont', 'Châtel-Saint-Denis', 'Estavayer-le-Lac'],
  },
  {
    name: 'Canton de Genève',
    cities: ['Genève', 'Carouge', 'Meyrin', 'Vernier'],
  },
  {
    name: 'Canton de Neuchâtel',
    cities: ['Neuchâtel', 'La Chaux-de-Fonds', 'Le Locle'],
  },
  {
    name: 'Canton du Valais',
    cities: ['Sion', 'Martigny', 'Monthey', 'Sierre'],
  },
  {
    name: 'Canton du Jura',
    cities: ['Delémont', 'Porrentruy'],
  },
]

export default function ServiceAreas() {
  return (
    <section className="sec-pad bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-3 block">Zones d&apos;intervention</span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-neutral-900 tracking-[-0.02em] mb-3">
            Une équipe IT partout en Suisse romande
          </h2>
          <p className="text-[15px] text-neutral-500 max-w-xl mx-auto">
            Intervention à distance sous 2h. Intervention sur site dans les 6 cantons romands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cantons.map((c) => (
            <div key={c.name} className="p-6 rounded-xl border border-neutral-200 hover:border-brand-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-brand-500" />
                <h3 className="text-[14px] font-bold text-neutral-900">{c.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {c.cities.map((city) => (
                  <li key={city} className="px-2.5 py-1 rounded-md bg-neutral-50 border border-neutral-100 text-[12px] text-neutral-600">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-neutral-500 mt-8">
          Vous n&apos;êtes pas dans cette liste ? <a href="tel:+41265083232" className="text-brand-600 font-semibold hover:underline">Contactez-nous au +41 26 508 32 32</a>, nous intervenons dans toute la Suisse romande.
        </p>
      </div>
    </section>
  )
}
