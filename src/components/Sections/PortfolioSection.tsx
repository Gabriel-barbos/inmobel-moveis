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
  { text: "Conheça", className: "text-6xl md:text-7xl" },
  { text: "nosso", className: "text-6xl md:text-7xl" },
  { text: "Portfólio", className: "text-6xl md:text-7xl text-orange-500 dark:text-orange-500" },
];

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'kitchen', name: 'Cozinhas' },
    { id: 'bedroom', name: 'Dormitórios' },
    { id: 'office', name: 'Escritórios' }
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
<h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
  <span className="inline-block text-5xl md:text-6xl font-bold text-primary">
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

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 gradient-primary text-primary-foreground shadow-strong inline-block">
              <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Entre em contato conosco e transforme sua ideia em um projeto único
              </p>
              <Button 
                variant="hero" 
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground hover:bg-accent-light group"
              >
                Solicitar Projeto Personalizado
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection