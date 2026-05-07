import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Do I need coding?", a: "No coding is required. We've built everything for you. You just need to import the templates and connect your API keys following our simple guides." },
  { q: "Is n8n free?", a: "Yes, n8n has a powerful self-hosted version that is free to use forever. There is also a cloud version if you prefer not to host it yourself." },
  { q: "How do I import templates?", a: "It's as simple as copy-pasting. You copy the JSON code we provide, and paste it directly into your n8n workflow canvas. It takes less than 5 seconds." },
  { q: "Will I get updates?", a: "Yes! Your purchase includes lifetime access to all current templates and any future n8n templates we add to this bundle." },
  { q: "Is there support?", a: "Absolutely. If you get stuck or have questions about setting up a specific template, our support team is ready to help you out via email." },
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
                  <Plus
                    size={20}
                    className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}