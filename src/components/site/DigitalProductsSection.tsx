import { Reveal } from "./Reveal";
import { GridBackground } from "./GridBackground";
import { Package, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

export function DigitalProductsSection() {
  return (
    <section id="bundle" className="relative overflow-hidden py-24 md:py-32 bg-[#050505]">
      <GridBackground className="opacity-40" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-500 mb-6">
                <Package size={16} /> Exclusive Bundle
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.05]">
                The Ultimate <br />
                <span className="text-blue-600">Digital Toolkit.</span>
              </h2>
              <p className="mt-8 text-lg text-gray-400 leading-relaxed">
                Unlock a massive collection of premium digital products designed to scale your business instantly. 
                From high-performing assets to ready-to-deploy systems, everything you need is right here.
              </p>
              
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Curated Premium Quality</h4>
                    <p className="text-sm text-gray-500">Only the best products tested for real-world results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Instant Scalability</h4>
                    <p className="text-sm text-gray-500">Deploy systems in minutes, not weeks.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a href="#pricing" className="btn-primary">
                  Explore The Bundle <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <Reveal delay={0.2}>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-1">
                <div className="h-full w-full rounded-[22px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center relative">
                  {/* Floating elements to represent "Digital Products" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                     <Layers size={300} className="text-blue-600 animate-pulse" />
                  </div>
                  <div className="z-10 text-center p-8">
                     <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                        <Package size={48} className="text-white" />
                     </div>
                     <h3 className="text-2xl font-black text-white">All-In-One Bundle</h3>
                     <p className="mt-2 text-gray-400">100+ Assets & Templates</p>
                  </div>
                  
                  {/* Glassmorphism cards for flair */}
                  <div className="absolute top-10 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="h-3 w-12 bg-blue-500 rounded-full mb-2" />
                    <div className="h-2 w-8 bg-gray-600 rounded-full" />
                  </div>
                  <div className="absolute bottom-10 left-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="h-3 w-12 bg-green-500 rounded-full mb-2" />
                    <div className="h-2 w-8 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
