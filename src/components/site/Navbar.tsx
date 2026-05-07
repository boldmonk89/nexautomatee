import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "All-In-One Bundle", href: "/bundle", isExternal: false },
  { label: "What's Included", href: "#features", isExternal: true },
  { label: "Why Us", href: "#why", isExternal: true },
  { label: "How It Works", href: "#how", isExternal: true },
  { label: "FAQ", href: "#faq", isExternal: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(229,231,235,0.8)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
          <img 
            src="/assets/logo.png" 
            alt="NexAutomate Logo" 
            className="h-10 w-auto object-contain mix-blend-multiply" 
          />
          <span className="text-[19px] font-bold tracking-tight text-[#0A0A0A]">
            NexAutomate
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            l.isExternal ? (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#pricing" className="btn-primary">Get Access</a>
        </div>
        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              l.isExternal ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  {l.label}
                </Link>
              )
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary justify-center">Get Access</a>
          </div>
        </div>
      )}
    </header>
  );
}