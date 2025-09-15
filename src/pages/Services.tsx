import React, { useState } from 'react';
import SEO from '../components/SEO';

interface QuoteFormData {
  name: string;
  email: string;
  service: string;
  details: string;
  quantity: string;
}

const Services: React.FC = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Quinta Casa do Plátano"
    },
    "serviceType": "Ovinocultura e Consultoria Técnica",
    "description": "Serviços especializados em criação de ovelhas Vendéen, consultoria técnica e formação em ovinocultura",
    "areaServed": "Portugal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Ovinocultura",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Criação e Reprodução de Ovinos",
            "description": "Serviços especializados de ovinocultura com foco na criação sustentável de ovelhas Vendéen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria Técnica",
            "description": "Aconselhamento especializado em ovinocultura e gestão de rebanhos"
          }
        }
      ]
    }
  };

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    service: '',
    details: '',
    quantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    {
      title: "Criação e Reprodução de Ovinos",
      description: "Serviços especializados de ovinocultura com foco na criação sustentável de ovelhas Vendéen, qualidade genética e bem-estar animal.",
      features: [
        "Seleção rigorosa de reprodutores ovinos",
        "Programa de melhoramento genético em ovinocultura",
        "Acompanhamento veterinário especializado em ovinos",
        "Registos genealógicos completos de ovelhas Vendéen"
      ],
      icon: "🐑"
    },
    {
      title: "Venda de Reprodutores Ovinos",
      description: "Comercialização de ovelhas Vendéen de alta qualidade genética, desde crias até reprodutores selecionados para ovinocultura.",
      features: [
        "Ovelhas Vendéen com certificação de origem",
        "Reprodutores ovinos de diferentes idades",
        "Garantia de saúde e qualidade genética",
        "Apoio técnico pós-venda em ovinocultura"
      ],
      icon: "💰"
    },
    {
      title: "Consultoria em Ovinocultura",
      description: "Consultoria técnica especializada em ovinocultura sustentável, gestão de rebanhos ovinos e otimização da produção.",
      features: [
        "Análise e diagnóstico de rebanhos ovinos",
        "Planos de melhoria em ovinocultura",
        "Formação técnica em criação de ovelhas",
        "Acompanhamento contínuo de projetos ovinos"
      ],
      icon: "📊"
    },
    {
      title: "Formação em Ovinocultura",
      description: "Cursos e workshops sobre criação sustentável de ovelhas, boas práticas em ovinocultura e gestão de pastoreio.",
      features: [
        "Cursos teóricos e práticos de ovinocultura",
        "Workshops especializados em ovelhas Vendéen",
        "Certificação profissional em criação ovina",
        "Material didático sobre pastoreio sustentável"
      ],
      icon: "🎓"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Pedido de orçamento enviado com sucesso! Entraremos em contacto brevemente.');
      setFormData({
        name: '',
        email: '',
        service: '',
        details: '',
        quantity: ''
      });
    } catch {
      setSubmitMessage('Erro ao enviar pedido. Tente novamente ou contacte-nos diretamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Serviços de Ovinocultura - Quinta Casa do Plátano | Consultoria e Formação"
        description="Serviços especializados em ovinocultura: criação de ovelhas Vendéen, consultoria técnica, formação e workshops. Experiência de 10 anos em Samora Correia."
        keywords="serviços ovinocultura, consultoria técnica ovinos, formação ovelhas, workshops criação, quinta casa do plátano, vendéen"
        url="https://quintacasadoplatano.pt/services"
        structuredData={servicesStructuredData}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-forest-800 mb-8">Nossos Serviços</h1>
        
        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-semibold text-green-800">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Request Form */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center md:text-left">Solicitar Orçamento</h2>
          <p className="text-gray-600 mb-8">
            Interessado nos nossos serviços? Preencha o formulário abaixo e entraremos em contacto consigo 
            com uma proposta personalizada.
          </p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Serviço de Interesse *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione um serviço</option>
                <option value="criacao-reproducao">Criação e Reprodução</option>
                <option value="venda-animais">Venda de Animais</option>
                <option value="consultoria">Consultoria Técnica</option>
                <option value="formacao">Formação e Workshops</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade (se aplicável)
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Número de animais ou participantes"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                Detalhes do Pedido *
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Descreva detalhadamente o que pretende..."
              />
            </div>
            
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'A enviar...' : 'Solicitar Orçamento'}
              </button>
            </div>
            
            {submitMessage && (
              <div className="md:col-span-2">
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('sucesso') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default Services;