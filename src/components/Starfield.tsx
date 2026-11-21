import React, { useEffect, useRef } from 'react';

interface StarfieldProps {
  count?: number;
}

interface Star {
  x: number; // fraction of width (0-1)
  y: number; // fraction of height (0-1)
  r: number; // radius in px
  base: number; // base opacity
  amp: number; // twinkle amplitude
  speed: number; // twinkle speed
  phase: number; // twinkle phase offset
  blue: boolean;
}

/**
 * A single <canvas> starfield. Drawing ~120 circles per frame on one element
 * is far cheaper than animating that many DOM nodes (which each become their
 * own compositor layer). Respects prefers-reduced-motion and pauses when the
 * tab is hidden.
 */
const Starfield: React.FC<StarfieldProps> = ({ count = 120 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;

    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.5,
      base: Math.random() * 0.4 + 0.3,
      amp: Math.random() * 0.35 + 0.15,
      speed: Math.random() * 1.2 + 0.4,
      phase: Math.random() * Math.PI * 2,
      blue: Math.random() < 0.22,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reduce
          ? s.base + s.amp * 0.5
          : s.base + s.amp * Math.sin(t * 0.001 * s.speed + s.phase);
        ctx.globalAlpha = twinkle < 0 ? 0 : twinkle > 1 ? 1 : twinkle;
        ctx.fillStyle = s.blue ? '#85b6ff' : '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    let raf = 0;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduce && !raf) {
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default Starfield;
