import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { SEO } from '../../../components/SEO';
import { FadeIn } from '../../../components/FadeIn';
import { ShareButtons } from '../../../components/ShareButtons';
import { getArticleBySlug } from '../articles';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const pageContext = usePageContext();
  const { slug } = pageContext.routeParams;
  
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-3xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  const { title, description, image, date, author, readTime, category } = article.frontmatter;

  return (
    <>
      <SEO 
        title={`${title || slug} | TikTok Ads Agency`}
        description={description || 'Read the full insights and case studies on TikTok Ads Agency.'}
        image={image}
      />
      <main className="relative pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
           <a href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Resource Hub
           </a>
           
           <header className="mb-12 border-b border-outline-variant/20 pb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-secondary-fixed bg-secondary-fixed/10 px-3 py-1 rounded-full">{category || "Article"}</span>
                <span className="text-outline text-sm font-medium">{date || "Recently"}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight mb-6">{title || slug}</h1>
              <div className="flex items-center gap-4 text-on-surface/80">
                 <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{author || 'Editorial Team'}</span>
                 </div>
                 <span className="text-outline text-sm">•</span>
                 <span className="text-sm font-medium">{readTime || '5 min read'}</span>
              </div>
           </header>

            {/* Feature Image */}
            {image && (
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 bg-surface-container-low shadow-2xl">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}

            <div className="relative">
              {/* Floating Share Side Bar (Desktop only) */}
              <ShareButtons 
                url={`https://yourdomain.com/blog/${slug}`} 
                title={title || slug} 
                variant="floating"
              />

              <div className="prose prose-invert prose-pink lg:prose-lg max-w-none prose-img:rounded-3xl prose-headings:font-headline prose-a:text-primary pb-10">
                 {/* MDX Content is injected dynamically as a React Component here */}
                 <article.Component />
              </div>
            </div>

            <ShareButtons 
              url={`https://yourdomain.com/blog/${slug}`} 
              title={title || slug} 
            />
        </FadeIn>
      </main>
    </>
  );
}
