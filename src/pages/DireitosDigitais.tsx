import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Shield, Eye, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import digitalRightsImg from "@/assets/digital-rights.jpg";

const DireitosDigitais = () => {
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
            src={digitalRightsImg} 
            alt="Ilustração sobre direitos digitais"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Seus Direitos Digitais
          </h1>
          <p className="text-lg text-muted-foreground">
            Conheça seus direitos como cidadão no mundo digital. A internet não é terra de ninguém!
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-primary" />
                <span>Lei Geral de Proteção de Dados (LGPD)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>A LGPD garante que você tenha controle sobre seus dados pessoais:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Direito de saber:</strong> As empresas devem informar quais dados coletam e como usam</li>
                <li><strong>Direito de acesso:</strong> Você pode solicitar uma cópia de todos os seus dados</li>
                <li><strong>Direito de correção:</strong> Pode corrigir informações incorretas sobre você</li>
                <li><strong>Direito de exclusão:</strong> Pode pedir para apagar seus dados</li>
                <li><strong>Direito de portabilidade:</strong> Pode transferir seus dados para outro serviço</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-accent" />
                <span>Direito à Privacidade</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sua privacidade online é um direito fundamental:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Ninguém pode ler suas mensagens privadas sem autorização</li>
                <li>Suas fotos e vídeos pessoais não podem ser compartilhados sem permissão</li>
                <li>Você tem direito ao anonimato em muitas situações online</li>
                <li>Câmeras e microfones só podem ser ativados com sua permissão</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-warning" />
                <span>Direito de Não Ser Rastreado</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Você pode controlar como as empresas te acompanham online:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Pode recusar cookies de rastreamento</li>
                <li>Pode desativar publicidade personalizada</li>
                <li>Tem direito de não ter seu comportamento analisado</li>
                <li>Pode usar navegadores que bloqueiam rastreamento</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-6 w-6 text-danger" />
                <span>Como Exercer Seus Direitos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Passos práticos para garantir seus direitos:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Leia as políticas de privacidade dos sites que usa</li>
                <li>Configure as opções de privacidade em suas redes sociais</li>
                <li>Entre em contato com empresas para exercer seus direitos</li>
                <li>Denuncie violações à Autoridade Nacional de Proteção de Dados (ANPD)</li>
                <li>Procure ajuda jurídica se necessário</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Lembre-se:</h3>
              <p className="text-muted-foreground">
                Seus direitos digitais são tão importantes quanto seus direitos no mundo físico. 
                Não tenha medo de exercê-los e sempre procure ajuda quando não souber como proceder.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default DireitosDigitais;