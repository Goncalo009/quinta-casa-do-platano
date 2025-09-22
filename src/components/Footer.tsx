import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'As Nossas Ovelhas', href: '/as-nossas-ovelhas' },
    { name: 'Serviços', href: '/servicos' }
  ];

  const resources = [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Serviço', href: '/termos' }
  ];

  const services = [
    { name: 'Criação de Ovinos', href: '/servicos#breeding' },
    { name: 'Venda de Reprodutores', href: '/servicos#sales' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/quintacasadoplatano',
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/quintacasadoplatano',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/quintacasadoplatano',
      icon: <Youtube className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-forest-900 text-cream-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 text-center md:text-left">
            {/* Mobile Layout - Image on top */}
            <div className="flex flex-col items-center md:hidden mb-6">
              <img 
                src="/logoOficial.webp" 
                alt="Quinta Casa do Plátano" 
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <div>
                <h3 className="text-xl font-bold">Quinta Casa do Plátano</h3>
                <p className="text-cream-300 text-sm">Criação de Ovelhas Vendéen</p>
              </div>
            </div>
            
            {/* Desktop Layout - Image beside text */}
            <div className="hidden md:flex items-center justify-start space-x-3 mb-6">
              <img 
                src="/logoOficial.webp" 
                alt="Quinta Casa do Plátano" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Quinta Casa do Plátano</h3>
                <p className="text-cream-300 text-sm">Criação de Ovelhas Vendéen</p>
              </div>
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed">
              Especialistas na criação de ovelhas da raça Vendéen, oferecendo animais de alta qualidade 
              e serviços técnicos especializados para criadores em todo o país.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-800 hover:bg-gold-500 p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream-200">Samora Correia</p>
                  <p className="text-cream-200">Portugal</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a 
                  href="tel:+351926852863" 
                  className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                >
                  926 852 863
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a 
                  href="mailto:info@quintacasadoplatano.pt" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  info@quintacasadoplatano.pt
                </a>
              </div>
              
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream-200">Segunda a Sábado</p>
                  <p className="text-cream-200">8h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-forest-800 border-t border-forest-700">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Mantenha-se Atualizado</h4>
            <p className="text-cream-200 mb-6 max-w-2xl mx-auto">
              Subscreva a nossa newsletter para receber as últimas novidades, dicas de criação e informações sobre os nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
              <input 
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 bg-forest-700 border border-forest-600 rounded-lg text-cream-100 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <button className="bg-gold-500 hover:bg-gold-600 px-6 py-3 rounded-lg font-medium text-forest-900 transition-colors duration-200 w-full sm:w-auto">
                Subscrever
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-forest-950 border-t border-forest-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-cream-300 text-sm">
              © {currentYear} Quinta Casa do Plátano. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 justify-center">
              {resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  className="text-cream-300 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;