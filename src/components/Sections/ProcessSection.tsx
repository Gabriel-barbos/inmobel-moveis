import { Card } from '@/components/ui/card'
import { MessageSquare, Palette, CheckCircle, Hammer, Home, Shield } from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Briefing Detalhado',
      description: 'Conversamos com cliente e arquiteto para entender todas as necessidades e expectativas.',
      step: '01'
    },
    {
      icon: Palette,
      title: 'Projeto 3D',
      description: 'Desenvolvemos o projeto em 3D para visualização completa antes da execução.',
      step: '02'
    },
    {
      icon: CheckCircle,
      title: 'Aprovação e Ajustes',
      description: 'Refinamos cada detalhe até a aprovação final do projeto personalizado.',
      step: '03'
    },
    {
      icon: Hammer,
      title: 'Produção Sob Medida',
      description: 'Fabricação artesanal com materiais premium e tecnologia de precisão.',
      step: '04'
    },
    {
      icon: Home,
      title: 'Entrega e Montagem',
      description: 'Instalação cuidadosa por nossa equipe especializada no local.',
      step: '05'
    },
    {
      icon: Shield,
      title: 'Pós-venda e Garantia',
      description: 'Suporte completo e garantia estendida para sua tranquilidade.',
      step: '06'
    }
  ]

  return (
    <section id="process" className="py-20 gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Um processo estruturado e transparente que garante a entrega de móveis únicos, 
              do conceito inicial até a instalação final.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 gradient-accent opacity-30"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 gradient-accent rounded-full border-4 border-background z-10"></div>
                  
                  <Card className="pt-12 pb-8 px-6 text-center hover-lift shadow-medium group">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="inline-block p-8 gradient-primary text-primary-foreground shadow-strong">
              <h3 className="text-2xl font-bold mb-4">Qualidade em Cada Etapa</h3>
              <p className="text-primary-foreground/90 max-w-md">
                Nosso processo garante que cada móvel seja único, funcional e 
                entregue exatamente como você sonhou.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection