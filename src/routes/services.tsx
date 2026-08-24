import { createFileRoute, Link } from '@tanstack/react-router'
import type { CSSProperties, ReactNode } from 'react'
import { SiteHeader, SiteFooter } from '@/components/wf/chrome'
import { RoundCursor } from '@/components/wf/cursor'
import '../styles/services.css'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Wikipedia Services — WikiFortress' },
      {
        name: 'description',
        content:
          'Wikipedia eligibility assessment, article development, improvement, monitoring and strategic advisory from WikiFortress.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://wikifortress.com/services' }],
  }),
  component: ServicesPage,
})

const services = [
  {
    id: 'eligibility',
    number: '01',
    label: "I'M NOT SURE IF I QUALIFY",
    description:
      'You want to understand whether your existing evidence supports pursuing Wikipedia.',
    service: 'Eligibility Assessment',
  },
  {
    id: 'development',
    number: '02',
    label: "I'M READY TO EXPLORE AN ARTICLE",
    description:
      'You have substantial independent coverage and want to explore article development.',
    service: 'Article Development',
  },
  {
    id: 'improvement',
    number: '03',
    label: 'I ALREADY HAVE AN ARTICLE',
    description:
      'You want to review, improve or update an existing Wikipedia article.',
    service: 'Article Improvement',
  },
  {
    id: 'monitoring',
    number: '04',
    label: 'I WANT ONGOING SUPPORT',
    description:
      'You want help monitoring and maintaining your Wikipedia presence.',
    service: 'Monitoring & Maintenance',
  },
  {
    id: 'advisory',
    number: '05',
    label: 'I NEED STRATEGIC ADVICE',
    description:
      "You're not sure what the right move is and want an informed assessment first.",
    service: 'Strategy & Advisory',
  },
]

const assessmentCriteria = [
  ['Independent Coverage', 'Who is writing about you, and are those sources independent of you or your organisation?'],
  ['Source Quality', 'Are the available sources reliable and editorially useful?'],
  ['Depth of Coverage', 'Do credible sources discuss your work substantially, or simply mention you?'],
  ['Public Significance', 'Is there documented significance beyond your own promotional material?'],
]

const developmentSteps = [
  ['01', 'Research', 'Identify and review relevant sources.'],
  ['02', 'Source Development', 'Organise supporting references and connect claims to appropriate sources.'],
  ['03', 'Editorial Drafting', 'Develop neutral, encyclopedic content.'],
  ['04', 'Structure', 'Organise the article and supporting information appropriately.'],
  ['05', 'Review', 'Conduct internal editorial review.'],
  ['06', 'Submission Support', 'Assist with the appropriate next stage of the editorial process.'],
]

const improvementAreas = [
  ['Structure', 'Improve how information is organised and presented.'],
  ['Citations', 'Identify areas where stronger supporting sources may be needed.'],
  ['Factual Updates', 'Bring appropriate information up to date where reliable documentation supports the change.'],
  ['Coverage', 'Identify significant areas that may be missing from the article.'],
]

const monitoringAreas = [
  ['Article Monitoring', 'Track meaningful changes to the page.'],
  ['Factual Updates', 'Identify information that may require updating when reliable sources support the change.'],
  ['Citation Maintenance', 'Review references as the article develops.'],
  ['Editorial Review', 'Assess significant changes and potential issues.'],
  ['Ongoing Support', 'Provide continued assistance where appropriate.'],
]

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <RoundCursor />
      <SiteHeader />

      <main className="wf-services">
        <div className="wf-page-back-shell">
          <Link to="/" className="wf-page-back-link">
            <span aria-hidden="true">←</span>
            <span>BACK TO HOMEPAGE</span>
          </Link>
        </div>

        <Hero />
        <Intro />
        <Eligibility />
        <Development />
        <Improvement />
        <Monitoring />
        <Advisory />
        <ServiceComparison />
        <Principle />
        <FinalCTA />
      </main>

      <SiteFooter />
    </div>
  )
}

function SectionEyebrow({
  number,
  children,
  inverse = false,
}: {
  number: string
  children: ReactNode
  inverse?: boolean
}) {
  return (
    <div className={`wf-eyebrow ${inverse ? 'wf-eyebrow--inverse' : ''}`}>
      <span className="wf-dot" />
      <span>SECTION {number}</span>
      <span className="wf-eyebrow-title">{children}</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="wf-hero">
      <div className="wf-hero-orbit wf-hero-orbit--one" />
      <div className="wf-hero-orbit wf-hero-orbit--two" />
      <div className="wf-shell wf-hero-grid">
        <div className="wf-hero-copy">
          <SectionEyebrow number="01">WIKIPEDIA SERVICES</SectionEyebrow>
          <h1>
            The right Wikipedia strategy starts
            <em> before the article.</em>
          </h1>
          <p className="wf-lede">
            Whether you're considering Wikipedia for the first time, improving an existing
            article, or looking for ongoing support, WikiFortress helps you understand the
            evidence, navigate the editorial process and determine the right path forward.
          </p>
          <div className="wf-actions">
            <Link className="wf-btn wf-btn--primary" to="/request-evaluation">
              Find Out Where You Stand <span>→</span>
            </Link>
          </div>
        </div>

        <div className="wf-evidence-visual" aria-label="Evidence to strategy editorial diagram">
          <div className="wf-source-stack">
            {['MEDIA', 'PUBLICATIONS', 'INTERVIEWS', 'RESEARCH', 'INDEPENDENT SOURCES'].map(
              (item, index) => (
                <div className="wf-source-chip" style={{ '--i': index } as CSSProperties} key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </div>
              ),
            )}
          </div>
          <div className="wf-flow-line" />
          <div className="wf-flow-steps">
            {['EVIDENCE', 'STRATEGY', 'ARTICLE'].map((item, index) => (
              <div className={`wf-flow-node wf-flow-node--${index + 1}`} key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="wf-visual-note">WE DON'T START BY WRITING. WE START BY UNDERSTANDING.</p>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="wf-section wf-intro">
      <div className="wf-shell">
        <SectionEyebrow number="02">WHY OUR SERVICES ARE DIFFERENT</SectionEyebrow>
        <div className="wf-two-col wf-two-col--intro">
          <div>
            <h2>Wikipedia is not one service.</h2>
          </div>
          <div className="wf-copy">
            <p>Every Wikipedia project starts from a different position.</p>
            <p>Some people have strong independent coverage but don't know how to approach the process.</p>
            <p>Others already have an article that needs improvement.</p>
            <p>
              Some have achieved significant recognition but aren't sure whether that recognition is
              documented in the sources Wikipedia requires.
            </p>
            <p>And sometimes, the right answer is simply: <strong>Not yet.</strong></p>
            <p>
              That's why we don't begin with a template. We begin by understanding your situation, your
              evidence and the editorial considerations surrounding it.
            </p>
            <p>From there, we determine the most appropriate path forward.</p>
          </div>
        </div>

        <div className="wf-situation-grid">
          {services.map((item) => (
            <a href={`#${item.id}`} className="wf-situation-card" key={item.id}>
              <span className="wf-card-number">{item.number}</span>
              <span className="wf-card-label">{item.label}</span>
              <span className="wf-card-arrow">↘</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Eligibility() {
  return (
    <section id="eligibility" className="wf-section wf-assessment">
      <div className="wf-shell">
        <SectionEyebrow number="03">WIKIPEDIA ELIGIBILITY ASSESSMENT</SectionEyebrow>
        <div className="wf-two-col">
          <div>
            <h2>Find out where you actually stand.</h2>
            <div className="wf-copy">
              <p>Not sure whether you qualify for Wikipedia?</p>
              <p>
                Before investing time and resources into an article, our team can assess the strength of
                your existing public profile and the evidence surrounding it.
              </p>
              <p>
                We examine the available independent coverage, source quality, depth of coverage and other
                relevant factors to help determine whether pursuing Wikipedia makes sense.
              </p>
            </div>
            <Link className="wf-inline-link" to="/request-evaluation">Find Out Where You Stand →</Link>
          </div>

          <div className="wf-assessment-framework">
            <div className="wf-assessment-centre">
              <span>WIKIFORTRESS</span>
              <strong>PROFILE<br />ASSESSMENT</strong>
              <small>ILLUSTRATIVE FRAMEWORK</small>
            </div>
            {assessmentCriteria.map(([title, text], index) => (
              <article className={`wf-criterion wf-criterion--${index + 1}`} key={title}>
                <div className="wf-criterion-head">
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                </div>
                <p>{text}</p>
                <div className="wf-state-row">
                  <span>STRONG</span><span>MIXED</span><span>LIMITED</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wf-outcomes">
          <span>PROCEED.</span>
          <span>STRENGTHEN YOUR PROFILE FIRST.</span>
          <span>OR WAIT.</span>
          <p>The goal is not to force a decision. It's to give you a clearer one.</p>
        </div>
      </div>
    </section>
  )
}

function Development() {
  return (
    <section id="development" className="wf-section wf-dark">
      <div className="wf-shell">
        <SectionEyebrow number="04" inverse>WIKIPEDIA ARTICLE DEVELOPMENT</SectionEyebrow>
        <div className="wf-dark-intro">
          <h2>Turn documented significance into a properly researched article.</h2>
          <div className="wf-copy">
            <p>
              When the evidence supports moving forward, our editorial team develops the article around
              reliable, independent sources and Wikipedia's standards for neutral, encyclopedic writing.
            </p>
            <p>The objective isn't to make a profile sound impressive.</p>
            <p>It's to accurately document what reputable sources have already established.</p>
          </div>
        </div>

        <div className="wf-workflow">
          {developmentSteps.map(([number, title, text]) => (
            <article className="wf-workflow-step" key={number}>
              <span className="wf-workflow-number">STEP {number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="wf-inline-link wf-inline-link--light" to="/request-evaluation">Discuss Your Article →</Link>
      </div>
    </section>
  )
}

function Improvement() {
  return (
    <section id="improvement" className="wf-section">
      <div className="wf-shell">
        <SectionEyebrow number="05">WIKIPEDIA ARTICLE IMPROVEMENT</SectionEyebrow>
        <div className="wf-two-col">
          <div>
            <h2>Your existing article may not tell the full story.</h2>
            <div className="wf-copy">
              <p>An existing Wikipedia article isn't necessarily a finished article.</p>
              <p>
                It may contain outdated information, weak sourcing, structural problems, missing context or
                coverage that no longer reflects the subject accurately.
              </p>
              <p>
                WikiFortress can review an existing article and identify areas where improvements may be appropriate.
              </p>
            </div>
            <Link className="wf-inline-link" to="/request-evaluation">Review My Existing Article →</Link>
          </div>

          <div className="wf-audit">
            <div className="wf-audit-panel wf-audit-panel--before">
              <span className="wf-mini-label">EXISTING ARTICLE</span>
              {['Outdated information', 'Weak sourcing', 'Missing context', 'Structural issues'].map((item) => (
                <div className="wf-issue-row" key={item}><span>—</span>{item}</div>
              ))}
            </div>
            <div className="wf-audit-review">
              <span>EDITORIAL</span>
              <strong>REVIEW</strong>
            </div>
            <div className="wf-audit-panel wf-audit-panel--after">
              <span className="wf-mini-label">AREAS FOR IMPROVEMENT</span>
              {improvementAreas.map(([title, text]) => (
                <details key={title}>
                  <summary>{title}<span>+</span></summary>
                  <p>{text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Monitoring() {
  return (
    <section id="monitoring" className="wf-section wf-monitoring">
      <div className="wf-shell">
        <SectionEyebrow number="06">WIKIPEDIA MONITORING &amp; MAINTENANCE</SectionEyebrow>
        <div className="wf-two-col">
          <div>
            <h2>An article doesn't stop evolving when it goes live.</h2>
            <div className="wf-copy">
              <p>Wikipedia is an open, collaborative encyclopedia. Articles can change over time.</p>
              <p>
                Information becomes outdated. Editors make additions and revisions. New developments may
                need to be incorporated.
              </p>
              <p>
                Our monitoring and maintenance support helps clients keep track of meaningful changes and
                identify areas that may require attention.
              </p>
            </div>
          </div>

          <div className="wf-living-document">
            <div className="wf-document">
              <div className="wf-document-bar"><span /><span /><span /></div>
              <span className="wf-mini-label">WIKIPEDIA ARTICLE</span>
              <div className="wf-doc-title" />
              <div className="wf-doc-line wf-doc-line--long" />
              <div className="wf-doc-line" />
              <div className="wf-doc-line wf-doc-line--short" />
              <div className="wf-doc-line wf-doc-line--long" />
              <div className="wf-doc-line" />
            </div>
            {['NEW SOURCE', 'EDITORIAL CHANGE', 'NEW DEVELOPMENT', 'CITATION', 'UPDATE'].map((item, index) => (
              <div className={`wf-event wf-event--${index + 1}`} key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div className="wf-support-grid">
          {monitoringAreas.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="wf-inline-link" to="/request-evaluation">Discuss Ongoing Support →</Link>
      </div>
    </section>
  )
}

function Advisory() {
  return (
    <section id="advisory" className="wf-section wf-advisory">
      <div className="wf-shell">
        <SectionEyebrow number="07">WIKIPEDIA STRATEGY &amp; ADVISORY</SectionEyebrow>
        <div className="wf-two-col">
          <div>
            <h2>Sometimes the smartest move is not to publish yet.</h2>
            <div className="wf-copy">
              <p>Wikipedia should not be approached simply because someone wants a page.</p>
              <p>The better question is: <strong>Does the available evidence support one?</strong></p>
              <p>
                Our advisory service is designed for people who want a strategic understanding of their
                position before committing to an article project.
              </p>
            </div>
            <ul className="wf-question-list">
              {[
                'What evidence do I currently have?',
                'Where is the strongest independent coverage?',
                'Where are the gaps?',
                'What potential challenges should I consider?',
                'Does it make sense to proceed now?',
                'What should happen before pursuing Wikipedia?',
              ].map((q) => <li key={q}>{q}</li>)}
            </ul>
            <Link className="wf-inline-link" to="/request-evaluation">Speak With an Advisor →</Link>
          </div>

          <div className="wf-decision-tree" aria-label="WikiFortress decision framework">
            <div className="wf-tree-kicker">WIKIFORTRESS DECISION FRAMEWORK</div>
            <div className="wf-tree-node wf-tree-node--start">SHOULD YOU PURSUE WIKIPEDIA?</div>
            {['STRONG INDEPENDENT COVERAGE?', 'SUBSTANTIAL COVERAGE?', 'APPROPRIATE EVIDENCE?'].map((item) => (
              <div className="wf-tree-row" key={item}>
                <div className="wf-tree-connector" />
                <div className="wf-tree-node">{item}</div>
                <div className="wf-tree-choice"><span>YES</span><span>NO</span></div>
              </div>
            ))}
            <div className="wf-tree-results">
              {['PROCEED', 'STRENGTHEN', 'ASSESS FURTHER', 'WAIT'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <small>This is a WikiFortress decision framework, not an official Wikipedia eligibility calculator.</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceComparison() {
  return (
    <section id="service-comparison" className="wf-section wf-comparison">
      <div className="wf-shell">
        <SectionEyebrow number="08">WHERE SHOULD YOU START?</SectionEyebrow>
        <h2>Start with your situation.</h2>
        <div className="wf-comparison-grid">
          {services.map((item) => (
            <a className="wf-comparison-card" href={`#${item.id}`} key={item.id}>
              <span className="wf-card-number">{item.number}</span>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <div className="wf-service-reveal">
                <span>RECOMMENDED START</span>
                <strong>{item.service}</strong>
                <span className="wf-card-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Principle() {
  return (
    <section className="wf-section wf-principle">
      <div className="wf-shell">
        <SectionEyebrow number="09">THE WIKIFORTRESS PRINCIPLE</SectionEyebrow>
        <div className="wf-principle-grid">
          <div>
            <h2>Evidence first.<br /><em>Everything else follows.</em></h2>
          </div>
          <div className="wf-principle-sequence">
            {['EVIDENCE', 'ASSESSMENT', 'STRATEGY', 'EDITORIAL', 'OUTCOME'].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="wf-principle-copy">
          <p>Our approach begins with research rather than promotional copy.</p>
          <p>We look at the evidence. We assess the sources. We identify strengths and limitations.</p>
          <p>Then we determine the most appropriate path forward.</p>
          <p>
            Because the goal isn't simply to create an article. <strong>The goal is to understand whether
            the evidence supports one, and if it does, how to approach it responsibly.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="wf-final-cta">
      <div className="wf-shell">
        <span className="wf-final-eyebrow">NOT SURE WHICH PATH IS RIGHT FOR YOU?</span>
        <h2>Start with clarity.</h2>
        <p>
          Tell us where you are today. We'll help you understand what the evidence says, what your options
          are and what the next step could look like.
        </p>
        <Link className="wf-btn wf-btn--primary wf-btn--large" to="/request-evaluation">
          FIND OUT WHERE I STAND →
        </Link>
        <small>NO ASSUMPTIONS. NO GUARANTEES. JUST A CLEARER PICTURE OF THE ROAD AHEAD.</small>
      </div>
    </section>
  )
}
