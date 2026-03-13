import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';

export const Blog = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background Neon Pulse Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(175,255,251,0.05)_0%,transparent_70%)] -z-10 blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(175,255,251,0.05)_0%,transparent_70%)] -z-10 blur-3xl opacity-30"></div>

      {/* Hero / Search Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#35fbf5]"></div>
              <span className="text-xs font-bold tracking-widest font-label uppercase text-secondary">Resource Hub 2024</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Insights for the <span className="gradient-text">Creator Era</span>
            </h1>
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="text-outline w-5 h-5" />
              </div>
              <input 
                className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary py-5 pl-14 pr-6 rounded-xl text-lg transition-all outline-none text-on-surface" 
                placeholder="Search strategy, guides, or updates..." 
                type="text"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="px-6 mb-16">
        <FadeIn delay={0.1}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm">All Articles</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Strategy</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Ecommerce</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Creative Design</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Algorithm Updates</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Case Studies</button>
          </div>
        </FadeIn>
      </section>

      {/* Featured Content: Asymmetric Bento Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Large Card */}
            <FadeIn delay={0.2} className="md:col-span-8 group cursor-pointer">
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10">
                <img alt="Vibrant neon TikTok user interface visuals" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKQ_mRoydAJ_Ba-e5y1ItyKG0buGOWW_h_2QG3L4q0IQNQcnhpmMVzhDNCwGsEgw7absuW27Yi_9j-j1uafKtEmPkX8WWdIuo2qqUtmyOfeABCD2SSP5B-FUIHTODKEivJ9h2kfhG4TfzETcLai_yEWLCB6ClWUcrcQ04Jz8e05Jd78zTjQNK6I1dY5KBPJn3V4bCUdJneXECiHsIJfsH99v4MQNM64YW70nV2Tm2qEBIo-LfVroH2kNjMAcifa4HrX3tx49E-M1I"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 p-10">
                  <span className="bg-secondary text-on-secondary px-3 py-1 rounded-md text-xs font-extrabold font-label mb-4 inline-block uppercase tracking-wider">Featured Strategy</span>
                  <h2 className="font-headline text-4xl font-bold mb-4 leading-tight">Strategy 2026: The Future of Short-Form Conversion</h2>
                  <p className="text-on-surface/80 text-lg max-w-2xl mb-6">How the algorithm is shifting towards hyper-personalized interest graphs and what it means for your ROAS next decade.</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-tertiary"></div>
                      <span className="text-sm font-medium">Alex Rivera</span>
                    </div>
                    <span className="text-outline text-sm">•</span>
                    <span className="text-outline text-sm font-medium">12 min read</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Side High-Impact Card */}
            <FadeIn delay={0.3} className="md:col-span-4 space-y-8">
              <div className="h-full rounded-xl p-8 bg-surface-container border border-outline-variant/10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-all">
                <div>
                  <span className="text-primary font-bold text-xs font-label uppercase tracking-[0.2em] mb-4 block">E-commerce Guide</span>
                  <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">How TikTok Ads Work for Shopify Storefronts</h3>
                  <p className="text-on-surface/60 text-sm leading-relaxed">A complete technical breakdown of Pixel setup, event API, and the new Shopping Center ads.</p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-sm font-semibold">Read Guide</span>
                  <ArrowRight className="text-primary w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content Feed Section */}
      <section className="px-6 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-2">Latest Insights</h2>
                <p className="text-outline">Stay ahead of the curve with our weekly teardowns.</p>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Article 1 */}
            <FadeIn delay={0.1} className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
                <img alt="Abstract colorful neon light patterns" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-c8H5JzkGzz3GtoHNA3spTEH4mDQBny32VQm9MpD71V76JdCwnvNlzwocDX79iPgIwEICyIR9C15ynuHguqdJYACRfFIrbValo3eVyBhKltPWUPxO5NQbHcUiFMY5dEZ-yjXWQkxxd5ZYozUBNGxHQpFwXGbPPm5O2OTT4qCFxRRQVWiaIsgRWPuMPeXxnnz3jS_xxJGGYbXXcc08H-5OdLqj2hvmKvXWS7F-opH1QikkS0L3azllCrjLbwiKskh22tGCCmRPIXQ"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-secondary-fixed bg-secondary-fixed/10 px-2 py-0.5 rounded">Creative</span>
                <span className="text-outline text-xs">May 15, 2024</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">Hooking Viewers in 0.8 Seconds</h4>
              <p className="text-on-surface/70 text-sm leading-relaxed line-clamp-2">Master the art of the 'Pattern Interrupt' to stop the scroll and drive engagement rates up by 40%.</p>
            </FadeIn>

            {/* Article 2 */}
            <FadeIn delay={0.2} className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
                <img alt="Data analytics dashboard with glowing charts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBJ9BOfcBzNaK2VqufsvVKPFxY07z2V0RMz-cfH5a22v1eBebA38OfazMvuGeC7XZTYSppnQMn9NZ1RzfAUDh5vjk9nXTdHmBD-uJyajk5snVX9gs9X8VM5qWV0T4moDuUmjhkZKjDj4wmy7cMqGyYJFmuV_AUBvRZqfehYDt9zMKPMMWUqSy2cpzPgwJGMhFk_rgDYrnIoIDtWKhoGKPAM3ctEM84geisPNmDTV9v4jSRhSVqiYkJyGTAgyXcdOc84B74KzrvJA8"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">Analytics</span>
                <span className="text-outline text-xs">May 12, 2024</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">Scaling Beyond $10k/Day Spends</h4>
              <p className="text-on-surface/70 text-sm leading-relaxed line-clamp-2">Why horizontal scaling is better than vertical when managing large-scale TikTok campaigns.</p>
            </FadeIn>

            {/* Article 3 */}
            <FadeIn delay={0.3} className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
                <img alt="User engagement metrics on a screen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv_BhDepmwRN4bkn87F-L7ZcJtG8dXabIz6OZOdjpAEOQvxkI_n2UVLAqKDFJQfmLDs8f8AW02hPctXlCahGiM7OPX-jyKsFvaUO3b6B2kOxEdaBBhnqXV6FeGQQhFLn945roSLCUrhW3IH4icxEHWWhsLh6UXijqcOZpAqJiekSvuASviaBr-28du3Pmzb0gtXdlH2qltCWmqpQdCnGV2rpZk5mWTtyghD-H-ZSQC86p_Q5ISRMPpj8YDvh9mCLqE104iGJA51_M"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Case Study</span>
                <span className="text-outline text-xs">May 09, 2024</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">Brand X: 14x ROAS in 30 Days</h4>
              <p className="text-on-surface/70 text-sm leading-relaxed line-clamp-2">How we leveraged TikTok Spark Ads and UGC to revitalize a declining beauty brand.</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 px-8 py-3 rounded-md bg-surface-container-highest font-bold hover:bg-surface-bright transition-colors border border-outline-variant/30">
              Load More Articles
              <ChevronDown className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter / CTA Card */}
      <section className="px-6 py-24 relative overflow-hidden">
        <FadeIn className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-surface-container rounded-3xl p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary blur-[100px] opacity-20 -translate-y-1/2"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="font-headline text-4xl font-extrabold mb-4">Get the "Pulse" in your inbox.</h2>
            <p className="text-on-primary-container/80 text-lg mb-8">Weekly algorithm shifts, creative trends, and scaling secrets. No fluff, just results.</p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 bg-surface-container-lowest border-none py-4 px-6 rounded-xl outline-none ring-1 ring-white/10 focus:ring-white/30 text-on-surface" 
                placeholder="Enter your work email" 
                type="email"
              />
              <button className="bg-surface text-on-surface font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform">
                Subscribe Now
              </button>
            </form>
            <p className="mt-4 text-xs text-on-primary-container/60">Join 15,000+ marketers staying ahead of the TikTok curve.</p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};
