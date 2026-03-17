import React from 'react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';
import { HelpCircle, Timer, CreditCard, Headset } from 'lucide-react';
import { navigate } from 'vike/client/router';
import FlatPricing from '../../components/FlatPricing';

export default function Pricing() {
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <SEO 
        title="Pricing & Plans | Tiklife" 
        description="Unlock TikTok with agency‑level infrastructure. One flat rate. Built to scale." 
      />
      <main className="relative overflow-hidden pt-20 bg-surface dark:bg-tiklife-navy transition-colors duration-300">
      
        <FlatPricing />

        {/* Bento FAQ Section */}
        <section className="px-6 pb-32 pt-16 bg-transparent relative z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4">Got <span className="text-secondary">Questions?</span></h2>
                <p className="text-on-surface-variant text-lg">Fast answers on accounts, pricing, and what to expect.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider">Help Center Live</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* FAQ 1 */}
            <FadeIn delay={0.1} className="md:col-span-8 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <HelpCircle className="text-primary w-8 h-8 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3">How do agency ad accounts work?</h4>
                  <p className="text-on-surface-variant leading-relaxed">Agency accounts unlock higher spend thresholds, faster approvals, and better support. We handle the whitelisting so you can focus on winning creative.</p>
                </div>
              </div>
            </FadeIn>
            {/* FAQ 2 */}
            <FadeIn delay={0.2} className="md:col-span-4 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex flex-col h-full">
                <Timer className="text-secondary w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-3">Setup time?</h4>
                <p className="text-on-surface-variant leading-relaxed">Most accounts are provisioned within 24‑48 hours after verification.</p>
              </div>
            </FadeIn>
            {/* FAQ 3 */}
            <FadeIn delay={0.3} className="md:col-span-4 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex flex-col h-full">
                <CreditCard className="text-tertiary w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-3">Any hidden fees?</h4>
                <p className="text-on-surface-variant leading-relaxed">No. Your subscription covers account maintenance. Ad spend is billed through your payment method.</p>
              </div>
            </FadeIn>
            {/* FAQ 4 */}
            <FadeIn delay={0.4} className="md:col-span-8 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <Headset className="text-primary w-8 h-8 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3">What creative support do you provide?</h4>
                  <p className="text-on-surface-variant leading-relaxed">Professional plans include weekly creative audits. Enterprise clients get full production from TikTok‑native creators who know what stops the scroll.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <FadeIn className="max-w-5xl mx-auto glass-card p-12 md:p-20 rounded-[2rem] text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ff5168 0%, transparent 50%)' }}></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-on-surface dark:text-white">Ready to hit the <span className="text-transparent bg-clip-text bg-brand-gradient">For You Page?</span></h2>
            <p className="text-on-surface-variant dark:text-slate-400 text-xl mb-12 max-w-2xl mx-auto">Join 500+ brands scaling revenue with our TikTok infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-primary text-on-primary dark:bg-tiklife-cyan dark:text-tiklife-navy font-extrabold rounded-2xl text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20 dark:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                Create Your Account
              </button>
              <button 
                onClick={() => handleNavigate('/contact')}
                className="px-10 py-5 bg-surface-container-highest text-on-surface dark:bg-slate-800 dark:text-white font-bold rounded-2xl text-lg hover:bg-surface-variant dark:hover:bg-slate-700 transition-all border border-outline-variant/30 dark:border-white/10"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
    </>
  );
};
