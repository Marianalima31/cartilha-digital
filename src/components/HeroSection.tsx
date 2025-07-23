import heroImage from "@/assets/hero-digital-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-12 mb-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Navegue com{" "}
            <span className="text-primary">Segurança</span> e{" "}
            <span className="text-accent">Confiança</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sua cartilha completa sobre direitos digitais e segurança na internet. 
            Aprenda de forma simples e prática como se proteger online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-l-accent">
              <p className="text-sm font-medium text-foreground">
                ✓ Informações verificadas e atualizadas
              </p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-l-primary">
              <p className="text-sm font-medium text-foreground">
                ✓ Linguagem clara e acessível
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img
            src={heroImage}
            alt="Pessoa idosa usando computador de forma segura com ícones de proteção ao redor"
            className="w-full h-auto rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;