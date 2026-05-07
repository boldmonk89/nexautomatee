import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { TemplateShowcase } from "@/components/site/TemplateShowcase";
import { DigitalProductsSection } from "@/components/site/DigitalProductsSection";
import { Templates } from "@/components/site/Templates";
import { HowItWorks } from "@/components/site/HowItWorks";
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
          "Ready-to-deploy n8n automation templates for creators and businesses. Plug-and-play workflows — lifetime access.",
      },
      { property: "og:title", content: "NexAutomate — n8n Automation Templates" },
      {
        property: "og:description",
        content:
          "Premium n8n automation templates. Plug-and-play workflows that automate your business.",
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
        <Features />
        <TemplateShowcase />
        <DigitalProductsSection />
        <Templates />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
