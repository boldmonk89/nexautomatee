const links = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-xl font-bold tracking-tight">NexAutomate</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Premium n8n automation templates for modern businesses.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-[13px] text-muted-foreground md:flex-row">
          <span>© 2026 NexAutomate. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://nexautomate.online" className="hover:text-foreground transition-colors">nexautomate.online</a>
          </div>
        </div>
      </div>
    </footer>
  );
}