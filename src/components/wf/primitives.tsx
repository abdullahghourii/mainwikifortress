import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  index,
  label,
  children,
  className,
  tone = "paper",
}: {
  id?: string;
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "card";
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "reveal-on-scroll scroll-mt-24 border-t border-border px-6 py-16 md:px-12 md:py-20",
        tone === "ink" && "bg-primary text-primary-foreground border-transparent",
        tone === "card" && "bg-card",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        {(index || label) && (
          <div className="mb-10 flex items-baseline gap-6 border-b border-border/70 pb-4">
            {index && (
              <span
                className={cn(
                  "eyebrow relative pl-4 text-accent before:absolute before:top-1/2 before:left-0 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-accent",
                  tone === "ink" && "text-ochre before:bg-ochre",
                )}
              >
                {index}
              </span>
            )}
            {label && (
              <span
                className={cn("eyebrow", tone === "ink" && "text-primary-foreground/60")}
              >
                {label}
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );

}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-[2.35rem] leading-[1.08] md:text-6xl md:leading-[1.05]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "space-y-4 text-[1.0625rem] leading-[1.8] text-foreground/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="mx-auto max-w-4xl border-y border-border py-14 text-center">
      <blockquote className="font-display text-[1.85rem] leading-[1.35] italic md:text-[2.6rem] md:leading-[1.25]">
        {children}
      </blockquote>
      {cite && <figcaption className="eyebrow mt-6">{cite}</figcaption>}
    </figure>
  );
}

export function Mark({ type }: { type: "x" | "check" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-[0.7rem]",
        type === "x"
          ? "border-accent/40 text-accent"
          : "border-foreground/25 text-foreground",
      )}
    >
      {type === "x" ? "—" : "✓"}
    </span>
  );
}

/**
 * Horizontal, scroll-snapped card rail with previous / next controls.
 * Keeps long card lists compact without hiding any content.
 */
export function Carousel({
  children,
  label,
  itemClass = "w-[86vw] max-w-[30rem] md:w-[32rem]",
  tone = "paper",
}: {
  children: ReactNode[];
  label: string;
  itemClass?: string;
  tone?: "paper" | "ink";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={ref}
        data-lenis-prevent
        aria-label={label}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className={cn("shrink-0 snap-start", itemClass)}>
            {child}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "mt-6 flex items-center gap-4 border-t pt-5",
          tone === "ink" ? "border-primary-foreground/20" : "border-border",
        )}
      >
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label={`Previous — ${label}`}
          className={cn(
            "eyebrow border px-4 py-2 transition-colors",
            tone === "ink"
              ? "border-primary-foreground/30 text-primary-foreground/70 hover:border-primary-foreground hover:text-primary-foreground"
              : "border-border hover:border-accent hover:text-accent",
          )}
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label={`Next — ${label}`}
          className={cn(
            "eyebrow border px-4 py-2 transition-colors",
            tone === "ink"
              ? "border-primary-foreground/30 text-primary-foreground/70 hover:border-primary-foreground hover:text-primary-foreground"
              : "border-border hover:border-accent hover:text-accent",
          )}
        >
          Next →
        </button>
        <span
          className={cn(
            "eyebrow ml-auto hidden md:block",
            tone === "ink" && "text-primary-foreground/45",
          )}
        >
          {children.length} entries · swipe or use arrows
        </span>
      </div>
    </div>
  );
}

/** Inline, low-pressure call to action placed at natural decision points. */
export function CtaBand({
  prompt,
  action,
  href = "/request-evaluation",
  tone = "paper",
  className,
}: {
  prompt: string;
  action: string;
  href?: string;
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-14 flex flex-col gap-5 border-t pt-8 md:flex-row md:items-center md:justify-between",
        tone === "ink" ? "border-primary-foreground/20" : "border-border",
        className,
      )}
    >
      <p
        className={cn(
          "font-display text-[1.5rem] leading-snug md:text-[1.75rem]",
          tone === "ink" && "text-primary-foreground",
        )}
      >
        {prompt}
      </p>
      <a
        href={href}
        className={cn(
          "shrink-0 border px-6 py-3 text-[0.75rem] tracking-[0.14em] uppercase transition-colors",
          tone === "ink"
            ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            : "border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent",
        )}
      >
        {action} →
      </a>
    </div>
  );
}
