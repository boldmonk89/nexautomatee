export function GridBackground({ fade = true, className = "" }: { fade?: boolean; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 grid-bg ${fade ? "grid-bg-fade" : ""} ${className}`}
    />
  );
}

export function DotBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 dot-bg grid-bg-fade ${className}`}
    />
  );
}