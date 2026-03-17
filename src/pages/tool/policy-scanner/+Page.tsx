import React from 'react';
import { SEO } from '../../../components/SEO';
import { SITE_URL } from '../../../lib/site';
import PolicyScanner from '../../../components/PolicyScanner';

export default function PolicyScannerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TikTok Ad Policy Compliance Scanner",
    "description": "Scan ad copy for high‑risk phrases and policy triggers before launch.",
    "url": `${SITE_URL}/tool/policy-scanner`
  };

  return (
    <>
      <SEO 
        title="TikTok Ad Policy Compliance Scanner"
        description="Scan ad copy for high‑risk phrases and policy triggers before launch."
        schemaData={schema}
      />
      <div className="min-h-screen pt-24 pb-20">
        <PolicyScanner />
      </div>
    </>
  );
}
