import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Expand } from 'lucide-react'
import heroImage from '@/assets/hero-kitchen.jpg'
import closetImage from '@/assets/portfolio-closet.jpg'
import officeImage from '@/assets/portfolio-office.jpg'
import { TypewriterEffectSmooth } from '../ui/typewritter-effect'

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

const words = [
  { text: "Conheça", className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl" },
  { text: "nosso", className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl" },
  { text: "Portfólio", className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-orange-500 dark:text-orange-500" },
];


  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'kitchen', name: 'Salas' },
    { id: 'bedroom', name: 'Quartos' },
    { id: 'office', name: 'Áreas comerciais' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Cozinha Minimalista Premium',
      category: 'kitchen',
      image: heroImage,
      description: 'Design moderno com acabamento em laca fosca e detalhes em marcenaria de precisão.',
      tags: ['Moderno', 'Minimalista', 'Premium']
    },
    {
      id: 2,
      title: 'Closet Organizacional Completo',
      category: 'bedroom',
      image: closetImage,
      description: 'Sistema de organização inteligente com iluminação LED integrada.',
      tags: ['Organização', 'LED', 'Funcional']
    },
    {
      id: 3,
      title: 'Home Office Executivo',
      category: 'office',
      image: officeImage,
      description: 'Ambiente profissional com design sofisticado e máxima funcionalidade.',
      tags: ['Profissional', 'Sofisticado', 'Produtivo']
    },
    {
      id: 4,
      title: 'Cozinha Gourmet Integrada',
      category: 'kitchen',
      image: heroImage,
      description: 'Espaço gourmet com ilha central e área de convivência integrada.',
      tags: ['Gourmet', 'Ilha Central', 'Integrado']
    },
    {
      id: 5,
      title: 'Dormitório Casal Elegante',
      category: 'bedroom',
      image: closetImage,
      description: 'Quarto principal com cabeceira planejada e criados suspensos.',
      tags: ['Elegante', 'Suspenso', 'Casal']
    },
    {
      id: 6,
      title: 'Escritório Corporativo',
      category: 'office',
      image: officeImage,
      description: 'Design corporativo com soluções de armazenamento inteligentes.',
      tags: ['Corporativo', 'Armazenamento', 'Inteligente']
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="portfolio" className="py-20 gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
  <div className="text-center mb-16 animate-fade-in">
<h2 className="font-bold text-primary mb-6 text-center break-words leading-tight">
  <span className="inline-block max-w-full">
    <TypewriterEffectSmooth words={words} />
  </span>
</h2>



  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
    Cada projeto é uma obra única, criada especialmente para nossos clientes
  </p>
</div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'accent' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover-lift shadow-soft animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button variant="hero" size="sm" className="w-full">
                        <Expand className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-500 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA com Glass Effect Modernizado */}
          <div className="text-center relative">
            {/* Background decorativo com blur */}
            <div className="absolute -inset-4 opacity-30 blur-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 animate-pulse"></div>
            
            {/* Card principal com glass effect */}
            <div className="relative p-8 gradient-primary text-primary-foreground shadow-strong inline-block rounded-xl backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-[1.02] transition-all duration-500 ease-out">
              
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
              
              {/* Floating elements decorativos */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-8 left-6 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-500"></div>
              
              {/* Shine effect que passa pelo card */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
              
              {/* Conteúdo */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  Gostou do que viu?
                  <div className="w-16 h-0.5 bg-white/40 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </h3>
                
                <p className="text-primary-foreground/90 mb-6 max-w-md transform group-hover:translate-y-1 transition-transform duration-300 delay-75">
                  Entre em contato conosco e transforme sua ideia em um projeto único
                </p>
                
                <button 
                  onClick={scrollToContact}
                  className="bg-accent text-accent-foreground hover:bg-accent-light group/btn relative overflow-hidden px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Button background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Solicitar Projeto Personalizado
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" />
                  </span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg animate-ping bg-white/20"></div>
                  </div>
                </button>
              </div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 blur-sm -z-10"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-float"></div>
              <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-float-slow"></div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  )
}

export default PortfolioSection