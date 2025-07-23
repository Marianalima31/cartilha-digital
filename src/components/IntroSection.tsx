import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Bem-vindos à sua Cartilha Digital
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Este guia foi criado especialmente para você que quer navegar na internet 
          com segurança e conhecer seus direitos no mundo digital. Aqui você encontrará 
          informações simples e práticas para usar a tecnologia de forma segura.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Para Você, Idoso
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reconhecemos sua sabedoria e experiência. Esta cartilha respeita 
                  seu tempo de aprendizado e apresenta as informações de forma clara 
                  e acessível.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Feito com Carinho
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada seção foi pensada para ser útil no seu dia a dia, 
                  com exemplos práticos e dicas que realmente funcionam 
                  para proteger você online.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntroSection;