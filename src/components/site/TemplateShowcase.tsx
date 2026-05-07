import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Check } from "lucide-react";

const templates = [
  {
    title: "AI Content Machine",
    desc: "Connect ChatGPT to WordPress & Social Media for auto-posting.",
    image: "/images/ai_content_automation_1778177705937.png",
    tag: "AI & Content"
  },
  {
    title: "Sales CRM Sync",
    desc: "Automate lead management between HubSpot, Salesforce, and Slack.",
    image: "/images/crm_automation_template_1778177668123.png",
    tag: "Business"
  },
  {
    title: "Social Media Hero",
    desc: "Schedule and auto-engage across IG, Twitter, and LinkedIn.",
    image: "/images/social_media_automation_1778177686885.png",
    tag: "Marketing"
  },
  {
    title: "E-commerce Engine",
    desc: "Automate order fulfillment, inventory, and tracking emails.",
    image: "/images/ecommerce_automation_1778177724871.png",
    tag: "Sales"
  },
  {
    title: "Master n8n Workflow",
    desc: "A complex multi-step automation for advanced business logic.",
    image: "/images/n8n_automation_workflow_1_1778177285043.png",
    tag: "Advanced"
  },
  {
    title: "Sketchy Workflow Blueprint",
    desc: "Hand-drawn n8n system logic for business process mapping.",
    image: "/images/n8n_blueprint.png",
    tag: "Blueprint"
  },
  {
    title: "Live Automation Dashboard",
    desc: "Real-time monitoring and execution of your complex workflows.",
    image: "/images/n8n_diagram.png",
    tag: "Working"
  },
  {
    title: "Automation Sketch",
    desc: "Minimalist pencil-style sketch of automated data flow systems.",
    image: "/images/n8n_sketch.png",
    tag: "Artistic"
  }
];

export function TemplateShowcase() {
  return (
    <section id="templates" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="section-label">Library</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Popular Automation Templates
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Choose from our pre-built library of high-conversion workflows.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <RevealItem key={t.title} className="group overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-foreground backdrop-blur-md">
                  {t.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                    <Check size={14} /> Ready to Deploy
                  </span>
                  <a href="#cta" className="text-xs font-black uppercase tracking-widest text-blue-600 hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
