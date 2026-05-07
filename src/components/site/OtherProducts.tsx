import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import carsBundle from "@/assets/cars-reel-bundle.png";
import promptsBundle from "@/assets/chatgpt-prompts-bundle.png";
import sharkTankBundle from "@/assets/shark-tank-reels-bundle.png";
import hollywoodBundle from "@/assets/hollywood-reels-bundle.png";

// ADD FUTURE PRODUCTS HERE
const products = [
  { image: promptsBundle, title: "5000+ ChatGPT Prompts Bundle", price: 99, oldPrice: 499 },
  { image: carsBundle, title: "2500+ Cars 4K Reel Bundle", price: 129, oldPrice: 699 },
  { image: sharkTankBundle, title: "4000+ Shark Tank Reels Bundle", price: 349, oldPrice: 999 },
  { image: hollywoodBundle, title: "500+ Hollywood 4K Reels Bundle", price: 249, oldPrice: 799 },
];

export function OtherProducts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">More Digital Products</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Ready-to-Sell Product Bundles
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            NexAutomate is a digital product brand — n8n templates are the main offer, with more
            creator-ready bundles available for growth-focused buyers.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <RevealItem key={p.title}>
              <article className="card-surface flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">₹{p.oldPrice}</span>
                    <span className="text-2xl font-bold tracking-tight">₹{p.price}</span>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <a href="#pricing" className="btn-secondary">Get Main n8n Bundle</a>
        </Reveal>
      </div>
    </section>
  );
}