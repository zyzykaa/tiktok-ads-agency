import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function BlogLeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for the lead form
    await new Promise(resolve => setTimeout(resolve, 800));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="mt-16 bg-surface-container-high/50 border border-tiklife-cyan/30 rounded-2xl p-8 text-center backdrop-blur-sm">
        <div className="w-16 h-16 bg-tiklife-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-tiklife-cyan" />
        </div>
        <h3 className="text-2xl font-headline font-bold text-white mb-2">Application Received!</h3>
        <p className="text-on-surface/80">Our team will contact you shortly to set up your premium TikTok ad account.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-tiklife-navy rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-tiklife-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-tiklife-cyan/10 border border-tiklife-cyan/20 text-tiklife-cyan text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Agency Accounts
          </div>
          <h3 className="text-2xl md:text-3xl font-headline font-black text-white mb-3">Ready to scale beyond limits?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md">
            Stop dealing with bans and spend caps. Get a premium TikTok agency account with a flat 3% fee.
          </p>
          <ul className="space-y-2 mb-6 md:mb-0">
            {['Higher daily spend from day one', 'Direct rep support & appeals', 'Target global markets fast'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-tiklife-cyan" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-[340px] bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-tiklife-cyan focus:ring-1 focus:ring-tiklife-cyan transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Work Email" 
                required
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-tiklife-cyan focus:ring-1 focus:ring-tiklife-cyan transition-colors"
              />
            </div>
            <div>
              <input 
                type="url" 
                placeholder="Website URL" 
                required
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-tiklife-cyan focus:ring-1 focus:ring-tiklife-cyan transition-colors"
              />
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full mt-2 bg-tiklife-cyan text-tiklife-navy font-bold py-3 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              {status === 'submitting' ? 'Submitting...' : 'Apply Now'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
