import { useState, useEffect } from "react";

const INITIAL_SECONDS = 600; // 10 minutes

export function useCountdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    // 1. Get or Initialize Target Time
    let target = localStorage.getItem("countdown_target");
    const now = Math.floor(Date.now() / 1000);

    if (!target) {
      target = (now + INITIAL_SECONDS).toString();
      localStorage.setItem("countdown_target", target);
    }

    const update = () => {
      const currentNow = Math.floor(Date.now() / 1000);
      const targetVal = parseInt(localStorage.getItem("countdown_target") || "0", 10);
      
      let diff = targetVal - currentNow;

      if (diff <= 0) {
        // Reset if reached zero
        const newTarget = (currentNow + INITIAL_SECONDS).toString();
        localStorage.setItem("countdown_target", newTarget);
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
