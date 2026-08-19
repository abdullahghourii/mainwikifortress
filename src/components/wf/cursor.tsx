import { useEffect, useRef, useState } from "react";

/** Round follower cursor: a solid dot plus a lagging ring that reacts to interactive elements. */
export function RoundCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("wf-has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest?.("a, button, input, textarea, select, [role='button']");
      const el = ring.current;
      if (el) {
        el.style.width = interactive ? "56px" : "34px";
        el.style.height = interactive ? "56px" : "34px";
        el.style.margin = interactive ? "-28px 0 0 -28px" : "-17px 0 0 -17px";
        el.style.borderColor = interactive ? "var(--ochre)" : "var(--accent)";
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("wf-has-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} aria-hidden className="wf-cursor-dot" />
      <div ref={ring} aria-hidden className="wf-cursor-ring" />
    </>
  );
}
