import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "How do I access the templates after purchase?", a: "Immediately after payment, you'll receive an email with download links and setup instructions. Everything is delivered digitally — no waiting." },
  { q: "Do I need to know how to code?", a: "Not at all. Every template is designed for non-technical users. If you can follow step-by-step instructions, you can set these up. Most users are live within 15–30 minutes." },
  { q: "Do I get lifetime access?", a: "Yes. Once you purchase, the templates are yours forever. We continuously improve our templates and all updates are included at no extra cost." },
  { q: "How fast can I get a workflow running?", a: "Most templates take 15–30 minutes to set up from scratch. The plug-and-play design means you're connecting existing accounts, not building anything." },
  { q: "Can I use these templates for my clients?", a: "Yes. You can use the templates for your own business and for client projects. Many of our users have built agencies around these systems." },
  { q: "What is your refund policy?", a: "We offer a 7-day no-questions-asked refund policy. If you're not satisfied for any reason within 7 days of purchase, contact us and we'll issue a full refund." },
  { q: "Do I need to pay for n8n separately?", a: "n8n has a free self-hosted version you can use at no cost. Some cloud features may require a paid n8n plan — we'll note any requirements clearly in each template's documentation." },
  { q: "What tools do these templates connect to?", a: "Our templates connect to tools like Google Workspace, Notion, Slack, WhatsApp, Instagram, YouTube, OpenAI, Gmail, Airtable, and many more via n8n's 400+ native integrations." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal className="text-center">
          <span className="section-label">Questions</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Everything You Need To Know
          </h2>
        </Reveal>

        <div className="mt-12 divide-y" style={{ borderColor: "var(--border)" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t py-2 first:border-t-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-6 text-[16px] font-semibold tracking-tight md:text-[17px]">
                    {f.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus size={20} className="text-muted-foreground" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}