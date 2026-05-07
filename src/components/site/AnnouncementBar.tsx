import { useCountdown } from "@/hooks/useCountdown";
import { useLocation } from "@tanstack/react-router";

export function AnnouncementBar() {
  const seconds = useCountdown();
  const location = useLocation();
  const isBundlePage = location.pathname === "/bundle";

  const offerPrice = isBundlePage ? "₹499" : "₹299";
  const regularPrice = isBundlePage ? "₹49,997" : "₹1,999";

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative z-[60] bg-[#0A0A0A] py-3 px-4 text-white overflow-hidden border-b border-white/10 animate-blink">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
        <p className="text-[14px] font-bold tracking-wide sm:text-[16px]">
          🚀 Special Launch Offer: Get 80% OFF — Limited Time Only!
        </p>
        
        <div className="flex items-center gap-3 rounded-full bg-white/5 py-1.5 px-4 border border-white/10">
          <span className="text-[12px] font-bold uppercase tracking-wider text-white/60">
            {seconds === 0 ? `Regular Price Active — ${regularPrice}` : `${offerPrice} Today — ${regularPrice} In:`}
          </span>
          <span className="font-mono text-[18px] font-black text-[#FF3B30] drop-shadow-[0_0_10px_rgba(255,59,48,0.6)]">
            {formatTime(seconds)}
          </span>
        </div>
        
        <a href="#pricing" className="text-[13px] font-bold uppercase tracking-widest hover:text-[#FF3B30] transition-all flex items-center gap-2 group">
          Lock in Lifetime Access Now 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
