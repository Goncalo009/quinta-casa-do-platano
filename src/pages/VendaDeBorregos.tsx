import React from 'react';
import { Phone, Mail, MapPin, Star, Shield, Award } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const VendaDeBorregos: React.FC = () => {
  // FAQ items específicos sobre venda de borregos
  const faqItems = [
    {
      question: "Onde posso comprar borregos Mouton Vendéen?",
      answer: "Pode comprar borregos Mouton Vendéen diretamente na Quinta Casa do Plátano em Samora Correia. Temos borregos Mouton Vendéen de linha pura com registo genealógico, desde crias até reprodutores adultos. Todos os animais têm certificação sanitária e acompanhamento veterinário."
    },
    {
      question: "Qual é o preço para comprar borregos Mouton Vendéen?",
      answer: "Os preços dos borregos Mouton Vendéen variam conforme a idade, sexo e qualidade genética dos animais. Contacte-nos para obter uma cotação personalizada e conhecer a disponibilidade atual dos nossos borregos Mouton Vendéen."
    },
    {
      question: "Como posso comprar borregos Mouton Vendéen?",
      answer: "Para comprar borregos Mouton Vendéen, pode contactar-nos por telefone (926 852 863), email ou através do formulário no site. Recomendamos marcar com antecedência, especialmente para reprodutores selecionados."
    },
    {
      question: "Fazem entrega dos borregos Mouton Vendéen?",
      answer: "Sim, organizamos o transporte dos borregos Mouton Vendéen em todo o território nacional. O transporte é feito em condições adequadas de bem-estar animal e o custo é calculado conforme a distância."
    },
    {
      question: "Que documentação acompanha os borregos?",
      answer: "Todos os borregos vêm com registo genealógico, certificado sanitário, guia de transporte e documentação completa para transferência de propriedade."
    },
    {
      question: "Oferecem garantia na compra de reprodutores?",
      answer: "Sim, oferecemos garantia de saúde e qualidade genética. Todos os reprodutores são acompanhados de certificação e apoio técnico pós-venda para garantir o sucesso da criação."
    },
    {
      question: "É possível visitar a quinta antes da compra?",
      answer: "Absolutamente! Encorajamos visitas para conhecer os animais e as instalações. Marque previamente para garantir disponibilidade e receber o melhor atendimento."
    },
    {
      question: "Que cuidados devo ter após a compra?",
      answer: "Fornecemos orientações completas sobre alimentação, maneio e cuidados veterinários. Mantemos apoio técnico contínuo para ajudar no sucesso da vossa criação."
    }
  ];
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Borregos Mouton Vendéen Linha Pura",
    "description": "Comprar borregos Mouton Vendéen com registo genealógico. Linha pura francesa, certificados sanitários, vacinação completa. Disponíveis para compra na Quinta Casa do Plátano, Samora Correia.",
    "brand": {
      "@type": "Brand",
      "name": "Quinta Casa do Plátano"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "seller": {
        "@type": "Organization",
        "name": "Quinta Casa do Plátano",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Samora Correia",
          "addressCountry": "PT"
        }
      }
    },
    "category": "Animais de Criação",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Raça",
        "value": "Vendéen"
      },
      {
        "@type": "PropertyValue",
        "name": "Registo",
        "value": "Genealógico"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="🐑 Comprar Borregos Mouton Vendéen | Linha Pura Registo Genealógico | Quinta Casa do Plátano"
        description="✅ Comprar borregos Mouton Vendéen linha pura! Registo genealógico, certificados sanitários. Criação especializada Samora Correia. Tel: 926 852 863. Entrega Portugal!"
        keywords="comprar borregos mouton vendéen, mouton vendéen portugal, borregos mouton vendéen linha pura, onde comprar mouton vendéen portugal, preços borregos mouton vendéen, quinta casa do plátano mouton vendéen"
        url="https://quintacasadoplatano.pt/venda-de-borregos"
        structuredData={productStructuredData}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-900 to-earth-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprar Borregos Mouton Vendéen
            </h1>
            <p className="text-xl md:text-2xl text-gold-300 mb-8">
              Linha pura com registo genealógico - Disponível para compra
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Oferecemos borregos reprodutores da raça Mouton Vendéen de linha pura com registo genealógico. 
              Todos os nossos animais são cuidadosamente selecionados para garantir a melhor qualidade genética.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3">
                <Shield className="w-5 h-5 mr-2" />
                <span>Registo Genealógico</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3">
                <Award className="w-5 h-5 mr-2" />
                <span>Linha Pura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3">
                <Star className="w-5 h-5 mr-2" />
                <span>Alta Qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Disponíveis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-900">
              Borregos Mouton Vendéen Disponíveis para Compra
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reprodutores Machos */}
              <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-forest-900">Reprodutores Machos</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Linha pura Mouton Vendéen</li>
                  <li>• Registo genealógico</li>
                  <li>• Certificados sanitários</li>
                  <li>• Idade: 8-24 meses</li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-900 mb-2">Sob consulta</p>
                  <p className="text-sm text-gray-600">Preço varia conforme idade e linhagem</p>
                </div>
              </div>

              {/* Reprodutoras Fêmeas */}
              <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-forest-900">Reprodutoras Fêmeas</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Linha pura Mouton Vendéen</li>
                  <li>• Registo genealógico</li>
                  <li>• Certificados sanitários</li>
                  <li>• Idade: 8-18 meses</li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-900 mb-2">Sob consulta</p>
                  <p className="text-sm text-gray-600">Preço varia conforme idade e linhagem</p>
                </div>
              </div>

              {/* Borregos Jovens */}
              <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-forest-900">Borregos Jovens</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Linha pura Mouton Vendéen</li>
                  <li>• 3-8 meses de idade</li>
                  <li>• Vacinados e desparasitados</li>
                  <li>• Ideais para engorda</li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-900 mb-2">Sob consulta</p>
                  <p className="text-sm text-gray-600">Preço por cabeça ou lote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características da Raça */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-900">
              Por que Comprar Borregos Mouton Vendéen?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 justify-items-center">
              <div className="w-full max-w-md text-center">
                <h3 className="text-xl font-bold mb-4 text-forest-900 text-center">Vantagens Produtivas</h3>
                <ul className="space-y-3 text-gray-700 text-left inline-block">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Excelente conversão alimentar</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rápido crescimento</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Carne de qualidade superior</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Adaptabilidade ao clima português</span>
                  </li>
                </ul>
              </div>
              
              <div className="w-full max-w-md text-center">
                <h3 className="text-xl font-bold mb-4 text-forest-900 text-center">Características Físicas</h3>
                <ul className="space-y-3 text-gray-700 text-left inline-block">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Porte médio a grande</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pelagem branca</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Estrutura corporal robusta</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Boa conformação cárnica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto e Informações */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Interessado nos Nossos Borregos?
            </h2>
            <p className="text-xl mb-8 text-gold-300">
              Contacte-nos para mais informações sobre disponibilidade e preços
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="font-bold mb-2">Telefone</h3>
                <p>926 852 863</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="font-bold mb-2">Email</h3>
                <p>info@quintacasadoplatano.pt</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="font-bold mb-2">Localização</h3>
                <p>Samora Correia</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Informações Importantes</h3>
              <ul className="text-left space-y-2 max-w-2xl mx-auto">
                <li>• Todos os animais possuem certificados sanitários em dia</li>
                <li>• Registo genealógico oficial da raça Vendéen</li>
                <li>• Possibilidade de entrega em Portugal Continental</li>
                <li>• Acompanhamento técnico pós-venda disponível</li>
                <li>• Visitas à quinta mediante marcação prévia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} title="Perguntas Frequentes sobre Comprar Borregos Mouton Vendéen" />
    </div>
  );
};

export default VendaDeBorregos;