import type { ReactNode } from "react";

/** Plain wrapper. Kept so pages can group content, no scroll animation. */
export default function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}
