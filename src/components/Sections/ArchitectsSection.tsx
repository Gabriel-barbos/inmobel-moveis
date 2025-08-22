import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, CheckCircle, Lightbulb, HeadphonesIcon, ArrowRight } from 'lucide-react'

const ArchitectsSection = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Apoio Técnico Completo',
      description: 'Suporte no detalhamento do projeto com nossa equipe especializada em móveis planejados.'
    },
    {
      icon: CheckCircle,
      title: 'Flexibilidade para Alterações',
      description: 'Adaptamos o projeto conforme o gosto do cliente, mantendo a essência do seu design.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes em execução de projetos de arquitetura de alto padrão.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Relacionamento Transparente',
      description: 'Comunicação clara em todas as etapas, mantendo você informado sobre o progresso.'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="architects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Parcerias com Arquitetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Na Inmobel, entendemos a importância da parceria com arquitetos. 
              Oferecemos suporte total para a execução dos projetos, proporcionando 
              flexibilidade e acompanhamento em todas as fases da obra.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <Card className="p-8 gradient-elegant shadow-strong border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Por que os arquitetos escolhem a Inmobel?
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Execução Fiel ao Projeto</h4>
                      <p className="text-muted-foreground">Respeitamos cada detalhe do seu projeto, garantindo que a visão criativa seja preservada na execução.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Prazo e Qualidade</h4>
                      <p className="text-muted-foreground">Cumprimos rigorosamente os cronogramas estabelecidos sem comprometer a qualidade do acabamento.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Comunicação Transparente</h4>
                      <p className="text-muted-foreground">Mantemos uma comunicação clara e constante sobre o andamento de cada etapa do projeto.</p>
                    </div>
                  </div>
                </div>

                <Button variant="accent" onClick={scrollToContact} className="group">
                  Vamos conversar sobre uma parceria
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-6 animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Nosso Suporte Inclui:</h3>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-soft group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16">
            <Card className="p-8 gradient-primary text-primary-foreground text-center shadow-strong">
              <h3 className="text-2xl font-bold mb-8">Parcerias de Sucesso</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <p className="text-primary-foreground/80">Arquitetos Parceiros</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <p className="text-primary-foreground/80">Projetos em Parceria</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-primary-foreground/80">Satisfação dos Parceiros</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectsSection