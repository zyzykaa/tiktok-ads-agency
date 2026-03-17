import React from 'react';
import { Zap, Share2, Globe, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-outline-variant/10 py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <a 
              href="/"
              className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src="/assets/logo-white.png" alt="Tiklife Logo" className="block h-[48px] w-auto drop-shadow-[0_0_15px_rgba(53,251,245,0.2)]" width="180" height="48" />
            </a>
            <p className="text-sm text-on-surface/40 leading-relaxed max-w-xs">
              The elite partner for brands looking to dominate short-form video and social commerce.
            </p>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold mb-6">Menu</h5>
            <ul className="space-y-4 text-sm text-on-surface/50">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Case Studies", path: "/case-studies" }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-on-surface/50">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Contact", path: "/contact" }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-outline-variant/5">
          <p className="text-xs text-on-surface/30">(c) 2026 Tiklife. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <button aria-label="Share this page" className="text-on-surface/30 hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <a href="/" aria-label="Visit our homepage" className="text-on-surface/30 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="mailto:shinnd98@gmail.com" aria-label="Send us an email" className="text-on-surface/30 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
