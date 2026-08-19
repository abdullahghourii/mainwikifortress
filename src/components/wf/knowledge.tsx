import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Display, Lede, PullQuote, Section } from "./primitives";
import { DELIVERABLES } from "./evaluation-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FEATURED = {
  kicker: "Featured Guide",
  title: "Do I Actually Qualify For Wikipedia?",
  body: "A complete, evidence based walkthrough of how independent editors decide whether a professional profile meets Wikipedia's notability standard — and what separates achievement from documented significance.",
  meta: "Editorial Guide · 14 minute read",
};

type Article = {
  title: string;
  body: string;
  meta: string;
  group: "Most Read" | "Editor's Picks" | "Latest Insights";
};

const ARTICLES: Article[] = [
  {
    title: "What Makes Someone Notable?",
    body: "A complete guide to how editors evaluate public significance.",
    meta: "Notability · 9 min",
    group: "Most Read",
  },
  {
    title: "Why Wikipedia Articles Get Deleted",
    body: "The most common reasons articles fail and how they can often be avoided.",
    meta: "Editorial Review · 11 min",
    group: "Most Read",
  },
  {
    title: "What Counts As An Independent Source?",
    body: "Learn why independent journalism often matters more than self published information.",
    meta: "Sourcing · 8 min",
    group: "Most Read",
  },
  {
    title: "Reliable Sources Explained",
    body: "Discover how editorial quality influences Wikipedia decisions.",
    meta: "Sourcing · 10 min",
    group: "Editor's Picks",
  },
  {
    title: "Can I Write My Own Wikipedia Article?",
    body: "Understand the opportunities, limitations, and conflict of interest considerations before making any decisions.",
    meta: "Conflict Of Interest · 7 min",
    group: "Editor's Picks",
  },
  {
    title: "Significant Coverage Versus Passing Mentions",
    body: "Why five in depth features can outweigh fifty announcements.",
    meta: "Depth Of Coverage · 6 min",
    group: "Editor's Picks",
  },
  {
    title: "How Editors Assess Academics And Researchers",
    body: "Citation records, independent commentary, and where academic profiles usually stand.",
    meta: "Profiles · 12 min",
    group: "Latest Insights",
  },
  {
    title: "Founders, Funding Announcements And Notability",
    body: "Why funding rounds rarely establish encyclopedic significance on their own.",
    meta: "Profiles · 9 min",
    group: "Latest Insights",
  },
  {
    title: "Reading A Wikipedia Deletion Discussion",
    body: "How to interpret the arguments editors actually make when an article is challenged.",
    meta: "Editorial Review · 10 min",
    group: "Latest Insights",
  },
];

const GROUPS: Article["group"][] = ["Most Read", "Editor's Picks", "Latest Insights"];

const MISCONCEPTIONS = [
  { myth: "Revenue creates notability.", reality: "Independent recognition creates notability." },
  {
    myth: "The more articles about you, the better.",
    reality: "Editorial quality matters far more than quantity.",
  },
  {
    myth: "A Wikipedia consultant controls the outcome.",
    reality: "Independent volunteer editors make every editorial decision.",
  },
  { myth: "Wikipedia is a marketing platform.", reality: "Wikipedia is an encyclopedia." },
];

function MisconceptionCard({ myth, reality }: { myth: string; reality: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="group flex min-h-52 flex-col justify-between bg-background p-8 text-left transition-colors hover:bg-card"
    >
      <div>
        <div className="eyebrow">{open ? "Reality" : "Myth"}</div>
        <p
          className={cn(
            "mt-4 font-display text-2xl leading-tight transition-colors",
            open ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {open ? reality : myth}
        </p>
      </div>
      <span className="eyebrow mt-8 text-accent">{open ? "Show myth" : "Reveal reality"}</span>
    </button>
  );
}

export function KnowledgeCenter() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ARTICLES;
    return ARTICLES.filter(
      (a) => a.title.toLowerCase().includes(q) || a.body.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Section id="knowledge" index="Section 10" label="The WikiFortress Knowledge Center" tone="card">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>The Internet's Most Trusted Resource For Understanding Wikipedia.</Display>
        <Lede>
          <p>
            The average person searching for information about Wikipedia has one problem. They don't
            know which advice to trust.
          </p>
          <p>
            One website says anyone can get an article. Another says almost nobody qualifies. Some
            oversimplify the process. Others intentionally create confusion.
          </p>
          <p className="text-foreground">
            We believe professionals deserve a place where complex questions receive thoughtful,
            evidence based answers. Not because it helps us sell — because education is part of our
            responsibility.
          </p>
        </Lede>
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <label htmlFor="kb-search" className="eyebrow">
          Search The Knowledge Center
        </label>
        <input
          id="kb-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Wikipedia eligibility, notability, reliable sources..."
          className="mt-4 w-full border-b border-foreground bg-transparent pb-4 font-display text-2xl outline-none placeholder:text-muted-foreground/60 focus:border-accent md:text-3xl"
        />
      </div>

      {!query.trim() && (
        <a
          href="/request-evaluation"
          className="group mt-12 grid gap-px border border-border bg-border md:grid-cols-[1.4fr_1fr]"
        >
          <div className="bg-background p-10 md:p-14">
            <div className="eyebrow text-accent">{FEATURED.kicker}</div>
            <h3 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] group-hover:text-accent md:text-5xl">
              {FEATURED.title}
            </h3>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.85] text-foreground/75">
              {FEATURED.body}
            </p>
            <span className="eyebrow mt-10 inline-block border-b border-foreground pb-1">
              Discuss this topic in a consultation
            </span>
          </div>
          <div className="flex flex-col justify-between bg-card p-10 md:p-12">
            <div className="eyebrow">{FEATURED.meta}</div>
            <dl className="mt-10 space-y-6">
              {[
                ["Articles published", "24"],
                ["Editorial reviewers", "06"],
                ["Topics covered", "09"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 font-display text-4xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </a>
      )}

      <p className="mt-6 text-[0.9375rem] leading-[1.8] text-muted-foreground">
        These topics are covered in our written guides, which are being published progressively.
        Until then, each one is addressed directly in a consultation.
      </p>

      {query.trim() ? (
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {results.map((a) => (
            <div key={a.title} className="bg-card p-8 md:p-10">
              <div className="eyebrow">{a.meta}</div>
              <h3 className="mt-4 font-display text-2xl leading-tight">{a.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                {a.body}
              </p>
              <Link
                to="/request-evaluation"
                className="eyebrow mt-6 inline-block border-b border-accent pb-1 text-accent"
              >
                Ask us about this
              </Link>
            </div>
          ))}
          {results.length === 0 && (
            <p className="bg-card p-10 text-[0.9375rem] text-foreground/75 md:col-span-3">
              No resources match that search yet. Ask us directly during a consultation.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-16 space-y-16">
          {GROUPS.map((group) => (
            <div key={group}>
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="font-display text-3xl">{group}</h3>
                <span className="eyebrow text-muted-foreground">
                  {ARTICLES.filter((a) => a.group === group).length} articles
                </span>
              </div>
              <div className="mt-px grid gap-px bg-border md:grid-cols-3">
                {ARTICLES.filter((a) => a.group === group).map((a) => (
                  <div key={a.title} className="bg-card p-8 md:p-10">
                    <div className="eyebrow text-accent">{a.meta}</div>
                    <h4 className="mt-4 font-display text-2xl leading-tight">{a.title}</h4>
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                      {a.body}
                    </p>
                    <Link
                      to="/request-evaluation"
                      className="eyebrow mt-6 inline-block border-b border-accent pb-1 text-accent"
                    >
                      Ask us about this
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}


      <h3 className="mt-16 font-display text-3xl">Common Misconceptions</h3>
      <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {MISCONCEPTIONS.map((m) => (
          <MisconceptionCard key={m.myth} {...m} />
        ))}
      </div>

      <Lede className="mt-16 max-w-2xl">
        <p>
          We don't want visitors to leave with more questions than they arrived with. We want them
          to leave with better questions.
        </p>
        <p className="text-foreground">
          Because better questions lead to better decisions. And better decisions build stronger
          professional reputations.
        </p>
      </Lede>
    </Section>
  );
}

export const FAQ = [
  {
    q: "Can you guarantee my article will remain published?",
    short: "No — and that's the most honest answer anyone can give.",
    a: [
      "Wikipedia evolves constantly. Articles are reviewed, improved, challenged, updated, and sometimes deleted as new information becomes available.",
      "What we can confidently stand behind is our methodology. Our research. Our evaluation. Our strategic advice. And our commitment to helping clients make informed decisions before moving forward.",
    ],
  },
  {
    q: "What if I don't qualify today?",
    short: "Then we'll tell you. Professionally. Respectfully. Without pressure.",
    a: [
      "Some of the strongest client relationships we've built began with the recommendation not to proceed. Instead, we explained why, identified what was missing, recommended practical next steps, and encouraged patience.",
      "Months later, many returned with stronger public profiles and significantly better outcomes. Sometimes waiting isn't a setback. It's the smartest strategy available.",
    ],
  },
  {
    q: "Who do you typically advise?",
    short: "Professionals and organisations whose careers have created meaningful public impact.",
    a: [
      "That includes professors, researchers, scientists, authors, physicians, entrepreneurs, executives, public figures, and organisations.",
      "Every profession is different. Our evaluation process isn't. Evidence always comes first.",
    ],
  },
  {
    q: "I already have a Wikipedia article. Can you still help?",
    short: "Yes.",
    a: [
      "Many existing articles benefit from professional guidance. Depending on your circumstances, we may review the article's sourcing, explain editorial concerns, identify opportunities for improvement, or advise on long term maintenance strategies.",
      "Every recommendation is based on publicly available evidence and Wikipedia's editorial expectations.",
    ],
  },
  {
    q: "Why should I speak with WikiFortress before making any decisions?",
    short: "Because the most expensive mistake usually happens before anyone starts writing.",
    a: [
      "Many professionals pursue Wikipedia assuming they already qualify. Others delay unnecessarily because they underestimate the strength of their public profile.",
      "An objective evaluation removes uncertainty. Whether the recommendation is to proceed, wait, or strengthen your public profile, you'll leave with clarity rather than assumptions. That's the foundation of every good decision.",
    ],
  },
];

export function Faq() {
  return (
    <Section id="faq" index="Section 11" label="Frequently Asked Questions">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>Honest Answers To The Questions Professionals Ask Us Every Day.</Display>
        <Lede>
          <p>
            Wikipedia is one of the most recognised websites in the world. It's also one of the most
            misunderstood.
          </p>
          <p>
            Every week, we speak with accomplished professionals who have been given conflicting
            advice by agencies, online forums, colleagues, or even well meaning friends.
          </p>
          <p className="text-foreground">
            Our goal isn't to overwhelm you with policy. It's to give you clear, practical answers
            that help you make informed decisions.
          </p>
        </Lede>
      </div>

      <Accordion type="single" collapsible className="mt-16 border-t border-border">
        {FAQ.map((item, i) => (
          <AccordionItem key={item.q} value={item.q} className="border-b border-border">
            <AccordionTrigger className="gap-8 py-8 text-left hover:no-underline">
              <span className="flex flex-1 items-baseline gap-6">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[1.5rem] leading-tight md:text-[1.85rem]">
                  {item.q}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-10">
              <div className="md:pl-[4.5rem]">
                <div className="eyebrow">Short Answer</div>
                <p className="mt-2 font-display text-2xl">{item.short}</p>
                <div className="mt-6 space-y-4 text-[0.9375rem] leading-[1.85] text-foreground/75">
                  {item.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Lede className="mt-14 max-w-2xl">
        <p>Questions deserve thoughtful answers. Not rehearsed sales scripts.</p>
        <p className="text-foreground">
          If your question isn't answered here, we'd be happy to discuss it during a confidential
          consultation.
        </p>
      </Lede>
    </Section>
  );
}

export function FinalCta() {


  return (
    <Section id="contact" index="Section 12" label="Your Reputation Deserves An Honest Evaluation">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>Before You Pursue Wikipedia, Understand Where You Truly Stand.</Display>
        <Lede>
          <p>
            Behind every public profile is a lifetime of work. Years of dedication. Research.
            Leadership. Innovation. Teaching. Business. Creativity. Public service.
          </p>
          <p>
            Every achievement contributes to a larger story. Wikipedia may eventually become part of
            that story. But before anyone discusses writing, publishing, or strategy, one question
            deserves an honest answer.
          </p>
          <p className="font-display text-2xl not-italic text-foreground">
            Does the evidence support pursuing Wikipedia today?
          </p>
          <p>
            Whether the answer is yes, not yet, or wait, you'll leave with something far more
            valuable than a sales pitch. You'll leave with clarity.
          </p>
        </Lede>
      </div>

      <div className="mt-14">
        <PullQuote>
          "The goal of every consultation isn't to create a Wikipedia article. It's to help you make
          the right decision."
        </PullQuote>
      </div>

      <div className="mt-14 border border-border border-t-2 border-t-accent bg-card px-8 py-16 text-center md:px-16 md:py-20">
        <div className="eyebrow text-accent">Before You Pursue Wikipedia</div>
        <h3 className="mx-auto mt-6 max-w-3xl font-display text-[2.5rem] leading-[1.05] md:text-6xl">
          Find Out Where You Actually Stand.
        </h3>
        <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.85] text-foreground/75">
          Receive an evidence based evaluation of your public profile.
        </p>
        <Link
          to="/request-evaluation"
          className="mt-10 inline-block bg-accent px-10 py-5 text-[0.75rem] tracking-[0.16em] uppercase text-accent-foreground transition-colors hover:bg-ochre"
        >
          Request My Evaluation →
        </Link>
        <div className="eyebrow mt-8 text-muted-foreground">Proceed · Strengthen · Wait</div>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-[1fr_1.3fr]">
        <div className="bg-card p-10 md:p-12">
          <h3 className="font-display text-4xl leading-tight">What Happens Next</h3>
          <p className="mt-4 text-[0.9375rem] leading-[1.85] text-foreground/75">
            Book a confidential consultation with a WikiFortress advisor and receive an objective
            evaluation of your public profile.
          </p>

          <div className="eyebrow mt-10 border-b border-border pb-3">What You'll Receive</div>
          <ul className="mt-5 space-y-3">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex gap-4 text-[0.9375rem] font-light">
                <span aria-hidden className="text-accent">
                  ✓
                </span>
                {d}
              </li>
            ))}
          </ul>
          <a
            href="#kb-search"
            className="mt-10 inline-block border-b border-foreground pb-1 text-[0.8125rem] tracking-[0.12em] uppercase"
          >
            Explore The Knowledge Center
          </a>
        </div>

        <div className="bg-background p-10 md:p-12">
          <div className="eyebrow">Start The Conversation</div>
          <h3 className="mt-3 font-display text-3xl leading-tight">
            Tell us about your work, your achievements, and what brings you to WikiFortress.
          </h3>
          <p className="mt-3 text-[0.9375rem] text-foreground/75">
            Every enquiry is personally reviewed before any recommendation is made. The full request
            form takes about three minutes.
          </p>
          <Link
            to="/request-evaluation"
            className="mt-10 inline-block bg-foreground px-8 py-4 text-[0.75rem] tracking-[0.16em] uppercase text-background transition-opacity hover:opacity-85"
          >
            Open The Request Form →
          </Link>
        </div>
      </div>
    </Section>
  );
}
