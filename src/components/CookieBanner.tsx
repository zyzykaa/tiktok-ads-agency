import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent');
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface-container-highest border-t border-outline-variant/20 p-4 md:p-6 z-[100] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="flex-1 max-w-4xl">
        <p className="text-sm text-on-surface/80">
          We use cookies to improve your experience, analyze site traffic, and serve tailored advertisements. 
          By clicking "Accept All", you consent to our use of cookies. Read our <a href="/privacy-policy" className="text-primary hover:underline font-bold">Privacy Policy</a> to learn more.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={acceptCookies}
          className="bg-primary text-on-primary font-bold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          Accept All
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
