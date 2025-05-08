
import React from 'react';
import { toast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import ChatSection from '@/components/ChatSection';
import LoadingSection from '@/components/LoadingSection';
import Footer from '@/components/Footer';
import { getVideoSummary, chatWithAI } from '@/services/api';

interface IndexProps {
  url: string;
  setUrl: (url: string) => void;
  videoData: { url: string; title: string; summary: string } | null;
  setVideoData: (data: { url: string; title: string; summary: string } | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const Index = ({ url, setUrl, videoData, setVideoData, isLoading, setIsLoading }: IndexProps) => {
  const handleSubmit = async (videoUrl: string) => {
    setIsLoading(true);

    try {
      const data = await getVideoSummary(videoUrl);
      setVideoData({
        url: videoUrl,
        title: data.title,
        summary: data.summary
      });
      toast({
        title: "Résumé généré avec succès",
        description: "Vous pouvez maintenant discuter de cette vidéo avec notre IA.",
      });
    } catch (error) {
      console.error('Error fetching video summary:', error);
      toast({
        title: "Erreur",
        description: "Impossible de générer un résumé pour cette vidéo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour envoyer des messages à l'IA
  const handleSendMessage = async (message: string, transcript: string) => {
    try {
      const response = await chatWithAI(message, transcript);
      return response;  // Le champ `response` n'existe plus, on retourne directement `data.answer`
    } catch (error) {
      console.error('Error in chat:', error);
      throw error;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection 
          onSubmit={handleSubmit} 
          url={url} 
          setUrl={setUrl}
          isLoading={isLoading}
        />
        
        {isLoading ? (
          <LoadingSection />
        ) : videoData ? (
          <>
            <SummarySection 
              videoUrl={videoData.url}
              title={videoData.title} 
              summary={videoData.summary}
            />
            <ChatSection 
              onSendMessage={handleSendMessage} 
              transcript={videoData.summary}
            />
          </>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
