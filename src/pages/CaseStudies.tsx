import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Gamepad2, TrendingUp, Play, Globe, AtSign, Video } from 'lucide-react';

export const CaseStudies = ({ setPath }: { setPath: (path: string) => void }) => {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,81,104,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <FadeIn>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container-highest text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-6 border border-secondary/20">
                  Success Stories
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
                  Winning <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(229, 226, 225, 0.3)' }}>Strategies</span><br/>
                  Proven Results.
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                  We don't just run ads; we engineer growth loops. Explore how we scaled global brands from five to seven figures using TikTok's unique algorithm.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="flex gap-4">
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 min-w-[160px]">
                <p className="text-primary text-3xl font-extrabold font-headline">$12M+</p>
                <p className="text-on-surface/60 text-xs uppercase tracking-widest mt-1">Managed Spend</p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 min-w-[160px]">
                <p className="text-secondary text-3xl font-extrabold font-headline">4.2x</p>
                <p className="text-on-surface/60 text-xs uppercase tracking-widest mt-1">Avg. ROAS</p>
              </div>
            </FadeIn>
          </div>

          {/* Case Study Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Case Study 1 */}
            <FadeIn delay={0.1} className="md:col-span-8 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/5 h-full flex flex-col">
                <div className="relative h-[400px]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Dynamic TikTok video production showcase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqVeDSH4I-JebuntF-C0CNKRYfpJ2ORRPD5rMhHGMioRj2c8OhugAXXE5xzNOBtAvIKgoTY4vP8tB-z4hyQaQYdK_1I7lHJfyRuz0FFzQh9NiqzypPQaXjS-EzN8lpaYhru1QhQ7182J4-14cBnfxsa58Zwktk-YJ_rL6juWf_tkY5HlHDHNrnjqdFM1Db_7z_P0jX21SfnRRTTq4Mp-Ba5M6ODil79rzT-C0SCMRdYIezFeQrdMvmM36m6BigiIrkcrD9RU9TgkY"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-1.5 bg-background/80 backdrop-blur-md rounded-full text-xs font-bold text-on-surface border border-outline-variant/20">E-COMMERCE</span>
                    <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold text-primary border border-primary/20">6.2x ROAS</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-headline text-3xl font-extrabold mb-2">Velvet Aura Skincare</h3>
                    <p className="text-on-surface/70 line-clamp-2 max-w-xl">Scaling a boutique skincare brand to $500k/mo through creator-led content and high-frequency ad refreshing.</p>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-3 gap-4 bg-surface-container">
                  <div>
                    <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Ad Spend</p>
                    <p className="text-on-surface font-bold text-xl">$85,000</p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Revenue</p>
                    <p className="text-on-surface font-bold text-xl">$527,000</p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">New Customers</p>
                    <p className="text-on-surface font-bold text-xl">12.4k</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Small Case Study 2 */}
            <FadeIn delay={0.2} className="md:col-span-4 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/5 h-full flex flex-col">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                    <Gamepad2 className="text-secondary w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-2xl font-extrabold mb-4">Quest RPG Mobile</h3>
                  <p className="text-on-surface/60 text-sm mb-8 leading-relaxed">Reducing Cost Per Install by 45% using native gameplay trends and influencer whitelisting.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                      <span className="text-on-surface/40 text-xs">CPI Reduction</span>
                      <span className="text-secondary font-bold">-45%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                      <span className="text-on-surface/40 text-xs">Retention (D7)</span>
                      <span className="text-on-surface font-bold">+18%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="High energy mobile gaming interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUY1M2oeF4HxiuCl6WxdtG-1k3rc__gFiySzNFX_KKgIatlRyPBXLoIK7BGlFzMh6g2HuDnV_vE_YBfTdcUeLWBWUjrF0T9L7PkSsYR9HHX1BKM_woMYVhQb10QSWH9B1Q97K_lYm9CKPp_rdL3msSV1pWf_xAhjYowmro_8_kUXNuVRT_aqNMVfpYBUYYCc_JjF5qheQjYbBZthF7luFKukNTFoiMTxGsic7TR8NdtqpadRNteBxdj_f9HSW6bEKmgdFby_eOd1M"/>
                </div>
              </div>
            </FadeIn>

            {/* Medium Case Study 3 */}
            <FadeIn delay={0.3} className="md:col-span-5 group cursor-pointer">
              <div className="glass-card rounded-xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#35fbf5]"></div>
                  <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">Live Data Performance</span>
                </div>
                <h3 className="font-headline text-2xl font-extrabold mb-4">FitTrack Pro</h3>
                <p className="text-on-surface/60 text-sm mb-10 leading-relaxed">Hyper-localized targeting for a fitness app launch, resulting in 200k downloads in 30 days.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="bg-surface-container-highest/50 px-5 py-3 rounded-lg text-center flex-1 mr-2">
                    <span className="block text-[10px] text-on-surface/40 mb-1">ROAS</span>
                    <span className="text-primary font-bold">3.8x</span>
                  </div>
                  <div className="bg-surface-container-highest/50 px-5 py-3 rounded-lg text-center flex-1 ml-2">
                    <span className="block text-[10px] text-on-surface/40 mb-1">Downloads</span>
                    <span className="text-on-surface font-bold">205k</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Comparison Case Study 4 */}
            <FadeIn delay={0.4} className="md:col-span-7 group">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/5 p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-extrabold mb-4">The Creative Delta</h3>
                  <p className="text-on-surface/60 text-sm mb-6">See the difference between standard production and TikTok-native UGC creative strategy.</p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                        <div className="w-4 h-4 rounded-full border-2 border-on-surface/40 flex items-center justify-center">
                          <div className="w-full h-[2px] bg-on-surface/40 -rotate-45"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface/60">BEFORE (Corporate Style)</p>
                        <p className="text-sm">High bounce rates, 0.8% CTR, low engagement.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <TrendingUp className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary">AFTER (Agency UGC)</p>
                        <p className="text-sm">Viral engagement, 3.4% CTR, 4x lower CPC.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 h-64 md:h-auto rounded-lg overflow-hidden shrink-0 relative">
                  <img className="w-full h-full object-cover" alt="Visual comparison of ad creative quality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPjHzrFUDiREw6DkcNLUgYxcersUumMm4sVCALUbfWRfH1V6Suk0sSuHR8VUQFFQhnwADWXyv-loKj5hN8dqzbTlSyoEDvrT_q8SJ9iIOEySVi7Lh5ZycOyiiyXZUybUkQQ_v2scJ05Yflv8L7Db2-mbQyf-7-ncVe50RPvwUy5QpTMmj1LKIO2FYs_wpHZQwjGbzXwvEIFUyIKd_NKt5oZNUYy-rVuqyfQog1hwYnyAmpK0EbVQhbCs5a-eTJfEdMXg6V8nGm-A"/>
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Play className="w-6 h-6 fill-white" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial / Results Banner */}
      <section className="py-24 px-6 bg-surface-container-low">
        <FadeIn className="max-w-7xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-extrabold mb-16 italic">"Their creative approach turned our struggling TikTok presence into our #1 revenue channel."</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale contrast-125">
            <div className="h-8 flex items-center font-bold text-xl uppercase tracking-tighter">Brand Alpha</div>
            <div className="h-8 flex items-center font-bold text-xl uppercase tracking-tighter">Nordic Gear</div>
            <div className="h-8 flex items-center font-bold text-xl uppercase tracking-tighter">Luxe Skin</div>
            <div className="h-8 flex items-center font-bold text-xl uppercase tracking-tighter">Hyper Flow</div>
            <div className="h-8 flex items-center font-bold text-xl uppercase tracking-tighter">Urban Tech</div>
          </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full"></div>
        <FadeIn className="max-w-5xl mx-auto glass-card rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to be our next <br/><span className="text-primary">Success Story?</span></h2>
          <p className="text-on-surface/70 text-lg mb-12 max-w-xl mx-auto">Book a free strategy audit. We'll analyze your current account and show you exactly where you're leaving money on the table.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-primary-container px-10 py-4 rounded-xl text-on-primary-container font-extrabold text-lg shadow-2xl shadow-primary-container/30 hover:scale-105 transition-transform">
              Get Your Free Audit
            </button>
            <button 
              onClick={() => setPath('/contact')}
              className="bg-surface-container-highest px-10 py-4 rounded-xl text-on-surface font-extrabold text-lg border border-outline-variant/10 hover:bg-surface-bright transition-colors"
            >
              View More Cases
            </button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};
