import React from 'react';
import { SEO } from '../../../components/SEO';
import FlatPricing from '../../../components/FlatPricing';

export default function TestPricingPage() {
  return (
    <>
      <SEO 
        title="Test Pricing Model | Tiklife"
        description="A/B Testing new Flat 3% pricing model for TikTok Ads Agency."
      />
      <div className="pt-20">
        <FlatPricing />
      </div>
    </>
  );
}
