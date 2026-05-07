import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

// ADD NEW TEMPLATES HERE
const templates = [
  { title: "Instagram Content Automation", desc: "Auto-generate, schedule, and cross-post Instagram content from a single Notion or Google Sheet source.", badge: "BESTSELLER", price: 299, oldPrice: 1999 },
  { title: "Lead Gen + CRM Sync", desc: "Capture leads from forms, ads, and DMs. Auto-enrich, score, and push directly into your CRM.", badge: "NEW", price: 299, oldPrice: 1999 },
  { title: "AI Email Responder", desc: "Reply to client emails 24/7 with on-brand AI responses powered by GPT-4 and your knowledge base.", badge: "AI-POWERED", price: 299, oldPrice: 1999 },
  { title: "YouTube Script Generator", desc: "Turn a single topic into research, outline, hook, and full script — ready to record in minutes.", badge: "AI-POWERED", price: 299, oldPrice: 1999 },
  { title: "Client Onboarding System", desc: "Automate contracts, invoices, welcome emails, and project setup the moment a client signs up.", badge: "BESTSELLER", price: 299, oldPrice: 1999 },
  { title: "WhatsApp Follow-Up Bot", desc: "Auto follow-up with leads on WhatsApp using personalized sequences and AI-powered replies.", badge: "NEW", price: 299, oldPrice: 1999 },
];

const badgeColor: Record<string, string> = {
  NEW: "#16A34A",
  BESTSELLER: "#0A0A0A",
  "AI-POWERED": "#2563EB",
};

export function Templates() {
  return (
    <section id="templates" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Premium Templates</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Automation Workflows Built For Real Business Results
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Each template is a complete system — not just a workflow, but a business asset.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <RevealItem key={t.title}>
              <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: "#F3F4F6" }}>
                  <div className="absolute inset-0 grid-bg opacity-60" />
                  <span
                    className="absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                    style={{ background: badgeColor[t.badge] }}
                  >
                    {t.badge}
                  </span>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon size={28} strokeWidth={1.5} />
                    <span className="text-xs font-medium">Template Preview</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{t.desc}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">₹{t.oldPrice}</span>
                    <span className="text-2xl font-bold tracking-tight">₹{t.price}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    <a href="#pricing" className="btn-primary !py-2.5 !px-4 text-sm">
                      Get This Template <ArrowRight size={14} />
                    </a>
                    <a href="#pricing" className="btn-secondary !py-2.5 !px-4 text-sm">Preview</a>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}