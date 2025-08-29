import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Inmobel Móveis Planejados</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Há 9 anos transformando ambientes através de móveis planejados únicos. 
              De Santa Catarina para São Paulo, levamos qualidade, design e confiança 
              para sua casa ou escritório.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <Instagram className="w-5 h-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <Linkedin className="w-5 h-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <Facebook className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Santa Catarina */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Santa Catarina - Matriz</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Av Santa Catarina 1483 - Centro<br />
                  São Carlos,SC - CEP 89885-000
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(49) 99187-2813</span>
              </div>
            </div>
          </div>

          {/* Contact São Paulo
          <div>
            <h4 className="text-lg font-semibold mb-4">São Paulo - Filial</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Av. Paulista, 456<br />
                  Bela Vista - São Paulo, SP
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(11) 99999-9999</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Desenvolvido por Gabriel Barbosa. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-accent" />
            <a href="mailto:contato@inmobel.com.br" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
              contato@inmobel.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer