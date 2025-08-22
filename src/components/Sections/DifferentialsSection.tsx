import { Card } from '@/components/ui/card'
import { CheckCircle, Clock, Palette, Headphones, Award, Users } from 'lucide-react'

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: CheckCircle,
      title: 'Serviço com Excelência',
      description: 'Cuidado em cada detalhe do projeto, desde o primeiro contato até a entrega final.',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Compromisso real com cronogramas. Sua obra não para por nossa causa.',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Projetos 100% Personalizados',
      description: 'Adaptação completa aos seus gostos e necessidades específicas.',
      color: 'text-accent'
    },
    {
      icon: Headphones,
      title: 'Acompanhamento Completo',
      description: 'Suporte total nas fases pré e pós-obra, sempre que você precisar.',
      color: 'text-primary'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: '15 anos de experiência e centenas de projetos entregues com excelência.',
      color: 'text-accent'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e dedicados ao seu projeto único.',
      color: 'text-primary'
    }
  ]

  return (
    <section id="differentials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O que nos torna únicos na criação de móveis planejados de alto padrão
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <Card key={index} className="p-6 hover-lift shadow-soft animate-scale-in group">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 gradient-primary rounded-full text-primary-foreground shadow-strong">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">Comprometimento com a excelência em cada projeto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentialsSection