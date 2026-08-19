import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/wf/chrome";
import {
  Hero,
  CredibilityStrip,
  Myths,
  ProfileComparison,
  Principles,
} from "@/components/wf/sections-top";
import {
  EvidenceFramework,
  WhyWeExist,
  Consultation,
} from "@/components/wf/evidence";
import {
  WhoWeAdvise,
  CaseStudies,
  EditorialTeam,
  Testimonials,
} from "@/components/wf/sections-lower";
import { KnowledgeCenter, Faq, FinalCta, FAQ } from "@/components/wf/knowledge";
import { EligibilityCriteria } from "@/components/wf/criteria";
import { RoundCursor } from "@/components/wf/cursor";

const SITE_URL = "https://wiki-truth-seeker.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WikiFortress — Wikipedia Eligibility & Notability Advisory" },
      {
        name: "description",
        content:
          "Evidence-based Wikipedia eligibility evaluation for accomplished professionals. Understand notability, reliable sources and where your public profile truly stands.",
      },
      {
        property: "og:title",
        content: "WikiFortress — Wikipedia Eligibility & Notability Advisory",
      },
      {
        property: "og:description",
        content:
          "Truth before transaction. An independent advisory firm helping professionals evaluate Wikipedia eligibility through evidence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "WikiFortress",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.png`,
          description:
            "Independent advisory firm helping accomplished professionals evaluate Wikipedia eligibility through evidence, education and objective assessment.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: [item.short, ...item.a].join(" "),
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <RoundCursor />
      <SiteHeader />
      <main>
        <Hero />
        <CredibilityStrip />
        <Myths />
        <ProfileComparison />
        <Principles />
        <EligibilityCriteria />
        <EvidenceFramework />
        <WhyWeExist />
        <Consultation />
        <WhoWeAdvise />
        <CaseStudies />
        <EditorialTeam />
        <Testimonials />
        <KnowledgeCenter />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
