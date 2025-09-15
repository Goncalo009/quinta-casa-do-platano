import React from 'react';
import SEO from '../components/SEO';

const OurSheep: React.FC = () => {
  const sheepStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "As Nossas Ovelhas Vendéen",
    "description": "Galeria das nossas ovelhas da raça Vendéen criadas na Quinta Casa do Plátano",
    "mainEntity": {
      "@type": "LivestockBreed",
      "name": "Ovelhas Vendéen",
      "description": "Raça ovina francesa conhecida pela sua rusticidade e qualidade de carne",
      "breedingOrganization": {
        "@type": "Organization",
        "name": "Quinta Casa do Plátano"
      }
    }
  };

  const sheepImages = [
    {
      src: "/IMG-20250721-WA0002.webp",
      alt: "Ovelhas Vendéen pastando"
    },
    {
      src: "/IMG-20250721-WA0003.webp",
      alt: "Retrato de ovelha Vendéen"
    },
    {
      src: "/IMG-20250721-WA0004.webp",
      alt: "Rebanho de ovelhas Vendéen"
    },
    {
      src: "/IMG-20250721-WA0005.webp",
      alt: "Ovelha com crias"
    },
    {
      src: "/IMG-20250721-WA0006.webp",
      alt: "Características da raça Vendéen"
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
        title="As Nossas Ovelhas Vendéen - Quinta Casa do Plátano | Galeria e Características"
        description="Conheça as nossas ovelhas da raça Vendéen na Quinta Casa do Plátano. Veja a galeria de imagens e saiba mais sobre as características desta raça ovina francesa de alta qualidade."
        keywords="ovelhas vendéen, raça ovina, galeria ovelhas, características vendéen, quinta casa do plátano, criação ovinos"
        url="https://quintacasadoplatano.pt/our-sheep"
        structuredData={sheepStructuredData}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-forest-800 mb-8">As Nossas Ovelhas</h1>
        
        {/* Vendéen Breed Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center md:text-left">A Raça Vendéen</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Características Principais</h3>
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
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vantagens da Raça</h3>
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
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center md:text-left">Galeria de Imagens</h2>
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
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center md:text-left">Estatísticas do Rebanho</h2>
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
              <div className="text-3xl font-bold text-green-800 mb-2">3</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurSheep;