import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { navigate } from 'vike/client/router';
import { usePageContext } from 'vike-react/usePageContext';
import { useTheme } from './ThemeProvider';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pageContext = usePageContext();
  const currentPath = pageContext?.urlPathname || '/';

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
        <a 
          href="/"
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105" 
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="w-5 h-5 text-on-primary-container fill-current" />
          </div>
          <span className="font-headline font-extrabold text-xl tracking-tight">TikTok Ads Agency</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a 
                key={link.name} 
                href={link.path}
                className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface mr-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="/contact"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/20 neon-glow-pink"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-on-surface" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-b border-outline-variant/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate(link.path);
                }}
                className={`text-sm font-medium text-left py-2 ${isActive ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-3">
            <a 
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="w-full text-center bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 neon-glow-pink transition-transform active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
