import React from 'react';
import { Shield, Eye, Lock, UserCheck, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-900 p-4 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Política de Privacidade</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Quinta Casa do Plátano está comprometida com a proteção da sua privacidade e dos seus dados pessoais, 
            em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Última atualização: Janeiro de 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6" />
              Introdução
            </h2>
            <p className="text-gray-700 mb-4">
              A Quinta Casa do Plátano, com sede em Samora Correia, Portugal, respeita a sua privacidade e 
              está empenhada em proteger os seus dados pessoais. Esta política de privacidade explica como 
              recolhemos, utilizamos e protegemos as suas informações quando visita o nosso website ou 
              utiliza os nossos serviços.
            </p>
            <p className="text-gray-700">
              Esta política aplica-se a todos os dados pessoais que processamos sobre si, seja como visitante 
              do nosso website, cliente, ou pessoa interessada nos nossos serviços.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <UserCheck className="w-6 h-6" />
              Dados que Recolhemos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dados de Contacto</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Número de telefone</li>
                  <li>Morada (quando relevante para os serviços)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dados de Navegação</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e versão</li>
                  <li>Páginas visitadas no nosso website</li>
                  <li>Data e hora das visitas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dados Comerciais</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Informações sobre interesse em compra de animais</li>
                <li>Preferências sobre raças e características dos animais</li>
                <li>Histórico de comunicações e transações</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6" />
              Como Utilizamos os Seus Dados
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Finalidades do Tratamento</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Responder a pedidos de informação sobre animais</li>
                  <li>Processar encomendas e vendas</li>
                  <li>Fornecer acompanhamento técnico pós-venda</li>
                  <li>Melhorar os nossos serviços</li>
                  <li>Enviar informações sobre os nossos serviços (com o seu consentimento)</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Base Legal</h3>
                <p className="text-gray-700">
                  Processamos os seus dados pessoais com base nas seguintes bases legais:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li><strong>Consentimento:</strong> Para comunicações de marketing</li>
                  <li><strong>Execução de contrato:</strong> Para fornecer os nossos serviços</li>
                  <li><strong>Interesse legítimo:</strong> Para melhorar os nossos serviços</li>
                  <li><strong>Obrigação legal:</strong> Para cumprir requisitos fiscais e contabilísticos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Partilha de Dados</h2>
            <p className="text-gray-700 mb-4">
              Não vendemos, alugamos ou partilhamos os seus dados pessoais com terceiros para fins comerciais. 
              Podemos partilhar os seus dados apenas nas seguintes circunstâncias:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Com prestadores de serviços que nos ajudam a operar o nosso negócio (sob acordos de confidencialidade)</li>
              <li>Quando exigido por lei ou por autoridades competentes</li>
              <li>Para proteger os nossos direitos legais ou propriedade</li>
              <li>Com o seu consentimento explícito</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Os Seus Direitos</h2>
            <p className="text-gray-700 mb-4">
              Ao abrigo do RGPD, tem os seguintes direitos relativamente aos seus dados pessoais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cream-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Direito de Acesso</h3>
                <p className="text-gray-700 text-sm">Pode solicitar uma cópia dos dados pessoais que temos sobre si.</p>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Direito de Retificação</h3>
                <p className="text-gray-700 text-sm">Pode solicitar a correção de dados incorretos ou incompletos.</p>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Direito ao Apagamento</h3>
                <p className="text-gray-700 text-sm">Pode solicitar a eliminação dos seus dados pessoais.</p>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Direito à Portabilidade</h3>
                <p className="text-gray-700 text-sm">Pode solicitar os seus dados num formato estruturado.</p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Segurança dos Dados</h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais 
              contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Encriptação de dados sensíveis</li>
              <li>Acesso restrito aos dados pessoais</li>
              <li>Formação regular da nossa equipa sobre proteção de dados</li>
              <li>Monitorização regular dos nossos sistemas</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-forest-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Contacte-nos
            </h2>
            <p className="mb-4">
              Se tiver questões sobre esta política de privacidade ou quiser exercer os seus direitos, 
              pode contactar-nos através de:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@quintacasadoplatano.pt</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>926 852 863</span>
              </div>
            </div>
            <p className="text-cream-200 text-sm mt-4">
              Responderemos ao seu pedido no prazo de 30 dias, conforme exigido pelo RGPD.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;