import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';
import { Zap, TrendingUp, CheckCircle, ArrowRight, Globe, HeadphonesIcon, Rocket } from 'lucide-react';
import { navigate } from 'vike/client/router';

export default function Home() {
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TikTok Ads Agency",
    "image": "https://your-tiktok-agency.com/og-image.jpg",
    "description": "We provide premium agency ad accounts, scroll-stopping creatives, and data-driven media buying to scale your ROI on TikTok.",
    "url": "https://your-tiktok-agency.com/",
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
              Scale Your Brand With <span className="gradient-text">Viral TikTok Ads</span>
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface/60 mb-10 max-w-xl leading-relaxed">
              We provide premium agency ad accounts, scroll-stopping creatives, and data-driven media buying to scale your ROI.
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
                <div className="font-headline font-extrabold text-3xl text-secondary-container mb-1">3.5x</div>
                <div className="text-xs text-on-surface/50 uppercase tracking-wider font-bold">Average ROAS</div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl text-primary mb-1">500+</div>
                <div className="text-xs text-on-surface/50 uppercase tracking-wider font-bold">Active Clients</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative hidden lg:block">
            <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-[2.5rem] border-[6px] border-surface-container-highest shadow-[0_0_50px_rgba(255,81,104,0.15)] overflow-hidden bg-black group transition-transform duration-500 hover:-translate-y-2">
              {/* Creator Video Background */}
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                alt="Creator Content" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              
              {/* Top Bar: LIVE Tag */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF5168]"></span>
                  LIVE
                </div>
                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/10">
                  50K Viewers
                </div>
              </div>

              {/* Floating Viral Stickers */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/4 -left-4 bg-surface-container-highest p-3 rounded-2xl shadow-xl shadow-primary/20 rotate-[-12deg] z-30"
              >
                <div className="font-headline font-black text-xl text-primary drop-shadow-[0_0_8px_rgba(255,81,104,0.5)]">ROAS 4.5x</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] -right-6 bg-surface-container-highest p-4 rounded-full shadow-xl shadow-secondary/20 z-30"
              >
                <TrendingUp className="w-8 h-8 text-secondary-container" />
              </motion.div>

              {/* Right Sidebar UI (TikTok Style) */}
              <div className="absolute bottom-24 right-4 flex flex-col items-center gap-6 text-white drop-shadow-md z-20">
                <div className="relative group/avatar cursor-pointer hover:scale-110 transition-transform">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Creator Profile" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <div className="absolute -bottom-2 inset-x-0 mx-auto w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full text-xs font-bold font-headline border border-white transition-colors hover:bg-white hover:text-primary"><span className="-mt-0.5">+</span></div>
                </div>
                
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-sm group-hover/icon:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg>
                  </div>
                  <span className="text-xs font-semibold drop-shadow">124.5K</span>
                </div>

                <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-xs font-semibold drop-shadow">1,023</span>
                </div>

                <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-xs font-semibold drop-shadow">Share</span>
                </div>
              </div>

              {/* Bottom Info Area */}
              <div className="absolute bottom-6 left-4 right-16 text-white drop-shadow-md z-20">
                <h3 className="font-bold mb-1 text-base">@tiklife_agency</h3>
                <p className="text-sm opacity-90 leading-tight mb-2">Scaling <span className="text-primary font-bold">#skincare</span> brands to $100K/day using creator ads. <br/> Want the exact framework? 👇</p>
                <div className="flex items-center gap-2 text-[11px] font-semibold py-1.5 px-3 bg-black/40 backdrop-blur-md rounded-lg w-max border border-white/10 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" /></svg>
                  <div className="overflow-hidden w-[120px]">
                    <div className="animate-[scroll_5s_linear_infinite] whitespace-nowrap">Original Sound - Viral Trends 🔥</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6">Our Core Services</h2>
            <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">Everything you need to scale your brand on TikTok, from premium infrastructure to viral creatives.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={0.1}>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary fill-current" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">Agency Ad Accounts</h3>
                <p className="text-on-surface/60 mb-6 leading-relaxed flex-grow">Access premium TikTok Agency accounts with unlimited spend, lower CPMs, and dedicated rep support.</p>
                <ul className="space-y-3 mb-8">
                  {['No spend limits', 'Target any country', '24/7 account support'].map((item, i) => (
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
                <p className="text-on-surface/60 mb-6 leading-relaxed relative z-10 flex-grow">High-converting, native TikTok creatives produced by our network of top-performing creators.</p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {['Trend-focused scripts', 'Fast turnaround', 'A/B testing ready'].map((item, i) => (
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
                <p className="text-on-surface/60 mb-6 leading-relaxed flex-grow">Data-driven campaign management by experts who have profitably scaled brands to 8-figures.</p>
                <ul className="space-y-3 mb-8">
                  {['Daily optimization', 'Custom reporting', 'Scaling strategies'].map((item, i) => (
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
            <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">Why top e-commerce brands and info-product creators choose us to scale their TikTok presence.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Bento Box */}
            <FadeIn delay={0.1} className="md:col-span-2 glass-card rounded-3xl p-10 border border-outline-variant/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary fill-current" />
                </div>
                <h3 className="font-headline font-bold text-3xl mb-4">Lightning Fast Approvals</h3>
                <p className="text-on-surface/60 text-lg max-w-md mb-8">Get your agency ad accounts approved and ready to spend within 24 hours. No more waiting weeks for standard accounts.</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">24h</div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">🚀</div>
                  </div>
                  <span className="text-sm font-bold text-primary">Standard is 7-14 days</span>
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
                <p className="text-on-surface/60 text-sm">Target any country worldwide without restrictions. Expand your ROAS globally.</p>
              </div>
              <div className="mt-8 flex gap-2 flex-wrap">
                {['US', 'UK', 'AU', '+150'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-bold">{tag}</span>
                ))}
              </div>
            </FadeIn>
            
            {/* Small Bento Box 2 */}
            <FadeIn delay={0.3} className="glass-card rounded-3xl p-8 border border-outline-variant/10">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">Direct Rep Access</h3>
              <p className="text-on-surface/60 text-sm mb-6">Direct line to TikTok representatives to resolve issues and get beta feature access.</p>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-highest/50 border border-outline-variant/5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold">Support Online</span>
              </div>
            </FadeIn>
            
            {/* Medium Bento Box */}
            <FadeIn delay={0.4} className="md:col-span-2 glass-card rounded-3xl p-8 border border-outline-variant/10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-headline font-bold text-2xl mb-4">Zero Spend Limits</h3>
                <p className="text-on-surface/60">Scale your winning campaigns instantly without hitting daily spend caps. Our agency accounts come pre-warmed and ready for aggressive scaling.</p>
              </div>
              <div className="w-full md:w-1/3 h-24 bg-surface-container-highest rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2s_infinite]"></div>
                <span className="font-headline font-extrabold text-3xl text-primary">∞</span>
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
            <p className="text-on-surface/60 mb-12">The future of social commerce is here. We help brands dominate the TikTok Shop ecosystem from logistics to live scaling.</p>
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
          <p className="text-on-surface/70 mb-10 max-w-xl mx-auto">Join the 50+ brands scaling with high-performance TikTok systems. Book a strategy audit today.</p>
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
    </>
  );
};
