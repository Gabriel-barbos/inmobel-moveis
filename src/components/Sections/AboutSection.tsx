import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Heart, Target, ArrowRight } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com tradição em Santa Catarina e agora expandindo para São Paulo, 
              a Inmobel carrega 15 anos de experiência na criação de móveis planejados únicos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa História</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nascemos em Santa Catarina com o sonho de transformar ambientes através de 
                  móveis planejados que unem design sofisticado e funcionalidade excepcional. 
                  Nossa paixão por detalhes e compromisso com a qualidade nos trouxeram até São Paulo.
                </p>
                
                <div className="flex items-center text-accent mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">De Santa Catarina para São Paulo</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6 hover-lift shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary ml-3">Missão</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Entregar móveis planejados que unem design, funcionalidade e 
                    excelência no acabamento, superando expectativas.
                  </p>
                </Card>

                <Card className="p-6 hover-lift shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary ml-3">Valores</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Qualidade, personalização, cumprimento de prazos e 
                    proximidade com nossos clientes são nossos pilares.
                  </p>
                </Card>
              </div>

              <div className="pt-6">
                <Button variant="primary" className="group">
                  Conheça nossos projetos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Image/Stats */}
            <div className="space-y-6 animate-scale-in">
              <Card className="p-8 gradient-primary text-primary-foreground shadow-strong">
                <h3 className="text-3xl font-bold mb-6 text-center">Por que escolher a Inmobel?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">15</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Anos de Experiência</p>
                      <p className="text-primary-foreground/80 text-sm">Tradição e confiabilidade comprovadas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Estados Atendidos</p>
                      <p className="text-primary-foreground/80 text-sm">Santa Catarina e São Paulo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">100%</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Projetos Personalizados</p>
                      <p className="text-primary-foreground/80 text-sm">Cada móvel é único para você</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection