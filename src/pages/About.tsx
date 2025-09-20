import React from 'react';
import { Users, Award, Heart, Target, Calendar, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Quinta Casa do Plátano",
      "description": "Ovinocultura especializada com 5 anos de experiência na criação de ovelhas Vendéen",
      "foundingDate": "2019",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Samora Correia",
        "addressCountry": "PT"
      },
      "specialty": "Criação de ovelhas da raça Vendéen"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Sobre Nós - Quinta Casa do Plátano | 5 Anos de Ovinocultura Especializada"
        description="Conheça a história da Quinta Casa do Plátano, 5 anos de dedicação à criação sustentável de ovelhas Vendéen em Samora Correia. Tradição, qualidade e inovação na ovinocultura."
        keywords="quinta casa do plátano, história ovinocultura, samora correia, ovelhas vendéen, criação sustentável, tradição familiar"
        url="https://quintacasadoplatano.pt/about"
        structuredData={aboutStructuredData}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
              Quinta Casa do Plátano - Ovinocultura Especializada
            </h1>
            <p className="text-xl text-green-100">
              5 anos de dedicação à criação sustentável de ovelhas Vendéen em Samora Correia
            </p>
          </div>
        </div>
      </section>

      {/* Farm History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6 text-center md:text-left">
                  História da Nossa Ovinocultura
                </h2>
                <div className="space-y-4 text-brown text-center md:text-left">
                  <p className="text-lg">
                    A Quinta Casa do Plátano nasceu há 5 anos do sonho de criar 
                    uma exploração de ovinocultura de excelência, especializada na criação de ovelhas Vendéen.
                  </p>
                  <p>
                    Localizada em Samora Correia, numa região privilegiada do Ribatejo para ovinocultura, 
                    a nossa quinta beneficia de condições naturais ideais para a criação sustentável 
                    de ovinos, com pastagens de qualidade e pastoreio rotacional.
                  </p>
                  <p>
                    Ao longo dos anos, construímos uma reputação sólida baseada na qualidade genética 
                    dos nossos reprodutores ovinos, no rigor do nosso programa de melhoramento 
                    e no compromisso com práticas sustentáveis de ovinocultura.
                  </p>
                  <p>
                    Hoje, somos reconhecidos como uma referência na criação de ovelhas Vendéen 
                    em Portugal, fornecendo reprodutores de alta qualidade genética, focando 
                    no bem-estar animal e na sustentabilidade.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/quintacasadoplatano.webp" 
                  alt="História da Quinta Casa do Plátano"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4 text-center">
                Valores da Nossa Ovinocultura
              </h2>
              <p className="text-lg text-brown max-w-2xl mx-auto">
                Princípios que orientam a nossa ovinocultura sustentável e definem 
                a nossa abordagem à criação responsável de ovinos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Genética</h3>
                <p className="text-gray-700">
                  Seleção rigorosa de reprodutores com excelente qualidade genética e características superiores da raça Vendéen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bem-estar Animal</h3>
                <p className="text-gray-700">
                  Compromisso total com o bem-estar dos nossos animais, proporcionando condições ideais de vida e cuidados veterinários regulares.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h3>
                <p className="text-gray-700">
                  Adotamos as melhores práticas e tecnologias para melhorar continuamente os nossos resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breeding Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/IMG-20250721-WA0007.webp"
                  alt="Programa de melhoramento genético"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6 text-center md:text-left">
                  Programa de Melhoramento
                </h2>
                <div className="space-y-4 text-earth-700">
                  <p className="text-lg text-center md:text-left">
                    O nosso programa de melhoramento genético é baseado em critérios 
                    rigorosos de seleção, visando a produção de animais com características 
                    superiores de conformação, produtividade e adaptabilidade.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                      <p><strong>Seleção Genética:</strong> Escolha criteriosa de reprodutores com base em índices genéticos e performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                      <p><strong>Controlo Sanitário:</strong> Programa rigoroso de profilaxia e controlo de doenças</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                      <p><strong>Nutrição Especializada:</strong> Planos alimentares adaptados a cada fase produtiva</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                      <p><strong>Registo Genealógico:</strong> Controlo rigoroso da genealogia e performance dos animais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 text-center">
                Marcos Importantes
              </h2>
              <p className="text-lg text-brown">
                Momentos que marcaram a evolução da nossa quinta ao longo dos anos.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-green-900 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    2019 - Fundação da Quinta
                  </h3>
                  <p className="text-brown">
                    Início da atividade com a aquisição dos primeiros reprodutores 
                    Vendéen e estabelecimento das instalações base.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-green-900 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    2021 - Expansão do Rebanho
                  </h3>
                  <p className="text-brown">
                    Ampliação significativa do efetivo e modernização das instalações 
                    para acomodar o crescimento.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-green-900 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    2022 - Referência Regional
                  </h3>
                  <p className="text-brown">
                    Reconhecimento como uma das principais explorações de Vendéen 
                    na região, fornecendo reprodutores de qualidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-green-900 p-3 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    2024 - Consolidação e Modernização
                  </h3>
                  <p className="text-brown">
                    Implementação de melhorias nas instalações e práticas de gestão 
                    do rebanho, consolidando a posição como referência na criação de Vendéen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                A Nossa Equipa
              </h2>
              <p className="text-lg text-brown max-w-2xl mx-auto">
                Profissionais dedicados que fazem da Quinta Casa do Plátano 
                uma referência na criação de ovelhas Vendéen.
              </p>
            </div>
            
            <div className="bg-beige p-8 rounded-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-green-900 mb-4">
                  Experiência e Dedicação
                </h3>
                <p className="text-brown text-lg max-w-3xl mx-auto">
                  A nossa equipa combina anos de experiência prática com conhecimento especializado 
                  técnica especializada, garantindo os mais altos padrões de qualidade 
                  em todos os aspetos da criação animal. Cada membro da equipa partilha 
                  a paixão pela raça Vendéen e o compromisso com a excelência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;