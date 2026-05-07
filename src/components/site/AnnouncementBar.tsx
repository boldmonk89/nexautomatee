import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const INITIAL_SECONDS = 600; // 10 minutes

export function AnnouncementBar() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    // Start exactly at 10:00 (INITIAL_SECONDS) whenever the component mounts
    setSeconds(INITIAL_SECONDS);

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) return INITIAL_SECONDS;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative z-[60] bg-[#0A0A0A] py-2 px-4 text-white overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 text-center text-[11px] font-bold uppercase tracking-widest sm:text-xs">
        <p className="text-[13px] font-medium tracking-wide">
          🚀 Special Launch Offer: Get 80% OFF — Limited Time Only!
        </p>
        
        <span className="hidden sm:inline-block h-3 w-[1px] bg-white/20" />
        
        <div className="flex items-center gap-2">
          <span className="text-white/80">₹299 Today — ₹1,999 In:</span>
          <span className="font-mono text-[14px] text-[#FF3B30] drop-shadow-[0_0_8px_rgba(255,59,48,0.5)]">
            {formatTime(seconds)}
          </span>
        </div>

        <span className="hidden md:inline-block h-3 w-[1px] bg-white/20" />
        
        <a href="#cta" className="hidden md:inline-block hover:underline decoration-[#FF3B30] underline-offset-4 transition-all">
          Lock in Lifetime Access Now →
        </a>
      </div>
    </div>
  );
}
