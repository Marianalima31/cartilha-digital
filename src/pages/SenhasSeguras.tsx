import Header from "@/components/Header";
import AccessibilityControls from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock, Key, Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import passwordSecurityImg from "@/assets/password-security.jpg";

const SenhasSeguras = () => {
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
            src={passwordSecurityImg} 
            alt="Ilustração sobre segurança de senhas"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Senhas Seguras
          </h1>
          <p className="text-lg text-muted-foreground">
            Aprenda a criar e gerenciar senhas fortes para proteger suas contas online.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="h-6 w-6 text-primary" />
                <span>Como Criar uma Senha Forte</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Uma senha forte deve ter pelo menos:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>8 a 12 caracteres:</strong> Quanto mais longa, mais segura</li>
                <li><strong>Letras maiúsculas e minúsculas:</strong> Como A, b, C, d</li>
                <li><strong>Números:</strong> Como 1, 2, 3, 4</li>
                <li><strong>Símbolos especiais:</strong> Como !, @, #, $</li>
                <li><strong>Sem informações pessoais:</strong> Evite nome, data de nascimento, telefone</li>
              </ul>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Exemplo de senha forte:</p>
                <p className="font-mono text-sm">MinhaC@sa123!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Combina palavras familiares com números e símbolos)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                <span>Senhas que Você NUNCA Deve Usar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Evite estas senhas perigosas:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>123456, password, 123456789</li>
                <li>Seu nome + ano de nascimento (ex: maria1945)</li>
                <li>Sequências do teclado (qwerty, 123abc)</li>
                <li>Nomes de familiares ou pets</li>
                <li>Datas importantes (aniversários, casamento)</li>
                <li>A mesma senha para várias contas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-accent" />
                <span>Dicas Práticas para o Dia a Dia</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Use uma senha diferente para cada conta importante</strong></li>
                <li><strong>Anote suas senhas em um caderno físico</strong> (guarde em local seguro)</li>
                <li><strong>Mude senhas se suspeitar que foram descobertas</strong></li>
                <li><strong>Nunca compartilhe senhas por WhatsApp ou e-mail</strong></li>
                <li><strong>Use a verificação em duas etapas quando disponível</strong></li>
                <li><strong>Deslogue sempre de computadores públicos</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-6 w-6 text-danger" />
                <span>Verificação em Duas Etapas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Uma camada extra de segurança para suas contas mais importantes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>O que é:</strong> Além da senha, você recebe um código no celular</li>
                <li><strong>Como ativar:</strong> Procure "Segurança" ou "Verificação" nas configurações</li>
                <li><strong>Onde usar:</strong> E-mail, banco, redes sociais, WhatsApp</li>
                <li><strong>Vantagem:</strong> Mesmo se descobrirem sua senha, precisarão do seu celular</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Método Simples para Criar Senhas:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Pense em uma frase que você lembra facilmente</li>
                <li>Pegue a primeira letra de cada palavra</li>
                <li>Substitua algumas letras por números e símbolos</li>
                <li>Adicione o nome do site no final</li>
              </ol>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="font-semibold">Exemplo:</p>
                <p>"Minha filha nasceu em 1990" → Mfne1990 → Mfn3!990Face</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AccessibilityControls />
    </div>
  );
};

export default SenhasSeguras;