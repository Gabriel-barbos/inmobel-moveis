import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Heart, Target, ArrowRight } from 'lucide-react'

// Componente para contadores animados
const AnimatedCounter = ({ target, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            const start = Date.now();
            const animate = () => {
              const progress = Math.min((Date.now() - start) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              if (typeof target === 'string') {
                setCount(target);
              } else {
                setCount(Math.floor(target * easeOutQuart));
              }
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration, delay, isVisible]);

  return (
    <span id={`counter-${target}`} className="text-primary font-bold text-lg">
      {count}{typeof target === 'string' ? '' : ''}
    </span>
  );
};

// Componente para cada item do card
const FeatureItem = ({ number, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-start group cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:translate-x-2 opacity-0 animate-slideInLeft`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden transition-all duration-300 ${
        isHovered ? 'shadow-lg scale-110 rotate-3' : 'shadow-md'
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
        
        {typeof number === 'string' ? (
          <span className="text-primary font-bold relative z-10">{number}</span>
        ) : (
          <AnimatedCounter target={number} delay={delay} />
        )}
        
        <div className={`absolute inset-0 bg-accent/50 rounded-2xl blur-md transition-opacity duration-300 ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`} style={{ zIndex: -1 }} />
      </div>
      
      <div className="ml-4 flex-1">
        <p className={`font-bold text-lg mb-1 transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-current'
        }`}>
          {title}
        </p>
        <p className={`text-primary-foreground/80 transition-all duration-300 ${
          isHovered ? 'text-primary-foreground/90 translate-x-1' : ''
        }`}>
          {description}
        </p>
      </div>
      
      <div className={`w-1 h-full bg-accent rounded-full transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
      }`} />
    </div>
  );
};

const AboutSection = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

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
                Com tradição em Santa Catarina e agora expandindo para todo o brasil
                , a Inmobel carrega 15 anos de experiência na criação de móveis planejados únicos.
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
                      <p className="text-accent font-medium">De Santa Catarina para o Brasil</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                  A história da Inmobel Móveis Planejados tem suas raízes em 1973, quando nossa família iniciou suas atividades como uma marcenaria especializada em portas e janelas. Durante décadas, construímos um legado de dedicação, qualidade e compromisso com cada cliente.
Em 2016, demos um passo decisivo: transformamos essa tradição em uma nova marca — Inmobel Móveis Planejados — focada em criar ambientes completos, sofisticados e personalizados. Desde então, unimos experiência, inovação e design para oferecer soluções exclusivas em móveis planejados.
Mais do que mobiliário, entregamos projetos que refletem sonhos. Cada detalhe é pensado para atender às necessidades e ao estilo de vida de nossos clientes, garantindo funcionalidade, sofisticação e durabilidade.
Para assegurar excelência em cada etapa, 
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
                   Na Inmobel, acreditamos que móveis planejados não são apenas parte de uma casa, são parte de vidas.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Stats Card - REFINADO */}
              <div className="animate-scale-in">
                <Card 
                  className={`p-8 gradient-primary text-primary-foreground shadow-strong h-fit sticky top-8 relative overflow-hidden transition-all duration-700 transform ${
                    isCardHovered 
                      ? 'shadow-2xl scale-[1.02] animate-pulse-glow' 
                      : 'hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                >
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-4 right-4 w-32 h-32 bg-white rounded-full transition-transform duration-1000 ${
                      isCardHovered ? 'scale-150 rotate-45' : 'scale-100'
                    }`} style={{ filter: 'blur(40px)' }} />
                    <div className={`absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full transition-transform duration-1000 delay-200 ${
                      isCardHovered ? 'scale-125 -rotate-45' : 'scale-100'
                    }`} style={{ filter: 'blur(30px)' }} />
                  </div>

                  <h3 className="text-2xl font-bold mb-8 text-center opacity-0 animate-fadeInUp relative z-10">
                    Por que escolher a Inmobel?
                  </h3>

                  <div className="space-y-8 relative z-10">
                    <FeatureItem
                      number={15}
                      title="Anos de Experiência"
                      description="Tradição e confiabilidade comprovadas no mercado"
                      delay={200}
                    />

                    <FeatureItem
                      number={3}
                      title="Estados Atendidos"
                      description="Presença consolidada em todo o sul do país"
                      delay={400}
                    />

                    <FeatureItem
                      number="100%"
                      title="Projetos Personalizados"
                      description="Cada móvel é único e feito especialmente para você"
                      delay={600}
                    />
                  </div>

                  <div className={`pt-8 mt-8 border-t border-primary-foreground/20 opacity-0 animate-fadeInUp relative z-10`}
                       style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                    <Button 
                      variant="secondary" 
                      className={`w-full group relative overflow-hidden transition-all duration-300 ${
                        buttonHovered ? 'transform translate-y-[-2px] shadow-lg scale-[1.02]' : ''
                      }`}
                      onMouseEnter={() => setButtonHovered(true)}
                      onMouseLeave={() => setButtonHovered(false)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 ${
                        buttonHovered ? 'opacity-10' : ''
                      }`} />
                      
                      <span className="relative z-10">Conheça nossos projetos</span>
                      <ArrowRight className={`ml-2 h-5 w-5 transition-all duration-300 relative z-10 ${
                        buttonHovered ? 'translate-x-2 scale-110' : 'group-hover:translate-x-1'
                      }`} />
                      
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                        buttonHovered ? 'translate-x-full' : '-translate-x-full'
                      }`} />
                    </Button>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-[40px]" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-[32px]" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection