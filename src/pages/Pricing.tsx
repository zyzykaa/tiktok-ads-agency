import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Star, HelpCircle, Timer, CreditCard, Headset } from 'lucide-react';

export const Pricing = ({ setPath }: { setPath: (path: string) => void }) => {
  return (
    <main className="relative overflow-hidden pt-20">
      {/* Ambient Background Pulses */}
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(175,255,251,0.08)_0%,rgba(20,19,19,0)_70%)] blur-[60px] -z-10 top-[-10%] left-[-5%]"></div>
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,81,104,0.05)_0%,rgba(20,19,19,0)_70%)] blur-[60px] -z-10 bottom-[-10%] right-[-5%]"></div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="font-label text-secondary tracking-[0.2em] uppercase font-bold text-xs mb-4 block">Scalable Performance</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              Pricing built for <span className="gradient-text">Hypergrowth</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Unlock the power of TikTok with agency-level infrastructure and precision targeting. No hidden fees, just pure scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Starter Tier */}
          <FadeIn delay={0.1} className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-outline-variant/30 transition-all flex flex-col h-full group">
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-bold mb-2">Starter</h3>
              <p className="text-on-surface-variant text-sm">Perfect for individual creators and small brands testing the waters.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-headline font-extrabold">$49</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Agency ads account</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Basic support</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Dashboard access</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-secondary/20 text-secondary font-bold hover:bg-secondary/5 transition-all">
              Get Started
            </button>
          </FadeIn>

          {/* Professional Tier (Featured) */}
          <FadeIn delay={0.2} className="bg-surface-container-high p-10 rounded-xl border-2 border-primary/30 relative flex flex-col h-[105%] shadow-2xl shadow-primary/5 group transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-container px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-on-primary-container uppercase">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="font-headline text-3xl font-extrabold mb-2 gradient-text">Professional</h3>
              <p className="text-on-surface-variant text-sm">For scaling businesses ready to dominate the FYP.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-headline font-extrabold">$199</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-center gap-3">
                <Star className="text-primary w-5 h-5 fill-primary" />
                <span className="text-on-surface font-semibold">Premium ads account</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="text-primary w-5 h-5 fill-primary" />
                <span className="text-on-surface font-semibold">Campaign consulting</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="text-primary w-5 h-5 fill-primary" />
                <span className="text-on-surface font-semibold">Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="text-primary w-5 h-5 fill-primary" />
                <span className="text-on-surface font-semibold">Weekly performance reports</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-extrabold hover:brightness-110 transition-all shadow-xl shadow-primary/20 neon-glow-pink">
              Scale Now
            </button>
          </FadeIn>

          {/* Enterprise Tier */}
          <FadeIn delay={0.3} className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-outline-variant/30 transition-all flex flex-col h-full group">
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-on-surface-variant text-sm">Custom solutions for massive spenders and conglomerates.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-headline font-extrabold italic">Custom</span>
              </div>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Full ads management</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Dedicated creative team</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">Scaling strategy</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="text-on-surface">24/7 Slack channel</span>
              </li>
            </ul>
            <button 
              onClick={() => setPath('/contact')}
              className="w-full py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-surface-bright transition-all"
            >
              Contact Sales
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Bento FAQ Section */}
      <section className="px-6 py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4">Got <span className="text-secondary">Questions?</span></h2>
                <p className="text-on-surface-variant text-lg">Everything you need to know about our accounts and services.</p>
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
                  <h4 className="text-xl font-bold mb-3">How does the Agency Ads account work?</h4>
                  <p className="text-on-surface-variant leading-relaxed">Unlike personal accounts, our agency accounts have higher spending limits, faster ad approval times, and access to premium targeting features that are typically restricted. We handle the technical whitelistings so you can focus on the creative.</p>
                </div>
              </div>
            </FadeIn>
            {/* FAQ 2 */}
            <FadeIn delay={0.2} className="md:col-span-4 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex flex-col h-full">
                <Timer className="text-secondary w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-3">Setup Time?</h4>
                <p className="text-on-surface-variant leading-relaxed">Most accounts are provisioned within 24-48 hours after payment verification.</p>
              </div>
            </FadeIn>
            {/* FAQ 3 */}
            <FadeIn delay={0.3} className="md:col-span-4 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex flex-col h-full">
                <CreditCard className="text-tertiary w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-3">Any Hidden Fees?</h4>
                <p className="text-on-surface-variant leading-relaxed">Zero. The monthly subscription covers your account maintenance. Ad spend is managed separately via your payment method.</p>
              </div>
            </FadeIn>
            {/* FAQ 4 */}
            <FadeIn delay={0.4} className="md:col-span-8 bg-surface-container p-8 rounded-xl border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <Headset className="text-primary w-8 h-8 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3">What kind of creative support do you provide?</h4>
                  <p className="text-on-surface-variant leading-relaxed">For Professional users, we offer weekly creative audits. Enterprise clients receive full content production from our in-house network of TikTok-native creators who know exactly what stops the scroll.</p>
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
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Ready to hit the <span className="gradient-text">For You Page?</span></h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Join 500+ brands scaling their revenue with our TikTok infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-extrabold rounded-2xl text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/30 neon-glow-pink">
                Create Your Account
              </button>
              <button 
                onClick={() => setPath('/contact')}
                className="px-10 py-5 bg-surface-container-highest text-on-surface font-bold rounded-2xl text-lg hover:bg-surface-bright transition-all border border-outline-variant/20"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};
