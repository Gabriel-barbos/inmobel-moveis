import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Heart, Target, ArrowRight } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Conheça a Inmobel
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com tradição em Santa Catarina e agora expandindo para São Paulo, 
              a Inmobel carrega 15 anos de experiência na criação de móveis planejados únicos.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Nossa História */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Nossa História</h3>
                    <p className="text-accent font-medium">De Santa Catarina para São Paulo</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nascemos em Santa Catarina com o sonho de transformar ambientes através de 
                  móveis planejados que unem design sofisticado e funcionalidade excepcional. 
                  Nossa paixão por detalhes e compromisso com a qualidade nos trouxeram até São Paulo, 
                  onde continuamos criando espaços únicos que refletem a personalidade de cada cliente.
                </p>
              </div>

              {/* Mission & Values Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 hover-lift shadow-soft border-l-4 border-l-primary">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Heart className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary ml-4">Missão</h4>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Entregar móveis planejados que unem design, funcionalidade e 
                    excelência no acabamento, superando expectativas e criando ambientes únicos.
                  </p>
                </Card>

                <Card className="p-8 hover-lift shadow-soft border-l-4 border-l-accent">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary ml-4">Valores</h4>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Qualidade, personalização, cumprimento de prazos e 
                    proximidade com nossos clientes são os pilares que guiam cada projeto.
                  </p>
                </Card>
              </div>
            </div>

            {/* Stats Card */}
            <div className="animate-scale-in">
              <Card className="p-8 gradient-primary text-primary-foreground shadow-strong h-fit sticky top-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Por que escolher a Inmobel?</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">15</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-lg mb-1">Anos de Experiência</p>
                      <p className="text-primary-foreground/80">Tradição e confiabilidade comprovadas no mercado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">2</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-lg mb-1">Estados Atendidos</p>
                      <p className="text-primary-foreground/80">Presença consolidada em SC e expansão em SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">100%</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-lg mb-1">Projetos Personalizados</p>
                      <p className="text-primary-foreground/80">Cada móvel é único e feito especialmente para você</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-primary-foreground/20">
                  <Button variant="secondary" className="w-full group">
                    Conheça nossos projetos
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
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