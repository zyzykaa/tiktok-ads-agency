import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "../components/ThemeProvider";
import "../index.css";
import { MessageCircle } from "lucide-react";
import { CookieBanner } from "../components/CookieBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider defaultTheme="dark">
        <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <a 
            href="/contact"
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-50 hover:scale-110 transition-transform group"
          >
            <MessageCircle className="w-6 h-6 text-on-primary group-hover:animate-pulse" />
          </a>
          <CookieBanner />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
