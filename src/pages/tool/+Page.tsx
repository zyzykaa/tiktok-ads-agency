import React from 'react';
import { SEO } from '../../components/SEO';
import { FadeIn } from '../../components/FadeIn';
import { SITE_URL } from '../../lib/site';
import { ArrowRight } from 'lucide-react';

export default function ToolLanding() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tiklife Tools",
    "description": "Free tools to help you plan, forecast, and scale TikTok Ads performance.",
    "url": `${SITE_URL}/tool`
  };

  return (
    <>
      <SEO 
        title="Tiklife Tools"
        description="Free tools to help you plan, forecast, and scale TikTok Ads performance."
        schemaData={schema}
      />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/20 bg-surface-container/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-on-surface/80">Tiklife Tools</span>
            </div>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl leading-[1.1] mb-6 tracking-tight">
              Tools built to help you <span className="gradient-text">scale faster</span>
            </h1>
            <p className="text-lg text-on-surface/60 max-w-2xl">
              Practical calculators and planners to improve ROAS, forecast spend, and move faster on TikTok.
            </p>
          </FadeIn>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/tool/calculator"
              className="group glass-card p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Calculator</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="font-headline text-2xl font-bold mb-3">ROI Savings Calculator</h2>
              <p className="text-on-surface/60">
                Compare your current agency fees vs. a flat‑fee model and see how much profit you keep.
              </p>
            </a>

            <a
              href="/tool/policy-scanner"
              className="group glass-card p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Compliance</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="font-headline text-2xl font-bold mb-3">Policy Compliance Scanner</h2>
              <p className="text-on-surface/60">
                Scan ad copy for high‑risk phrases and policy triggers before launch.
              </p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
