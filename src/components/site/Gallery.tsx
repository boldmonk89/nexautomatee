import { Reveal } from "./Reveal";

const galleryImages = [
  {
    src: "/images/gallery/lead_gen.png",
    title: "Lead Generation",
    desc: "Automate lead capture and nurturing with high-conversion workflows."
  },
  {
    src: "/images/gallery/social_media.png",
    title: "Social Media Master",
    desc: "Sync content across all platforms with one click."
  },
  {
    src: "/images/gallery/crm_sales.png",
    title: "CRM Sync",
    desc: "Keep your sales pipeline updated without lifting a finger."
  },
  {
    src: "/images/gallery/ai_automation.png",
    title: "AI Integration",
    desc: "Leverage GPT and AI to power your business logic."
  }
];

export function Gallery() {
  return (
    <div className="mt-16 w-full">
      <Reveal className="mb-10 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Preview Our Premium Templates
        </h3>
        <p className="mt-3 text-muted-foreground">
          A glimpse into the automation power you're about to unlock.
        </p>
      </Reveal>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((img, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                <h4 className="text-lg font-bold text-white">{img.title}</h4>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">{img.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
