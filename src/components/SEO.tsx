import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../lib/site';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  image?: string;
  url?: string;
  schemaData?: Record<string, any>;
  preloadImage?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "tiktok ads, agency, marketing, roas, tiktok shop, ugc",
  type = "website",
  image = `${SITE_URL}/og-image.jpg`,
  url = `${SITE_URL}/`,
  schemaData,
  preloadImage
}) => {
  const siteName = "TikTok Ads Agency";
  const fullTitle = `${title} | ${siteName}`;
  const finalImage = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  return (
    <Helmet htmlAttributes={{ lang: 'en-US' }}>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Preload Hero Image for LCP Optimization */}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}
      
      {/* Open Graph metadata */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={url} />
      
      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};
