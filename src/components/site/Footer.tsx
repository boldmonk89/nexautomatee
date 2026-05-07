const links = ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Contact"];

export function Footer() {
  return (
    <footer className="border-t" style={{ background: "#F9FAFB" }}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="text-lg font-semibold tracking-tight">NexAutomate</div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <span>© 2025 NexAutomate. All rights reserved.</span>
          <a href="https://nexautomate.in" className="font-medium hover:text-foreground">nexautomate.in</a>
        </div>
      </div>
    </footer>
  );
}