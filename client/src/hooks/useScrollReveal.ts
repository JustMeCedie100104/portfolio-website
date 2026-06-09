import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  /** How much of the element must be visible before triggering (0–1). Default 0.12 */
  threshold?: number;
  /** Only trigger once and stop observing. Default true */
  once?: boolean;
  /** Extra rootMargin passed to IntersectionObserver. Default "0px 0px -40px 0px" */
  rootMargin?: string;
}

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, `data-revealed="true"` is set on it,
 * which CSS transitions pick up via `[data-reveal]` and `[data-reveal][data-revealed]`.
 *
 * Respects `prefers-reduced-motion` — reveals immediately if motion is reduced.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.12, once = true, rootMargin = "0px 0px -40px 0px" } =
    options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced-motion preference — reveal instantly
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            (entry.target as HTMLElement).dataset.revealed = "false";
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return ref;
}
