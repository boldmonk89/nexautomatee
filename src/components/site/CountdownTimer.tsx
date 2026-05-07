import { useEffect, useState } from "react";

const INITIAL = 600;

export function CountdownTimer() {
  const [seconds, setSeconds] = useState(INITIAL);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setReset(true);
          window.setTimeout(() => setReset(false), 2400);
          return INITIAL;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-2 sm:gap-3">
        <DigitBox value={mm[0]} label="" />
        <DigitBox value={mm[1]} label="MIN" />
        <span className="pb-8 text-3xl font-extrabold sm:text-5xl">:</span>
        <DigitBox value={ss[0]} label="" />
        <DigitBox value={ss[1]} label="SEC" />
      </div>
      {reset && (
        <p className="mt-4 text-sm font-medium" style={{ color: "#DC2626" }}>
          Price increasing soon — grab it now!
        </p>
      )}
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