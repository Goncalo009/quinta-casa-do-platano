import React from 'react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const OurSheep: React.FC = () => {
  // FAQ items específicos sobre as ovelhas
  const faqItems = [
    {
      question: "Que características têm as ovelhas Mouton Vendéen?",
      answer: "As ovelhas Mouton Vendéen são originárias da França, conhecidas pela sua rusticidade, boa adaptação ao clima português, excelente fertilidade e qualidade da carne. São animais de porte médio com boa capacidade maternal."
    },
    {
      question: "Quantas ovelhas têm na quinta?",
      answer: "Mantemos um rebanho selecionado de ovelhas Mouton Vendéen, todas com registo genealógico. O número varia conforme a época do ano e os nascimentos, mas focamos na qualidade em vez da quantidade."
    },
    {
      question: "As ovelhas estão sempre no campo?",
      answer: "As nossas ovelhas beneficiam de um sistema misto, com acesso a pastagens naturais e instalações adequadas para proteção. Seguimos práticas de bem-estar animal e pastoreio sustentável."
    },
    {
      question: "Como garantem a qualidade genética?",
      answer: "Todos os nossos reprodutores são selecionados criteriosamente, com registo genealógico completo. Fazemos acompanhamento veterinário regular e seguimos programas de melhoramento genético."
    },
    {
      question: "É possível ver as ovelhas antes de comprar?",
      answer: "Sim, encorajamos visitas à quinta para conhecer os animais e as instalações. Marcamos visitas mediante contacto prévio para garantir a melhor experiência."
    },
    {
      question: "Que cuidados têm com o bem-estar animal?",
      answer: "O bem-estar animal é prioritário. Oferecemos alimentação adequada, abrigo, cuidados veterinários preventivos e espaço suficiente para comportamentos naturais das ovelhas."
    }
  ];
  const sheepStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "As Nossas Ovelhas Mouton Vendéen",
    "description": "Galeria das nossas ovelhas da raça Mouton Vendéen criadas na Quinta Casa do Plátano",
    "mainEntity": [
      {
        "@type": "LivestockBreed",
        "name": "Ovelhas Mouton Vendéen",
        "description": "Raça ovina francesa conhecida pela sua rusticidade e qualidade de carne",
        "breedingOrganization": {
          "@type": "Organization",
          "name": "Quinta Casa do Plátano"
        }
      },
      {
        "@type": "Product",
        "name": "Reprodutores Mouton Vendéen",
        "description": "Reprodutores ovinos da raça Mouton Vendéen com registo genealógico",
        "category": "Animais de Criação",
        "brand": {
          "@type": "Brand",
          "name": "Quinta Casa do Plátano"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "EUR"
        }
      }
    ]
  };

  const sheepImages = [
    {
      src: "/IMG-20250721-WA0002 (1).webp",
      alt: "Ovelhas Mouton Vendéen pastando"
    },
    {
      src: "/IMG-20250721-WA0003.webp",
      alt: "Retrato de ovelha Mouton Vendéen"
    },
    {
      src: "/IMG-20250721-WA0004.webp",
      alt: "Rebanho de ovelhas Mouton Vendéen"
    },
    {
      src: "/IMG-20250721-WA0005.webp",
      alt: "Ovelha com crias"
    },
    {
      src: "/IMG-20250721-WA0006.webp",
      alt: "Características da raça Mouton Vendéen"
    },
    {
      src: "/IMG-20250721-WA0007.webp",
      alt: "Instalações da quinta"
    },
    {
      src: "/IMG-20250721-WA0008.webp",
      alt: "Ovelhas no campo"
    },
    {
      src: "/IMG-20250721-WA0009.webp",
      alt: "Vista da quinta"
    },
    {
      src: "/IMG-20250721-WA0011.webp",
      alt: "Animais da quinta"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="As Nossas Ovelhas Mouton Vendéen | Linha Pura Registo Genealógico | Quinta Casa do Plátano"
        description="🐑 Conheça as nossas ovelhas Mouton Vendéen linha pura com registo genealógico. Criação especializada em Samora Correia. ☎️ 926 852 863. Qualidade garantida."
        keywords="ovelhas mouton vendéen, linha pura registo genealógico, criação ovelhas portugal, quinta casa do plátano, ovinocultura samora correia, ovelhas reprodutoras, rebanho mouton vendéen"
        url="https://quintacasadoplatano.pt/as-nossas-ovelhas"
        structuredData={sheepStructuredData}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-forest-800 mb-8">As Nossas Ovelhas Mouton Vendéen</h1>
        
        {/* Mouton Vendéen Breed Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">A Raça Mouton Vendéen</h2>
          <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Características Principais</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A raça Mouton Vendéen é originária da região de Vendée, em França, sendo conhecida pela sua excelente qualidade de carne e adaptabilidade. São animais robustos, com boa capacidade reprodutiva e maternal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Origem:</strong> França, região de Vendée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Lã:</strong> Branca, densa e de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Temperamento:</strong> Dócil e fácil de manejar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Adaptabilidade:</strong> Excelente adaptação ao clima português</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Produtividade:</strong> Alta taxa de fertilidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Resistência:</strong> Robusta e resistente a doenças</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vantagens da Raça</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Qualidade da Carne</h4>
                  <p className="text-gray-600">Carne saborosa e tenra, muito apreciada no mercado gastronómico.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Lã Premium</h4>
                  <p className="text-gray-600">Lã de excelente qualidade para a indústria têxtil.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Facilidade de Criação</h4>
                  <p className="text-gray-600">Animais dóceis que se adaptam bem a diferentes sistemas de criação.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Rentabilidade</h4>
                  <p className="text-gray-600">Excelente retorno do investimento devido à sua produtividade.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Galeria de Imagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sheepImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-center font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breeding Statistics */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Estatísticas do Rebanho</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">50+</div>
              <div className="text-gray-600">Ovelhas Reprodutoras</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">85%</div>
              <div className="text-gray-600">Taxa de Fertilidade</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">80+</div>
              <div className="text-gray-600">Crias por Ano</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">5</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ items={faqItems} title="Perguntas Frequentes sobre as Nossas Ovelhas" />
      </div>
    </div>
  );
};

export default OurSheep;