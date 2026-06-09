import type { ReactNode, ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  /** Wrapper element type. Default "div" */
  as?: ElementType;
  /** Animation variant. Default "fade-up" */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Delay in ms (applied via inline style). Use for staggering children. */
  delay?: number;
  threshold?: number;
}

export function RevealSection({
  children,
  className = "",
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  threshold,
}: RevealSectionProps) {
  const ref = useScrollReveal<HTMLElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={variant}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
