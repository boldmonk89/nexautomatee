import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const INITIAL_SECONDS = 600; // 10 minutes

export function AnnouncementBar() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : INITIAL_SECONDS));
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
        <div className="flex items-center gap-1.5 animate-pulse text-[#FF3B30]">
          <Clock size={14} className="animate-spin-slow" />
          <span>Limited Time Offer</span>
        </div>
        
        <span className="hidden sm:inline-block h-3 w-[1px] bg-white/20" />
        
        <div className="flex items-center gap-2">
          <span className="text-white/80">Price Increases In:</span>
          <span className="font-mono text-[14px] text-[#FF3B30] drop-shadow-[0_0_8px_rgba(255,59,48,0.5)]">
            {formatTime(seconds)}
          </span>
        </div>

        <span className="hidden md:inline-block h-3 w-[1px] bg-white/20" />
        
        <a href="#pricing" className="hidden md:inline-block hover:underline decoration-[#FF3B30] underline-offset-4 transition-all">
          Lock in Lifetime Access Now →
        </a>
      </div>
    </div>
  );
}
