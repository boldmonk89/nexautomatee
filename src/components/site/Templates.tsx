import { Clock, Code2, Rocket, Zap, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const reasons = [
  { icon: Clock, title: "Saves Time", desc: "Skip the weeks of building and testing. Get production-ready workflows in minutes." },
  { icon: Code2, title: "No Coding Needed", desc: "No complex JavaScript or API knowledge required. We've done the heavy lifting for you." },
  { icon: Rocket, title: "Beginner Friendly", desc: "Perfect for those just starting with n8n. Easy-to-follow setup guides included." },
  { icon: Zap, title: "Plug-and-Play Setup", desc: "Import the JSON, add your credentials, and you're live. It's that simple." },
  { icon: ShieldCheck, title: "Real Business Automation", desc: "These aren't just toys. These are systems used by real businesses to scale operations." },
];

export function Templates() {
  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">The Advantage</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Why These Templates?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Stop wasting hours trying to build complex automations from scratch.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <div className="flex flex-col items-start gap-4 p-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground">
                  <r.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}