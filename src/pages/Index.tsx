import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TopicCard from "@/components/TopicCard";
import AccessibilityControls from "@/components/AccessibilityControls";
import { 
  Lock, 
  AlertTriangle, 
  Shield, 
  CreditCard, 
  Users, 
  FileText,
  Phone,
  Mail
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import digitalRightsImg from "@/assets/digital-rights.jpg";
import passwordSecurityImg from "@/assets/password-security.jpg";
import onlineScamsImg from "@/assets/online-scams.jpg";

const Index = () => {
  const topics = [
    {
      title: "Seus Direitos Digitais",
      description: "Conheça seus direitos como cidadão no mundo digital. Privacidade, proteção de dados e muito mais.",
      icon: FileText,
      color: "primary" as const,
      illustration: digitalRightsImg,
    },
    {
      title: "Senhas Seguras",
      description: "Aprenda a criar e gerenciar senhas fortes para proteger suas contas online.",
      icon: Lock,
      color: "accent" as const,
      illustration: passwordSecurityImg,
    },
    {
      title: "Golpes na Internet",
      description: "Identifique e evite os golpes mais comuns na internet, e-mail e redes sociais.",
      icon: AlertTriangle,
      color: "warning" as const,
      illustration: onlineScamsImg,
    },
    {
      title: "Compras Online Seguras",
      description: "Dicas para fazer compras na internet com segurança e evitar fraudes.",
      icon: CreditCard,
      color: "primary" as const,
    },
    {
      title: "Redes Sociais",
      description: "Use Facebook, WhatsApp e outras redes sociais de forma segura e privada.",
      icon: Users,
      color: "accent" as const,
    },
    {
      title: "Proteção Geral",
      description: "Configurações de segurança e boas práticas para navegar com tranquilidade.",
      icon: Shield,
      color: "primary" as const,
    },
  ];

  const handleTopicClick = (topic: string) => {
    // Future navigation implementation
    console.log(`Navigating to ${topic}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <IntroSection />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Escolha um Tópico para Começar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                color={topic.color}
                illustration={topic.illustration}
                onClick={() => handleTopicClick(topic.title)}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-muted/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Ajuda?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Se você tiver dúvidas ou precisar de assistência, não hesite em entrar em contato. 
                Estamos aqui para ajudar você a navegar com segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Telefone de Apoio</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Enviar E-mail</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Cartilha Digital - Direitos Digitais para Idosos
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Informação acessível e segura para todos
          </p>
        </div>
      </footer>
      
      <AccessibilityControls />
    </div>
  );
};

export default Index;