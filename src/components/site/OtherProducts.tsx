import { Sparkles, BookMarked, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

// ADD FUTURE PRODUCTS HERE
const products: { icon: LucideIcon; title: string }[] = [
  { icon: Sparkles, title: "AI Prompt Packs" },
  { icon: BookMarked, title: "Notion Business OS" },
  { icon: GraduationCap, title: "Digital Course Bundle" },
];

export function OtherProducts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">More From NexAutomate</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            More Digital Products Coming Soon
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We're constantly building — follow us to be first when new products drop.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((p) => (
            <RevealItem key={p.title}>
              <div
                className="card-surface relative flex h-48 flex-col items-center justify-center gap-3 p-7 text-center"
                style={{ background: "#F9FAFB" }}
              >
                <span
                  className="absolute right-4 top-4 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                  style={{ borderColor: "var(--border)" }}
                >
                  Coming Soon
                </span>
                <div className="opacity-50">
                  <p.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold opacity-70">{p.title}</h3>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <a href="#pricing" className="btn-secondary">Join Waitlist</a>
        </Reveal>
      </div>
    </section>
  );
}