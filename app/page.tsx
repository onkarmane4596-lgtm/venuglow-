import { Header } from '@/components/landing/header'
import { HeroSection } from '@/components/landing/hero-section'
import { AboutSection } from '@/components/landing/about-section'
import { BrandsSection } from '@/components/landing/brands-section'
import { WhyChooseUsSection } from '@/components/landing/why-choose-us-section'
import { B2BSection } from '@/components/landing/b2b-section'
import { ContactSection } from '@/components/landing/contact-section'
import { Footer } from '@/components/landing/footer'
import { FloatingWhatsApp } from '@/components/landing/floating-whatsapp'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <WhyChooseUsSection />
      <B2BSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
