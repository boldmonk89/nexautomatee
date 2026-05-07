import type { ReactNode } from "react";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}