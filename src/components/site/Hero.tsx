import { Play, ArrowRight, Star, Lock, CheckCircle2, Infinity as InfinityIcon } from "lucide-react";
import { GridBackground } from "./GridBackground";

export function Hero() {
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
            style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
          >
            Digital Products Are
            <br />
            The{" "}
            <span className="relative inline-block font-bold">
              Future.
              <span
                className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #2563EB, transparent)" }}
              />
            </span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-[560px] text-muted-foreground"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.6 }}
          >
            Stop selling hours. Start selling systems. NexAutomate gives you ready-to-deploy n8n
            automation templates plus premium digital products — so you can earn while you sleep,
            serve more clients, and build a business that runs itself.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="btn-primary">
              Get Instant Access <ArrowRight size={16} />
            </a>
            <a href="#templates" className="btn-secondary">See Templates</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="pill"><Star size={14} className="fill-current" style={{ color: "#F59E0B" }} /> 4.9/5 Rating</span>
            <span className="pill"><Lock size={14} /> Instant Digital Delivery</span>
            <span className="pill"><CheckCircle2 size={14} /> Beginner Friendly</span>
            <span className="pill"><InfinityIcon size={14} /> Lifetime Access</span>
          </div>
        </div>

        {/* Video demo */}
        <div className="relative mx-auto mt-16 w-full max-w-[900px]">
          <div
            className="relative w-full overflow-hidden rounded-[20px] border"
            style={{
              aspectRatio: "16 / 9",
              background: "#F3F4F6",
              boxShadow: "var(--shadow-video)",
              borderColor: "var(--border)",
            }}
          >
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="pulse-ring flex h-20 w-20 items-center justify-center rounded-full"
                style={{ background: "#0A0A0A" }}
              >
                <Play size={28} className="fill-white text-white" style={{ marginLeft: 3 }} />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Product Demo Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}