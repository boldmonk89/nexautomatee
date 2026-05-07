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
    const update = () => {
      const now = Math.floor(Date.now() / 1000);
      let target = localStorage.getItem("countdown_target_v2");
      
      let targetNum = target ? parseInt(target, 10) : 0;

      if (isNaN(targetNum) || targetNum === 0) {
        targetNum = now + INITIAL_SECONDS;
        localStorage.setItem("countdown_target_v2", targetNum.toString());
      }

      const diff = Math.max(0, targetNum - now);
      setSeconds(diff);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}
