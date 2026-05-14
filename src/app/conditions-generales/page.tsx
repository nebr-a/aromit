import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conditions générales',
  description: 'Conditions générales de vente et d\'utilisation des services AROM IT & Cloud Services.',
  alternates: { canonical: 'https://www.arom.ch/conditions-generales' },
  robots: { index: true, follow: true },
}

export default function ConditionsGenerales() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h1 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-neutral-900 tracking-[-0.02em] mb-6">
            Conditions générales
          </h1>
          <p className="text-[14px] text-neutral-500 mb-12">
            Mise à jour : {new Date().toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="text-[15px] leading-relaxed text-neutral-700 space-y-6">
            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">1. Prestataire</h2>
              <p>
                Le présent site est édité par AROM IT &amp; Cloud Services, société de services informatiques basée à Payerne et Lausanne, en Suisse romande. Pour tout contact :
              </p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li>Email : <a href="mailto:info@arom.ch" className="text-brand-600 hover:underline">info@arom.ch</a></li>
                <li>Téléphone : <a href="tel:+41265083232" className="text-brand-600 hover:underline">+41 26 508 32 32</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">2. Objet</h2>
              <p>
                Les présentes conditions régissent les prestations fournies par AROM IT, notamment : infogérance informatique, intégration Odoo ERP, solutions d&apos;intelligence artificielle et services associés (hébergement, sauvegarde, cybersécurité, téléphonie).
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">3. Tarifs et facturation</h2>
              <p>
                Tous les tarifs publiés sur le site sont indiqués en CHF, hors TVA. Le tarif horaire ponctuel est de 145 CHF/h, facturé par tranche de 15 minutes. Les forfaits d&apos;infogérance font l&apos;objet d&apos;un contrat annuel renouvelable. Les forfaits projets (Odoo, IA) sont facturés en deux tranches : 50% au lancement, 50% à la mise en production.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">4. Engagement et résiliation</h2>
              <p>
                Les forfaits mensuels d&apos;infogérance sont conclus pour une durée minimale de 12 mois, tacitement reconductibles. La résiliation se fait par écrit avec un préavis de 3 mois avant l&apos;échéance. Une garantie satisfait ou remboursé de 90 jours s&apos;applique à tout nouveau contrat d&apos;infogérance.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">5. Niveau de service (SLA)</h2>
              <p>
                AROM IT s&apos;engage à un délai de réponse maximal de 2 heures ouvrables (1 heure sur le forfait DSI Externalisé). Si cet engagement n&apos;est pas respecté, le mois en cours est offert au client.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">6. Hébergement et données</h2>
              <p>
                AROM IT est partenaire officiel d&apos;Infomaniak. L&apos;ensemble des données de ses clients est hébergé sur l&apos;infrastructure Infomaniak située en Suisse. Les données ne quittent jamais le territoire suisse, sauf accord écrit explicite du client.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">7. Confidentialité</h2>
              <p>
                AROM IT s&apos;engage à respecter la confidentialité absolue de toutes les données et informations auxquelles elle a accès dans le cadre de ses prestations. Les traitements sont conformes à la nLPD (loi suisse) et au RGPD (UE).
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">8. Propriété intellectuelle</h2>
              <p>
                Les développements spécifiques livrés au client lui sont cédés à compter du paiement intégral des prestations. Les outils, méthodes et logiciels génériques utilisés par AROM IT restent sa propriété exclusive.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">9. Responsabilité</h2>
              <p>
                La responsabilité d&apos;AROM IT est limitée aux dommages directs prouvés résultant d&apos;une faute caractérisée de sa part, et plafonnée au montant des prestations facturées sur les 12 derniers mois.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">10. Droit applicable et juridiction</h2>
              <p>
                Les présentes conditions sont régies par le droit suisse. Tout litige relèvera de la compétence exclusive des tribunaux du canton de Vaud, Suisse.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
