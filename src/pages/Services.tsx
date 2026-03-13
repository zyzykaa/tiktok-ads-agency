import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ShieldCheck, Rocket, Verified, Timer, Globe, PenTool, Video, Users, Activity, TrendingUp } from 'lucide-react';

export const Services = ({ setPath }: { setPath: (path: string) => void }) => {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Service Section 1: Agency Accounts (Asymmetric Bento) */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn>
              <h2 className="font-headline text-4xl font-bold mb-6">TikTok Ads Accounts</h2>
              <p className="text-on-surface/60 mb-8 leading-relaxed">Stop worrying about random bans and slow reviews. Our Whitelist Agency Accounts provide the stability your brand needs to scale without friction.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Verified className="text-secondary w-5 h-5" />
                  <span className="font-medium">Direct TikTok Support Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Timer className="text-secondary w-5 h-5" />
                  <span className="font-medium">Instant Ad Approval Times</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-secondary w-5 h-5" />
                  <span className="font-medium">Global Targeting Capabilities</span>
                </li>
              </ul>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <FadeIn delay={0.1} className="bg-surface-container rounded-xl p-8 flex flex-col justify-end h-64 border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <ShieldCheck className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl font-bold">High Trust</h3>
              <p className="text-sm text-on-surface/50 mt-2">Zero spending limits from day one.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-end h-64 border border-outline-variant/10 hover:border-secondary/30 transition-all group">
              <Rocket className="w-10 h-10 mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl font-bold">Fast Setup</h3>
              <p className="text-sm text-on-surface/50 mt-2">Accounts delivered within 24 hours.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="col-span-2 bg-gradient-to-br from-surface-container to-surface-container-low rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline text-xl font-bold mb-2">Priority Whitelisting</h3>
                <p className="text-on-surface/60 text-sm max-w-md">Our strategic partnership with TikTok allows us to bypass common automated hurdles that restrict standard ad managers.</p>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 blur-3xl rounded-full"></div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Section 2: Ads Management (Glassmorphism Focus) */}
      <section className="bg-surface-container-low py-32 mb-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-headline text-4xl font-bold mb-6">Ads Management</h2>
            <p className="text-on-surface/60">Data-driven optimization meets creative testing. We manage your entire funnel to ensure maximum ROAS.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Setup */}
            <FadeIn delay={0.1} className="glass-card p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-6">
                <Activity className="text-tertiary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Setup</h3>
              <p className="text-on-surface/50 text-sm leading-relaxed mb-6">Advanced pixel installation, custom conversion events, and catalog integration for TikTok Shop.</p>
              <div className="h-1 w-12 bg-tertiary rounded-full"></div>
            </FadeIn>
            {/* Scaling */}
            <FadeIn delay={0.2} className="glass-card p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300 border-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Scaling</h3>
              <p className="text-on-surface/50 text-sm leading-relaxed mb-6">Aggressive horizontal and vertical scaling techniques using proprietary bid management strategies.</p>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </FadeIn>
            {/* Analytics */}
            <FadeIn delay={0.3} className="glass-card p-10 rounded-xl hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Activity className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Analytics</h3>
              <p className="text-on-surface/50 text-sm leading-relaxed mb-6">Real-time dashboards covering LTV, CAC, and creative performance metrics you actually care about.</p>
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Section 3: Creative Production (Visual Grid) */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.1} className="aspect-[3/4] rounded-2xl bg-surface-container overflow-hidden relative group">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Dynamic video editing interface with TikTok UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjxUKLmuOSEaviLnSPxz4GrcG55eeXE6E7T9Eek_HLCKvJoS4_A5AOJor8CbzmW1NulIJwtlbc1FfuKQwiWrqUm8mAOStXXuby8yge2-eYyuIlle_4nLU4F5SPlHMdkbkg3dleK9rDLX_pwSJ5xDJOC0j0ZlGSmR8c6tCj3Or-h4DZpK_NgxlqAOx4xZU3crouf7imnHHLQtIt3jXVKsVDaQ_GNogyofUahKcfPlsyghrSq_qzhM7tmVGV9uSKYePwXQBx3o4eEcU" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent flex items-end p-6">
                  <span className="label-md font-bold text-primary tracking-widest">POST-PRO</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="aspect-[3/4] rounded-2xl bg-surface-container overflow-hidden relative mt-8 group">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="UGC creator recording content with ring light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNjL3iBz4cu1hdMed8H06ZDUpbUsdhS9lYHtbkqawjuvyQrfCQpxKLn-2bfyzNb3ds6hYYPjbOKFvLF7KEnr6NMg6gySQv8198ED98gyF8iRg3vl_AtClASlgL9lZe4gdhV3sIZyHaJr-noMVs8YroHANRA5qHu3B4h0N5qxO-odlQBj2BKkWN4_VFN2HgSBQpch21pg8SdsnzbTNkSph7X-P5WGmK17VTIAQdzNzLDgHDWhx4gC-UGZGtfx3xBfle2umce9pbAdw" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent flex items-end p-6">
                  <span className="label-md font-bold text-secondary tracking-widest">UGC CREATIVE</span>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <FadeIn>
              <h2 className="font-headline text-4xl font-bold mb-6">Creative Production</h2>
              <p className="text-on-surface/60 mb-8 leading-relaxed">TikTok is a content-first platform. We produce high-impact, short-form assets that stop the scroll and convert strangers into customers.</p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-surface-container-highest rounded-lg">
                    <PenTool className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Viral Ad Scripts</h4>
                    <p className="text-sm text-on-surface/50">Psychology-based hooks designed to capture attention in the first 0.5 seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-surface-container-highest rounded-lg">
                    <Video className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast-Paced Editing</h4>
                    <p className="text-sm text-on-surface/50">Native-style editing that blends perfectly into the For You Page ecosystem.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-surface-container-highest rounded-lg">
                    <Users className="text-tertiary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Influencer Sourcing</h4>
                    <p className="text-sm text-on-surface/50">Vetted network of high-converting creators across all major niches.</p>
                  </div>
                </div>
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
    </main>
  );
};
