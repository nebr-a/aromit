import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Politique de cookies du site arom.ch — conformité nLPD (Suisse) et RGPD (Union européenne).',
  alternates: { canonical: 'https://www.arom.ch/politique-de-cookies-ue' },
  robots: { index: true, follow: true },
}

export default function PolitiqueCookies() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h1 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-neutral-900 tracking-[-0.02em] mb-6">
            Politique de cookies
          </h1>
          <p className="text-[14px] text-neutral-500 mb-12">Mise à jour : {new Date().toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-neutral max-w-none text-[15px] leading-relaxed text-neutral-700 space-y-6">
            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site internet. Il permet au site de mémoriser certaines informations (préférences, statistiques de visite, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">Quels cookies utilisons-nous ?</h2>
              <p>Le site arom.ch utilise deux catégories de cookies :</p>

              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 my-4">
                <h3 className="font-bold text-neutral-900 mb-2">1. Cookies strictement nécessaires</h3>
                <p className="text-[14px] text-neutral-600 mb-2">
                  Indispensables au fonctionnement du site. Ils sont déposés automatiquement, sans consentement, conformément à l&apos;art. 45c LTC (loi suisse) et à l&apos;art. 82 de la loi française.
                </p>
                <ul className="text-[14px] text-neutral-600 list-disc list-inside">
                  <li>Préférences de consentement aux cookies</li>
                  <li>Sécurité de session</li>
                </ul>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 my-4">
                <h3 className="font-bold text-neutral-900 mb-2">2. Cookies de mesure d&apos;audience</h3>
                <p className="text-[14px] text-neutral-600 mb-2">
                  Déposés <strong>uniquement après votre acceptation</strong> via le bandeau de cookies. Ils nous permettent de comprendre comment vous utilisez le site pour l&apos;améliorer.
                </p>
                <ul className="text-[14px] text-neutral-600 list-disc list-inside">
                  <li>Google Tag Manager / Google Analytics — mesure d&apos;audience anonymisée</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">Comment gérer vos préférences ?</h2>
              <p>
                Vous pouvez à tout moment accepter ou refuser les cookies de mesure d&apos;audience via le bandeau qui apparaît lors de votre première visite. Pour modifier votre choix ultérieurement, supprimez les cookies de votre navigateur ou videz les données du site — le bandeau réapparaîtra.
              </p>
              <p>
                Vous pouvez également configurer votre navigateur pour bloquer tous les cookies (cela peut altérer le fonctionnement de certains sites).
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">Conformité légale</h2>
              <p>
                Cette politique respecte la loi suisse sur la protection des données (nLPD, en vigueur depuis le 1er septembre 2023), la loi sur les télécommunications (LTC art. 45c) et le règlement européen RGPD (UE 2016/679).
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-neutral-900 mt-8 mb-3">Contact</h2>
              <p>
                Pour toute question relative à cette politique ou au traitement de vos données :
              </p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li>AROM IT &amp; Cloud Services</li>
                <li>Payerne &amp; Lausanne, Suisse</li>
                <li>Email : <a href="mailto:info@arom.ch" className="text-brand-600 hover:underline">info@arom.ch</a></li>
                <li>Téléphone : <a href="tel:+41265083232" className="text-brand-600 hover:underline">+41 26 508 32 32</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
