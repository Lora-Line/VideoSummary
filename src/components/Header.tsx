
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="font-bold inline-block">VideoSummary</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" className="text-sm" asChild>
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
