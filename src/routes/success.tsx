import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Download, Mail, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-24">
        {/* Background Gradients */}
        <div 
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px]"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #2563EB, transparent)",
          }}
        />
        
        <div className="relative mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 text-green-500"
          >
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Payment Successful!
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Thank you for your purchase! You're now ready to scale your business with NexAutomate. 
              We've sent a confirmation email with your access details.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            <div className="card-surface flex flex-col items-center p-8 text-center">
              <div className="mb-4 rounded-xl bg-primary/5 p-3 text-primary">
                <Download size={24} />
              </div>
              <h3 className="font-bold">Instant Access</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Download your templates immediately from our vault.
              </p>
              <a 
                href="https://notion.so/your-vault-link" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary mt-6 w-full justify-center gap-2"
              >
                Go to Vault <ExternalLink size={14} />
              </a>
            </div>

            <div className="card-surface flex flex-col items-center p-8 text-center">
              <div className="mb-4 rounded-xl bg-primary/5 p-3 text-primary">
                <Mail size={24} />
              </div>
              <h3 className="font-bold">Check Your Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We've sent the setup guides and JSON files to your inbox.
              </p>
              <Link 
                to="/"
                className="btn-secondary mt-6 w-full justify-center"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-sm text-muted-foreground">
              Need help? Contact us at <span className="font-medium text-foreground">support@nexautomate.com</span>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
