import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Wifi, Smartphone, Computer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProtecaoGeral = () => {
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
            Proteção Geral
          </h1>
          <p className="text-lg text-muted-foreground">
            Configurações de segurança e boas práticas para navegar com tranquilidade.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Computer className="h-6 w-6 text-primary" />
                <span>Proteção do Computador</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Mantenha seu computador seguro:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Antivírus sempre atualizado</strong> - Windows Defender é suficiente</li>
                <li><strong>Atualizações automáticas</strong> - deixe o Windows se atualizar</li>
                <li><strong>Não instale programas desconhecidos</strong> - cuidado com downloads</li>
                <li><strong>Use navegadores atualizados</strong> - Chrome, Firefox, Edge</li>
                <li><strong>Faça backup dos arquivos importantes</strong> - fotos, documentos</li>
                <li><strong>Senha na tela de bloqueio</strong> - proteja quando não estiver usando</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-6 w-6 text-accent" />
                <span>Segurança do Celular</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Configurações importantes no smartphone:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Bloqueio de tela</strong> - PIN, senha ou biometria</li>
                <li><strong>Instale apps apenas das lojas oficiais</strong> - Google Play, App Store</li>
                <li><strong>Revise permissões de apps</strong> - o que cada um pode acessar</li>
                <li><strong>Atualizações automáticas</strong> - mantenha sistema e apps atualizados</li>
                <li><strong>Backup na nuvem</strong> - Google Drive, iCloud para fotos e contatos</li>
                <li><strong>Localizar meu dispositivo</strong> - ative para casos de perda</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wifi className="h-6 w-6 text-warning" />
                <span>WiFi e Internet Pública</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Cuidados ao usar internet em locais públicos:</p>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-800 dark:text-red-200">⚠️ EVITE EM WiFi PÚBLICO:</p>
                <ul className="text-red-700 dark:text-red-300 text-sm space-y-1 mt-2">
                  <li>• Acessar bancos ou fazer pagamentos</li>
                  <li>• Compras online com cartão</li>
                  <li>• Login em contas importantes</li>
                  <li>• Enviar documentos pessoais</li>
                </ul>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Use seus dados móveis</strong> para operações importantes</li>
                <li><strong>Verifique o nome da rede</strong> - cuidado com redes falsas</li>
                <li><strong>Desligue WiFi automático</strong> - evita conexões não desejadas</li>
                <li><strong>Não aceite certificados suspeitos</strong> se o navegador avisar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Navegação Segura</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Hábitos para navegar com segurança:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Digite endereços diretamente</strong> - não clique apenas em links</li>
                <li><strong>Verifique se é "https://"</strong> - especialmente para compras e login</li>
                <li><strong>Desconfie de pop-ups</strong> - janelas que abrem sozinhas</li>
                <li><strong>Não baixe arquivos suspeitos</strong> - especialmente .exe</li>
                <li><strong>Use bloqueador de anúncios</strong> - reduz riscos de malware</li>
                <li><strong>Mantenha-se informado</strong> - sobre novos tipos de golpes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-accent" />
                <span>Backup e Recuperação</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Proteja seus arquivos importantes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Fotos de família</strong> - salve no Google Fotos ou iCloud</li>
                <li><strong>Documentos importantes</strong> - copie para pendrive ou nuvem</li>
                <li><strong>Contatos do telefone</strong> - sincronize com Google ou Apple</li>
                <li><strong>Senhas anotadas</strong> - tenha uma cópia física em local seguro</li>
                <li><strong>Teste seus backups</strong> - verifique se consegue acessar</li>
                <li><strong>Múltiplas cópias</strong> - não dependa de apenas um lugar</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Checklist de Segurança Mensal:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Verifique atualizações</strong> - computador, celular, aplicativos</li>
                <li><strong>Revise senhas</strong> - mude se suspeitar de problemas</li>
                <li><strong>Limpe arquivos desnecessários</strong> - downloads antigos, lixeira</li>
                <li><strong>Verifique backups</strong> - se fotos e documentos estão salvos</li>
                <li><strong>Revise aplicativos instalados</strong> - desinstale os que não usa</li>
                <li><strong>Confira extratos bancários</strong> - procure movimentações estranhas</li>
              </ul>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="font-semibold">Regra de Ouro:</p>
                <p className="text-sm">Na dúvida, não clique! Pergunte para alguém de confiança ou procure ajuda.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default ProtecaoGeral;