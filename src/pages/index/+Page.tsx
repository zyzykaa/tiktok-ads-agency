import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';
import { Zap, TrendingUp, CheckCircle, ArrowRight, Globe, Headphones as HeadphonesIcon, Rocket } from 'lucide-react';
import { navigate } from 'vike/client/router';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import TikTokViralPhone from '../../components/TikTokViralPhone';
import LogoMarquee from '../../components/LogoMarquee';
import { SITE_URL } from '../../lib/site';

export default function Home() {
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TikTok Ads Agency",
    "image": `${SITE_URL}/og-image.jpg`,
    "description": "We provide premium agency ad accounts, scroll-stopping creatives, and data-driven media buying to scale your ROI on TikTok.",
    "url": `${SITE_URL}/`,
    "telephone": "+84969532635",
    "priceRange": "$$$",
    "areaServed": ["US", "UK"]
  };

  return (
    <>
      <SEO 
        title="Scaling Top E-commerce & Info Brands" 
        description="We provide premium agency ad accounts, scroll-stopping creatives, and data-driven media buying to scale your ROI on TikTok." 
        schemaData={homeSchema}
      />
      <ErrorBoundary>
      <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-pulse-primary opacity-20"></div>
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/20 bg-surface-container/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-on-surface/80">Tiklife - Premium TikTok Partner</span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight">
              Scale Faster With <span className="gradient-text">Viral TikTok Ads</span>
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface/60 mb-10 max-w-xl leading-relaxed">
              Premium agency accounts, creator-grade ads, and hands-on media buying that turns TikTok into your top revenue channel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavigate('/contact')}
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all neon-glow-pink flex items-center justify-center gap-2"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleNavigate('/case-studies')}
                className="px-8 py-4 rounded-xl font-bold border border-outline-variant/20 hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              >
                View Case Studies
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-outline-variant/10 pt-8">
              <div>
                <div className="font-headline font-extrabold text-3xl text-primary mb-1">$50M+</div>
                <div className="text-xs text-on-surface/50 uppercase tracking-wider font-bold">Ad Spend Managed</div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl text-primary mb-1">3.5x</div>
                <div className="text-xs text-on-surface/50 uppercase tracking-wider font-bold">Average ROAS</div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl text-primary mb-1">500+</div>
                <div className="text-xs text-on-surface/50 uppercase tracking-wider font-bold">Active Clients</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative hidden lg:block">
            <TikTokViralPhone />
          </FadeIn>
        </div>
      </section>

      <LogoMarquee />

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6">Our Core Services</h2>
            <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">Everything you need to scale on TikTok, built for speed, volume, and profitable growth.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={0.1}>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary fill-current" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">Agency Ad Accounts</h3>
                <p className="text-on-surface/60 mb-6 leading-relaxed flex-grow">High‑trust agency accounts with higher spend ceilings, faster approvals, and real human support.</p>
                <ul className="space-y-3 mb-8">
                  {['Higher spend limits', 'Global targeting', 'Priority account support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-container" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleNavigate('/services')} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
            
            {/* Service 2 */}
            <FadeIn delay={0.2}>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:border-secondary-container/30 transition-all group relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-bl-full"></div>
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <TrendingUp className="w-8 h-8 text-secondary-container" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4 relative z-10">UGC & Creatives</h3>
                <p className="text-on-surface/60 mb-6 leading-relaxed relative z-10 flex-grow">Creator‑native ads built to hook fast, hold attention, and drive purchase intent.</p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {['Trend‑ready scripts', 'Fast turnaround', 'Test‑ready variations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-container" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleNavigate('/services')} className="inline-flex items-center gap-2 text-secondary-container font-bold text-sm hover:gap-3 transition-all relative z-10 mt-auto">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
            
            {/* Service 3 */}
            <FadeIn delay={0.3}>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">Media Buying</h3>
                <p className="text-on-surface/60 mb-6 leading-relaxed flex-grow">Hands‑on buyers who scale profitably with tight testing, clear reporting, and daily optimization.</p>
                <ul className="space-y-3 mb-8">
                  {['Daily optimization', 'Custom reporting', 'Scaling playbooks'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-container" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleNavigate('/services')} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Bento Grid */}
      <section className="py-32 bg-surface-container-lowest border-y border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6">The Unfair Advantage</h2>
            <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">Why growth‑minded brands choose us to win on TikTok and keep winning.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Bento Box */}
            <FadeIn delay={0.1} className="md:col-span-2 glass-card rounded-3xl p-10 border border-outline-variant/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary fill-current" />
                </div>
                <h3 className="font-headline font-bold text-3xl mb-4">Lightning‑Fast Approvals</h3>
                <p className="text-on-surface/60 text-lg max-w-md mb-8">Get approved fast and start spending within 24 hours. Skip the weeks‑long wait and scale now.</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">24h</div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">FAST</div>
                  </div>
                  <span className="text-sm font-bold text-primary">Standard is 7‑14 days</span>
                </div>
              </div>
            </FadeIn>
            
            {/* Small Bento Box 1 */}
            <FadeIn delay={0.2} className="glass-card rounded-3xl p-8 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-secondary-container" />
                </div>
                <h3 className="font-headline font-bold text-xl mb-3">Global Targeting</h3>
                <p className="text-on-surface/60 text-sm">Target any market with confidence. Expand your ROAS across regions fast.</p>
              </div>
              <div className="mt-8 flex gap-2 flex-wrap">
                {['US', 'UK', 'AU', '+150'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-bold">{tag}</span>
                ))}
              </div>
            </FadeIn>
            
            {/* Small Bento Box 2 - Robot Mascot Area */}
            <FadeIn delay={0.3} className="glass-card rounded-3xl p-8 border border-outline-variant/10 relative overflow-hidden group">
              <div className="relative z-10 mb-20">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-xl mb-3">AI + Direct Support</h3>
                <p className="text-on-surface/60 text-sm mb-6">Always‑on optimization plus a direct line to TikTok reps when it matters most.</p>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-highest/50 border border-outline-variant/5 w-max backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                  <span className="text-xs font-bold">TikBot Online</span>
                </div>
              </div>
              
              {/* Robot Mascot Image */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 origin-bottom-right transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img 
                  src="/assets/tiklife-robot.webp" 
                  alt="Tiklife AI Assistant" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to a placeholder gradient if the image is missing from /public/assets
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML += '<div class="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse shadow-[0_0_40px_rgba(255,81,104,0.6)] flex items-center justify-center"><span class="text-xs font-bold tracking-[0.3em]">BOT</span></div>';
                  }}
                />
              </div>
            </FadeIn>
            
            {/* Medium Bento Box */}
            <FadeIn delay={0.4} className="md:col-span-2 glass-card rounded-3xl p-8 border border-outline-variant/10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-headline font-bold text-2xl mb-4">No Spend Bottlenecks</h3>
                <p className="text-on-surface/60">Push winners harder without daily caps. Our accounts are pre‑warmed and ready to scale.</p>
              </div>
              <div className="w-full md:w-1/3 h-24 bg-surface-container-highest rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2s_infinite]"></div>
                <span className="font-headline font-extrabold text-2xl text-primary">NO LIMIT</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Section 4: TikTok Shop (Modern List) */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <FadeIn className="bg-gradient-to-r from-surface-container to-surface-container-lowest p-12 md:p-20 rounded-[2rem] border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-pulse-primary opacity-50"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl font-bold mb-6">TikTok Shop Growth</h2>
            <p className="text-on-surface/60 mb-12">TikTok Shop is a gold rush. We help brands win with the right products, creators, and scaling system.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <div className="group">
                <div className="text-primary font-headline text-3xl font-black mb-2 opacity-30 group-hover:opacity-100 transition-opacity">01</div>
                <h4 className="font-bold mb-2">Product Research</h4>
                <p className="text-xs text-on-surface/50 uppercase tracking-widest">Market Viability Analysis</p>
              </div>
              <div className="group">
                <div className="text-secondary font-headline text-3xl font-black mb-2 opacity-30 group-hover:opacity-100 transition-opacity">02</div>
                <h4 className="font-bold mb-2">Influencer Seeding</h4>
                <p className="text-xs text-on-surface/50 uppercase tracking-widest">Mass Affiliate Outreach</p>
              </div>
              <div className="group">
                <div className="text-tertiary font-headline text-3xl font-black mb-2 opacity-30 group-hover:opacity-100 transition-opacity">03</div>
                <h4 className="font-bold mb-2">Shop Ads Scaling</h4>
                <p className="text-xs text-on-surface/50 uppercase tracking-widest">Video Shopping Ad Mastery</p>
              </div>
              <div className="group">
                <div className="text-surface-tint font-headline text-3xl font-black mb-2 opacity-30 group-hover:opacity-100 transition-opacity">04</div>
                <h4 className="font-bold mb-2">Live Strategy</h4>
                <p className="text-xs text-on-surface/50 uppercase tracking-widest">Stream Optimization</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Consistent CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <FadeIn className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
          <h2 className="font-headline text-4xl font-extrabold mb-6">Ready to own the <span className="gradient-text">For You Page?</span></h2>
          <p className="text-on-surface/70 mb-10 max-w-xl mx-auto">Join growth‑stage brands scaling with high‑performance TikTok systems. Book a strategy audit today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleNavigate('/contact')}
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all neon-glow-pink"
            >
              Book a Strategy Call
            </button>
            <button 
              onClick={() => handleNavigate('/case-studies')}
              className="bg-surface-container-highest/50 backdrop-blur-md px-10 py-4 rounded-xl font-bold text-lg border border-outline-variant/30 hover:bg-surface-container-highest transition-all"
            >
              View Case Studies
            </button>
          </div>
        </FadeIn>
      </section>
    </main>
    </ErrorBoundary>
    </>
  );
};
