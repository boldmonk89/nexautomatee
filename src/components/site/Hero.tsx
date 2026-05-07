import { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, Star, Lock, CheckCircle2, Infinity as InfinityIcon } from "lucide-react";
import { GridBackground } from "./GridBackground";
import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

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
      { threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play();
      setHasInteracted(true);
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
          <div className="mt-10 flex flex-col items-center gap-8">
            <a href="#cta" className="btn-primary">
              Get Access <ArrowRight size={16} />
            </a>
            
            <div className="scale-90 opacity-90">
              <CountdownTimer />
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 size={14} className="text-green-500" />
            Join 1,000+ automators saving 20+ hours every week.
          </p>
        </div>

        {/* Video demo */}
        <div className="relative mx-auto mt-16 w-full max-w-[900px]">
          <div
            className="relative w-full overflow-hidden rounded-[20px] border group cursor-pointer"
            onClick={handleUnmute}
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
              muted={!hasInteracted}
              loop 
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/digivideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!hasInteracted && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-all group-hover:bg-black/30">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-2xl animate-bounce">
                  <Play size={32} fill="black" />
                </div>
                <p className="mt-6 text-xl font-black uppercase tracking-widest text-white drop-shadow-lg">
                  Click to Unmute & Play
                </p>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}