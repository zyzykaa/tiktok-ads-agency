import React, { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  variant?: 'horizontal' | 'floating';
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, variant = 'horizontal' }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const buttonClass = "flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110";

  const renderButtons = () => (
    <>
        <a href={shareLinks.reddit} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit"
          className={`${buttonClass} bg-[#FF4500]/10 text-[#FF4500] hover:bg-[#FF4500] hover:text-white`}>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>
             <line x1="12" y1="8" x2="12" y2="4"></line><path d="M12 4c-1.5 0-3 1.5-3 3"></path>
          </svg>
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
          className={`${buttonClass} bg-surface-container-highest text-on-surface hover:bg-on-surface hover:text-surface`}>
          <Twitter className="w-5 h-5" />
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
          className={`${buttonClass} bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white`}>
          <Linkedin className="w-5 h-5 fill-current" />
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
          className={`${buttonClass} bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white`}>
          <Facebook className="w-5 h-5 fill-current" />
        </a>
        
        {variant === 'horizontal' && <div className="w-px h-8 bg-outline-variant/30 hidden sm:block mx-2"></div>}
        {variant === 'floating' && <div className="h-px w-8 bg-outline-variant/30 hidden xl:block my-2"></div>}

        <button onClick={handleCopyLink} aria-label="Copy to clipboard" title="Copy Link"
          className={variant === 'horizontal' ? 
            "flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 transition-all active:scale-95" :
            `${buttonClass} bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 group relative`
          }
        >
          <LinkIcon className={`w-4 h-4 ${copied ? 'text-primary' : 'text-on-surface/70'}`} />
          {variant === 'horizontal' ? (
             <span className={`text-sm font-medium ${copied ? 'text-primary font-bold' : 'text-on-surface'}`}>
               {copied ? 'Copied!' : 'Copy Link'}
             </span>
          ) : (
             <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap">
               {copied ? 'Copied!' : 'Copy Link'}
             </span>
          )}
        </button>
    </>
  );

  if (variant === 'floating') {
    return (
      <div className="hidden xl:block absolute top-0 -right-20 h-full">
        <div className="sticky top-32 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-outline mb-2 transform -rotate-90 origin-bottom whitespace-nowrap -translate-y-6">Share</span>
          {renderButtons()}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 mt-16 border-t border-outline-variant/20 w-full relative">
      <h3 className="text-xl font-headline font-bold mb-6 text-on-surface">Share this insight</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {renderButtons()}
      </div>
    </div>
  );
};
