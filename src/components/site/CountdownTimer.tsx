import { useCountdown } from "@/hooks/useCountdown";

export function CountdownTimer({ showUrgency = true }: { showUrgency?: boolean }) {
  const seconds = useCountdown();

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6">
      {showUrgency && (
        <div className="flex flex-col items-center animate-pulse">
          <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#FF3B30]">
            Offer Ends In:
          </span>
          <div className="mt-1 text-[14px] font-bold text-foreground">
            Today Only <span className="text-[#FF3B30]">₹299</span> — Regular <span className="line-through opacity-50">₹1,999</span>
          </div>
        </div>
      )}
      <div className="flex items-end gap-2 sm:gap-3">
        <DigitBox value={mm[0]} label="" />
        <DigitBox value={mm[1]} label="MIN" />
        <span className="pb-8 text-3xl font-extrabold sm:text-5xl text-foreground">:</span>
        <DigitBox value={ss[0]} label="" />
        <DigitBox value={ss[1]} label="SEC" />
      </div>
    </div>
  );
}

function DigitBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          background: "#0A0A0A",
          color: "#fff",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontWeight: 800,
          fontSize: "clamp(36px, 6vw, 56px)",
          width: "clamp(56px, 9vw, 88px)",
          height: "clamp(72px, 11vw, 110px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }}
      >
        {value}
      </div>
      <span className="mt-2 h-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}