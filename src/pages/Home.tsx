import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quinta Casa do Plátano",
    "description": "Criação especializada de ovelhas Vendéen em Samora Correia",
    "url": "https://quintacasadoplatano.pt",
    "logo": "https://quintacasadoplatano.pt/logoOficial.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Samora Correia",
      "addressCountry": "PT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "PT",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://facebook.com/quintacasadoplatano",
      "https://instagram.com/quintacasadoplatano"
    ]
  };

  const faqItems = [
    {
      question: "Que raça de ovelhas criam na Quinta Casa do Plátano?",
      answer: "Especializamo-nos na criação de ovelhas da raça Vendéen, conhecidas pela sua excelente qualidade de carne e adaptabilidade ao clima português."
    },
    {
      question: "Onde está localizada a quinta?",
      answer: "A nossa quinta está localizada em Samora Correia, uma região ideal para a criação de ovinos devido ao seu clima e pastagens naturais."
    },
    {
      question: "Que serviços oferecem além da venda de animais?",
      answer: "Além da venda de reprodutores ovinos, oferecemos serviços especializados de criação e reprodução de ovelhas Vendéen, com acompanhamento técnico especializado."
    },
    {
      question: "É possível visitar a quinta?",
      answer: "Sim, organizamos visitas à quinta mediante marcação prévia. Contacte-nos para agendar a sua visita e conhecer as nossas instalações."
    },
    {
      question: "Vendem animais para reprodução?",
      answer: "Sim, vendemos animais reprodutores de alta qualidade, todos com registo genealógico e certificados sanitários em dia."
    },
    {
      question: "Que tipo de acompanhamento oferecem?",
      answer: "Oferecemos acompanhamento técnico especializado na criação de ovelhas Vendéen, incluindo orientações sobre reprodução, alimentação e gestão do rebanho."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Venda Borregos Reprodutores Vendéen | Linha Pura Registo Genealógico | Quinta Casa do Plátano"
        description="🐑 Venda de borregos reprodutores Vendéen linha pura com registo genealógico. Ovinocultura especializada em Samora Correia. ☎️ 926 852 863. Entrega Portugal."
        keywords="venda borregos reprodutores, borregos vendéen linha pura, reprodutores ovinos portugal, registo genealógico ovinos, ovinocultura samora correia, quinta casa do plátano, criação ovelhas vendéen, reprodutores ovinos certificados"
        url="https://quintacasadoplatano.pt"
        structuredData={homeStructuredData}
      />
      
      {/* Hero Section */}
      <section className="relative text-white min-h-screen max-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Responsive Sources */}
        <picture className="absolute inset-0 w-full h-full">
          <source 
            media="(max-width: 375px)" 
            srcSet="/heroSection-Ovelha-mobile.webp" 
          />
          <source 
            media="(max-width: 768px)" 
            srcSet="/heroSection-Ovelha-tablet.webp" 
          />
          <img 
             src="/heroSection-Ovelha-desktop.webp"
             alt="Ovelhas Vendéen na Quinta Casa do Plátano"
             className="w-full h-full object-cover"
             style={{ 
               objectPosition: 'center 20%',
               transform: 'scale(1.1)'
             }}
             fetchpriority="high"
             loading="eager"
           />
        </picture>
        
        {/* Enhanced Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        {/* Content Container with improved mobile spacing */}
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center h-full py-12 md:py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-6 leading-tight text-white drop-shadow-2xl">
              Quinta Casa do Plátano
            </h1>
            <p className="text-xl md:text-xl lg:text-2xl mb-8 md:mb-8 text-white drop-shadow-lg font-medium max-w-3xl">
              Criação especializada de ovelhas Vendéen em Samora Correia
            </p>
            <p className="text-base md:text-base mb-10 md:mb-10 text-white/90 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              Há 5 anos dedicados à excelência na criação de ovinos, oferecendo 
              animais de qualidade superior e serviços especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center w-full max-w-md sm:max-w-none">
              <Link 
                to="/sobre" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 md:px-8 py-4 md:py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                Conheça Nossa História
                <ArrowRight className="w-5 h-5 md:w-5 md:h-5" />
              </Link>
              <Link 
                to="/contacto" 
                className="border-2 border-white/80 bg-white/15 backdrop-blur-sm text-white px-8 md:px-8 py-4 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-forest-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                <Phone className="w-5 h-5 md:w-5 md:h-5" />
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Presentation */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                A Nossa Quinta
              </h2>
              <p className="text-lg text-earth-700 max-w-2xl mx-auto">
                Localizada em Samora Correia, a nossa quinta dedica-se à criação 
                especializada de ovelhas da raça Vendéen, reconhecida pela sua qualidade e adaptabilidade.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <picture>
                  <source 
                    media="(max-width: 375px)" 
                    srcSet="/quintacasadoplatano-mobile.webp" 
                  />
                  <source 
                    media="(max-width: 768px)" 
                    srcSet="/quintacasadoplatano-tablet.webp" 
                  />
                  <img 
                    src="/quintacasadoplatano-desktop.webp" 
                    alt="Quinta Casa do Plátano - Vista geral da quinta"
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-forest-900 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Experiência Comprovada
                    </h3>
                    <p className="text-earth-700">
                      5 anos de experiência na criação e melhoramento genético 
                      de ovelhas Vendéen, garantindo animais saudáveis e produtivos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-forest-900 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Qualidade Comprovada
                    </h3>
                    <p className="text-earth-700">
                      Os nossos animais são reconhecidos pela sua qualidade genética 
                      e conformação, resultado de um programa de melhoramento rigoroso.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-forest-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Localização Privilegiada
                    </h3>
                    <p className="text-earth-700">
                      Situada em Samora Correia, numa região com condições ideais 
                      para a criação de ovinos, com pastagens de qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Os Nossos Serviços
              </h2>
              <p className="text-lg text-earth-700 max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços especializados para criadores 
                e interessados na raça Vendéen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-cream-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-forest-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Criação e Reprodução
                </h3>
                <p className="text-earth-700 mb-4">
                  Serviços especializados de criação e reprodução com foco na qualidade genética, 
                  bem-estar animal e práticas sustentáveis de ovinocultura.
                </p>
                <Link 
                  to="/sobre" 
                  className="text-forest-900 font-semibold hover:text-gold-600 flex items-center gap-2"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-forest-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Venda de Animais
                </h3>
                <p className="text-earth-700 mb-4">
                  Comercialização de ovelhas Vendéen de alta qualidade, desde 
                  crias até reprodutores selecionados.
                </p>
                <Link 
                  to="/servicos" 
                  className="text-forest-900 font-semibold hover:text-gold-600 flex items-center gap-2"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-forest-900 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Acompanhamento Técnico
                </h3>
                <p className="text-earth-700 mb-4">
                  Acompanhamento especializado na criação de ovelhas Vendéen, 
                  com suporte técnico personalizado para cada cliente.
                </p>
                <Link 
                  to="/services" 
                  className="text-forest-900 font-semibold hover:text-gold-600 flex items-center gap-2"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/servicos" 
                className="bg-forest-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors duration-300 inline-flex items-center gap-2 btn-hover"
              >
                Ver Todos os Serviços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Pronto para Conhecer a Nossa Quinta?
            </h2>
            <p className="text-xl mb-8 text-cream-100">
              Entre em contacto connosco para mais informações sobre os nossos animais 
              e serviços, ou agende uma visita à nossa quinta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto" 
                className="bg-gold-500 text-forest-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2 btn-hover"
              >
                <Phone className="w-5 h-5" />
                Contactar Agora
              </Link>
              <a 
                href="tel:926852863" 
                className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold hover:bg-cream-200 hover:text-forest-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                926 852 863
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />
    </div>
  );
};

export default Home;