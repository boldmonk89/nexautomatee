import { useState, useEffect } from "react";

const INITIAL_SECONDS = 600; // 10 minutes

export function useCountdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const updateTimer = () => {
      let targetTime = localStorage.getItem("countdown_target");
      const now = Math.floor(Date.now() / 1000);

      if (!targetTime || parseInt(targetTime, 10) <= now) {
        targetTime = (now + INITIAL_SECONDS).toString();
        localStorage.setItem("countdown_target", targetTime);
      }

      const remaining = Math.max(0, parseInt(targetTime, 10) - now);
      setSeconds(remaining);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return seconds;
}
