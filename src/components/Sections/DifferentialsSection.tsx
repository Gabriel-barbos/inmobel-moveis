import { Card } from '@/components/ui/card'
import { CheckCircle, Clock, Palette, Headphones, Award, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

const DifferentialsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const differentials = [
    {
      icon: CheckCircle,
      title: 'Serviço com Excelência',
      description: 'Cuidado em cada detalhe do projeto, desde o primeiro contato até a entrega final.',
      color: 'text-accent',
      gradient: 'from-green-400/20 via-emerald-500/10 to-teal-400/20'
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Compromisso real com cronogramas. Sua obra não para por nossa causa.',
      color: 'text-primary',
      gradient: 'from-blue-400/20 via-indigo-500/10 to-purple-400/20'
    },
    {
      icon: Palette,
      title: 'Projetos 100% Personalizados',
      description: 'Adaptação completa aos seus gostos e necessidades específicas.',
      color: 'text-accent',
      gradient: 'from-pink-400/20 via-rose-500/10 to-orange-400/20'
    },
    {
      icon: Headphones,
      title: 'Acompanhamento Completo',
      description: 'Suporte total nas fases pré e pós-obra, sempre que você precisar.',
      color: 'text-primary',
      gradient: 'from-cyan-400/20 via-blue-500/10 to-indigo-400/20'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: '15 anos de experiência e centenas de projetos entregues com excelência.',
      color: 'text-accent',
      gradient: 'from-yellow-400/20 via-amber-500/10 to-orange-400/20'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e dedicados ao seu projeto único.',
      color: 'text-primary',
      gradient: 'from-violet-400/20 via-purple-500/10 to-pink-400/20'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]))
            }, index * 150)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const cards = document.querySelectorAll('[data-index]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="differentials" className="py-20 bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/3 to-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}} />
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-primary/5 via-accent/3 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out blur-xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Nossos Diferenciais
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              O que nos torna únicos na criação de móveis planejados de alto padrão
            </p>
          </div>

          {/* Enhanced Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {differentials.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards.has(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
              >
                <Card className="group relative p-8 h-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  {/* Card Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-float"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center h-full flex flex-col">
                    {/* Enhanced Icon Container */}
                    <div className="relative mb-6 mx-auto">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <item.icon className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Enhanced Text Content */}
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-accent/40 group-hover:to-primary/20 rounded-full transition-all duration-500" />
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Elegant Bottom CTA */}
          <div className="text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg text-primary hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group">
              <Award className="w-5 h-5 mr-3 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                Comprometimento com a excelência em cada projeto
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default DifferentialsSection