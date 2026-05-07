import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>Last Updated: May 2026</p>
          <p>At NexAutomate, we value your privacy. This policy explains how we handle your data.</p>
          <h2 className="text-xl font-bold text-foreground">1. Data Collection</h2>
          <p>We collect your email address and name during purchase to deliver the templates and provide updates. Payment information is handled securely by Razorpay.</p>
          <h2 className="text-xl font-bold text-foreground">2. Cookies</h2>
          <p>We use essential cookies to ensure our website works correctly and to analyze basic site traffic.</p>
          <h2 className="text-xl font-bold text-foreground">3. Data Sharing</h2>
          <p>We do not sell or share your personal data with third parties, except as required to process your payment and deliver our service.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
