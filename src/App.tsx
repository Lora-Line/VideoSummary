
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";

const queryClient = new QueryClient();

const App = () => {
  const [url, setUrl] = useState<string>('');
  const [videoData, setVideoData] = useState<{ url: string; title: string; summary: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Index 
                  url={url}
                  setUrl={setUrl}
                  videoData={videoData}
                  setVideoData={setVideoData}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              } 
            />
            <Route path="/how-it-works" element={<HowItWorks />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
