import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;        // radius in px (tiny — 0.5 to 2)
  opacity: number;     // current opacity
  baseOpacity: number; // resting opacity
  twinkleSpeed: number;// how fast it pulses
  twinkleOffset: number; // phase offset so they don't all pulse together
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createStar(width: number, height: number): Star {
  const base = randomBetween(0.08, 0.55);
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    size: randomBetween(0.5, 1.8),
    opacity: base,
    baseOpacity: base,
    twinkleSpeed: randomBetween(0.003, 0.012),
    twinkleOffset: randomBetween(0, Math.PI * 2),
  };
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STAR_COUNT = 120;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let frame = 0;

    function resize() {
      width  = window.innerWidth;
      // Use the full document height so stars cover every page
      height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      canvas!.width  = width;
      canvas!.height = height;
    }

    function seed() {
      stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height);
      frame++;

      for (const s of stars) {
        // Gentle sine-wave twinkle
        s.opacity =
          s.baseOpacity +
          Math.sin(frame * s.twinkleSpeed + s.twinkleOffset) *
            (s.baseOpacity * 0.5);

        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    seed();
    raf = requestAnimationFrame(tick);

    // Re-seed on resize so stars fill the new dimensions
    const ro = new ResizeObserver(() => {
      resize();
      seed();
    });
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
