import React, { useState } from 'react';

export default function SavingsCalculator() {
  const [adSpend, setAdSpend] = useState(50000); // Default: $50k/mo ad spend

  // Traditional agency: $2,000 retainer + 8% fee (typical US average)
  const traditionalFee = 2000 + (adSpend * 0.08); 
  // Tiklife: 0 retainer, 3% flat fee
  const tiklifeFee = adSpend * 0.03;
  
  const monthlySavings = traditionalFee - tiklifeFee;
  const yearlySavings = monthlySavings * 12;

  const percentage = ((adSpend - 10000) / (500000 - 10000)) * 100;

  const formatUsd = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 bg-tiklife-navy rounded-3xl shadow-2xl font-sans text-white my-16 border border-white/10 relative overflow-hidden">
      {/* Cyan glow background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tiklife-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-tiklife-cyan uppercase tracking-widest mb-4">
          Interactive Tool
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">MATH DOESN'T LIE</h2>
        <p className="text-slate-400 text-lg">Drag the slider to see how much profit you hand away to retainers and percentage fees.</p>
      </div>

      <div className="relative z-10 mb-12 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-xl">
        <label className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
          <span className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
            <svg className="w-5 h-5 text-tiklife-cyan" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h2.25c.14 1.15 1.11 1.7 2.36 1.7 1.5 0 2.44-.8 2.44-1.87 0-2.45-3.58-1.57-3.58-3.92 0-1.46 1.16-2.5 2.8-2.9V4h2.67v1.89c1.6.35 2.76 1.35 2.94 2.97h-2.31c-.13-.88-.93-1.47-1.98-1.47-1.3 0-2.22.84-2.22 1.75 0 2.38 3.58 1.48 3.58 3.93 0 1.6-1.12 2.66-2.92 3.02z"/></svg>
            Monthly TikTok Ad Spend
          </span>
          <span className="text-tiklife-cyan text-5xl font-black drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
            {formatUsd(adSpend)}
          </span>
        </label>
        
        <div className="relative py-4 group">
          <input 
            type="range" min="10000" max="500000" step="5000"
            value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-4 rounded-full appearance-none cursor-pointer outline-none transition-all"
            style={{ 
              background: `linear-gradient(to right, #00E5FF 0%, #00E5FF ${percentage}%, rgba(255,255,255,0.1) ${percentage}%, rgba(255,255,255,0.1) 100%)`,
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)',
              accentColor: '#00E5FF' // Backwards compatibility 
            }}
          />
          {/* Custom CSS overrides for the slider thumb to make it bigger and glowing */}
          <style>{`
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #fff;
              border: 5px solid #00E5FF;
              cursor: pointer;
              box-shadow: 0 0 25px rgba(0, 229, 255, 0.9);
              transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            }
            input[type=range]::-webkit-slider-thumb:hover {
              transform: scale(1.15);
            }
            input[type=range]::-webkit-slider-thumb:active {
              transform: scale(0.95);
              background: #e0faff;
            }
            input[type=range]::-moz-range-thumb {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #fff;
              border: 5px solid #00E5FF;
              cursor: pointer;
              box-shadow: 0 0 25px rgba(0, 229, 255, 0.9);
              transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            }
            input[type=range]::-moz-range-thumb:hover {
              transform: scale(1.15);
            }
          `}</style>
        </div>

        <div className="flex justify-between text-xs text-slate-400 mt-6 font-bold uppercase tracking-wider px-1">
          <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700 shadow-sm">$10k</span>
          <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700 shadow-sm">$250k</span>
          <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700 shadow-sm">$500k+</span>
        </div>
      </div>

      {/* Bảng so sánh (Us vs Them) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-red-500/20">
          <h3 className="text-slate-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Traditional Agency
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm"><span className="text-slate-500">Monthly Retainer</span><span className="text-slate-300">$2,000</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-500">Spend Fee (Avg 8%)</span><span className="text-slate-300">{formatUsd(adSpend * 0.08)}</span></div>
          </div>
          <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
            <span className="text-slate-400 font-bold">Total Fees</span>
            <span className="text-2xl font-black text-red-400">{formatUsd(traditionalFee)}</span>
          </div>
        </div>

        <div className="bg-brand-gradient p-[1px] rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.15)] transform md:-translate-y-2 transition-transform h-full">
          <div className="bg-tiklife-navy h-full w-full rounded-2xl p-6 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-tiklife-cyan text-tiklife-navy text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">Tiklife Partner</div>
            <h3 className="text-tiklife-cyan font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tiklife-cyan animate-pulse"></span> The Tiklife Model
            </h3>
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Monthly Retainer</span><span className="text-white font-bold">$0</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Flat 3% Fee</span><span className="text-white font-bold">{formatUsd(tiklifeFee)}</span></div>
            </div>
            <div className="pt-4 border-t border-tiklife-cyan/20 flex justify-between items-center">
              <span className="text-slate-200 font-bold">Total Fees</span>
              <span className="text-3xl font-black text-white">{formatUsd(tiklifeFee)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Kết quả đập vào mắt & Nút chốt sale */}
      <div className="relative z-10 text-center bg-white/5 p-8 rounded-2xl border border-tiklife-cyan/30">
        <p className="text-slate-300 font-bold uppercase tracking-widest text-sm mb-2">Extra Profit Added To Your Bottom Line:</p>
        <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-brand-gradient mb-2 tracking-tighter drop-shadow-lg">
          + {formatUsd(yearlySavings)} <span className="text-xl text-tiklife-cyan/70 font-bold">/ year</span>
        </p>
        <p className="text-sm text-slate-400 mb-8 font-medium">Inject that directly back into scaling your winning creatives.</p>
        
        <a href="/contact" className="inline-block w-full sm:w-auto px-10 py-4 font-bold rounded-xl text-tiklife-navy bg-tiklife-cyan hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1 transform duration-200">
          Claim Your 3% Partner Account
        </a>
      </div>
    </div>
  );
}
