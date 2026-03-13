import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Navbar = ({ currentPath, setPath }: { currentPath: string, setPath: (path: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setPath('/')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-on-primary-container fill-current" />
          </div>
          <span className="font-headline font-extrabold text-xl tracking-tight">TikTok Ads Agency</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => setPath(link.path)}
              className={`text-sm font-medium transition-colors ${currentPath === link.path ? 'text-primary' : 'hover:text-primary'}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setPath('/contact')}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all neon-glow-pink"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-b border-outline-variant/10 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                setPath(link.path);
                setMobileMenuOpen(false);
              }}
              className={`text-sm font-medium text-left ${currentPath === link.path ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-3">
            <button 
              onClick={() => {
                setPath('/contact');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 py-2.5 rounded-xl text-sm font-bold neon-glow-pink"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
