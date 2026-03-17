import React, { useMemo } from 'react';
import { SEO } from '../../components/SEO';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';
import { getArticlesData } from './articles';

export default function Blog() {
  const { featuredPost, postList } = useMemo(() => {
    const allPosts = getArticlesData();
    return {
      featuredPost: allPosts.length > 0 ? allPosts[0] : null,
      postList: allPosts.slice(1)
    };
  }, []);

  return (
    <>
      <SEO 
        title="Creator Resource Hub & Insights" 
        description="Weekly algorithm shifts, creative trends, and scaling playbooks. No fluff. Just growth." 
      />
      <main className="relative overflow-hidden">

      {/* Hero / Search Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#35fbf5]"></div>
              <span className="text-xs font-bold tracking-widest font-label uppercase text-secondary">Creator Resource Hub</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Insights for the <span className="gradient-text">Growth Era</span>
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
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm">All Articles</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Strategy</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Ecommerce</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Creative Design</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Algorithm Updates</button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">Case Studies</button>
          </div>
      </section>

      {/* Featured Content: Asymmetric Bento Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Large Card */}
            {featuredPost && (
            <a className="md:col-span-8 group" href={`/blog/${featuredPost.slug}`}>
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10">
                <img loading="lazy" decoding="async" alt="Featured Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src={featuredPost.frontmatter?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDKQ_mRoydAJ_Ba-e5y1ItyKG0buGOWW_h_2QG3L4q0IQNQcnhpmMVzhDNCwGsEgw7absuW27Yi_9j-j1uafKtEmPkX8WWdIuo2qqUtmyOfeABCD2SSP5B-FUIHTODKEivJ9h2kfhG4TfzETcLai_yEWLCB6ClWUcrcQ04Jz8e05Jd78zTjQNK6I1dY5KBPJn3V4bCUdJneXECiHsIJfsH99v4MQNM64YW70nV2Tm2qEBIo-LfVroH2kNjMAcifa4HrX3tx49E-M1I"}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 p-10">
                  <span className="bg-secondary text-on-secondary px-3 py-1 rounded-md text-xs font-extrabold font-label mb-4 inline-block uppercase tracking-wider">{featuredPost.frontmatter?.category || 'Featured Strategy'}</span>
                  <h2 className="font-headline text-4xl font-bold mb-4 leading-tight">{featuredPost.frontmatter?.title || featuredPost.slug}</h2>
                  <p className="text-on-surface/80 text-lg max-w-2xl mb-6">Read our latest featured breakdown to stay ahead of the curve.</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       <span className="font-bold text-primary">{featuredPost.frontmatter?.author || 'Editorial Team'}</span>
                    </div>
                    <span className="text-outline text-sm">|</span>
                    <span className="text-outline text-sm font-medium">{featuredPost.frontmatter?.readTime || '5 min read'}</span>
                  </div>
                </div>
              </div>
            </a>
            )}

            {/* Side High-Impact Card */}
            <div className="md:col-span-4 space-y-8">
              <div className="h-full rounded-xl p-8 bg-surface-container border border-outline-variant/10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-all">
                <div>
                  <span className="text-primary font-bold text-xs font-label uppercase tracking-[0.2em] mb-4 block">E-commerce Guide</span>
                  <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">How TikTok Ads Actually Scale Shopify</h3>
                  <p className="text-on-surface/60 text-sm leading-relaxed">A practical breakdown of Pixel setup, event API, and modern Shopping Center ads.</p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-sm font-semibold">Read Guide</span>
                  <ArrowRight className="text-primary w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Feed Section */}
      <section className="px-6 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-2">Latest Insights</h2>
                <p className="text-outline">Stay ahead with weekly growth teardowns.</p>
              </div>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {postList.map((post) => (
                <a className="group" key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
                    <img loading="lazy" decoding="async" alt={post.frontmatter?.title || post.slug} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.frontmatter?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuA-c8H5JzkGzz3GtoHNA3spTEH4mDQBny32VQm9MpD71V76JdCwnvNlzwocDX79iPgIwEICyIR9C15ynuHguqdJYACRfFIrbValo3eVyBhKltPWUPxO5NQbHcUiFMY5dEZ-yjXWQkxxd5ZYozUBNGxHQpFwXGbPPm5O2OTT4qCFxRRQVWiaIsgRWPuMPeXxnnz3jS_xxJGGYbXXcc08H-5OdLqj2hvmKvXWS7F-opH1QikkS0L3azllCrjLbwiKskh22tGCCmRPIXQ"}/>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-secondary-fixed bg-secondary-fixed/10 px-2 py-0.5 rounded">{post.frontmatter?.category || "Article"}</span>
                    <span className="text-outline text-xs">{post.frontmatter?.date || "Recently"}</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.frontmatter?.title || post.slug}</h4>
                  <p className="text-on-surface/70 text-sm leading-relaxed line-clamp-2">Read the full breakdown.</p>
                </a>
             ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 px-8 py-3 rounded-md bg-surface-container-highest font-bold hover:bg-surface-bright transition-colors border border-outline-variant/30">
              Load More Articles
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Card */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-surface-container rounded-3xl p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary blur-[100px] opacity-20 -translate-y-1/2"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="font-headline text-4xl font-extrabold mb-4">Get the Pulse in your inbox.</h2>
            <p className="text-on-primary-container/80 text-lg mb-8">Weekly algorithm shifts, creative trends, and scaling playbooks. No fluff. Just growth.</p>
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
            <p className="mt-4 text-xs text-on-primary-container/60">Join 15,000+ marketers staying ahead of TikTok.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};
