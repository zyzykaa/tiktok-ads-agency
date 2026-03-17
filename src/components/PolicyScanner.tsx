import React, { useState, useMemo, useEffect } from 'react';

const BANNED_WORDS = [
  { word: "lose weight", category: "Body Image", risk: "Critical", reason: "Triggers strict body‑image policies and unrealistic results claims." },
  { word: "fat", category: "Body Image", risk: "High", reason: "Negative body‑image trigger. High rejection risk." },
  { word: "cure", category: "Medical", risk: "Critical", reason: "Unverified medical claims can lead to immediate rejection." },
  { word: "miracle", category: "Exaggerated", risk: "Medium", reason: "Often flagged as misleading or overpromising." },
  { word: "diet pills", category: "Prohibited", risk: "Critical", reason: "Weight‑loss supplements are heavily restricted." },
  { word: "make money", category: "Financial", risk: "High", reason: "Flagged for get‑rich‑quick or deceptive models." },
  { word: "get rich", category: "Financial", risk: "Critical", reason: "Guaranteed income claims are prohibited." },
  { word: "crypto", category: "Restricted", risk: "High", reason: "May require special approvals to run." },
  { word: "passive income", category: "Financial", risk: "Medium", reason: "Often scrutinized for deceptive claims." },
  { word: "guaranteed return", category: "Misleading", risk: "Critical", reason: "Absolute financial promises are forbidden." },
  { word: "100% free", category: "Clickbait", risk: "Medium", reason: "Often flagged as bait‑and‑switch tactics." },
  { word: "secret trick", category: "Clickbait", risk: "Medium", reason: "Sensational language can lower ad quality." },
  { word: "hack", category: "Misleading", risk: "Medium", reason: "Can be interpreted as deceptive behavior." },
  { word: "cbd", category: "Prohibited", risk: "Critical", reason: "CBD and hemp products are restricted." },
  { word: "weapon", category: "Prohibited", risk: "Critical", reason: "Weapons promotion is prohibited." }
];

export default function PolicyScanner() {
  const [text, setText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [aiStatus, setAiStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [aiResult, setAiResult] = useState<any | null>(null);

  const analysis = useMemo(() => {
    if (!text.trim()) return [];
    const foundIssues: any[] = [];
    BANNED_WORDS.forEach(item => {
      const regex = new RegExp(`\\b${item.word}\\b`, 'gi');
      const matches = text.match(regex);
      if (matches) {
        foundIssues.push({ ...item, count: matches.length });
      }
    });
    const riskWeight = { "Critical": 3, "High": 2, "Medium": 1 };
    return foundIssues.sort((a, b) =>
      (riskWeight[b.risk as keyof typeof riskWeight] || 0) - (riskWeight[a.risk as keyof typeof riskWeight] || 0)
    );
  }, [text]);

  useEffect(() => {
    if (text) {
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 400);
      return () => clearTimeout(timer);
    }
  }, [text]);

  const isSafe = analysis.length === 0 && text.trim().length > 0 && !isScanning;
  const hasAi = aiStatus === 'success' && aiResult;

  const runAiScan = async () => {
    if (!text.trim()) return;
    setAiStatus('loading');
    setAiResult(null);
    try {
      const res = await fetch('/api/policy-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (!res.ok) throw new Error('AI error');
      const data = await res.json();
      setAiResult(data);
      setAiStatus('success');
    } catch (e) {
      setAiStatus('error');
    }
  };

  return (
    <section className="py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-xs font-bold text-secondary uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Free AI Audit Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">
            TikTok Ad Copy <span className="text-transparent bg-clip-text bg-brand-gradient">Policy Scanner</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Paste your script, caption, or landing page copy. We flag risky phrases that commonly trigger automated rejections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-surface border border-outline-variant/30 rounded-2xl p-6 flex flex-col h-full shadow-lg">
            <label className="flex justify-between items-center mb-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">
              <span>Paste Ad Copy Here</span>
              <span className="text-xs bg-surface-container-lowest px-2 py-1 rounded border border-outline-variant/30">{text.length} chars</span>
            </label>

            <textarea
              className="w-full flex-grow min-h-[320px] bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none resize-none transition-all text-lg leading-relaxed shadow-inner"
              placeholder="e.g., Discover the secret hack to lose weight fast and make money online with 100% guaranteed ROI..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className="mt-4 flex justify-between items-center">
              <button onClick={() => setText("")} className="text-sm font-medium text-on-surface-variant hover:text-secondary transition">
                Clear text
              </button>
              <div className="text-sm text-on-surface-variant">
                {isScanning ? <span className="text-secondary animate-pulse">Scanning...</span> : 'Ready to scan'}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={runAiScan}
                disabled={!text.trim() || aiStatus === 'loading'}
                className="px-5 py-3 rounded-xl font-bold text-sm bg-brand-gradient text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {aiStatus === 'loading' ? 'Running AI Scan...' : 'Run AI Scan (Gemini)'}
              </button>
              <div className="text-xs text-on-surface-variant flex items-center">
                If AI is unavailable, we fall back to the local rules engine.
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-surface border border-outline-variant/30 rounded-2xl p-6 shadow-lg flex-grow flex flex-col">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6 border-b border-outline-variant/30 pb-4">
                Analysis Report
              </h3>

              {hasAi && (
                <div className="mb-4 bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">AI Summary</div>
                  <div className={`text-sm font-semibold ${aiResult.status === 'safe' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {aiResult.summary || (aiResult.status === 'safe' ? 'Looks safe.' : 'Risky phrases detected.')}
                  </div>
                </div>
              )}

              {!text.trim() ? (
                <div className="flex flex-col items-center justify-center text-on-surface-variant h-48 opacity-70">
                  <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p>Awaiting text to scan...</p>
                </div>
              ) : isScanning ? (
                <div className="flex flex-col items-center justify-center h-48">
                  <div className="w-10 h-10 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin mb-4"></div>
                </div>
              ) : (aiStatus === 'error') ? (
                <div className="flex flex-col items-center justify-center h-48 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <div className="text-2xl mb-3">⚠️</div>
                  <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">AI unavailable</span>
                  <span className="text-sm text-amber-600/70 dark:text-amber-400/70 mt-1 text-center px-4">Showing local rules‑based results.</span>
                </div>
              ) : isSafe ? (
                <div className="flex flex-col items-center justify-center h-48 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <div className="text-3xl mb-3">✅</div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xl">Looks Safe</span>
                  <span className="text-sm text-emerald-600/70 dark:text-emerald-400/70 mt-1 text-center px-4">No major trigger words detected. Review manually before launch.</span>
                </div>
              ) : (
                <div className="flex flex-col gap-4 overflow-hidden">
                  <div className="flex items-center gap-4 bg-red-500/10 border border-red-500/30 p-4 rounded-xl shrink-0">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <div className="font-bold text-red-600 dark:text-red-400 text-lg">High Rejection Risk</div>
                      <div className="text-sm text-red-600/80 dark:text-red-400/80">Found {analysis.length} policy violations</div>
                    </div>
                  </div>

                  <div className="space-y-3 overflow-y-auto pr-2 max-h-[260px]">
                    {(hasAi && Array.isArray(aiResult.issues) && aiResult.issues.length > 0 ? aiResult.issues : analysis).map((issue: any, idx: number) => (
                      <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex flex-col gap-1 border-l-4 border-l-red-500">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{issue.category}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${issue.risk === 'Critical' ? 'bg-red-500/20 text-red-600 dark:text-red-400' : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'}`}>
                            {issue.risk}
                          </span>
                        </div>
                        <div className="text-lg font-black text-on-surface mt-1">"{issue.word || issue.phrase}"</div>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed bg-surface p-2 rounded border border-outline-variant/30">
                          {issue.reason}
                          {issue.safe_alternative && (
                            <>
                              <br />
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Safer:</span> {issue.safe_alternative}
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`transition-all duration-500 transform ${text && !isScanning ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50 pointer-events-none'}`}>
              <div className="bg-brand-gradient p-[1px] rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                <div className="bg-surface rounded-2xl p-6 flex flex-col gap-4">
                  <div>
                    <h4 className="text-on-surface font-black text-lg mb-1">Need compliant, stable scaling?</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Our whitelisted agency accounts provide clearer review paths, faster approvals, and dedicated support to help you stay compliant as you scale.
                    </p>
                  </div>
                  <a href="/contact" className="w-full py-3.5 font-bold rounded-xl text-white bg-brand-gradient hover:scale-[1.02] transition-transform text-center shadow-lg">
                    Request Whitelisted Access
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
