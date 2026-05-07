import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const testimonials = [
  { quote: "I set up the Lead Gen + CRM Sync template in under 20 minutes. It's been running for 3 weeks and has captured 340 leads automatically.", name: "Priya M.", role: "Freelance Marketer" },
  { quote: "As someone with zero coding skills, I was shocked how easy this was. My content is now auto-posted across 4 platforms while I sleep.", name: "Rohan K.", role: "Content Creator" },
  { quote: "I've tried 6 different automation tools. NexAutomate templates saved me weeks of setup time and ₹40,000 in agency fees.", name: "Ananya S.", role: "E-commerce Founder" },
  { quote: "The AI Email Responder template alone was worth 10x the price. My response rate doubled in the first week.", name: "Vikram T.", role: "SaaS Consultant" },
  { quote: "I'm now offering automation setup as a service to my clients using these templates. It's become a new revenue stream.", name: "Deepika R.", role: "Digital Agency Owner" },
  { quote: "Honestly shocked at the quality for ₹299. The documentation alone is better than most paid courses I've bought.", name: "Siddharth N.", role: "Solopreneur" },
];

function initials(name: string) {
  return name.replace(".", "").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Creator Reviews</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Real Creators. Real Results.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Join thousands of digital entrepreneurs who've already automated their workflows.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="card-surface flex h-full flex-col p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                <div className="text-base" style={{ color: "#F59E0B", letterSpacing: "2px" }}>
                  ★★★★★
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                  <div
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-xs font-semibold"
                    style={{ background: "#F3F4F6", color: "#6B7280" }}
                  >
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}