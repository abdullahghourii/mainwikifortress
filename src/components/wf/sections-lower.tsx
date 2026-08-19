import { Carousel, CtaBand, Display, Lede, PullQuote, Section } from "./primitives";

const AUDIENCES = [
  {
    title: "Academics & Researchers",
    body: "Helping scholars understand how academic recognition, citations, independent publications, and institutional impact contribute to Wikipedia eligibility.",
  },
  {
    title: "Authors",
    body: "Evaluating literary recognition, reviews, interviews, awards, and independent media coverage to determine whether a public profile is sufficiently documented.",
  },
  {
    title: "Physicians & Scientists",
    body: "Assessing research impact, public recognition, independent reporting, notable discoveries, leadership positions, and long term contributions.",
  },
  {
    title: "Entrepreneurs & Business Leaders",
    body: "Understanding the difference between commercial success and encyclopedic significance through objective evidence based evaluation.",
  },
  {
    title: "Executives",
    body: "Reviewing leadership history, industry recognition, media presence, public influence, and long term professional impact.",
  },
  {
    title: "Organisations",
    body: "Helping companies, institutions, foundations, and non profits understand whether independent recognition supports Wikipedia eligibility.",
  },
];

export function WhoWeAdvise() {
  return (
    <Section id="advise" index="Section 08" label="The People We Advise" tone="ink">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display className="text-primary-foreground">
          Every Career Is Different. Every Recommendation Begins The Same Way.
        </Display>
        <div className="space-y-4 text-[1.0625rem] leading-[1.85] text-primary-foreground/80">
          <p>
            No two professional journeys are identical. An internationally recognised professor and
            a fast growing entrepreneur have very different careers. A bestselling author and a
            pioneering surgeon build their reputations in completely different ways.
          </p>
          <p>
            A scientist. An executive. A researcher. An artist. An organisation. Each arrives with a
            unique story.
          </p>
          <p className="text-primary-foreground">
            But before we discuss Wikipedia, we ask the same question. What does the evidence tell
            us?
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
        {AUDIENCES.map((a) => (
          <div key={a.title} className="bg-primary p-8 text-center md:p-10">
            <h3 className="font-display text-2xl text-primary-foreground">{a.title}</h3>
            <p className="mx-auto mt-4 max-w-sm text-[0.9375rem] leading-[1.8] text-primary-foreground/80">
              {a.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-14 max-w-3xl font-display text-3xl leading-[1.3] text-primary-foreground md:text-[2.5rem]">
        Wikipedia doesn't evaluate professions. It evaluates{" "}
        <span className="italic text-primary-foreground/60">publicly documented significance.</span>
      </p>
    </Section>
  );
}

const CASES = [
  {
    kicker: "Case Study 01",
    title: "Investigative Journalist & Bestselling Author",
    background:
      "Our client was an award-winning investigative journalist whose work had appeared in major international publications. Despite an extensive career covering issues of justice, gender, and global affairs, there was no comprehensive encyclopedia entry documenting her professional achievements.",
    challenge:
      "The client's accomplishments were spread across dozens of reliable publications, interviews, publisher profiles, and media appearances. The primary challenge was consolidating these sources into a neutral, encyclopedic biography that met Wikipedia's strict requirements for notability, verifiability, and independent sourcing.",
    approachIntro:
      "Our editorial team conducted an extensive source audit, identifying independent coverage from national newspapers, publishing houses, journalism organizations, and reputable media outlets. We structured the article around:",
    points: [
      "Professional journalism career",
      "Published books and literary contributions",
      "Awards and professional recognition",
      "Significant reporting projects",
      "Media appearances and public impact",
    ],
    outcome:
      "The final article presented a balanced overview of the client's career, highlighting years of investigative reporting, bestselling publications, and contributions to public discourse. The page provided readers with a well-sourced, policy-compliant record of an accomplished journalist's professional legacy.",
  },
  {
    kicker: "Case Study 02",
    title: "Fortune 500 Corporate Executive",
    background:
      "Our client served in multiple executive leadership positions within a Fortune 500 company, eventually becoming Chief Executive Officer and later Chair of the Board. Throughout a decades-long corporate career, she played a key role in guiding strategic growth, corporate governance, and organizational transformation.",
    challenge:
      "Corporate executives often receive extensive company coverage but comparatively limited independent biographical documentation. Our objective was to demonstrate lasting notability through independent business reporting, financial publications, and leadership recognition rather than relying on corporate material.",
    approachIntro: "Our researchers compiled independent coverage documenting:",
    points: [
      "Executive leadership appointments",
      "Corporate governance responsibilities",
      "Industry recognition",
      "Major strategic initiatives",
      "Board leadership and executive career milestones",
    ],
    outcome:
      "The completed article established a comprehensive, well-referenced record of the executive's leadership career and long-term impact within one of America's leading corporations, creating a lasting public reference supported by independent coverage.",
  },
  {
    kicker: "Case Study 03",
    title: "Historic Landmark Preservation",
    background:
      "Rather than focusing on an individual, this engagement centered on documenting a historically significant property with centuries of architectural and cultural importance.",
    challenge:
      "Historic structures require substantial independent documentation to satisfy Wikipedia's inclusion standards. Information was scattered across preservation records, historical societies, academic publications, and government archives.",
    approachIntro: "Our editorial team assembled extensive documentation covering:",
    points: [
      "Historical origins",
      "Architectural significance",
      "Ownership history",
      "Preservation efforts",
      "Recognition by historical organizations",
      "Cultural importance within the community",
    ],
    outcome:
      "The completed entry provided readers with a detailed historical record of the landmark, preserving its architectural and cultural significance through a professionally researched and policy-compliant encyclopedia article.",
  },
  {
    kicker: "Case Study 04",
    title: "National Bestselling Author & Science Historian",
    background:
      "Our client is a nationally recognized nonfiction author whose work explores science, history, exploration, and environmental topics. His publications have received widespread critical attention, and his journalism has appeared in nationally recognized media outlets.",
    challenge:
      "The client's career spanned journalism, publishing, academic teaching, and historical research. The primary objective was organizing a diverse professional portfolio into a concise encyclopedic biography while demonstrating lasting notability through independent sources.",
    approachIntro: "Our editors verified and documented:",
    points: [
      "National bestselling publications",
      "Editorial positions at leading media organizations",
      "Academic appointments",
      "Awards and professional recognition",
      "Contributions to science and historical writing",
      "Independent reviews and publisher coverage",
    ],
    outcome:
      "The finished article established a comprehensive, well-referenced biography that accurately documented the author's career, publications, and contributions to science communication and historical literature through reliable independent sources.",
  },
];

export function CaseStudies() {
  return (
    <Section id="cases" index="Section 09" label="Case Studies">
      <Display className="max-w-3xl">
        Selected Engagements. Documented Through Independent Evidence.
      </Display>

      <div className="mt-12">
        <Carousel label="Case studies" itemClass="w-[88vw] max-w-[46rem] md:w-[46rem]">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="flex h-full flex-col border border-border bg-card p-8 md:p-10"
            >
              <div className="eyebrow text-accent">{c.kicker}</div>
              <h3 className="mt-3 font-display text-[1.75rem] leading-tight md:text-[2.125rem]">
                {c.title}
              </h3>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <div className="eyebrow border-b border-border pb-2">Client Background</div>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {c.background}
                  </p>
                  <div className="eyebrow mt-7 border-b border-border pb-2">The Challenge</div>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {c.challenge}
                  </p>
                </div>
                <div>
                  <div className="eyebrow border-b border-border pb-2">Evidence & Strategy</div>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {c.approachIntro}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {c.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-4 border-b border-border/70 pb-2 text-[0.9375rem]"
                      >
                        <span className="font-mono text-xs text-accent">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="eyebrow mt-7 border-b border-border pb-2">The Outcome</div>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {c.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>

      <CtaBand
        prompt="Wonder what your situation would look like?"
        action="Discuss Your Profile"
      />
    </Section>
  );
}

const TEAM = [
  {
    name: "Andrew Colter",
    role: "Senior Research & Editorial Specialist",
    bio: "Andrew Colter brings over eight years of research and editorial experience and has been a valued member of our organization for the past three years. He specializes in managing complex editorial revisions, evaluating source quality, and ensuring that articles are structured in accordance with Wikipedia's editorial standards. His ability to navigate challenging editorial issues makes him an integral part of our quality assurance process.",
  },
  {
    name: "Jonathon Greene",
    role: "Senior Editorial Manager",
    bio: "With more than five years of professional editing experience, Jonathon Greene has been part of our firm for the past two years. He oversees the long-term sustainability of published articles by continuously reviewing existing content, identifying areas that require improvement, and implementing editorial updates where appropriate. His proactive approach helps maintain the integrity and stability of our clients' articles over time.",
  },
  {
    name: "Raymond Floyd",
    role: "Research & Verification Editor",
    bio: "Raymond Floyd has been editing since 2014 and has worked with our organization for the past two years. His strengths lie in source evaluation, research analysis, and content verification. Working closely with our writing team, Raymond helps strengthen article notability through high-quality sourcing while ensuring that client backgrounds are presented accurately, neutrally, and in accordance with Wikipedia's content policies.",
  },
  {
    name: "Adrian Steele",
    role: "Corporate Editorial Specialist",
    bio: "Adrian Steele focuses primarily on business and corporate biographies. With over eight years of research and editorial experience, including three years specializing in corporate content, he works closely with business leaders, entrepreneurs, and organizations to ensure their articles are supported by independent, reliable sources and presented with a neutral editorial approach.",
  },
  {
    name: "Marcus Vale",
    role: "Principal Editorial Consultant",
    bio: "Marcus Vale is one of the most experienced members of our editorial team, bringing more than ten years of professional editing experience. He specializes in refining articles by removing promotional language, strengthening verifiability, and ensuring compliance with Wikipedia's content standards. His extensive editorial knowledge plays a key role in improving the long-term stability and neutrality of client articles.",
  },
  {
    name: "Mehdi S.",
    role: "Senior Project Consultant",
    bio: "Mehdi oversees the client journey after onboarding, ensuring every stage of the project moves forward smoothly and transparently. He keeps clients informed of key developments, coordinates updates between the client and internal teams, and makes sure questions or concerns are addressed promptly. Working closely with our editorial, research, and production teams, Mehdi manages communication across the project to keep timelines, expectations, and deliverables aligned.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function EditorialTeam() {
  return (
    <Section id="team" label="Meet Our Editorial Team" tone="card">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>A Collaborative Editorial Process.</Display>
        <Lede>
          <p>
            Our editorial team brings together experienced researchers, editors, and content
            specialists dedicated to producing work that aligns with Wikipedia's core principles of
            neutrality, verifiability, and reliable sourcing.
          </p>
          <p>
            Every project undergoes multiple layers of editorial review to ensure accuracy,
            compliance, and long-term sustainability.
          </p>
        </Lede>
      </div>

      <div className="mt-12">
        <Carousel label="Editorial team" itemClass="w-[80vw] max-w-[24rem] md:w-[24rem]">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group flex h-full flex-col border border-border bg-background p-8 transition-colors hover:border-accent"
            >
              <div className="flex size-14 items-center justify-center border border-border font-display text-lg text-accent transition-colors group-hover:border-accent">
                {initials(m.name)}
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight">{m.name}</h3>
              <div className="eyebrow mt-2">{m.role}</div>
              <p className="mt-5 text-[0.9375rem] leading-[1.8] text-foreground/75">{m.bio}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <p className="mt-10 max-w-3xl text-[0.9375rem] leading-[1.8] text-foreground/75">
        Rather than relying on a single editor, every project benefits from a collaborative workflow
        involving researchers, writers, and senior editors. This multi-stage review process helps
        ensure that every article is supported by reliable sources, written with a neutral point of
        view, and carefully reviewed for factual accuracy, policy compliance, and editorial quality
        before submission.
      </p>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    quote: [
      "I expected someone to sell me a service. Instead, they helped me understand my own reputation.",
      "I had spent nearly twenty years publishing research, and I assumed that alone would be enough. The first conversation reframed everything — not around my achievements, but around what independent publications had actually written about them.",
      "By the end I understood exactly which gaps existed and why they mattered. That clarity was worth more than any promise I had been given elsewhere.",
    ],
    name: "Dr. Helena Marsh",
    title: "Professor of Molecular Biology",
    org: "Independent Research Institute",
  },
  {
    quote: [
      "The honesty was what convinced me.",
      "I came in expecting a proposal. I left with a recommendation to wait eighteen months and a written explanation of what independent coverage would strengthen my profile.",
      "No one had ever declined my money before. When I returned two years later, the assessment was entirely different — and so was the outcome.",
    ],
    name: "Theodore Blackwood",
    title: "Founder & Chief Executive",
    org: "Blackwood Industrial Group",
  },
  {
    quote: [
      "They weren't trying to close a deal. They were trying to help me make the right decision.",
      "The evaluation walked through every source I had, explained which ones carried editorial weight, and which ones simply repeated the same press release.",
      "It was the first time anyone had explained Wikipedia to me without exaggeration or pressure. I have recommended them to three colleagues since.",
    ],
    name: "Amara Osei",
    title: "Author & Foreign Correspondent",
    org: "Independent",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" label="What Our Clients Remember">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <Display>
          The Best Compliment We Receive Isn't "Thank You." It's "Now I Finally Understand."
        </Display>
        <Lede>
          <p>
            People rarely remember every editorial policy we explain. They rarely remember every
            guideline we reference. They remember something much more important — how the
            conversation made them feel.
          </p>
          <p className="eyebrow">Clear · Respected · Educated · Confident</p>
          <p>
            Because for many professionals, it's the first time someone has explained Wikipedia
            without exaggeration, sales pressure, or unrealistic promises.
          </p>
        </Lede>
      </div>

      <div className="mt-12">
        <Carousel label="Client testimonials" itemClass="w-[86vw] max-w-[32rem] md:w-[32rem]">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex h-full flex-col border border-border bg-card p-8 md:p-10">
              <div className="flex size-14 items-center justify-center border border-border font-display text-lg text-accent">
                {initials(t.name)}
              </div>
              <blockquote className="mt-7 flex-1 space-y-4">
                <p className="font-display text-[1.4rem] leading-[1.35]">"{t.quote[0]}"</p>
                {t.quote.slice(1).map((para) => (
                  <p key={para} className="text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {para}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <div className="text-[0.9375rem]">{t.name}</div>
                <div className="mt-1 text-[0.8125rem] text-foreground/70">{t.title}</div>
                <div className="eyebrow mt-2">{t.org}</div>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>

      <div className="mt-14">
        <PullQuote>
          "We measure success differently. Not by how many consultations become clients, but by how
          many conversations leave people better informed than when they arrived."
        </PullQuote>
      </div>
    </Section>
  );
}
