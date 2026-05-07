import { RazorpayButton } from "./RazorpayButton";
import { Reveal } from "./Reveal";
import { CountdownTimer } from "./CountdownTimer";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: "#0A0A0A", color: "#fff" }}>
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
            Start Automating Your
            <br />Business Today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] md:text-[18px]" style={{ color: "#9CA3AF" }}>
            Get instant lifetime access to all our premium n8n templates for a one-time payment of just ₹299.
          </p>
          <div className="mt-10 flex flex-col items-center gap-10">
            <RazorpayButton
              className="btn-invert !px-12 !py-5 text-xl shadow-[0_0_40px_rgba(37,99,235,0.3)]"
              label="Get Access — ₹299"
            />
            
            <div className="scale-110">
              <CountdownTimer />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "#9CA3AF" }}>
            <span>✓ Instant Digital Delivery</span>
            <span>✓ Lifetime Updates</span>
            <span>✓ No Subscription</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}