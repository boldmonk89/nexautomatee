import { useState, useEffect } from "react";

const INITIAL_SECONDS = 600; // 10 minutes

declare global {
  interface Window {
    __NEX_COUNTDOWN_TARGET?: number;
  }
}

export function useCountdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    // 1. Determine Target Time
    let target = localStorage.getItem("countdown_target_v3");
    const now = Math.floor(Date.now() / 1000);
    
    let targetNum = target ? parseInt(target, 10) : 0;

    // Initialize if missing or invalid
    if (!targetNum || isNaN(targetNum)) {
      targetNum = now + INITIAL_SECONDS;
      localStorage.setItem("countdown_target_v3", targetNum.toString());
    }

    const tick = () => {
      const currentNow = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, targetNum - currentNow);
      
      // If reached zero, we can either stop or reset. 
      // User requested it NOT to loop automatically, so we stop at 0.
      setSeconds(remaining);
      
      if (remaining === 0) {
        clearInterval(interval);
      }
    };

    tick(); // Initial call
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}
