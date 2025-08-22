import Header from '@/components/Layout/Header'
import HeroSection from '@/components/Sections/HeroSection'
import AboutSection from '@/components/Sections/AboutSection'
import DifferentialsSection from '@/components/Sections/DifferentialsSection'
import PortfolioSection from '@/components/Sections/PortfolioSection'
import ArchitectsSection from '@/components/Sections/ArchitectsSection'
import ProcessSection from '@/components/Sections/ProcessSection'
import ContactSection from '@/components/Sections/ContactSection'
import Footer from '@/components/Layout/Footer'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <PortfolioSection />
        <ArchitectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
