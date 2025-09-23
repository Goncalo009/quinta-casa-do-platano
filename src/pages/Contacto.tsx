import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  // FAQ items específicos para contactos
  const faqItems = [
    {
      question: "Qual é a melhor forma de vos contactar?",
      answer: "Pode contactar-nos por telefone (926 852 863) para respostas imediatas, por email (info@quintacasadoplatano.pt) ou através do formulário nesta página. Respondemos rapidamente a todos os contactos."
    },
    {
      question: "Qual é o vosso horário de funcionamento?",
      answer: "Estamos disponíveis de segunda a sábado, das 8h00 às 18h00. Para visitas à quinta, recomendamos marcação prévia para garantir a melhor experiência."
    },
    {
      question: "Onde se localiza a quinta?",
      answer: "A Quinta Casa do Plátano localiza-se em Samora Correia, Portugal. Fornecemos indicações detalhadas após confirmação da visita e temos fácil acesso pela A1 e A10."
    },
    {
      question: "É necessário marcar visita prévia?",
      answer: "Sim, recomendamos sempre marcação prévia para visitas à quinta. Isto permite-nos preparar a melhor experiência e garantir que alguém estará disponível para vos receber adequadamente."
    },
    {
      question: "Respondem rapidamente aos emails?",
      answer: "Sim, respondemos a todos os emails no prazo máximo de 24 horas durante os dias úteis. Para questões urgentes, recomendamos contacto telefónico direto."
    },
    {
      question: "Fazem atendimento ao fim de semana?",
      answer: "Aos sábados estamos disponíveis das 8h00 às 18h00. Aos domingos, apenas para emergências ou visitas previamente agendadas. Contacte-nos para agendar."
    }
  ];
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Quinta Casa do Plátano",
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
      }
    }
  };

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^[0-9+\s-()]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      content: '926 852 863',
      link: 'tel:+351926852863'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@quintacasadoplatano.pt',
      link: 'mailto:info@quintacasadoplatano.pt'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      content: 'Samora Correia, Portugal',
      link: 'https://maps.google.com/?q=Samora+Correia,+Portugal'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sábado: 8h00 - 18h00',
      link: null
    }
  ];

  const subjects = [
    'Informações sobre Ovinocultura',
    'Compra de Ovelhas Mouton Vendéen',
    'Reprodutores Ovinos',
    'Visita à Quinta em Samora Correia',
    'Parcerias em Criação Ovina',
    'Outro'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Contacto | Comprar Borregos Reprodutores Mouton Vendéen | Tel: 926 852 863 | Quinta Casa do Plátano"
        description="📞 Contacte-nos para comprar borregos reprodutores Mouton Vendéen linha pura! Tel: 926 852 863 | Email: info@quintacasadoplatano.pt | Samora Correia, Portugal. Resposta rápida!"
        keywords="contacto quinta casa do plátano, comprar borregos reprodutores mouton vendéen, telefone 926 852 863, samora correia portugal, reprodutores ovinos contacto, ovinocultura portugal"
        url="https://quintacasadoplatano.pt/contacto"
        structuredData={contactStructuredData}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Contacte a Quinta Casa do Plátano</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contacto para saber mais sobre a nossa ovinocultura especializada em ovelhas Mouton Vendéen, 
            reprodutores ovinos e serviços em Samora Correia. 
            Entre em contacto connosco através dos meios abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contacto</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Localização</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa da localização</p>
                  <p className="text-sm">Samora Correia, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Envie-nos uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="926 852 863"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um assunto</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Descreva a sua questão ou pedido em detalhe..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Mensagem enviada com sucesso! Entraremos em contacto em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  Erro ao enviar mensagem. Tente novamente ou contacte-nos diretamente.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Como Chegar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">De Carro</h4>
              <p className="text-gray-600 mb-4">
                A Quinta Casa do Plátano localiza-se em Samora Correia, facilmente acessível pela A1 e A10. 
                Saída para Samora Correia e siga as indicações para a quinta.
              </p>
              <p className="text-gray-600">
                <strong>Coordenadas GPS:</strong> 38.9167° N, 8.9500° W
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Transporte Público</h4>
              <p className="text-gray-600 mb-4">
                Estação de comboios mais próxima: Samora Correia. 
                A partir da estação, pode contactar-nos para organizar o transporte até à quinta.
              </p>
              <p className="text-gray-600">
                <strong>Nota:</strong> Recomendamos contacto prévio para visitas à quinta.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          items={faqItems} 
          title="Perguntas Frequentes sobre Contactos"
        />
      </div>
    </div>
  );
};

export default Contact;