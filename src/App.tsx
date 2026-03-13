/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { CaseStudies } from './pages/CaseStudies';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Simple client-side routing
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home setPath={navigate} />;
      case '/services':
        return <Services />;
      case '/pricing':
        return <Pricing setPath={navigate} />;
      case '/case-studies':
        return <CaseStudies />;
      case '/blog':
        return <Blog />;
      case '/contact':
        return <Contact />;
      default:
        return <Home setPath={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-white flex flex-col">
      <Navbar currentPath={currentPath} setPath={navigate} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer setPath={navigate} />

      {/* Floating Chat Button */}
      <button 
        onClick={() => navigate('/contact')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-50 hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-6 h-6 text-on-primary group-hover:animate-pulse" />
      </button>
    </div>
  );
}
