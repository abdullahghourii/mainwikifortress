import { useState } from "react";
import { cn } from "@/lib/utils";
import { CtaBand, Display, Lede, Section } from "./primitives";

type Criterion = {
  code: string;
  title: string;
  question: string;
  scale: [string, string, string];
  detail: string;
  signals: string[];
};

const CRITERIA: Criterion[] = [
  {
    code: "01",
    title: "Independent Coverage",
    question: "Do credible third party sources discuss the person substantially?",
    scale: ["Strong", "Moderate", "Limited"],
    detail:
      "Coverage written by people with no connection to you or your organisation carries the most weight. Press releases, contributed columns and company announcements do not count, regardless of where they appear.",
    signals: [
      "Independent features or profiles",
      "Interviews conducted by journalists",
      "Coverage across more than one outlet",
    ],
  },
  {
    code: "02",
    title: "Source Quality",
    question: "Are the available sources reliable and editorially independent?",
    scale: ["Strong", "Moderate", "Limited"],
    detail:
      "A single publication with experienced editors and fact checking often contributes more than dozens of low oversight websites. Editorial standards matter more than volume.",
    signals: [
      "Established editorial oversight",
      "Named authors and accountability",
      "No paid or syndicated placement",
    ],
  },
  {
    code: "03",
    title: "Depth Of Coverage",
    question: "Are sources merely mentioning the person, or actually discussing their work?",
    scale: ["Substantial", "Some", "Minimal"],
    detail:
      "Editors look for meaningful discussion — analysis, context, and detail. A name appearing in a list or a quote inside an unrelated article rarely contributes to eligibility.",
    signals: [
      "Multiple paragraphs about the subject",
      "Analysis of the work, not just the title",
      "Context that explains why it mattered",
    ],
  },
  {
    code: "04",
    title: "Public Significance",
    question:
      "Is there documented significance beyond the person's own organisation or promotional material?",
    scale: ["Strong", "Unclear", "Weak"],
    detail:
      "Wikipedia documents lasting public significance rather than commercial success or temporary visibility. The record should show impact recognised outside your own sphere.",
    signals: [
      "Independent recognition or awards",
      "Sustained coverage over time",
      "Influence acknowledged by third parties",
    ],
  },
];

export function EligibilityCriteria() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="criteria" index="Section 04b" label="What Makes Someone Eligible">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <Display>Eligibility Is Assessed Across Dimensions. Not A Single Achievement.</Display>
        <Lede>
          <p>
            No one criterion decides the outcome. Editors read the public record as a whole and ask
            whether it holds together.
          </p>
          <p className="text-foreground">
            Select any dimension below to see what a strong record actually looks like.
          </p>
        </Lede>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
        {CRITERIA.map((c, i) => {
          const isOpen = open === i;
          return (
            <button
              key={c.code}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                "group bg-background p-8 text-left transition-colors md:p-10",
                isOpen && "bg-card",
              )}
            >
              <div className="flex items-baseline justify-between gap-6">
                <span className="eyebrow text-accent">{c.code}</span>
                <span className="eyebrow transition-colors group-hover:text-accent">
                  {isOpen ? "Close −" : "Detail +"}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[1.75rem] leading-tight">{c.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">{c.question}</p>

              <div className="mt-6 flex items-center gap-3">
                {c.scale.map((s, si) => (
                  <span
                    key={s}
                    className={cn(
                      "border px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.16em] uppercase",
                      si === 0
                        ? "border-accent text-accent"
                        : "border-border text-foreground/55",
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div
                className={cn(
                  "grid transition-all duration-500",
                  isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-border pt-5 text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {c.detail}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {c.signals.map((sig) => (
                      <li key={sig} className="flex gap-3 text-[0.9375rem]">
                        <span className="font-mono text-xs text-accent">—</span>
                        {sig}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <CtaBand
        prompt="Not sure how your public record scores across these four dimensions?"
        action="Find Out Where You Stand"
      />
    </Section>
  );
}
