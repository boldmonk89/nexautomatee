import {
  Workflow, Bot, Plug, GraduationCap, Infinity as InfinityIcon,
  BookOpen, Clock, Users, FileText, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { GridBackground } from "./GridBackground";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Workflow, title: "Ready-to-Use n8n Workflows", desc: "Fully built automation workflows you can import into n8n in seconds. No building from scratch." },
  { icon: Bot, title: "AI Automation Systems", desc: "Leverage OpenAI, Claude, and other AI APIs — pre-connected inside ready templates." },
  { icon: Plug, title: "Plug-and-Play Setup", desc: "Connect your accounts, hit activate. Most templates take under 15 minutes to go live." },
  { icon: GraduationCap, title: "Beginner Friendly", desc: "No tech background needed. Every template includes plain-English instructions." },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "Pay once, use forever. All future updates to templates you've purchased are free." },
  { icon: BookOpen, title: "Step-by-Step Documentation", desc: "Detailed written guides with screenshots so you never get stuck." },
  { icon: Clock, title: "Time-Saving Automations", desc: "Eliminate the manual, repetitive tasks eating hours of your week." },
  { icon: Users, title: "Lead Generation Systems", desc: "Automated lead capture, follow-up sequences, and CRM syncs — all pre-built." },
  { icon: FileText, title: "Content Automation Systems", desc: "Auto-publish content, repurpose posts, schedule newsletters — on autopilot." },
];

export function Features() {
  return (
    <section id="features" className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Everything Included</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            One Purchase. Unlimited Leverage.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Every template is built to work from day one — no coding required, no complicated setup.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="card-surface group h-full p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                  <f.icon size={18} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex justify-center">
          <a href="#pricing" className="btn-primary">
            Get Instant Access <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}