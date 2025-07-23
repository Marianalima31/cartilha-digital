import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Volume2, Eye, Settings } from "lucide-react";
import { toast } from "sonner";

const AccessibilityControls = () => {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState("normal");
  const [isOpen, setIsOpen] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 24) {
      const newSize = fontSize + 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
      toast.success("Fonte aumentada");
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
      toast.success("Fonte diminuída");
    }
  };

  const toggleContrast = () => {
    const newContrast = contrast === "normal" ? "high" : "normal";
    setContrast(newContrast);
    document.documentElement.classList.toggle("high-contrast");
    toast.success(newContrast === "high" ? "Alto contraste ativado" : "Contraste normal");
  };

  const speakPage = () => {
    if ('speechSynthesis' in window) {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text.slice(0, 500));
      utterance.lang = 'pt-BR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
      toast.success("Iniciando leitura da página");
    } else {
      toast.error("Seu navegador não suporta leitura de tela");
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        aria-label="Abrir controles de acessibilidade"
      >
        <Settings className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-xl">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Acessibilidade</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar controles"
          >
            ✕
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Tamanho da Fonte: {fontSize}px
            </label>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                disabled={fontSize <= 12}
                aria-label="Diminuir fonte"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={fontSize >= 24}
                aria-label="Aumentar fonte"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={toggleContrast}
            className="w-full flex items-center gap-2"
            aria-label={`${contrast === "normal" ? "Ativar" : "Desativar"} alto contraste`}
          >
            <Eye className="h-4 w-4" />
            {contrast === "normal" ? "Alto Contraste" : "Contraste Normal"}
          </Button>

          <Button
            variant="outline"
            onClick={speakPage}
            className="w-full flex items-center gap-2"
            aria-label="Ler página em voz alta"
          >
            <Volume2 className="h-4 w-4" />
            Ler Página
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessibilityControls;