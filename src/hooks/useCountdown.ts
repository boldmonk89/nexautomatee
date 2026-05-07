import { useEffect, useState } from "react";

const INITIAL_SECONDS = 600; // 10 minutes

export function useCountdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    // Start fresh at 10:00 on every mount (refresh)
    const targetTime = Math.floor(Date.now() / 1000) + INITIAL_SECONDS;

    const tick = () => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, targetTime - now);
      setSeconds(remaining);
      
      if (remaining === 0) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}
