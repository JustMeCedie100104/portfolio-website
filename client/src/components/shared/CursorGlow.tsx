import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Don't render if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot  = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = -200, mouseY = -200;
    let glowX  = -200, glowY  = -200;
    let rafId  = 0;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      dot!.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }

    // Glow lags behind with linear interpolation
    function tick() {
      const ease = 0.10;
      glowX += (mouseX - glowX) * ease;
      glowY += (mouseY - glowY) * ease;
      glow!.style.transform = `translate(${glowX}px, ${glowY}px)`;
      rafId = requestAnimationFrame(tick);
    }

    // Scale up dot when hovering interactive elements
    function onEnter() { dot!.classList.add("cursor-dot--hover"); }
    function onLeave() { dot!.classList.remove("cursor-dot--hover"); }

    const interactives = "a, button, [role='button'], input, textarea, select, label";
    document.querySelectorAll<HTMLElement>(interactives).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Use event delegation for dynamically added elements
    document.addEventListener("mouseover", (e) => {
      if ((e.target as HTMLElement).closest(interactives)) onEnter();
      else onLeave();
    });

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Glow blob — large, soft, lags behind */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      {/* Sharp dot — snaps to cursor exactly */}
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
    </>
  );
}
