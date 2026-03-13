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
              <span className="text-xs font-bold tracking-wider uppercase text-on-surface/80">TikTok Premium Agency Partner</span>
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
            <div className="glass-card rounded-3xl p-6 relative z-10 border border-outline-variant/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Campaign Performance</div>
                    <div className="text-xs text-on-surface/50">Last 30 Days</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  Live
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-on-surface/60">ROAS</span>
                    <span className="font-bold text-secondary-container">4.2x</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-secondary-container to-primary rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-on-surface/60">Conversion Rate</span>
                    <span className="font-bold text-primary">8.5%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-on-surface/60">CPA</span>
                    <span className="font-bold text-on-surface">$12.40</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className="h-full bg-surface-variant rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-end">
                <div>
                  <div className="text-xs text-on-surface/50 mb-1">Total Revenue</div>
                  <div className="font-headline font-extrabold text-2xl">$124,500</div>
                </div>
                <div className="w-24 h-12 flex items-end gap-1">
                  {[30, 50, 70, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                      className={`w-1/4 rounded-t-sm ${i === 3 ? 'bg-primary' : i === 2 ? 'bg-primary/50' : 'bg-surface-variant'}`}
                    />
                  ))}
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
