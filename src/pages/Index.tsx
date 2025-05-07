
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import ChatSection from '@/components/ChatSection';
import LoadingSection from '@/components/LoadingSection';
import Footer from '@/components/Footer';
import { getVideoSummary, chatWithAI } from '@/services/api';

const Index = () => {
  const [url, setUrl] = useState<string>('');
  const [videoData, setVideoData] = useState<{ url: string; title: string; summary: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  
  const handleSendMessage = async (message: string) => {
    try {
      const response = await chatWithAI(message);
      return response;
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
            <ChatSection onSendMessage={handleSendMessage} />
          </>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
