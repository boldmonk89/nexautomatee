import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Pricing } from "@/components/site/Pricing";
import { GridBackground } from "@/components/site/GridBackground";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Package, Download, Zap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/bundle")({
  head: () => ({
    meta: [
      { title: "All-In-One Digital Products Bundle | NexAutomate" },
      {
        name: "description",
        content: "Get the ultimate collection of digital products. From templates to assets, everything you need in one bundle.",
      },
    ],
  }),
  component: BundlePage,
});

function BundlePage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Bundle Hero */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
          <GridBackground />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <span className="pill mb-6">
                <Package size={14} className="text-blue-500" />
                Ultimate Digital Collection
              </span>
              <h1 className="text-4xl font-black tracking-tight md:text-7xl lg:text-8xl">
                The All-In-One
                <br />
                <span className="text-blue-600">Digital Bundle.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                100+ High-quality digital assets, templates, and resources to scale your business. 
                One payment. Lifetime access. Instant download.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#pricing" className="btn-primary">
                  Get The Bundle <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BundleFeature 
                icon={<Download className="text-blue-500" />}
                title="Instant Access"
                desc="Download everything immediately after purchase. No waiting, no delays."
              />
              <BundleFeature 
                icon={<Zap className="text-yellow-500" />}
                title="Ready to Use"
                desc="All assets are plug-and-play. Save hundreds of hours of work."
              />
              <BundleFeature 
                icon={<ShieldCheck className="text-green-500" />}
                title="Lifetime Updates"
                desc="Pay once and get all future products added to the bundle for free."
              />
            </div>
          </div>
        </section>

        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function BundleFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card-surface p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background border">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{desc}</p>
    </div>
  );
}
