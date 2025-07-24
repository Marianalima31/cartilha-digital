import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DireitosDigitais from "./pages/DireitosDigitais";
import SenhasSeguras from "./pages/SenhasSeguras";
import GolpesInternet from "./pages/GolpesInternet";
import ComprasOnline from "./pages/ComprasOnline";
import RedesSociais from "./pages/RedesSociais";
import ProtecaoGeral from "./pages/ProtecaoGeral";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/direitos-digitais" element={<DireitosDigitais />} />
          <Route path="/senhas-seguras" element={<SenhasSeguras />} />
          <Route path="/golpes-internet" element={<GolpesInternet />} />
          <Route path="/compras-online" element={<ComprasOnline />} />
          <Route path="/redes-sociais" element={<RedesSociais />} />
          <Route path="/protecao-geral" element={<ProtecaoGeral />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
