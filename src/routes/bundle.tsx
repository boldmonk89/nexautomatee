import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { GridBackground } from "@/components/site/GridBackground";
import { Reveal } from "@/components/site/Reveal";
import { CountdownTimer } from "@/components/site/CountdownTimer";
import { RazorpayButton } from "@/components/site/RazorpayButton";
import { useCountdown } from "@/hooks/useCountdown";
import { 
  ArrowRight, Package, Download, Zap, ShieldCheck, CheckCircle2, 
  Play, Smartphone, Palette, Dumbbell, Briefcase, TrendingUp,
  Cpu, Users, BarChart3, HelpCircle
} from "lucide-react";

export const Route = createFileRoute("/bundle")({
  head: () => ({
    meta: [
      { title: "Ultimate NexAutomate Mega Bundle | 10,00,000+ Assets" },
      {
        name: "description",
        content: "Get the biggest collection of AI tools, viral reels, automation templates, Canva assets, and premium creator resources in one mega bundle.",
      },
    ],
  }),
  component: BundlePage,
});

function BundlePage() {
  const seconds = useCountdown();
  const isExpired = seconds === 0;
  const offerPrice = "₹499";
  const regularPrice = "₹49,997";
  const currentPrice = isExpired ? regularPrice : offerPrice;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
          <GridBackground />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <span className="pill mb-6">
                <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                Limited Time Mega Deal
              </span>
              <h1 className="text-4xl font-black tracking-tight md:text-7xl lg:text-8xl">
                Ultimate NexAutomate
                <br />
                <span className="text-blue-600">Mega Bundle.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Get access to the biggest collection of AI tools, viral reels, automation templates, Canva assets, social media packs, fitness bundles, luxury clips, ebooks, and premium creator resources — all in one mega bundle.
              </p>
              
              <div className="mt-12 flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-4">
                   <RazorpayButton 
                     label={isExpired ? "Unlock Instant Access" : "Unlock Instant Access — ₹499"}
                     className="btn-primary !px-12 !py-6 text-xl shadow-[0_0_50px_rgba(37,99,235,0.3)]"
                   />
                   <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                      <span>{isExpired ? regularPrice : "One-Time Payment"}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Lifetime Access</span>
                   </div>
                </div>

                <div className="scale-110">
                   <CountdownTimer offerPrice={offerPrice} regularPrice={regularPrice} />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
                <TrustBadge label="Instant Delivery" />
                <TrustBadge label="Lifetime Access" />
                <TrustBadge label="Beginner Friendly" />
                <TrustBadge label="Commercial Use Ready" />
                <TrustBadge label="Free Future Updates" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 border-y bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatItem value="50,000+" label="Total Assets" />
              <StatItem value="20+" label="Premium Bundles" />
              <StatItem value="Lifetime" label="Updates" />
              <StatItem value="Instant" label="Access" />
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL GET */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="text-center mb-20">
              <h2 className="text-3xl font-black md:text-6xl tracking-tight">Everything Included <br/><span className="text-blue-600">Inside The Bundle.</span></h2>
              <p className="mt-4 text-muted-foreground text-lg">Massive value across every category imaginable.</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BundleCategory 
                title="AI & AUTOMATION PACKS" 
                icon={<Cpu className="text-purple-500" />}
                items={[
                  "4000+ n8n Automation Templates",
                  "AI Ultimate Collection 2026",
                  "AI Lifestyle Bundle",
                  "AI Monkey Reels Bundle",
                  "1700+ AI Reels Bundle"
                ]}
              />
              <BundleCategory 
                title="VIRAL CONTENT PACKS" 
                icon={<Play className="text-red-500" />}
                items={[
                  "Talking Objects Reels Bundle",
                  "Mad Scientist Reels Bundle",
                  "Omegle Viral Video Bundle",
                  "Luxury Lifestyle Clips",
                  "Viral Hook Resources"
                ]}
              />
              <BundleCategory 
                title="SOCIAL MEDIA RESOURCES" 
                icon={<Smartphone className="text-pink-500" />}
                items={[
                  "30000+ Social Media Posts",
                  "Thumbnail Assets Pack",
                  "Viral Reel Assets",
                  "Instagram Content Packs",
                  "Marketing Resources"
                ]}
              />
              <BundleCategory 
                title="DESIGN & CANVA PACKS" 
                icon={<Palette className="text-blue-500" />}
                items={[
                  "10000+ Canva Templates",
                  "Editable Branding Templates",
                  "Viral Carousel Designs",
                  "Business Design Assets"
                ]}
              />
              <BundleCategory 
                title="FITNESS & LIFESTYLE" 
                icon={<Dumbbell className="text-green-500" />}
                items={[
                  "2000+ Gym & Fitness Bundle",
                  "Motivation Reels",
                  "Lifestyle Content Packs",
                  "Fitness Social Media Assets"
                ]}
              />
              <BundleCategory 
                title="BUSINESS & CREATOR TOOLS" 
                icon={<Briefcase className="text-amber-500" />}
                items={[
                  "Ebook Mega Bundle",
                  "Digital Marketing Assets",
                  "AI Prompt Collections",
                  "Content Systems",
                  "Creator Growth Tools"
                ]}
              />
            </div>
          </div>
        </section>

        {/* FREE BONUSES */}
        <section className="py-24 bg-[#0A0A0A] text-white">
          <div className="mx-auto max-w-7xl px-6">
             <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                   <Reveal>
                      <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Exclusive Gifts</span>
                      <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">PREMIUM BONUSES <br/>INCLUDED!</h2>
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <BonusItem label="Viral Hook Collection" />
                         <BonusItem label="Caption Templates" />
                         <BonusItem label="AI Prompt Pack" />
                         <BonusItem label="Content Ideas Vault" />
                         <BonusItem label="Trending Audio Resources" />
                      </div>
                   </Reveal>
                </div>
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent">
                      <img 
                        src="/assets/bundle_pack.jpg" 
                        alt="Premium Bundle Pack"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                         <h3 className="text-xl font-black">Mega Bonus Pack</h3>
                         <p className="text-sm text-gray-300">Worth ₹4,999 — Included in your bundle.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* WHY THIS BUNDLE & WHO IS IT FOR */}
        <section className="py-24 md:py-32 bg-secondary/20">
           <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div>
                    <h2 className="text-3xl font-black md:text-5xl tracking-tight mb-10">Why This Bundle?</h2>
                    <div className="space-y-8">
                       <WhyItem 
                         title="Save Thousands" 
                         desc="Buying all these bundles separately would cost over ₹49,997." 
                       />
                       <WhyItem 
                         title="Save Time" 
                         desc="No more wasting hours searching random Telegram channels or low-quality files online." 
                       />
                       <WhyItem 
                         title="Ready-To-Use" 
                         desc="Most resources are plug-and-play, editable, or one-click import." 
                       />
                       <WhyItem 
                         title="Built For Growth" 
                         desc="Perfect for creators, agencies, freelancers, editors, and digital businesses." 
                       />
                    </div>
                 </div>
                 <div>
                    <h2 className="text-3xl font-black md:text-5xl tracking-tight mb-10">Who Is This For?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <TargetAudience label="Content Creators" />
                       <TargetAudience label="Instagram Theme Pages" />
                       <TargetAudience label="Freelancers" />
                       <TargetAudience label="Agencies" />
                       <TargetAudience label="Video Editors" />
                       <TargetAudience label="Social Media Managers" />
                       <TargetAudience label="Digital Marketers" />
                       <TargetAudience label="AI Creators" />
                       <TargetAudience label="Automation Builders" />
                       <TargetAudience label="Students & Side Hustlers" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 md:py-32">
           <div className="mx-auto max-w-7xl px-6 text-center">
              <Reveal>
                 <h2 className="text-4xl font-black md:text-7xl tracking-tight mb-12">Get Mega Bundle Now</h2>
                 <div className="mx-auto max-w-[500px] card-surface p-10 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-bl-2xl">Best Value</div>
                    
                    {!isExpired && <div className="text-2xl text-muted-foreground line-through opacity-50 mb-2">₹49,997</div>}
                    <div className="text-7xl font-black tracking-tight mb-4">{currentPrice}</div>
                    <div className="text-sm font-bold text-red-500 uppercase tracking-[0.2em] mb-8">
                       {isExpired ? "Regular Price" : "Today Only Offer"}
                    </div>
                    
                    <div className="space-y-4 mb-10 text-left">
                       <PriceFeature label="1,000,000+ Files & Assets" />
                       <PriceFeature label="Lifetime Instant Access" />
                       <PriceFeature label="No Hidden Monthly Fees" />
                       <PriceFeature label="Free Future Updates" />
                    </div>

                    <RazorpayButton 
                      label="Download Now" 
                      className="btn-primary w-full justify-center !py-5 text-xl" 
                    />
                    
                    <p className="mt-6 text-xs text-muted-foreground uppercase font-bold tracking-widest">
                       One-Time Payment • Lifetime Access
                    </p>
                 </div>

                 <div className="mt-12 scale-110">
                    <CountdownTimer offerPrice={offerPrice} regularPrice={regularPrice} />
                 </div>
              </Reveal>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-secondary/30">
           <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-center text-3xl font-black md:text-5xl tracking-tight mb-16 flex items-center justify-center gap-4">
                 <HelpCircle className="text-blue-600" /> FAQ
              </h2>
              <div className="space-y-6">
                 <FAQItem 
                   q="Is this a physical product?" 
                   a="No. This is a digital product bundle. You'll receive download links and access immediately." 
                 />
                 <FAQItem 
                   q="How will I receive the bundle?" 
                   a="You’ll get instant access right after payment via email and on the success page." 
                 />
                 <FAQItem 
                   q="Can beginners use it?" 
                   a="Yes. Most assets are beginner-friendly and ready to use with simple tools like Canva or n8n." 
                 />
                 <FAQItem 
                   q="Will I get updates?" 
                   a="Yes. Any new products added to the Mega Bundle in the future will be free for you." 
                 />
                 <FAQItem 
                   q="Is there a refund policy?" 
                   a="Due to the digital nature of the product, refunds are generally not provided after delivery/access." 
                 />
              </div>
           </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-[#050505] text-white text-center">
           <div className="relative mx-auto max-w-4xl px-6">
              <Reveal>
                 <h2 className="text-3xl font-black md:text-6xl leading-[1.1]">Stop Searching Random <br/><span className="text-blue-600">Files Online.</span></h2>
                 <p className="mx-auto mt-8 max-w-2xl text-gray-400 text-lg md:text-xl">
                    Get everything you need to grow your content, business, and brand in one powerful bundle.
                 </p>
                 
                 <div className="mt-12 flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center">
                       <span className="text-4xl md:text-6xl font-black text-white">ONLY {currentPrice} TODAY</span>
                       {!isExpired && <span className="text-xl text-gray-600 line-through mt-2">{regularPrice} Regular Price</span>}
                    </div>
                    
                    <RazorpayButton 
                      label="Unlock Instant Access" 
                      className="btn-primary !px-12 !py-6 text-xl shadow-[0_0_50px_rgba(37,99,235,0.4)]" 
                    />
                 </div>
              </Reveal>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

/* HELPER COMPONENTS */

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
      <CheckCircle2 size={16} className="text-green-500" />
      {label}
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-5xl font-black text-foreground">{value}</div>
      <div className="mt-1 text-sm font-bold text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
}

function BundleCategory({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="card-surface p-8 group hover:border-blue-500/50 transition-all">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary border group-hover:bg-blue-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-black mb-6 tracking-tight">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-[15px] text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BonusItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
      <Zap size={16} className="text-blue-500 fill-blue-500" />
      <span className="font-bold text-sm uppercase tracking-wide">{label}</span>
    </div>
  );
}

function WhyItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-none flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-black">
         <ArrowRight size={18} />
      </div>
      <div>
         <h4 className="text-xl font-bold text-foreground">{title}</h4>
         <p className="mt-1 text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function TargetAudience({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 bg-background border p-4 rounded-xl font-bold text-sm text-foreground">
      <CheckCircle2 size={18} className="text-blue-600" />
      {label}
    </div>
  );
}

function PriceFeature({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground font-semibold">
      <CheckCircle2 size={18} className="text-green-500" />
      {label}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="card-surface p-6">
      <h4 className="text-lg font-bold flex items-start gap-3">
        <span className="text-blue-600 font-black">Q.</span> {q}
      </h4>
      <p className="mt-3 text-muted-foreground pl-7">{a}</p>
    </div>
  );
}
