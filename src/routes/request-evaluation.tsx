import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/wf/chrome";
import { RoundCursor } from "@/components/wf/cursor";
import { DELIVERABLES, EvaluationForm } from "@/components/wf/evaluation-form";

export const Route = createFileRoute("/request-evaluation")({
  head: () => ({
    meta: [
      { title: "Request My Evaluation — WikiFortress Consultation" },
      {
        name: "description",
        content:
          "Request a confidential, evidence based evaluation of your public profile and understand where you stand on Wikipedia eligibility.",
      },
      { property: "og:title", content: "Request My Evaluation — WikiFortress" },
      {
        property: "og:description",
        content:
          "Book a confidential consultation and receive an objective, evidence based assessment of your Wikipedia eligibility.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RequestEvaluation,
});

function RequestEvaluation() {
  return (
    <div className="min-h-screen bg-background">
      <RoundCursor />
      <SiteHeader />
      <main className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="eyebrow transition-colors hover:text-accent">
            ← Back to Homepage
          </Link>

          <div className="mt-8 border-b border-border pb-10">
            <div className="eyebrow text-accent">Consultation Request</div>
            <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] leading-[1.05] md:text-6xl">
              Request My Evaluation
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.85] text-foreground/80">
              Tell us about your work, your achievements, and what brings you to WikiFortress. Every
              enquiry is personally reviewed before any recommendation is made — no packages, no
              pricing, no promises.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-[1fr_1.3fr]">
            <div className="bg-card p-10 md:p-12">
              <h2 className="font-display text-3xl leading-tight">What You'll Receive</h2>
              <ul className="mt-6 space-y-3">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex gap-4 text-[0.9375rem] leading-[1.7] text-foreground/80">
                    <span aria-hidden className="text-accent">
                      ✓
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="eyebrow mt-10 border-t border-border pt-6 text-muted-foreground">
                Proceed · Strengthen · Wait
              </div>
            </div>

            <div className="bg-background p-10 md:p-12">
              <div className="eyebrow">Start The Conversation</div>
              <h2 className="mt-3 font-display text-3xl leading-tight">
                Share the details, and we'll respond with an honest assessment.
              </h2>
              <div className="mt-10">
                <EvaluationForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
