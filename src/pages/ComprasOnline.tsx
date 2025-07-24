import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComprasOnline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao Início</span>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Compras Online Seguras
          </h1>
          <p className="text-lg text-muted-foreground">
            Dicas para fazer compras na internet com segurança e evitar fraudes.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Antes de Comprar: Verifique o Site</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sinais de que um site é confiável:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>CNPJ visível</strong> - procure no rodapé do site</li>
                <li><strong>Endereço físico e telefone</strong> - informações de contato claras</li>
                <li><strong>Avaliações de outros clientes</strong> - pesquise no Google e Reclame Aqui</li>
                <li><strong>Certificado de segurança</strong> - URL deve começar com "https://"</li>
                <li><strong>Política de troca e devolução</strong> - deve estar bem explicada</li>
                <li><strong>Múltiplas formas de pagamento</strong> - cartão, boleto, PIX</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-accent" />
                <span>Formas de Pagamento Seguras</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-800 dark:text-green-200">✅ MAIS SEGURO:</p>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1 mt-2">
                    <li>• <strong>Cartão de crédito</strong> - facilita cancelamento e estorno</li>
                    <li>• <strong>Boleto bancário</strong> - não expõe dados do cartão</li>
                    <li>• <strong>PayPal, PagSeguro</strong> - intermediários confiáveis</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200">⚠️ CUIDADO:</p>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 mt-2">
                    <li>• <strong>PIX</strong> - só para lojas conhecidas (difícil estornar)</li>
                    <li>• <strong>Transferência bancária</strong> - evite para desconhecidos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Proteção dos Seus Dados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Como proteger suas informações pessoais:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Use apenas seu computador/celular</strong> - evite computadores públicos</li>
                <li><strong>Não salve senhas em navegadores públicos</strong> ou de outras pessoas</li>
                <li><strong>Verifique se está no site oficial</strong> - cuidado com links de e-mail</li>
                <li><strong>Mantenha antivírus atualizado</strong> - proteção contra malware</li>
                <li><strong>Deslogue sempre</strong> - especialmente em celulares emprestados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                <span>Sinais de Alerta</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Desconfie quando encontrar:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Preços muito abaixo do mercado</strong> - "promoções" irreais</li>
                <li><strong>Site sem informações de contato</strong> - CNPJ, telefone, endereço</li>
                <li><strong>Apenas pagamento à vista</strong> - sem parcelamento ou outras opções</li>
                <li><strong>Pressão para comprar rápido</strong> - "últimas unidades", "oferta relâmpago"</li>
                <li><strong>Site com muitos erros</strong> - português ruim, layout mal feito</li>
                <li><strong>Pedidos de dados desnecessários</strong> - CPF para newsletter, por exemplo</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Depois da Compra</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Acompanhe sua compra:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Guarde o comprovante</strong> - e-mail, número do pedido</li>
                <li><strong>Acompanhe a entrega</strong> - código de rastreamento</li>
                <li><strong>Confira o produto</strong> - ao receber, verifique se está correto</li>
                <li><strong>Mantenha a nota fiscal</strong> - para garantia e trocas</li>
                <li><strong>Avalie sua experiência</strong> - ajude outros compradores</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Seus Direitos como Consumidor:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>7 dias para desistir</strong> - sem precisar justificar (direito de arrependimento)</li>
                <li><strong>30 dias para reclamar de vícios aparentes</strong> - problemas visíveis</li>
                <li><strong>90 dias para vícios ocultos</strong> - problemas que aparecem depois</li>
                <li><strong>Direito à informação clara</strong> - sobre produto, preço, condições</li>
                <li><strong>Proteção contra práticas abusivas</strong> - venda casada, propaganda enganosa</li>
              </ul>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="font-semibold">Em caso de problemas:</p>
                <p className="text-sm">Reclame Aqui, Procon, ou site do seu estado para defesa do consumidor</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default ComprasOnline;