import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/about' },
    { name: 'As Nossas Ovelhas', href: '/our-sheep' },
    { name: 'Serviços', href: '/services' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="/logoOficial.webp" 
                alt="Quinta Casa do Plátano" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-sm font-bold text-forest-800">Quinta Casa do Plátano</h1>
                <p className="text-xs text-stone-600">Criação de Ovelhas Vendéen</p>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-stone-700 hover:text-forest-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-forest-900 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:text-forest-600 hover:bg-cream-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-700 hover:text-forest-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block bg-gold-500 hover:bg-gold-600 text-forest-900 px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactar
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;