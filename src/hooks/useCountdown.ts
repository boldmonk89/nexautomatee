import { useEffect, useState } from "react";

const INITIAL_SECONDS = 300; // 5 minutes
const STORAGE_KEY = "countdown_target_v5";

let fallbackTarget = 0;

declare global {
  interface Window {
    __NEX_COUNTDOWN_TARGET?: number;
  }
}

export function useCountdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const getOrCreateTarget = () => {
      const now = Math.floor(Date.now() / 1000);
      let targetNum = window.__NEX_COUNTDOWN_TARGET || fallbackTarget;

      try {
        const storedTarget = window.localStorage.getItem(STORAGE_KEY);
        const parsedTarget = storedTarget ? Number.parseInt(storedTarget, 10) : 0;
        if (Number.isFinite(parsedTarget) && parsedTarget > now) {
          targetNum = parsedTarget;
        }
      } catch {
        // Some hosted previews block storage; keep the timer running in memory.
      }

      if (!targetNum || targetNum <= now) {
        targetNum = now + INITIAL_SECONDS;
      }

      window.__NEX_COUNTDOWN_TARGET = targetNum;
      fallbackTarget = targetNum;

      try {
        window.localStorage.setItem(STORAGE_KEY, String(targetNum));
      } catch {
        // Storage is optional for the countdown.
      }

      return targetNum;
    };

    const targetNum = getOrCreateTarget();

    const tick = () => {
      const currentNow = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, targetNum - currentNow);
      setSeconds(remaining);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}
