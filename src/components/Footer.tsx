
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 VideoSummary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
