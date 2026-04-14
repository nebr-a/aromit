import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import PainPoints from '@/components/PainPoints'
import Stats from '@/components/Stats'
import WhyArom from '@/components/WhyArom'
import Clients from '@/components/Clients'
import ServiceAreas from '@/components/ServiceAreas'
import FAQ from '@/components/FAQ'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <PainPoints />
        <Stats />
        <WhyArom />
        <Clients />
        <ServiceAreas />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
