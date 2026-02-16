import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FunnelQuiz from "./pages/FunnelQuiz";
import FunnelResult from "./pages/FunnelResult";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/funnel/step-one" element={<FunnelQuiz stepName="step-one" />} />
          <Route path="/funnel/step-two" element={<FunnelQuiz stepName="step-two" />} />
          <Route path="/funnel/step-three" element={<FunnelQuiz stepName="step-three" />} />
          <Route path="/funnel/step-four" element={<FunnelQuiz stepName="step-four" />} />
          <Route path="/funnel/step-five" element={<FunnelQuiz stepName="step-five" />} />
          <Route path="/funnel/step-six" element={<FunnelQuiz stepName="step-six" />} />
          <Route path="/funnel/step-seven" element={<FunnelQuiz stepName="step-seven" />} />
          <Route path="/funnel/result" element={<FunnelResult />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
