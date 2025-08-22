import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'
import heroImage from '@/assets/hero-kitchen.jpg'

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cozinha planejada luxuosa da Inmobel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content - Left Side */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Referência em Móveis Planejados de Alto Padrão</span>
            </div>

            {/* Main Heading */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                <span className="block">Inmobel</span>
                <span className="block text-accent">Móveis Planejados</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl animate-fade-in">
              Design sob medida com excelência em cada detalhe. 
              Transformamos sonhos em realidade através de móveis únicos e funcionais.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToPortfolio}
                className="group"
              >
                Conheça nosso portfólio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in">
              <div>
                <div className="flex items-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                  <Award className="w-6 h-6 text-accent mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-1">15+</h3>
                <p className="text-primary-foreground/80 text-sm">Anos de Experiência</p>
              </div>
              <div>
                <div className="flex items-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                  <Users className="w-6 h-6 text-accent mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-1">500+</h3>
                <p className="text-primary-foreground/80 text-sm">Projetos Entregues</p>
              </div>
              <div>
                <div className="flex items-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                  <Clock className="w-6 h-6 text-accent mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-1">100%</h3>
                <p className="text-primary-foreground/80 text-sm">Prazo Cumprido</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection