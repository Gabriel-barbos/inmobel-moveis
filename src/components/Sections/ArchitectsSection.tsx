import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, CheckCircle, Lightbulb, Headphones, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

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
      icon: Headphones,
      title: 'Relacionamento Transparente',
      description: 'Comunicação clara em todas as etapas, mantendo você informado sobre o progresso.'
    }
  ]

  // Depoimentos de arquitetos parceiros
  const testimonials = [
    {
      name: "Cristian Ronald",
      username: "@cris_arquitetura",
      body: "A Inmobel transformou meus projetos em realidade com uma precisão impressionante. A qualidade dos móveis planejados é excepcional.",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Carlos Silva",
      username: "@carlos_design",
      body: "Parceria há 3 anos. Sempre cumprem prazos e respeitam cada detalhe do projeto. Recomendo de olhos fechados!",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "José da silva",
      username: "@joseph_interiores",
      body: "A comunicação é transparente e a execução impecável. Meus clientes ficam sempre encantados com o resultado final.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Roberto Almeida",
      username: "@roberto_projetos",
      body: "Flexibilidade para alterações sem perder a qualidade. A Inmobel entende as necessidades dos arquitetos.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Juliana Santos",
      username: "@ju_arquitetura",
      body: "Suporte técnico excepcional! A equipe sempre tem soluções criativas para os desafios do projeto.",
      img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Pedro Oliveira",
      username: "@pedro_design",
      body: "Trabalho com a Inmobel há 5 anos. A confiança e qualidade são os pilares dessa parceria de sucesso.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ]

  const firstRow = testimonials.slice(0, testimonials.length / 2)
  const secondRow = testimonials.slice(testimonials.length / 2)

  const TestimonialCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
          "border-primary/20 bg-background/50 hover:bg-primary/5 shadow-soft backdrop-blur-sm",
          "transition-all duration-300 hover:shadow-strong hover:scale-105"
        )}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <img 
            className="rounded-full border-2 border-primary/20" 
            width="40" 
            height="40" 
            alt="" 
            src={img} 
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-primary">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-muted-foreground leading-relaxed">
          "{body}"
        </blockquote>
      </figure>
    );
  };

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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

          {/* Testimonials Marquee Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">
                O que nossos parceiros arquitetos dizem
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Depoimentos reais de arquitetos que confiam na Inmobel para executar seus projetos
              </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-8">
              <Marquee pauseOnHover className="[--duration:25s] mb-4">
                {firstRow.map((testimonial) => (
                  <TestimonialCard key={testimonial.username} {...testimonial} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:25s]">
                {secondRow.map((testimonial) => (
                  <TestimonialCard key={testimonial.username} {...testimonial} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div>
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