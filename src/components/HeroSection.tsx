
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  onSubmit: (url: string) => void;
  url: string;
  setUrl: (url: string) => void;
  isLoading: boolean;
}

const HeroSection = ({ onSubmit, url, setUrl, isLoading }: HeroSectionProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="relative container px-4 md:px-6 flex flex-col items-center justify-center min-h-[500px] py-20 text-center z-10">
        <div className="absolute opacity-50 animate-blob blur-xl bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-72 h-72 -top-10 -left-10"></div>
        <div className="absolute opacity-30 animate-blob animation-delay-2000 blur-xl bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-72 h-72 -bottom-10 -right-10"></div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mb-6">
          Obtenez un résumé de n'importe quelle <span className="gradient-text">vidéo YouTube</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mb-8">
          Gagnez du temps en obtenant l'essentiel de chaque vidéo, puis discutez avec notre IA pour approfondir le contenu.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col md:flex-row gap-2 mb-8">
          <Input
            placeholder="Collez l'URL YouTube ici..."
            className="flex-1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" size="lg" disabled={isLoading || !url.trim()}>
            {isLoading ? 'Chargement...' : 'Résumer'}
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground">
          Fonctionne avec n'importe quelle vidéo YouTube publique
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
