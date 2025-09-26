import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Termos de Serviço | Quinta Casa do Plátano"
        description="Termos de serviço da Quinta Casa do Plátano. Condições de utilização dos nossos serviços e navegação no website. Informações legais completas."
        keywords="termos serviço, condições utilização, quinta casa do plátano, termos legais, condições website"
        url="https://quintacasadoplatano.pt/termos"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-900 p-4 rounded-full">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Termos de Serviço</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estes termos regulam a utilização dos serviços da Quinta Casa do Plátano e a navegação no nosso website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Última atualização: Janeiro de 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6" />
              Informações Gerais
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Identificação da Empresa</h3>
                <div className="bg-cream-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Denominação:</strong> Quinta Casa do Plátano</p>
                  <p className="text-gray-700"><strong>Localização:</strong> Samora Correia, Portugal</p>
                  <p className="text-gray-700"><strong>Email:</strong> info@quintacasadoplatano.pt</p>
                  <p className="text-gray-700"><strong>Telefone:</strong> 926 852 863</p>
                  <p className="text-gray-700"><strong>Atividade:</strong> Criação de ovelhas da raça Mouton Vendéen</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aceitação dos Termos</h3>
                <p className="text-gray-700">
                  Ao utilizar o nosso website ou contratar os nossos serviços, declara que leu, compreendeu 
                  e aceita estar vinculado a estes termos de serviço. Se não concordar com qualquer parte 
                  destes termos, não deve utilizar os nossos serviços.
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              Serviços Oferecidos
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                A Quinta Casa do Plátano oferece os seguintes serviços:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cream-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Criação e Reprodução de Ovinos</h3>
                  <p className="text-gray-700 text-sm">
                    Serviços especializados de ovinocultura com foco na criação sustentável de ovelhas Mouton Vendéen.
                  </p>
                </div>
                
                <div className="bg-cream-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Venda de Reprodutores Ovinos</h3>
                  <p className="text-gray-700 text-sm">
                    Comercialização de ovelhas Mouton Vendéen de alta qualidade genética, desde crias até reprodutores selecionados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conditions */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Condições de Utilização</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>O conteúdo do website é apenas para fins informativos</li>
                  <li>Reservamo-nos o direito de alterar o conteúdo sem aviso prévio</li>
                  <li>É proibido utilizar o website para fins ilegais ou não autorizados</li>
                  <li>Não garantimos que o website esteja sempre disponível ou livre de erros</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Serviços</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Todos os serviços estão sujeitos a disponibilidade</li>
                  <li>Os preços podem ser alterados sem aviso prévio</li>
                  <li>Reservamo-nos o direito de recusar serviços a qualquer pessoa</li>
                  <li>As condições específicas serão acordadas por escrito para cada serviço</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payments and Refunds */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Pagamentos e Reembolsos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Condições de Pagamento</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Os pagamentos devem ser efetuados conforme acordado no contrato de serviço</li>
                  <li>Aceitamos transferência bancária, multibanco e dinheiro</li>
                  <li>Em caso de atraso no pagamento, podem ser aplicados juros de mora</li>
                  <li>Todos os preços incluem IVA à taxa legal em vigor</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Política de Reembolso</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Os reembolsos são analisados caso a caso</li>
                  <li>Para animais, aplicam-se as garantias legais de conformidade</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              Limitação de Responsabilidade
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                A Quinta Casa do Plátano compromete-se a prestar os seus serviços com a máxima qualidade e profissionalismo. 
                No entanto, a nossa responsabilidade está limitada nos seguintes termos:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Não nos responsabilizamos por danos indiretos ou consequenciais</li>
                <li>A nossa responsabilidade está limitada ao valor pago pelo serviço</li>
                <li>Para animais, aplicam-se as garantias legais previstas na lei portuguesa</li>
                <li>Não nos responsabilizamos por problemas técnicos do website</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Nota:</strong> Esta limitação não afeta os seus direitos como consumidor ao abrigo da lei portuguesa.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Propriedade Intelectual</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Todo o conteúdo do website, incluindo textos, imagens, logótipos e design, é propriedade da 
                Quinta Casa do Plátano ou dos seus licenciadores e está protegido por direitos de autor.
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>É proibida a reprodução sem autorização prévia por escrito</li>
                <li>Pode partilhar links para o nosso website</li>
                <li>Não pode utilizar o nosso conteúdo para fins comerciais</li>
                <li>Respeitamos os direitos de propriedade intelectual de terceiros</li>
              </ul>
            </div>
          </section>

          {/* Applicable Law */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Lei Aplicável e Jurisdição</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Estes termos de serviço são regidos pela lei portuguesa. Qualquer litígio decorrente da 
                utilização dos nossos serviços será da competência dos tribunais portugueses.
              </p>
              
              <p className="text-gray-700">
                Em caso de conflito, tentaremos sempre resolver a situação através de diálogo direto. 
                Se tal não for possível, pode recorrer aos meios alternativos de resolução de litígios.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-forest-900 mb-4">Alterações aos Termos</h2>
            <p className="text-gray-700 mb-4">
              Reservamo-nos o direito de alterar estes termos de serviço a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a sua publicação no website.
            </p>
            <p className="text-gray-700">
              Recomendamos que consulte regularmente esta página para se manter informado sobre 
              eventuais alterações. A continuação da utilização dos nossos serviços após as 
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-forest-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Contacte-nos
            </h2>
            <p className="mb-4">
              Se tiver questões sobre estes termos de serviço, pode contactar-nos através de:
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
              Estamos disponíveis para esclarecer qualquer dúvida sobre os nossos termos de serviço.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;