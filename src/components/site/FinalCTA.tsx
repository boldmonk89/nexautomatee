import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0A0A0A", color: "#fff" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
          >
            Start Building Automated
            <br />Income Today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] md:text-[18px]" style={{ color: "#9CA3AF" }}>
            Everything you need to automate your business, generate leads on autopilot, and scale
            without working more hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="btn-invert">
              Get Access Now — ₹299 <ArrowRight size={16} />
            </a>
            <a href="#templates" className="btn-ghost-dark">View All Templates</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "#9CA3AF" }}>
            <span>✓ Instant access</span>
            <span>✓ 7-day refund</span>
            <span>✓ Lifetime updates</span>
            <span>✓ No subscription</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}