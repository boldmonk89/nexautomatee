// NexAutomate Landing Page - Vercel Deploy Trigger
import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { Templates } from "@/components/site/Templates";
import { OtherProducts } from "@/components/site/OtherProducts";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexAutomate — Premium n8n Automation Templates" },
      {
        name: "description",
        content:
          "Ready-to-deploy n8n automation templates for creators and small businesses. Lead gen, AI workflows, content automation — lifetime access from ₹299.",
      },
      { property: "og:title", content: "NexAutomate — Automate Everything. Scale Faster." },
      {
        property: "og:description",
        content:
          "Premium n8n automation templates. Plug-and-play workflows that earn while you sleep.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Templates />
        <OtherProducts />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
