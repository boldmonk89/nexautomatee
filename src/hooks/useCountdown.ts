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
    // 1. Initialize Global Target if not exists
    if (!window.__NEX_COUNTDOWN_TARGET) {
      const stored = localStorage.getItem("countdown_target");
      const now = Math.floor(Date.now() / 1000);
      
      if (stored && parseInt(stored, 10) > now) {
        window.__NEX_COUNTDOWN_TARGET = parseInt(stored, 10);
      } else {
        window.__NEX_COUNTDOWN_TARGET = now + INITIAL_SECONDS;
        localStorage.setItem("countdown_target", window.__NEX_COUNTDOWN_TARGET.toString());
      }
    }

    const update = () => {
      const now = Math.floor(Date.now() / 1000);
      let target = window.__NEX_COUNTDOWN_TARGET || (now + INITIAL_SECONDS);
      
      let diff = target - now;

      if (diff <= 0) {
        target = now + INITIAL_SECONDS;
        window.__NEX_COUNTDOWN_TARGET = target;
        localStorage.setItem("countdown_target", target.toString());
        diff = INITIAL_SECONDS;
      }

      setSeconds(diff);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}
