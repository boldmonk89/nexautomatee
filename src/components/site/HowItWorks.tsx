import { ShoppingCart, Download, Rocket } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const steps = [
  {
    icon: ShoppingCart,
    title: "Purchase Access",
    desc: "Get instant access to our entire library of n8n templates with a one-time payment.",
  },
  {
    icon: Download,
    title: "Import into n8n",
    desc: "Download the JSON files and import them directly into your n8n instance.",
  },
  {
    icon: Rocket,
    title: "Start Automating",
    desc: "Connect your accounts, hit activate, and watch your business run on autopilot.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#0A0A0A] text-white py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-white/60 md:text-lg">
            Three simple steps to automate your entire business.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <RevealItem key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <step.icon size={28} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[12px] font-bold text-white border-4 border-[#0A0A0A]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden w-full -translate-x-1/2 md:block">
                  <div className="h-[1px] w-[60%] mx-auto bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
