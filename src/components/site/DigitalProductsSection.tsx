import { Reveal } from "./Reveal";
import { GridBackground } from "./GridBackground";
import { Package, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
                <Link to="/bundle" className="btn-primary">
                  Explore The Bundle <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <Reveal delay={0.2}>
              <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-transparent">
                <img 
                  src="/assets/bundle_pack.jpg" 
                  alt="Ultimate Digital Product Pack Mega Bundle"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
