import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Lock, Eye, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RedesSociais = () => {
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
            Redes Sociais Seguras
          </h1>
          <p className="text-lg text-muted-foreground">
            Use Facebook, WhatsApp, Instagram e outras redes sociais de forma segura e privada.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-primary" />
                <span>Configurações de Privacidade</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ajuste suas configurações para maior segurança:</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Facebook:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Menu → Configurações e Privacidade → Configurações</li>
                    <li>Privacidade → Quem pode ver suas publicações</li>
                    <li>Escolha "Amigos" em vez de "Público"</li>
                    <li>Desative localização em publicações</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No WhatsApp:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Configurações → Conta → Privacidade</li>
                    <li>Visto por último: Apenas contatos</li>
                    <li>Foto do perfil: Apenas contatos</li>
                    <li>Status: Apenas contatos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-accent" />
                <span>Cuidado com Desconhecidos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Como identificar e lidar com perfis suspeitos:</p>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="font-semibold text-yellow-800 dark:text-yellow-200">⚠️ SINAIS DE PERFIL FALSO:</p>
                <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 mt-2">
                  <li>• Poucas fotos ou fotos muito perfeitas</li>
                  <li>• Poucos amigos em comum</li>
                  <li>• Perfil criado recentemente</li>
                  <li>• Pede dinheiro ou dados pessoais rapidamente</li>
                </ul>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Não aceite solicitações de desconhecidos</strong></li>
                <li><strong>Verifique amigos em comum</strong> antes de aceitar</li>
                <li><strong>Desconfie de abordagens românticas rápidas</strong></li>
                <li><strong>Nunca envie dinheiro</strong> para pessoas que conheceu online</li>
                <li><strong>Bloqueie perfis suspeitos</strong> sem medo</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-warning" />
                <span>O Que Não Compartilhar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Informações que você deve manter privadas:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Documentos pessoais</strong> - CPF, RG, cartões, senhas</li>
                <li><strong>Localização em tempo real</strong> - onde você está agora</li>
                <li><strong>Rotina detalhada</strong> - horários de trabalho, viagens</li>
                <li><strong>Problemas financeiros</strong> - dívidas, situação bancária</li>
                <li><strong>Informações de família</strong> - endereços, telefones de parentes</li>
                <li><strong>Fotos de objetos de valor</strong> - joias, eletrônicos caros</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-6 w-6 text-danger" />
                <span>Grupos e Conversas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Cuidados com grupos e mensagens:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Cuidado com grupos desconhecidos</strong> - podem ser usados para golpes</li>
                <li><strong>Não repasse correntes</strong> - especialmente sobre dinheiro ou saúde</li>
                <li><strong>Desconfie de "notícias"</strong> - verifique em sites confiáveis</li>
                <li><strong>Não clique em links suspeitos</strong> - podem roubar seus dados</li>
                <li><strong>Denuncie conteúdo inadequado</strong> - spam, golpes, assédio</li>
                <li><strong>Saia de grupos tóxicos</strong> - que causam mal-estar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-accent" />
                <span>Segurança da Conta</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Medidas para proteger suas contas:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Use senhas diferentes</strong> para cada rede social</li>
                <li><strong>Ative verificação em duas etapas</strong> quando disponível</li>
                <li><strong>Revise aplicativos conectados</strong> - remova os que não usa</li>
                <li><strong>Não faça login em computadores públicos</strong></li>
                <li><strong>Desconfie de e-mails de "verificação"</strong> - podem ser falsos</li>
                <li><strong>Mantenha os aplicativos atualizados</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Dicas para uma Experiência Positiva:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Conecte-se com pessoas reais</strong> - família, amigos verdadeiros</li>
                <li><strong>Compartilhe momentos felizes</strong> - mas sem exagerar na exposição</li>
                <li><strong>Use para aprender</strong> - siga páginas educativas e confiáveis</li>
                <li><strong>Limite o tempo de uso</strong> - não deixe que domine seu dia</li>
                <li><strong>Seja respeitoso</strong> - trate outros como gostaria de ser tratado</li>
                <li><strong>Procure ajuda</strong> se algo te incomoda ou confunde</li>
              </ul>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="font-semibold">Lembre-se:</p>
                <p className="text-sm">As redes sociais devem melhorar sua vida, não complicá-la. Se algo parece estranho, desconfie!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default RedesSociais;