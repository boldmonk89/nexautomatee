import { Check, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { GridBackground } from "./GridBackground";
import { CountdownTimer } from "./CountdownTimer";
import { RazorpayButton } from "./RazorpayButton";

const inclusions = [
  "All current n8n templates",
  "Step-by-step setup guides",
  "AI-powered workflow systems",
  "Lifetime updates included",
  "Use for yourself or clients",
  "7-day money-back guarantee",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <GridBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(220,38,38,0.08)", color: "#DC2626" }}
          >
            <Clock size={12} /> Limited Time Offer
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Get Full Access For Just ₹299 Today
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            This price won't last. Once the timer hits zero, the price goes up. Lock in your
            lifetime access now.
          </p>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <CountdownTimer />
        </Reveal>

        <Reveal className="mx-auto mt-14 w-full max-w-[480px]">
          <div
            className="card-surface p-8 md:p-10"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
          >
            <div className="text-center">
              <div className="text-xl text-muted-foreground line-through">₹999</div>
              <div className="mt-1 text-5xl font-extrabold tracking-tight md:text-6xl">₹299</div>
              <p className="mt-2 text-sm text-muted-foreground">
                One-time payment. Lifetime access. Instant delivery.
              </p>
            </div>

            <ul className="mt-7 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]">
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
                    style={{ background: "#0A0A0A" }}
                  >
                    <Check size={12} className="text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <RazorpayButton
              className="btn-primary mt-7 w-full justify-center"
              label="Start Automating Now — ₹299"
            />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure payment. Instant access. No subscription.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}