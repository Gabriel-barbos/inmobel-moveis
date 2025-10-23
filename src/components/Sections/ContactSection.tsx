import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, MessageSquare, Send, MessageCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!  ",
    })
    
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/+5549991872813', '_blank')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereços',
      details: [
        'Av Santa Catarina 1487 - Centro',
        ' São Carlos,SC - CEP 89885-000'
      ]
    },
    {
      icon: Phone,
      title: 'Telefones',
      details: [
        '(49) 99118-1740 - Felipe',
        '(49) 99187-2813 - inMobel'
      ]
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: [
        'inmobelmoveissc@gmail.com',
       
      ]
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua ideia em um projeto único? 
              Vamos conversar sobre seu móvel planejado dos sonhos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="p-8 shadow-strong">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Solicite seu Orçamento</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">Nome Completo</Label>
                      <Input 
                        id="name"
                        name="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 shadow-soft"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-primary font-medium">Telefone</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 shadow-soft"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-primary font-medium">E-mail</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 shadow-soft"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">Conte-nos sobre seu projeto</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 shadow-soft resize-none"
                      placeholder="Descreva seu projeto, ambiente, estilo desejado e outras informações importantes..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-scale-in">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 hover-lift shadow-soft">
                  <div className="flex items-start">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <Card className="p-6 gradient-accent text-accent-foreground text-center shadow-accent">
                <h3 className="text-xl font-bold mb-3">Atendimento Direto</h3>
                <p className="mb-4">Prefere falar conosco diretamente?</p>
                <Button 
                  variant="hero" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection