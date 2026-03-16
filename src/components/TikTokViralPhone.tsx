import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons tối ưu ---
const HeartIcon = () => <svg className="w-7 h-7 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>;
const CommentIcon = () => <svg className="w-7 h-7 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>;
const ShareIcon = () => <svg className="w-7 h-7 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M15 5l6 6-6 6v-4c-5 0-8 1.5-11 4.5 1.5-4 4.5-8 11-8V5z"/></svg>;
const BookmarkIcon = () => <svg className="w-7 h-7 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>;

export default function TikTokViralPhone() {
  const [scene, setScene] = useState(1);
  const [revenue, setRevenue] = useState(12540);

  // Quản lý Animation Loop (Vòng lặp)
  useEffect(() => {
    let mounted = true;
    const sequence = async () => {
      while (mounted) {
        setScene(1);
        setRevenue(12540);
        await new Promise(r => setTimeout(r, 2500)); // Hiện cảnh 1 trong 2.5s
        if (!mounted) break;
        setScene(2);
        await new Promise(r => setTimeout(r, 4500)); // Hiện cảnh 2 nổ đơn trong 4.5s
      }
    };
    sequence();
    return () => { mounted = false; };
  }, []);

  // Bộ đếm nhảy số tiền cực mạnh ở Scene 2
  useEffect(() => {
    let interval: any;
    if (scene === 2) {
      interval = setInterval(() => {
        setRevenue(prev => {
          const next = prev + Math.floor(Math.random() * 8000) + 1500;
          return next >= 82130 ? 82130 : next; // Dừng lại ở $82,130
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [scene]);

  const formatUsd = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="flex justify-center items-center py-10 font-sans">
      {/* Khung điện thoại */}
      <div className="relative w-[320px] h-[650px] bg-[#0A1128] rounded-[3rem] border-[8px] border-slate-900 shadow-[0_0_50px_rgba(0,229,255,0.15)] overflow-hidden ring-4 ring-white/5">
        
        {/* Tai thỏ (Notch) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-50"></div>

        <AnimatePresence mode="wait">
          {/* ================= SCENE 1: HOOK & LOGO ================= */}
          {scene === 1 && (
            <motion.div 
              key="scene1"
              exit={{ scale: 3, opacity: 0, filter: "blur(15px)" }} // Hiệu ứng zoom vỡ hạt lúc chuyển cảnh
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="absolute inset-0 bg-[#050B14] z-20 overflow-hidden"
            >
              {/* Nền Neon Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>

              {/* Top UI */}
              <div className="absolute top-8 left-4 right-4 flex justify-between items-center z-30">
                <div className="bg-[#FF0050] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_rgba(255,0,80,0.8)] flex items-center gap-1 animate-pulse">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div> LIVE
                </div>
                <div className="bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded border border-white/10">
                  👁 50K Viewers
                </div>
              </div>

              {/* Hook Text Nhấn mạnh (Đập vào mắt) */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-24 w-full px-4 z-30 flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-2xl text-center">
                  <span className="text-white font-bold text-sm tracking-wide">
                    Scaling brands to <span className="text-[#00E5FF] font-black text-base drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">$100K/day</span> 🚀
                  </span>
                </div>
              </motion.div>

              {/* Logo Tiklife 3D Glow */}
              <div className="absolute inset-0 flex justify-center items-center z-20 mt-10">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0px 0px 15px rgba(0, 229, 255, 0.4))",
                      "drop-shadow(0px 0px 30px rgba(0, 229, 255, 0.8))",
                      "drop-shadow(0px 0px 15px rgba(0, 229, 255, 0.4))"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-32 h-32 flex justify-center items-center"
                >
                  <img src="/assets/logo-full.png" alt="Tiklife Logo" className="w-32 h-auto drop-shadow-[0_0_20px_rgba(53,251,245,0.8)]" />
                </motion.div>
              </div>

              {/* Right Side Icons */}
              <div className="absolute bottom-32 right-3 flex flex-col gap-4 items-center z-30">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#1A56DB] to-[#00E5FF] p-[2px] mb-2 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                  <div className="w-full h-full bg-[#0A1128] rounded-full flex justify-center items-center text-[#00E5FF] font-black text-xs italic">TL</div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FF0050] text-white w-4 h-4 rounded-full flex justify-center items-center text-[10px] font-bold">+</div>
                </div>
                <div className="flex flex-col items-center gap-0.5"><HeartIcon /><span className="text-white text-[10px] font-bold">128K</span></div>
                <div className="flex flex-col items-center gap-0.5"><CommentIcon /><span className="text-white text-[10px] font-bold">1,204</span></div>
                <div className="flex flex-col items-center gap-0.5"><BookmarkIcon /><span className="text-white text-[10px] font-bold">14K</span></div>
                <div className="flex flex-col items-center gap-0.5"><ShareIcon /><span className="text-white text-[10px] font-bold">Share</span></div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-4 right-16 z-30">
                <h3 className="text-white font-bold text-sm mb-1 drop-shadow-md">@tiklife_agency</h3>
                <p className="text-white/90 text-xs leading-snug drop-shadow-md">
                  Scaling #skincare brands to $100K/day using creator ads.<br/>
                  Want the exact framework? 👇
                </p>
                <div className="mt-2 flex items-center gap-2 text-white/70 text-[10px]">
                  <span>🎵 Original Audio - Tiklife</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= SCENE 2: DASHBOARD EXPLOSION ================= */}
          {scene === 2 && (
            <motion.div 
              key="scene2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#050505] z-10 overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Lưới Tech Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

              {/* Revenue Counter (Trung tâm nhảy số) */}
              <div className="relative z-30 text-center mb-12">
                <p className="text-[#00E5FF] text-xs font-bold uppercase tracking-widest mb-2 animate-pulse drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">Live Revenue</p>
                <motion.div 
                  key={revenue}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-5xl font-black text-white tabular-nums tracking-tighter drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                >
                  {formatUsd(revenue)}
                </motion.div>
              </div>

              {/* Hiệu ứng Nổ nhãn dán đơn hàng (Pop-up Explosions) */}
              {[
                { top: '25%', left: '10%', text: '+$129', bg: 'bg-emerald-500/20 border-emerald-400 text-emerald-400', delay: 0.1 },
                { top: '65%', right: '10%', text: 'ROAS 4.5x 🚀', bg: 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]', delay: 0.3 },
                { top: '35%', right: '15%', text: '+$3,450', bg: 'bg-emerald-500/20 border-emerald-400 text-emerald-400', delay: 0.5 },
                { top: '75%', left: '15%', text: 'Conversion!', bg: 'bg-[#FF0050]/20 border-[#FF0050] text-[#FF0050]', delay: 0.7 },
                { top: '50%', left: '5%', text: 'New Order', bg: 'bg-purple-500/20 border-purple-400 text-purple-400', delay: 0.9 },
                { top: '15%', right: '25%', text: '+1 Sale', bg: 'bg-white/10 border-white text-white', delay: 0.4 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 0], y: -50, scale: [0.8, 1.2, 0.9] }}
                  transition={{ duration: 1.5, delay: item.delay, repeat: Infinity, repeatDelay: 0.5 }}
                  className={`absolute z-20 font-bold text-[10px] px-3 py-1.5 rounded-lg border backdrop-blur-sm shadow-lg ${item.bg}`}
                  style={{ top: item.top, left: item.left, right: item.right }}
                >
                  {item.text}
                </motion.div>
              ))}

              {/* Nút Call To Action hiện lên ở cuối Scene */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: revenue > 70000 ? 1 : 0, y: revenue > 70000 ? 0 : 20 }}
                className="absolute bottom-12 bg-[#00E5FF] text-[#0A1128] font-black uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.6)] z-30 flex items-center gap-2"
              >
                Flat 3% Fee. Link in Bio.
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Thanh Home dưới đáy Phone */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50"></div>
      </div>
    </div>
  );
}
