import { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, Star, Lock, CheckCircle2, Infinity as InfinityIcon } from "lucide-react";
import { GridBackground } from "./GridBackground";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="pill mb-6">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#2563EB" }} />
            Trusted by 1000+ users
          </span>
          <h1
            className="font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground"
            style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
          >
            Ready-to-use n8n Automations
            <br />
            for creators, agencies & businesses.
          </h1>
          <p
            className="mx-auto mt-8 max-w-[600px] text-muted-foreground"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.6 }}
          >
            Scale your operations with plug-and-play n8n templates. 
            No coding, no complexity, just pure automation systems built for business.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="btn-primary">
              Get Access <ArrowRight size={16} />
            </a>
          </div>
          <p className="mt-8 text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 size={14} className="text-green-500" />
            Join 1,000+ automators saving 20+ hours every week.
          </p>
        </div>

        {/* Video demo */}
        <div className="relative mx-auto mt-16 w-full max-w-[900px]">
          <div
            className="relative w-full overflow-hidden rounded-[20px] border"
            style={{
              aspectRatio: "16 / 9",
              background: "#000",
              boxShadow: "var(--shadow-video)",
              borderColor: "var(--border)",
            }}
          >
            <video 
              ref={videoRef}
              autoPlay 
              muted={isMuted}
              loop 
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/digivideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Sound Toggle Button */}
            <button 
              onClick={toggleSound}
              className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70"
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              )}
            </button>

            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}