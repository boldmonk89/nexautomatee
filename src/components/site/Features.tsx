import {
  Workflow, Bot, Plug, GraduationCap, Infinity as InfinityIcon,
  BookOpen, Clock, Users, FileText, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { GridBackground } from "./GridBackground";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Workflow, title: "Ready-made n8n workflows", desc: "Fully built, tested automation workflows you can import into n8n in seconds." },
  { icon: Bot, title: "AI Automations", desc: "Leverage OpenAI and LLMs inside your workflows for intelligent data processing." },
  { icon: Users, title: "Lead Generation Automations", desc: "Automated systems to capture, enrich, and follow up with leads 24/7." },
  { icon: FileText, title: "Content Automation Systems", desc: "Auto-repurpose and distribute content across all your social channels." },
  { icon: Plug, title: "WhatsApp/Email Workflows", desc: "Build powerful communication systems that run entirely on autopilot." },
  { icon: Clock, title: "Time-saving Systems", desc: "Eliminate manual repetitive tasks and focus on high-impact work." },
  { icon: GraduationCap, title: "Easy Import Setup", desc: "Just copy the JSON, import into n8n, and connect your API keys." },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "Pay once and get access to all current templates forever." },
  { icon: Clock, title: "Future Updates", desc: "Get every new template we release in the future at no extra cost." },
];

export function Features() {
  return (
    <section id="features" className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Included Workflows</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            What You Will Get
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A complete library of production-ready n8n templates to automate every part of your business.
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
          <a href="#cta" className="btn-primary">
            Get Instant Access <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}