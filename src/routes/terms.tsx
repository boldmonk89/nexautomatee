import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>Last Updated: May 2026</p>
          <p>Welcome to NexAutomate. By accessing our website and purchasing our templates, you agree to these terms.</p>
          <h2 className="text-xl font-bold text-foreground">1. License</h2>
          <p>Upon purchase, you are granted a non-exclusive, non-transferable license to use the n8n templates for your personal or business projects. You may use them for client work, but you may not resell the templates as standalone products.</p>
          <h2 className="text-xl font-bold text-foreground">2. Refunds</h2>
          <p>Due to the digital nature of our products, we generally do not offer refunds once the files have been accessed. However, if you have issues with a template, please contact our support.</p>
          <h2 className="text-xl font-bold text-foreground">3. Limitation of Liability</h2>
          <p>NexAutomate is not responsible for any damage or loss caused by the use or misuse of our automation templates.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
