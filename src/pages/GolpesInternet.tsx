import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, Phone, Mail, CreditCard, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import onlineScamsImg from "@/assets/online-scams.jpg";

const GolpesInternet = () => {
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
          <img 
            src={onlineScamsImg} 
            alt="Ilustração sobre golpes na internet"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Golpes na Internet
          </h1>
          <p className="text-lg text-muted-foreground">
            Identifique e evite os golpes mais comuns na internet, e-mail e redes sociais.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-danger" />
                <span>Golpe do WhatsApp</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Como funciona e como se proteger:</p>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-800 dark:text-red-200">⚠️ GOLPE COMUM:</p>
                <p className="text-red-700 dark:text-red-300">
                  "Oi, sou seu filho/neta. Mudei de número e preciso de dinheiro urgente!"
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Sempre ligue</strong> para confirmar com o número antigo</li>
                <li><strong>Desconfie de urgência</strong> - golpistas criam pressão</li>
                <li><strong>Nunca envie dinheiro</strong> sem confirmar pessoalmente</li>
                <li><strong>Peça para a pessoa aparecer</strong> por videochamada</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-warning" />
                <span>E-mails Falsos (Phishing)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>E-mails que fingem ser de bancos, lojas ou órgãos públicos:</p>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="font-semibold text-yellow-800 dark:text-yellow-200">⚠️ SINAIS DE GOLPE:</p>
                <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 mt-2">
                  <li>• Urgência excessiva ("Sua conta será bloqueada!")</li>
                  <li>• Pedindo senhas ou dados pessoais</li>
                  <li>• Links suspeitos</li>
                  <li>• Erros de português</li>
                </ul>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Bancos nunca pedem senha por e-mail</strong></li>
                <li><strong>Acesse o site digitando o endereço</strong> (não clique em links)</li>
                <li><strong>Verifique o remetente</strong> - e-mails oficiais têm domínios corretos</li>
                <li><strong>Na dúvida, ligue</strong> para a empresa</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-accent" />
                <span>Golpes em Vendas Online</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Cuidados ao comprar pela internet:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Preços muito baixos</strong> - desconfie de "promoções" irreais</li>
                <li><strong>Pagamento apenas por PIX</strong> - prefira cartão ou boleto</li>
                <li><strong>Sites sem CNPJ ou telefone</strong> - sempre verifique</li>
                <li><strong>Pressão para comprar rápido</strong> - golpistas criam urgência</li>
                <li><strong>Vendedores em redes sociais</strong> - muito cuidado com desconhecidos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <span>Golpes em Redes Sociais</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Situações perigosas no Facebook, Instagram e similares:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Perfis falsos</strong> - verificar amigos em comum e fotos antigas</li>
                <li><strong>Correntes de dinheiro</strong> - "investimentos" miraculosos são golpe</li>
                <li><strong>Sorteios falsos</strong> - nunca pague taxa para receber prêmio</li>
                <li><strong>Links suspeitos</strong> - não clique em links de desconhecidos</li>
                <li><strong>Pedidos de dinheiro</strong> - mesmo de "amigos", sempre confirme</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Como Se Proteger</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Regras de ouro para evitar golpes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Desconfie sempre</strong> - se parece bom demais, provavelmente é golpe</li>
                <li><strong>Não tome decisões sob pressão</strong> - durma sobre isso</li>
                <li><strong>Confirme por outros meios</strong> - ligue, visite, pergunte</li>
                <li><strong>Nunca forneça dados pessoais</strong> por telefone ou e-mail</li>
                <li><strong>Converse com família</strong> - duas cabeças pensam melhor</li>
                <li><strong>Mantenha programas atualizados</strong> - antivírus e navegador</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Se Você Foi Vítima de Golpe:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Não tenha vergonha</strong> - acontece com muita gente</li>
                <li><strong>Pare qualquer transação</strong> - cancele cartões se necessário</li>
                <li><strong>Registre um Boletim de Ocorrência</strong> na delegacia</li>
                <li><strong>Contate seu banco</strong> para reverter transferências</li>
                <li><strong>Denuncie</strong> no site da Polícia Civil ou pelo 181</li>
                <li><strong>Conte para família</strong> - eles podem ajudar</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default GolpesInternet;