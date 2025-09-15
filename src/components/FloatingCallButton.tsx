import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton: React.FC = () => {
  return (
    <a
      href="tel:+351926852863"
      className="fixed bottom-6 right-6 bg-gold-500 hover:bg-gold-600 text-forest-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 md:hidden animate-pulse hover:animate-none"
      aria-label="Ligar agora"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;