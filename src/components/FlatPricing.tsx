import React from 'react';

// Lightweight SVG icons
const CheckIcon = () => (
  <svg className="w-5 h-5 text-tiklife-cyan shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);
const XIcon = () => (
  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function FlatPricing() {
  return (
    <section className="bg-surface dark:bg-tiklife-navy py-24 font-sans text-on-surface dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Cyan Glows - Only visible in Dark Mode for effect */}
      <div className="hidden dark:block absolute top-0 right-0 w-[500px] h-[500px] bg-tiklife-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="hidden dark:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-tiklife-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6 shadow-sm dark:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            Break the Agency Pricing Trap
          </div>
          <h1 className="mt-2 text-5xl md:text-6xl font-black tracking-tight leading-tight text-on-surface dark:text-white drop-shadow-sm dark:drop-shadow-md">
            One Flat Rate. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              Scale Without Limits.
            </span>
          </h1>
          <p className="mt-6 text-xl text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Other agencies tax your success with tiers and retainers. We keep it simple: a <strong className="text-on-surface dark:text-white font-black">3% flat service fee</strong> on ad spend. Direct partner infrastructure. No fluff.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-surface-container-lowest dark:bg-slate-900/50 rounded-3xl shadow-xl dark:shadow-2xl border border-outline-variant/50 dark:border-white/10 relative mb-24 flex flex-col md:flex-row transform hover:-translate-y-1 transition duration-300 dark:backdrop-blur-md overflow-hidden">
          
          <div className="bg-surface-container-low dark:bg-slate-900/80 p-10 md:p-14 md:w-2/5 flex flex-col justify-center items-center text-center relative border-b md:border-b-0 md:border-r border-outline-variant/50 dark:border-white/10">
            {/* Background pattern mờ */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-sm dark:drop-shadow-md">Flat Service Fee</span>
              <div className="flex items-center justify-center gap-x-2">
                <span className="text-8xl font-black tracking-tighter text-on-surface dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">3%</span>
              </div>
              <p className="mt-2 text-lg font-medium text-on-surface-variant dark:text-slate-400">Flat fee on ad spend</p>
              
              <div className="mt-10 space-y-4 text-left border-t border-outline-variant/50 dark:border-slate-700/50 pt-8">
                <div className="flex items-center gap-3 text-on-surface-variant dark:text-slate-300 font-medium">
                  <XIcon /> <span className="line-through text-on-surface-variant/70 dark:text-slate-500">Account Setup Fees</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant dark:text-slate-300 font-medium">
                  <XIcon /> <span className="line-through text-on-surface-variant/70 dark:text-slate-500">Monthly Retainers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-14 md:w-3/5 bg-transparent">
            <h3 className="text-2xl font-bold text-on-surface dark:text-white mb-8">Included for every brand:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
              <div className="flex gap-4 items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Agency Ad Accounts</h4>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Whitelisted infrastructure built to avoid random bot bans.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Higher Daily Spend</h4>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Scale past $10k/day without artificial caps.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Direct Rep Access</h4>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Priority escalation support when issues hit.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Priority Support</h4>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 mt-1">Dedicated Slack channel with our scaling experts.</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-on-primary bg-primary hover:brightness-110 transition shadow-lg shadow-primary/20 dark:shadow-[0_0_20px_rgba(0,229,255,0.4)] dark:hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-on-surface dark:text-white tracking-tight">
              Transparent Funding
            </h2>
            <p className="mt-4 text-lg text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto">
              We pass 100% of third‑party network fees through with <strong className="text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded shadow-sm">zero markup</strong>. 
            </p>
          </div>

          <div className="bg-surface-container-highest dark:bg-white/5 dark:backdrop-blur-sm rounded-2xl border border-outline-variant/30 dark:border-white/10 shadow-lg dark:shadow-2xl overflow-hidden">
            
            <div className="px-4 sm:px-6 py-4 bg-surface-container-lowest dark:bg-slate-900/60 border-b border-outline-variant/20 dark:border-white/5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Recommended funding methods</p>
            </div>
            
            <div className="bg-surface-container dark:bg-slate-900/80 grid grid-cols-12 px-4 sm:px-6 py-4 border-b border-outline-variant/20 dark:border-white/5 text-[10px] sm:text-xs font-bold text-on-surface-variant dark:text-slate-400 uppercase tracking-wider">
              <div className="col-span-5 sm:col-span-4 text-left">Funding Method</div>
              <div className="col-span-4 sm:col-span-3 text-center">Gateway Surcharge</div>
              <div className="hidden sm:block sm:col-span-2 text-center">Service Fee</div>
              <div className="col-span-3 sm:col-span-3 text-right text-primary">Total Rate</div>
            </div>

            <div className="divide-y divide-outline-variant/20 dark:divide-white/5 text-sm sm:text-base">
              
              {/* 1. ACH / Wire (Recommended) */}
              <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-5 bg-emerald-50 text-emerald-950 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-100 dark:hover:bg-emerald-900/60 transition border-l-4 border-emerald-500 ring-2 ring-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <div className="col-span-5 sm:col-span-4">
                  <div className="font-bold text-emerald-950 dark:text-white flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    US ACH / Wire
                    <span className="w-fit bg-emerald-100 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Recommended</span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-800 dark:text-slate-400 mt-1">Via Airwallex US Routing</div>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-bold text-emerald-700 dark:text-emerald-300">0.0%</div>
                <div className="hidden sm:block sm:col-span-2 text-center font-semibold text-emerald-800/80 dark:text-emerald-200/80">3.0%</div>
                <div className="col-span-3 sm:col-span-3 text-right font-black text-emerald-900 dark:text-emerald-50 text-lg">3.0%</div>
              </div>

              {/* 2. USDT (Recommended) */}
              <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-5 bg-emerald-50 text-emerald-950 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-100 dark:hover:bg-emerald-900/60 transition border-l-4 border-emerald-500 ring-2 ring-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <div className="col-span-5 sm:col-span-4">
                  <div className="font-bold text-emerald-950 dark:text-white flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    Cryptocurrency
                    <span className="w-fit bg-emerald-100 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Recommended</span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-800 dark:text-slate-400 mt-1">USDT (ERC-20 / TRC-20)</div>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-bold text-emerald-700 dark:text-emerald-300">0.0%</div>
                <div className="hidden sm:block sm:col-span-2 text-center font-semibold text-emerald-800/80 dark:text-emerald-200/80">3.0%</div>
                <div className="col-span-3 sm:col-span-3 text-right font-black text-emerald-900 dark:text-emerald-50 text-lg">3.0%</div>
              </div>

              {/* 3. Payoneer */}
              <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 opacity-70 hover:opacity-100 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition border-l-4 border-transparent">
                <div className="col-span-5 sm:col-span-4">
                  <div className="font-bold text-on-surface-variant dark:text-slate-300">Payoneer Balance</div>
                  <div className="text-xs sm:text-sm text-on-surface-variant/70 dark:text-slate-500 mt-1">Wallet-to-wallet</div>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-medium text-on-surface-variant dark:text-slate-400">+ 1.0%</div>
                <div className="hidden sm:block sm:col-span-2 text-center font-medium text-on-surface-variant/70 dark:text-slate-500">3.0%</div>
                <div className="col-span-3 sm:col-span-3 text-right font-bold text-on-surface-variant dark:text-slate-300 text-lg">4.0%</div>
              </div>

              {/* 4. Credit Card */}
              <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 opacity-70 hover:opacity-100 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition border-l-4 border-transparent">
                <div className="col-span-5 sm:col-span-4">
                  <div className="font-bold text-on-surface-variant dark:text-slate-300">Credit / Debit Card</div>
                  <div className="text-xs sm:text-sm text-on-surface-variant/70 dark:text-slate-500 mt-1">Stripe (Visa, Mastercard)</div>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-medium text-on-surface-variant dark:text-slate-400">+ 4.0%</div>
                <div className="hidden sm:block sm:col-span-2 text-center font-medium text-on-surface-variant/70 dark:text-slate-500">3.0%</div>
                <div className="col-span-3 sm:col-span-3 text-right font-bold text-on-surface-variant dark:text-slate-300 text-lg">7.0%</div>
              </div>

              {/* 5. PayPal */}
              <div className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 opacity-70 hover:opacity-100 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition border-l-4 border-transparent">
                <div className="col-span-5 sm:col-span-4">
                  <div className="font-bold text-on-surface-variant dark:text-slate-300">PayPal</div>
                  <div className="text-xs sm:text-sm text-on-surface-variant/70 dark:text-slate-500 mt-1">Business Transfer</div>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-medium text-on-surface-variant dark:text-slate-400">+ 4.5%</div>
                <div className="hidden sm:block sm:col-span-2 text-center font-medium text-on-surface-variant/70 dark:text-slate-500">3.0%</div>
                <div className="col-span-3 sm:col-span-3 text-right font-bold text-on-surface-variant dark:text-slate-300 text-lg">7.5%</div>
              </div>

            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-on-surface-variant dark:text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
             <span>
               <strong>Example:</strong> A $10,000 USDT deposit applies a 3.0% total rate, yielding <strong className="text-on-surface dark:text-white">$9,700</strong> in ready‑to‑spend ad balance.
             </span>
          </div>
        </div>

      </div>
    </section>
  );
}
