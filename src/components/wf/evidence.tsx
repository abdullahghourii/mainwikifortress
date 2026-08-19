import { useState } from "react";
import { cn } from "@/lib/utils";
import { CtaBand, Display, Lede, PullQuote, Section } from "./primitives";

const FRAMEWORK = [
  {
    letter: "E",
    name: "Evidence",
    body: "Everything starts here. What publicly available evidence exists? Not opinions. Not assumptions. Evidence. We identify independent publications, notable achievements, credible recognition, and publicly verifiable information that contributes to a stronger understanding of your professional profile.",
  },
  {
    letter: "V",
    name: "Verification",
    body: "Can every important claim be independently verified? Wikipedia is built upon verifiability. If important facts cannot be confirmed through reliable independent sources, they become significantly weaker regardless of how impressive they may be.",
  },
  {
    letter: "I",
    name: "Independence",
    body: "Who is talking about your work? Your website. Your LinkedIn profile. Your company biography. These provide context. They do not establish independent recognition. Wikipedia places far greater value on sources that have no connection to you or your organisation.",
  },
  {
    letter: "D",
    name: "Depth Of Coverage",
    body: "A brief mention is rarely enough. Editors look for meaningful discussion. Has your work been analysed? Profiled? Interviewed? Discussed in detail? Depth creates context. Context creates significance.",
  },
  {
    letter: "E",
    name: "Editorial Quality",
    body: "Every publication is different. A respected publication with experienced editors often contributes substantially more than dozens of websites with little editorial oversight. Quality consistently outweighs quantity.",
  },
  {
    letter: "N",
    name: "Notability",
    body: "This is where everything comes together. Does the evidence demonstrate lasting public significance? Not temporary popularity. Not commercial success. Not self promotion. Independent significance.",
  },
  {
    letter: "C",
    name: "Credibility",
    body: "How strong is the overall public record? Do the available sources reinforce one another? Do they tell a consistent story? Is the profile supported by evidence that would inspire confidence in an independent editor?",
  },
  {
    letter: "E",
    name: "Eligibility",
    body: "Only after evaluating every previous stage do we answer the final question. Should you pursue Wikipedia today? There are only three possible recommendations: proceed, strengthen your public profile, or wait. Every recommendation is supported by evidence. Never optimism.",
  },
];

const SCORES: Array<[string, number]> = [
  ["Independent Recognition", 4],
  ["Reliable Sources", 5],
  ["Editorial Quality", 4],
  ["Depth Of Coverage", 3],
  ["Long Term Significance", 5],
];

function Stars({ value }: { value: number }) {
  return (
    <span className="font-mono text-sm tracking-[0.3em]" aria-label={`${value} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "text-accent" : "text-border"}>
          ★
        </span>
      ))}
    </span>
  );
}

export function EvidenceFramework() {
  const [active, setActive] = useState(0);
  return (
    <Section id="evidence" index="Section 05" label="The WikiFortress EVIDENCE™ Framework">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>Every Recommendation Begins With Evidence. Never Assumptions.</Display>
        <Lede>
          <p>
            One of the biggest misconceptions surrounding Wikipedia is that eligibility can be
            determined after a five minute conversation. It cannot.
          </p>
          <p>
            Your public reputation deserves more than a guess. We don't begin by discussing writing.
            We don't begin by discussing publishing. And we certainly don't begin by discussing
            pricing.
          </p>
          <p className="text-foreground">
            We begin with evidence — a structured methodology designed to answer one question. Does
            the available evidence genuinely support pursuing Wikipedia today?
          </p>
        </Lede>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {FRAMEWORK.map((step, i) => (
            <div key={`${step.letter}-${i}`} className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={step.name}
                className={cn(
                  "flex size-12 items-center justify-center border font-display text-xl transition-colors md:size-14 md:text-2xl",
                  active === i
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                )}
              >
                {step.letter}
              </button>
              {i < FRAMEWORK.length - 1 && (
                <span aria-hidden className="h-px w-6 bg-border md:w-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-[1fr_1.3fr]">
          <div className="bg-card p-8 md:p-10">
            <div className="eyebrow text-accent">
              Stage {String(active + 1).padStart(2, "0")} of 08
            </div>
            <h3 className="mt-4 font-display text-4xl leading-tight">
              {FRAMEWORK[active]!.name}
            </h3>
            <p className="mt-6 text-[0.8125rem] leading-relaxed text-foreground/75">
              Each stage informs the next. A profile is never assessed on a single dimension.
            </p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[1.0625rem] leading-[1.85] text-foreground/75">
              {FRAMEWORK[active]!.body}
            </p>
            <div className="mt-8 flex gap-6 border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                disabled={active === 0}
                className="eyebrow disabled:opacity-35"
              >
                ← Previous stage
              </button>
              <button
                type="button"
                onClick={() => setActive((v) => Math.min(FRAMEWORK.length - 1, v + 1))}
                disabled={active === FRAMEWORK.length - 1}
                className="eyebrow text-accent disabled:opacity-35"
              >
                Next stage →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <div className="eyebrow">Sample Evaluation</div>
          <h3 className="mt-4 font-display text-3xl leading-tight">
            An illustrative scorecard showing how a profile may be assessed.
          </h3>
          <p className="mt-4 text-[0.9375rem] leading-[1.8] text-foreground/75">
            Every profile is different. This example is intended solely to demonstrate how our
            methodology works.
          </p>
        </div>
        <div className="border border-border bg-card p-8 md:p-10">
          <dl>
            {SCORES.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-6 border-b border-border py-4 first:pt-0"
              >
                <dt className="text-[0.9375rem] font-light">{label}</dt>
                <dd>
                  <Stars value={value} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border-l-2 border-accent pl-6">
            <div className="eyebrow">Recommendation</div>
            <div className="mt-2 font-display text-4xl">Proceed</div>
            <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
              The available evidence demonstrates a strong foundation that appears consistent with
              Wikipedia's editorial expectations.
            </p>
          </div>
        </div>
      </div>

      <CtaBand
        prompt="Want to see how your profile measures up?"
        action="Speak With an Advisor"
      />

      <div className="mt-16">
        <PullQuote>
          "The strongest recommendation isn't the one people hope to hear. It's the one the evidence
          supports."
        </PullQuote>
      </div>
    </Section>
  );
}

const BELIEFS = [
  {
    title: "Education Creates Better Decisions.",
    body: "An informed client makes better decisions — whether they work with us or not. That's why we explain, teach, challenge assumptions, and encourage questions long before discussing services. Because understanding creates confidence, and confidence creates better decisions.",
  },
  {
    title: "Truth Before Transaction.",
    body: "If pursuing Wikipedia isn't in your best interest today, we'll tell you. If waiting creates a stronger long term outcome, we'll recommend waiting. Our responsibility is to protect your reputation before protecting our revenue. That philosophy isn't marketing. It's how we've chosen to build our business.",
  },
  {
    title: "Reputation Is A Long Term Investment.",
    body: "A Wikipedia article should reflect a reputation, not attempt to create one. The strongest public profiles are built over years through meaningful work, independent recognition, thoughtful journalism, and lasting contributions. Wikipedia documents that journey. It doesn't replace it.",
  },
  {
    title: "We Think Like Advisors.",
    body: 'Most firms ask, "Which package would you like?" We ask something entirely different: "Tell us about your work." That single question changes everything, because every recommendation should begin with understanding — not selling.',
  },
  {
    title: 'Saying "Not Yet" Can Be The Most Valuable Advice We Give.',
    body: "Some of our most successful client relationships started with a recommendation not to proceed. Instead, we explained what was missing, helped identify opportunities to strengthen the public profile, and encouraged patience. Months later, many returned with significantly stronger evidence and much better outcomes.",
  },
];

export function WhyWeExist() {
  return (
    <Section id="process" index="Section 06" label="Why WikiFortress Exists" tone="card">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>
          We Didn't Build Another Wikipedia Agency. We Built The Advisory Firm We Wished Already
          Existed.
        </Display>
        <Lede>
          <p>
            When we first looked at the Wikipedia industry, one thing became immediately obvious.
            Most conversations started with services. Very few started with education.
          </p>
          <p>
            Almost every website promised solutions. Very few helped people understand the problem
            first.
          </p>
          <p className="font-display text-2xl not-italic text-foreground">
            We believed professionals deserved something better. Not another agency. An advisor.
          </p>
        </Lede>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
        {BELIEFS.map((b, i) => (
          <div
            key={b.title}
            className="bg-card p-8 md:p-10 last:md:col-span-2"
          >
            <div className="eyebrow text-accent">Belief {String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-4 font-display text-[1.75rem] leading-tight">{b.title}</h3>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.85] text-foreground/75">
              {b.body}
            </p>
          </div>
        ))}
      </div>

      <Lede className="mt-10 max-w-2xl">
        <p>
          WikiFortress exists for professionals who value clarity more than promises. Evidence more
          than assumptions. Long term reputation more than short term results.
        </p>
        <p className="text-foreground">Everything we do begins there.</p>
      </Lede>
    </Section>
  );
}

const OUTCOMES = [
  {
    label: "Recommendation One",
    title: "Proceed",
    body: "The available evidence supports moving forward.",
  },
  {
    label: "Recommendation Two",
    title: "Strengthen Your Public Profile",
    body: "Your achievements are strong. Your public documentation needs time to catch up.",
  },
  {
    label: "Recommendation Three",
    title: "Wait",
    body: "Sometimes patience creates significantly stronger long term outcomes. Waiting isn't failure. It's strategy.",
  },
];

export function Consultation() {
  return (
    <Section id="consultation" index="Section 07" label="What Happens During Your Consultation">
      <Display className="max-w-4xl">
        Every Consultation Begins With One Question. "What Independent Evidence Already Exists About
        Your Work?"
      </Display>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <Lede>
          <p>Forget packages. Forget pricing. Forget promises.</p>
          <p className="text-foreground">
            The first conversation isn't about selling. It's about understanding.
          </p>
          <p>
            We'll discuss your work. Review publicly available information. Examine independent
            coverage. Assess the strength of your public profile. Answer your questions honestly.
            And explain exactly where you stand.
          </p>
          <p>By the end of the conversation, you'll leave with one of three outcomes.</p>
        </Lede>

        <ol className="border-t border-border">
          {OUTCOMES.map((o) => (
            <li key={o.title} className="border-b border-border py-8">
              <div className="eyebrow">{o.label}</div>
              <h3 className="mt-2 font-display text-3xl">{o.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.8] text-foreground/75">
                {o.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14">
        <PullQuote>
          "Every consultation should leave you with greater clarity than when you arrived. That is
          the standard we hold ourselves to."
        </PullQuote>
      </div>
    </Section>
  );
}
