import React from 'react';
import { FadeIn } from '../../../components/FadeIn';
import { SEO } from '../../../components/SEO';
import SavingsCalculator from '../../../components/SavingsCalculator';
import { SITE_URL } from '../../../lib/site';

export default function ToolCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TikTok Ads ROI Calculator - Tiklife",
    "description": "Calculate your savings and extra profit when you switch to a flat‑fee TikTok agency model. Keep more of your ROAS.",
    "url": `${SITE_URL}/tool/calculator`
  };

  return (
    <>
      <SEO 
        title="TikTok Ads ROI Calculator | Stop Overpaying Agencies"
        description="Calculate your savings and extra profit when you switch to a flat‑fee TikTok agency model. Keep more of your ROAS."
        schemaData={schema}
      />
      <div className="min-h-screen pt-32 pb-20 bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SavingsCalculator />
          </FadeIn>
        </div>
      </div>
    </>
  );
}
