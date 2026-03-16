import React from 'react';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';
import SavingsCalculator from '../../components/SavingsCalculator';

export default function CalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TikTok Ads Agency ROI Calculator - Tiklife",
    "description": "Calculate how much profit you are losing to traditional agency retainers and high percentage fees. See how much you can save with Tiklife.",
    "url": "https://your-tiktok-agency.com/calculator"
  };

  return (
    <>
      <SEO 
        title="TikTok Ads ROI Calculator | Stop Overpaying Agencies"
        description="Calculate your savings and potential extra profit when switching to a flat fee TikTok agency model without hidden retainers. Maximize your ad spend ROI."
        schema={schema}
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
