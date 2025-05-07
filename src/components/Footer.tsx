
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 VideoSummary. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
