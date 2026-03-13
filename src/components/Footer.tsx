import React from 'react';
import { Zap, Share2, Globe, Mail } from 'lucide-react';

export const Footer = ({ setPath }: { setPath: (path: string) => void }) => {
  return (
    <footer className="border-t border-outline-variant/10 py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => setPath('/')}
            >
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-on-primary fill-current" />
              </div>
              <span className="font-headline font-bold text-lg">TikTok Ads Agency</span>
            </div>
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
                  <button onClick={() => setPath(link.path)} className="hover:text-primary transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-on-surface/50">
              {[
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
                { name: "Contact", path: "/contact" }
              ].map(link => (
                <li key={link.name}>
                  <button onClick={() => link.path !== '#' && setPath(link.path)} className="hover:text-primary transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-outline-variant/5">
          <p className="text-xs text-on-surface/30">© 2026 TikTok Ads Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Share2 className="w-5 h-5 text-on-surface/30 hover:text-primary cursor-pointer transition-colors" />
            <Globe className="w-5 h-5 text-on-surface/30 hover:text-primary cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-on-surface/30 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
