import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "../components/ThemeProvider";
import "../index.css";
import { MessageCircle } from "lucide-react";
import { CookieBanner } from "../components/CookieBanner";

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Crisp Chat Integration
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "156d64d6-56a2-4c45-96cd-6c928a8f6654";

    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        
        {/* Anti-FOUC for Dark Mode */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('dark');` }} />
        
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5BS4X77LVH"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5BS4X77LVH');
          `}
        </script>
        {/* End Google Analytics */}

        {/* TikTok Pixel Code */}
        <script>
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
            ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('D6RNBTJC77U1CBCKLQRG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </script>
        {/* End TikTok Pixel Code */}
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
