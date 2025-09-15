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
      "description": "Ovinocultura especializada com 10 anos de experiência na criação de ovelhas Vendéen",
      "foundingDate": "2014",
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
        title="Sobre Nós - Quinta Casa do Plátano | 10 Anos de Ovinocultura Especializada"
        description="Conheça a história da Quinta Casa do Plátano, 10 anos de dedicação à criação sustentável de ovelhas Vendéen em Samora Correia. Tradição, qualidade e inovação na ovinocultura."
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
              10 anos de dedicação à criação sustentável de ovelhas Vendéen em Samora Correia
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
                    A Quinta Casa do Plátano nasceu há 10 anos do sonho de criar 
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
                    em Portugal, fornecendo reprodutores de alta qualidade genética a criadores 
                    de ovinos de todo o país.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Historic%20Portuguese%20sheep%20farm%20buildings%20in%20Samora%20Correia%2C%20traditional%20rural%20architecture%2C%20stone%20and%20tile%20construction%2C%20countryside%20setting%2C%20vintage%20agricultural%20photography%20style&image_size=landscape_4_3" 
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-forest-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Bem-estar dos Ovinos
                </h3>
                <p className="text-earth-700">
                  O bem-estar das nossas ovelhas é a nossa prioridade máxima, 
                  garantindo condições ideais de pastoreio e maneio sustentável.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Excelência em Ovinocultura
                </h3>
                <p className="text-earth-700">
                  Procuramos constantemente a excelência em todos os aspetos da nossa ovinocultura,
                  desde a seleção genética até às práticas de pastoreio sustentável.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Transparência
                </h3>
                <p className="text-earth-700">
                  Mantemos uma relação transparente com os nossos clientes, 
                  partilhando conhecimento e experiência.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">
                  Inovação
                </h3>
                <p className="text-earth-700">
                  Adotamos as melhores práticas e tecnologias para melhorar 
                  continuamente os nossos resultados.
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
                    2014 - Fundação da Quinta
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
                    2017 - Expansão do Rebanho
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
                    2020 - Referência Regional
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
                    2022 - Modernização
                  </h3>
                  <p className="text-brown">
                    Implementação de melhorias nas instalações e práticas de gestão 
                    do rebanho, otimizando os resultados produtivos.
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
                  A nossa equipa combina 10 anos de experiência prática com formação 
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