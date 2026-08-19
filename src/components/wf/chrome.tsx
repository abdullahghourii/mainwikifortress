import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "How It Works", href: "#principles" },
  { label: "Our Process", href: "#process" },
  { label: "Eligibility", href: "#criteria" },
  { label: "EVIDENCE™", href: "#evidence" },
  { label: "Case Studies", href: "#cases" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", closeDesktopMenu);
    return () => window.removeEventListener("resize", closeDesktopMenu);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500",
        scrolled || menuOpen
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <Link
          to="/"
          hash="top"
          aria-label="WikiFortress home"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="WikiFortress mark"
            className="h-10 w-auto max-w-[82px] object-contain sm:h-11 sm:max-w-[90px] xl:h-12 xl:max-w-[96px]"
          />
          <span className="hidden whitespace-nowrap font-display text-[1.05rem] leading-none tracking-[-0.02em] text-foreground sm:inline xl:text-[1.15rem]">
            WikiFortress
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to="/"
              hash={item.href.slice(1)}
              className="whitespace-nowrap text-[0.78rem] font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground 2xl:text-[0.8125rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/request-evaluation"
            className="hidden bg-accent px-4 py-3 text-[0.7rem] tracking-[0.13em] whitespace-nowrap uppercase text-accent-foreground transition-colors hover:bg-ochre sm:inline-flex lg:px-5 lg:text-[0.75rem]"
          >
            Request My Evaluation
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 xl:hidden",
          menuOpen ? "max-h-[620px] opacity-100" : "max-h-0 border-t-transparent opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-6 lg:px-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to="/"
              hash={item.href.slice(1)}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border/70 px-2 py-3 text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/request-evaluation"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex justify-center bg-accent px-5 py-3 text-[0.75rem] tracking-[0.14em] uppercase text-accent-foreground transition-colors hover:bg-ochre sm:hidden"
          >
            Request My Evaluation
          </Link>
        </nav>
      </div>
    </header>
  );
}

const FOOTER_NAV: Array<{ label: string; href: string }> = [
  { label: "Home", href: "#top" },
  { label: "How Wikipedia Thinks", href: "#principles" },
  { label: "Our Process", href: "#process" },
  { label: "The EVIDENCE™ Framework", href: "#evidence" },
  { label: "Eligibility Criteria", href: "#criteria" },
  { label: "Profile Comparison", href: "#comparison" },
  { label: "The People We Advise", href: "#advise" },
  { label: "Case Studies", href: "#cases" },
  { label: "Editorial Team", href: "#team" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "Knowledge Center", href: "#knowledge" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Request My Evaluation", href: "/request-evaluation" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary px-6 py-24 text-primary-foreground md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="WikiFortress"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <div className="mt-8 max-w-xl space-y-4 text-[0.9375rem] leading-[1.85] text-primary-foreground/80">
              <p>
                WikiFortress is an independent advisory firm dedicated to helping accomplished
                professionals understand Wikipedia eligibility through evidence, education, and
                objective evaluation.
              </p>
              <p>
                We don't measure success by the number of articles created. We measure it by the
                number of professionals who leave our conversations better informed than when they
                arrived.
              </p>
              <p>Because trust is earned through honesty. Not promises.</p>
            </div>
          </div>
          <div>
            <div className="eyebrow text-primary-foreground/50">Navigation</div>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <Link
                      to="/"
                      hash={item.href.slice(1)}
                      className="text-[0.9375rem] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      to="/request-evaluation"
                      className="text-[0.9375rem] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div className="font-display text-2xl leading-[1.5] md:text-[1.75rem]">
              Recognition cannot be manufactured.
              <br />
              Credibility cannot be rushed.
              <br />
              Trust cannot be claimed.
              <br />
              <span className="italic text-primary-foreground/60">Each must be earned.</span>
            </div>
            <div className="text-[0.9375rem] leading-[1.8] font-light text-primary-foreground/60">
              <p>
                At WikiFortress, every recommendation begins with evidence and ends with honest
                advice.
              </p>
              <p className="eyebrow mt-6 text-primary-foreground/50">Truth Before Transaction</p>
            </div>
          </div>
          <p className="eyebrow mt-12 text-primary-foreground/35">
            © {new Date().getFullYear()} WikiFortress — Independent Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
