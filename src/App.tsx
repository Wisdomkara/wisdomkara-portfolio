import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// In main.tsx or App.tsx
import emailjs from "@emailjs/browser";

emailjs.init("vDkxokCw5SWcVQfxL");

const queryClient = new QueryClient();

const App = () => {
  const isHomeRoute = window.location.pathname === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isHomeRoute ? <Index /> : <NotFound />}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
