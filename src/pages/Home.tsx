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
        title="Quinta Casa do Plátano - Criação de Ovelhas Vendéen em Samora Correia"
        description="Especialistas na criação de ovelhas da raça Vendéen em Samora Correia. Oferecemos animais de alta qualidade e serviços especializados para criadores em Portugal."
        keywords="ovelhas vendéen, criação ovelhas, samora correia, quinta casa do plátano, ovinocultura portugal, animais reprodução, reprodutores ovinos"
        url="https://quintacasadoplatano.pt"
        structuredData={homeStructuredData}
      />
      
      {/* Hero Section */}
      <section 
        className="relative text-white min-h-screen max-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 139, 34, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(139, 69, 19, 0.3) 100%), url('/heroSection-Ovelha.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center h-full py-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl">
              Quinta Casa do Plátano
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gold-300 drop-shadow-lg font-medium">
              Criação especializada de ovelhas Vendéen em Samora Correia
            </p>
            <p className="text-sm md:text-base mb-8 md:mb-10 text-cream-100 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              Há 5 anos dedicados à excelência na criação de ovinos, oferecendo 
              animais de qualidade superior e serviços especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Conheça Nossa História
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-cream-100 bg-white/10 backdrop-blur-sm text-cream-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-cream-100 hover:text-forest-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
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
                <img 
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Portuguese%20sheep%20farm%20in%20Samora%20Correia%20with%20Vend%C3%A9en%20sheep%20grazing%20in%20green%20pastures%2C%20traditional%20farm%20buildings%2C%20rural%20landscape%2C%20peaceful%20countryside%2C%20professional%20agricultural%20photography&image_size=landscape_4_3" 
                  alt="Quinta Casa do Plátano - Vista geral da quinta"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
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
                  to="/services" 
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
                  to="/services" 
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
                to="/services" 
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
                to="/contact" 
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