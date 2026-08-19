import { useState } from "react";
import { cn } from "@/lib/utils";
import { CtaBand, Display, Lede, PullQuote, Section, Mark } from "./primitives";

const READINESS: Array<[string, number]> = [
  ["Independent Coverage", 4],
  ["Source Quality", 5],
  ["Depth Of Coverage", 3],
  ["Public Significance", 4],
];

export function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative overflow-hidden px-6 pt-16 pb-24 md:px-12 md:pt-28 md:pb-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full border border-accent/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[22rem] w-[22rem] rounded-full border border-ochre/20"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="eyebrow reveal flex items-center gap-3 text-accent">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Section 01 — Wikipedia Eligibility Advisory
        </div>
        <Display
          as="h1"
          className="reveal mt-8 max-w-4xl text-[2.75rem] leading-[1.04] md:text-[5.25rem] md:leading-[0.98]"
        >
          Recognition Is Earned.
          <br />
          <span className="italic text-accent">Your Wikipedia Presence</span>
          <br />
          Should Be Too.
        </Display>

        <p className="reveal mt-8 max-w-2xl border-l-2 border-accent pl-6 font-display text-[1.35rem] leading-snug not-italic md:text-[1.65rem]">
          Before you pursue Wikipedia, find out whether the evidence actually supports it.
        </p>


        <div className="mt-16 grid gap-14 border-t border-border pt-14 md:grid-cols-[1.15fr_1fr] md:gap-24">
          <Lede className="reveal">
            <p>
              Thousands of accomplished professionals search for the same answer every month.
              <span className="mt-6 block font-display text-2xl not-italic text-foreground md:text-[1.75rem]">
                "Do I qualify for Wikipedia?"
              </span>
              <span className="mt-6 block">It seems like a simple question. It isn't.</span>
            </p>
            <p>
              Some people spend decades building remarkable careers and never receive a Wikipedia
              article. Others qualify much earlier than anyone would expect.
            </p>
            <p>
              Because Wikipedia does not measure success. It measures independently documented
              significance. Understanding the difference changes everything.
            </p>
            <p>
              Before you spend money. Before you hire an agency. Before anyone starts writing. You
              deserve to know where your public profile actually stands.
            </p>
            <p className="text-foreground">
              That's why WikiFortress exists. We help accomplished professionals evaluate their
              eligibility using evidence, independent sources, and Wikipedia's editorial standards
              before recommending any next step.
            </p>
            <p className="eyebrow">No assumptions · No pressure · No unrealistic promises</p>
          </Lede>

          <div className="reveal space-y-10">
            <div className="border border-border bg-card">
              <div className="flex items-baseline justify-between border-b border-border px-8 py-5">
                <span className="eyebrow">Evidence Assessment</span>
                <span className="eyebrow text-muted-foreground">Illustrative</span>
              </div>
              <dl className="px-8 py-7">
                {READINESS.map(([label, value]) => (
                  <div key={label} className="border-b border-border/70 py-4 last:border-b-0">
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="text-[0.9375rem] font-light">{label}</dt>
                      <dd className="font-mono text-[0.75rem] tracking-[0.12em] text-muted-foreground">
                        {value}/5
                      </dd>
                    </div>
                    <div className="mt-3 h-px w-full bg-border">
                      <div
                        className="h-px bg-accent"
                        style={{ width: `${(value / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </dl>
              <p className="border-t border-border px-8 py-5 text-[0.8125rem] leading-relaxed text-foreground/75">
                Every dimension is assessed against independent, verifiable sources — never self
                published material.
              </p>
            </div>

            <div className="border border-border border-t-2 border-t-accent bg-card p-8 shadow-[0_1px_0_0_var(--rule)]">
              <div className="eyebrow text-accent">Primary</div>
              <h2 className="mt-4 font-display text-[1.75rem] leading-tight">
                Find Out Where You Stand
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-foreground/75">
                Book a confidential consultation and receive an evidence based evaluation of your
                public profile.
              </p>
              <a
                href="/request-evaluation"
                className="mt-7 inline-block w-full bg-accent px-6 py-4 text-center text-[0.75rem] tracking-[0.16em] uppercase text-accent-foreground transition-colors hover:bg-ochre"
              >
                Schedule My Consultation
              </a>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-display text-xl">Learn How Wikipedia Actually Works</h3>
              <p className="mt-2 text-[0.9375rem] text-foreground/75">
                Understand the standards before making any decisions.
              </p>
              <a
                href="#principles"
                className="mt-4 inline-block border-b-2 border-ochre pb-1 text-[0.8125rem] tracking-[0.12em] uppercase transition-colors hover:text-ochre"
              >
                Read the standards
              </a>
            </div>


            <div className="border-l-2 border-accent pl-6">
              <div className="font-display text-2xl">Truth Before Transaction.</div>
              <p className="mt-2 text-[0.9375rem] text-foreground/75">
                If the right answer is "not yet," that's exactly what we'll tell you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CREDIBILITY = [
  ["01", "Honest Eligibility Assessments"],
  ["02", "Evidence Based Recommendations"],
  ["03", "Educational First Philosophy"],
  ["04", "Long Term Advisory Approach"],
  ["05", "Trusted Across Multiple Industries"],
];

export function CredibilityStrip() {
  return (
    <div className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {CREDIBILITY.map(([n, label]) => (
          <div
            key={n}
            className="border-b border-border px-6 py-8 sm:border-r last:border-r-0 lg:border-b-0 md:px-8"
          >
            <div className="eyebrow text-accent">{n}</div>
            <div className="mt-3 text-[0.9375rem] leading-snug font-light">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MYTHS = [
  {
    myth: "I'm successful, therefore I qualify.",
    reality:
      "Wikipedia evaluates independently documented significance, not personal success.",
  },
  {
    myth: "Awards guarantee a Wikipedia article.",
    reality:
      "Awards may contribute to your public profile. Independent coverage usually matters far more.",
  },
  {
    myth: "More press always means stronger eligibility.",
    reality:
      "Five exceptional publications often outweigh fifty weak ones. Quality almost always beats quantity.",
  },
  {
    myth: "A Wikipedia company decides who gets published.",
    reality:
      "Wikipedia editors make independent editorial decisions. No consultant controls that process.",
  },
  {
    myth: "You can buy a Wikipedia article.",
    reality:
      "You can hire professional guidance. You cannot ethically purchase editorial approval.",
  },
];

export function Myths() {
  return (
    <Section id="myths" index="Section 02" label="Five Things Most People Get Wrong">
      <Display className="max-w-3xl">
        Before You Ask Whether You Qualify — Make Sure You're Asking The Right Question.
      </Display>

      <div className="mt-12 border-t border-border">
        {MYTHS.map((item, i) => (
          <div
            key={item.myth}
            className="grid gap-6 border-b border-border py-8 md:grid-cols-[4rem_1fr_1fr] md:gap-10"
          >
            <div className="eyebrow pt-1">{String(i + 1).padStart(2, "0")}</div>
            <div className="flex gap-4">
              <Mark type="x" />
              <div>
                <div className="eyebrow mb-2">Myth</div>
                <p className="text-lg leading-snug text-foreground/75 line-through decoration-accent/50 decoration-1">
                  {item.myth}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mark type="check" />
              <div>
                <div className="eyebrow mb-2">Reality</div>
                <p className="text-lg leading-snug">{item.reality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lede className="mt-10 max-w-2xl">
        <p>
          Most people arrive believing Wikipedia works one way. Most leave discovering it works very
          differently.
        </p>
        <p className="text-foreground">
          That understanding is where every responsible conversation should begin.
        </p>
      </Lede>
    </Section>
  );
}

const PROFILES = [
  {
    key: "A" as const,
    role: "Founder",
    summary: "Founder, $100M company. No meaningful independent coverage.",
    points: [
      "Built a company valued at $100 million.",
      "No independent interviews.",
      "No substantial media coverage.",
      "Limited public recognition outside the business.",
    ],
  },
  {
    key: "B" as const,
    role: "University Professor",
    summary: "Professor. BBC interview, international research, independent coverage.",
    points: [
      "Moderately known professionally.",
      "Interviewed by BBC.",
      "Research cited internationally.",
      "Featured in respected independent publications.",
    ],
  },
];

export function ProfileComparison() {
  const [choice, setChoice] = useState<"A" | "B" | null>(null);

  return (
    <Section
      id="comparison"
      index="Section 03"
      label="Success Does Not Automatically Create Notability"
      tone="card"
    >
      <Display className="max-w-2xl">Which Profile Is More Likely To Qualify?</Display>
      <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-foreground/75">
        Choose the profile you believe Wikipedia would consider eligible. The answer is revealed
        immediately.
      </p>

      <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
        {PROFILES.map((p) => {
          const selected = choice === p.key;
          const isAnswer = p.key === "B";
          return (
            <button
              key={p.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setChoice(p.key)}
              className={cn(
                "bg-card p-10 text-left transition-colors md:p-12",
                choice === null && "hover:bg-background",
                choice !== null && isAnswer && "bg-background",
                choice !== null && !isAnswer && "opacity-70",
              )}
            >
              <div className="flex items-baseline justify-between">
                <span className={cn("eyebrow", selected && "text-accent")}>Profile {p.key}</span>
                {choice !== null && (
                  <span className={cn("eyebrow", isAnswer ? "text-accent" : "text-muted-foreground")}>
                    {isAnswer ? "Stronger case" : "Weaker case"}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-3xl">{p.role}</h3>
              <ul className="mt-8 space-y-3 text-[0.9375rem] text-foreground/75">
                {p.points.map((pt, i) => (
                  <li
                    key={pt}
                    className={cn(i < p.points.length - 1 && "border-b border-border pb-3")}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
              {choice === null && (
                <span className="eyebrow mt-8 inline-block text-accent">Select this profile</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="eyebrow">{choice === null ? "Make A Selection" : "The Answer"}</div>
        {choice === null ? (
          <Lede>
            <p>
              Most professionals instinctively choose Profile A. The evidence usually points
              elsewhere.
            </p>
          </Lede>
        ) : (
          <div className="border-l-2 border-accent pl-6">
            <div className="eyebrow text-accent">
              {choice === "B" ? "Correct" : "Most people choose Profile A"}
            </div>
            <p className="mt-3 font-display text-3xl leading-tight">
              Profile B is more likely to qualify.
            </p>
            <Lede className="mt-5">
              <p>
                Wikipedia notability is not assessed through wealth, job title, or commercial
                success. It is assessed through significant, independent coverage.
              </p>
              <p>
                Success and Wikipedia eligibility frequently overlap. They are not the same thing.
                That single misunderstanding explains why so many professionals receive conflicting
                advice.
              </p>
            </Lede>
            <button
              type="button"
              onClick={() => setChoice(null)}
              className="eyebrow mt-6 border-b border-foreground pb-1"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <div className="mt-20">
        <PullQuote>
          "The question isn't whether you've been successful. The question is whether your success
          has been <span className="not-italic">independently documented</span>."
        </PullQuote>
      </div>
    </Section>
  );
}

const PRINCIPLES = [
  {
    name: "Independent Recognition",
    body: [
      "Wikipedia places significant value on what independent organisations say about you.",
      "Not your website. Not your résumé. Not your company profile.",
      "Independent journalists. Independent publications. Independent institutions. Independent recognition carries far greater weight than self published information.",
    ],
  },
  {
    name: "Reliable Sources",
    body: [
      "Not every publication has the same editorial value.",
      "One respected publication with strong editorial standards can outweigh dozens of websites that simply repeat the same information.",
      "Wikipedia evaluates evidence. The strength of that evidence depends heavily on where it comes from.",
    ],
  },
  {
    name: "Significant Coverage",
    body: [
      "Being mentioned isn't the same as being discussed.",
      "Announcements. Award lists. Conference programmes. These rarely establish notability on their own.",
      "Meaningful profiles. Thoughtful interviews. In depth features. These create the context editors are looking for.",
    ],
  },
  {
    name: "Neutrality",
    body: [
      "Wikipedia doesn't exist to promote people. It exists to document them.",
      "The strongest articles explain. They don't advertise.",
    ],
  },
  {
    name: "Verifiability",
    body: [
      "Everything eventually comes back to one question. Can an independent reader verify this information?",
      "If the answer is yes, the evidence becomes stronger. If the answer is uncertain, so does the recommendation.",
    ],
  },
];

export function Principles() {
  return (
    <Section id="principles" index="Section 04" label="How Wikipedia Actually Thinks" tone="ink">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-24">
        <Display className="text-primary-foreground">
          Most conversations begin with the wrong question.
        </Display>
        <div className="space-y-4 text-[1.0625rem] leading-[1.85] text-primary-foreground/80">
          <p>"Can someone create a Wikipedia article for me?"</p>
          <p>That's understandable. It's also the wrong place to begin.</p>
          <p className="font-display text-2xl not-italic text-primary-foreground md:text-[1.75rem]">
            Would independent Wikipedia editors consider the available evidence sufficient?
          </p>
          <p>Everything that follows depends on the answer.</p>
        </div>
      </div>

      <ol className="mt-14 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-5">
        {[
          "Achievement",
          "Independent Coverage",
          "Significant Coverage",
          "Editorial Evaluation",
          "Eligibility",
        ].map((step, i) => (
          <li key={step} className="bg-primary p-7">
            <div className="eyebrow text-ochre">Step {String(i + 1).padStart(2, "0")}</div>
            <div className="mt-4 font-display text-[1.35rem] leading-tight text-primary-foreground">
              {step}
            </div>
            <div
              aria-hidden
              className="mt-6 h-px w-full bg-primary-foreground/20 last:hidden"
            />
          </li>
        ))}
      </ol>


      <div className="mt-14 border-t border-primary-foreground/15">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.name}
            className="grid gap-6 border-b border-primary-foreground/15 py-8 md:grid-cols-[6rem_1fr_1.4fr] md:gap-12"
          >
            <div className="eyebrow text-primary-foreground/45">
              Principle {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-3xl text-primary-foreground">{p.name}</h3>
            <div className="space-y-3 text-[0.9375rem] leading-[1.85] text-primary-foreground/80">
              {p.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl space-y-4 text-[1.0625rem] leading-[1.85] text-primary-foreground/80">
        <p>
          Understanding how Wikipedia evaluates public profiles is only half of the equation. The
          next question is even more important — how do we evaluate yours?
        </p>
        <p className="text-primary-foreground">
          Unlike most firms, we don't rely on opinions. We rely on a structured methodology
          developed specifically for assessing Wikipedia readiness.
        </p>
      </div>

      <CtaBand
        tone="ink"
        prompt="Not sure where you stand?"
        action="Find Out Where You Stand"
      />
    </Section>
  );
}
