/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/components';

// --- Shared UI (matches Admissions) ---
const Section = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'py-24',
    hero: 'py-32 mb-8 min-h-80 bg-black',
    card: 'py-24',
  };

  return (
    <section className={`${variants[variant]} px-4 md:px-8 w-full ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, className = '' }) => (
  <div className={`mb-12 ${className}`}>
    <atoms.Typography
      as="h2"
      variant="primary"
      size="xl5"
      textAlign="left"
      textWeight="semi-bold"
      className="mb-4"
    >
      {title}
    </atoms.Typography>
    {subtitle && (
      <atoms.Typography as="p" variant="secondary" size="body_lg" className="text-gray-400">
        {subtitle}
      </atoms.Typography>
    )}
  </div>
);

const Card = ({ children, className = '', hover = true }) => (
  <div
    className={`bg-black backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 ${
      hover ? 'transition-all duration-300 hover:border-blue-500/50 hover:bg-black' : ''
    } ${className}`}
  >
    {children}
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
      {number}
    </div>
    <div>
      {title && (
        <atoms.Typography as="h4" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-2">
          {title}
        </atoms.Typography>
      )}
      {description && (
        <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400">
          {description}
        </atoms.Typography>
      )}
    </div>
  </div>
);

const HighlightBox = ({ children, variant = 'info' }) => {
  const variants = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-200',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200',
    success: 'bg-green-500/10 border-green-500/30 text-green-200',
  };
  return <div className={`p-6 border rounded-xl ${variants[variant]}`}>{children}</div>;
};

const CTAButton = ({ href = '#', children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white',
    ghost: 'hover:bg-white/5 border border-white/10 text-white',
  };
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${variants[variant]}`}>
      {children}
    </Link>
  );
};

const IconBullet = ({ icon = '•', children }) => (
  <div className="flex items-start gap-3 p-3">
    <div className="text-xl leading-none mt-0.5" aria-hidden>{icon}</div>
    <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-300">{children}</atoms.Typography>
  </div>
);

export default function CreateRoute() {
  // --- Content data with light iconography for scanability ---
  const glance = [
    { icon: '🌐', title: 'Format',  detail: 'Remote, mentor-led, project-based' },
    { icon: '⏱️', title: 'Cadence', detail: '4-week sprints (plan → build → review → retro)' },
    { icon: '🗓️', title: 'Sessions', detail: 'Two 1-hour live collaboration sessions weekly (Central Time), plus async work' },
    { icon: '⌛', title: 'Time',     detail: '~5–10 hours/week minimum' },
    { icon: '🤝', title: 'Teams',    detail: 'Cross-functional product teams (Design, Development, Research, Product Management)' },
    { icon: '🧰', title: 'Tools',    detail: 'Figma, GitHub, React/TypeScript, Storybook, GitBook, Discord, Google Workspace, Strapi' },
    { icon: '🎓', title: 'Cost',     detail: 'Tuition $0 (nonprofit) — see Admissions & Tuition' },
  ];

  const rhythm = [
    { icon: '🧑‍🏫', text: 'Department Collaboration (1 hr): progress review, technique demos (e.g., prototyping, design systems, accessibility), critique, next steps.' },
    { icon: '🤝', text: 'Cross-Department Collaboration (1 hr): Design × Research × Product × Dev working session (flows, wireframes, prototypes, implementation reviews).' },
    { icon: '🧵', text: 'Async Work (3–8 hrs): issues in GitHub, branch/PR workflow, check-ins on Discord, optional pairing and office hours.' },
  ];

  const sprintCycle = [
    { title: 'Plan', description: 'Scope goals, estimate issues, set acceptance criteria and dependencies.' },
    { title: 'Build', description: 'Execute assignments, mid-sprint check-ins, research as needed.' },
    { title: 'Review', description: 'Demos, QA, research readouts; align design ↔ dev; merge/ship.' },
    { title: 'Retro', description: 'FigJam retrospective; action items feed the next sprint plan.' },
  ];

  const pathways = [
    {
      icon: '🎨',
      name: 'Design',
      learns: [
        'Work with design systems (tokens/variables, components, library governance)',
        'Produce flows, wireframes, and hi-fi prototypes in Figma',
        'Apply accessibility standards (WCAG-minded patterns, contrast, focus)',
        'Deliver developer-ready specs (Dev Mode, annotations, behaviors)',
      ],
      skills: [
        'Beginner: interface basics; styles; components; critiques',
        'Intermediate: auto layout; variants; tokens/variables; accessibility checks',
        'Advanced: multi-page systems; complex prototyping; component governance; handoff at scale',
      ],
      artifacts: 'Component sets in Figma, interaction prototypes, system tokens, acceptance-criteria-aligned specs.'
    },
    {
      icon: '💻',
      name: 'Development',
      learns: [
        'Ship features in React + TypeScript with accessible, performant UI',
        'Use GitHub effectively (issues, branches, reviews, CI)',
        'Build and document components in Storybook',
        'Collaborate with designers and researchers; implement from Figma Dev Mode',
      ],
      skills: [
        'Beginner: repo hygiene; PR basics; JSX/TS fundamentals',
        'Intermediate: state management; testing; accessibility (ARIA, focus)',
        'Advanced: component architecture; performance; CI workflows; Storybook docs',
      ],
      artifacts: 'Merged PRs, Storybook stories, test coverage, issue → PR traceability.'
    },
    {
      icon: '🔬',
      name: 'Research',
      learns: [
        'Plan and run studies (interviews, surveys, usability tests, heuristic reviews)',
        'Analyze and synthesize findings (coding, affinity mapping, triangulation)',
        'Produce decision-ready readouts with prioritized recommendations',
        'Operationalize research (recruiting, consent, data handling, templates)',
      ],
      skills: [
        'Beginner: method selection; scripts; notetaking; light analysis',
        'Intermediate: mixed-methods planning; synthesis; readout storytelling',
        'Advanced: research ops; metrics; influencing roadmaps; workshop facilitation',
      ],
      artifacts: 'Study plans, highlight reels/notes, insight → recommendation readouts tied to backlog items.'
    },
    {
      icon: '📈',
      name: 'Product Management',
      learns: [
        'Translate goals into roadmaps and prioritized backlogs',
        'Write clear user stories and acceptance criteria',
        'Run agile ceremonies (planning, estimation, reviews, retros)',
        'Track KPI/OKR progress and manage cross-team dependencies',
      ],
      skills: [
        'Beginner: story writing; backlog hygiene; sprint cadence',
        'Intermediate: estimation; risk/issue tracking; metrics literacy',
        'Advanced: roadmap strategy; cross-functional alignment; delivery forecasting',
      ],
      artifacts: 'Roadmaps, prioritized backlogs, KPI dashboards, sprint reports.'
    },
  ];

  const feedbacks = [
    { icon: '🎯', title: 'SMART Goals',        detail: 'Set at onboarding with your mentor; reviewed quarterly.' },
    { icon: '🔁', title: 'In-sprint Feedback', detail: 'Critiques, PR reviews, and readouts provide continuous guidance.' },
    { icon: '📍', title: 'Checkpoints',        detail: 'Mentors track progress toward outcomes and adjust assignments.' },
    { icon: '🕒', title: 'Participation',      detail: 'Target ≥ 80% attendance for required live/async touchpoints to stay on a team.' },
  ];

  const tools = [
    { icon: '🧩', name: 'Figma & FigJam',       href: 'https://www.figma.com',        description: 'Design systems, prototypes, critiques, and retros with collaborative canvases.' },
    { icon: '📦', name: 'GitHub',               href: 'https://github.com',           description: 'Issues, Projects, Pull Requests, and CI for tracking work and reviews.' },
    { icon: '⚛️', name: 'React & TypeScript',   href: 'https://react.dev',            description: 'Front‑end implementation with typed components and accessible UI.' },
    { icon: '📚', name: 'Storybook',            href: 'https://storybook.js.org',     description: 'Component documentation and manual a11y checks for shared UI.' },
    { icon: '📖', name: 'GitBook',              href: 'https://www.gitbook.com',      description: 'Public docs and curriculum hosting for reference and onboarding.' },
    { icon: '💬', name: 'Discord',              href: 'https://discord.com',          description: 'Daily communication, async updates, and pairing/office hours.' },
    { icon: '🧮', name: 'Google Workspace',     href: 'https://workspace.google.com', description: 'Docs, Sheets, and Slides for planning and readouts.' },
    { icon: '🗄️', name: 'Strapi',              href: 'https://strapi.io',            description: 'Headless CMS powering content‑driven features.' },
  ];

  const outcomes = [
    { icon: '🗂️', title: 'Portfolio-ready artifacts', detail: 'Work products that reflect real collaboration across disciplines.' },
    { icon: '🧭', title: 'Proficiency with tools',     detail: 'Comfort with industry-standard tooling and workflows.' },
    { icon: '🤝', title: 'Cross-functional experience',detail: 'Operate within agile, cross‑discipline teams.' },
    { icon: '✅', title: 'Mentor verification',        detail: 'Requestable statement of participation and contribution.' },
  ];

  const times = [
    { icon: '⏰', title: 'Time',      detail: '~5–10 hours/week (2 live, 3–8 async)' },
    { icon: '🌎', title: 'Timezone',  detail: 'Central Time (CT) for live sessions; recordings/notes shared when possible' },
    { icon: '🤗', title: 'Conduct',   detail: 'Collaborative, inclusive, supportive learning environment' },
  ];

  return (
    <>
      <Head>
        <title>Dev Launchers Curriculum</title>
      </Head>

      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero */}
        <Section variant="hero">
          <div className="text-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textAlign="center"
              textWeight="semi-bold"
              className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Dev Launchers Curriculum
            </atoms.Typography>
            <atoms.Typography as="p" variant="secondary" size="body_lg" className="text-gray-300 max-w-3xl mx-auto">
              Learn through collaboration — mentor-led sessions, async work, and real projects with feedback tailored to your goals. Let’s launch you to the next level.
            </atoms.Typography>
          </div>
        </Section>

        {/* At a Glance */}
        <Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionHeader title="At a Glance" />
            {glance.map((item) => (
              <Card key={item.title}>
                <div className="text-3xl mb-3" aria-hidden>{item.icon}</div>
                <atoms.Typography as="h3" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-2">
                  {item.title}
                </atoms.Typography>
                <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400">
                  {item.detail}
                </atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* How the Program Works */}
        <Section variant="card">
          <SectionHeader title="How the Program Works" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card hover={false}>
              <atoms.Typography variant="primary" as="h3" size="xl3" textWeight="semi-bold" className="mb-4">Weekly Rhythm</atoms.Typography>
              <div className="divide-y divide-gray-700/40">
                {rhythm.map((item, i) => (
                  <IconBullet key={`rhythm-${i}`} icon={item.icon}>{item.text}</IconBullet>
                ))}
              </div>
            </Card>

            <Card hover={false}>
              <atoms.Typography variant="primary" as="h3" size="xl3" textWeight="semi-bold" className="mb-4">Sprint Cycle (4 Weeks)</atoms.Typography>
              <div className="flex flex-col gap-4">
                {sprintCycle.map((step, i) => (
                  <ProcessStep key={step.title} number={i + 1} title={step.title} description={step.description} />
                ))}
              </div>
              <div className="mt-6 border-t border-gray-700 pt-6">
                <atoms.Typography variant="secondary" as="p" size="body_md" className="text-gray-400">
                  <span className="font-semibold">Definition of Done:</span> acceptance criteria met, accessibility checks completed, reviews approved (design/PR), and light documentation added.
                </atoms.Typography>
              </div>
            </Card>
          </div>
        </Section>

        {/* Learning Pathways */}
        <Section variant="card">
          <SectionHeader title="Learning Pathways" />
          <atoms.Typography variant="secondary" size="body_lg" className="text-gray-300 mb-8">
            You’ll join a Department (Design, Development, Research, or Product Management) and a Product Team. Assignments match your goals, your role, and your team’s stage (discovery → iteration → finalization).
          </atoms.Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-2xl" aria-hidden>{p.icon}</div>
                  <atoms.Typography variant="primary" as="h3" size="xl3" textWeight="semi-bold" textWeight="semi-bold" className="text-white">{p.name}</atoms.Typography>
                </div>

                <atoms.Typography variant="primary" as="h4" size="xl2" textWeight="semi-bold" className="mb-2">You will learn to:</atoms.Typography>
                <div className="grid gap-2 mb-4">{p.learns.map((t, i) => <IconBullet key={`l-${p.name}-${i}`}>{t}</IconBullet>)}</div>

                <atoms.Typography variant="primary" as="h4" size="xl2" textWeight="semi-bold" className="mb-2">Skill progression:</atoms.Typography>
                <div className="grid gap-2 mb-4">{p.skills.map((t, i) => <IconBullet key={`s-${p.name}-${i}`}>{t}</IconBullet>)}</div>

                <atoms.Typography variant="secondary" as="p" className="text-gray-400">Typical artifacts: {p.artifacts}</atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* Assessment & Feedback */}
        <Section variant="card">
          <SectionHeader title="Assessment & Feedback" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {feedbacks.map((f) => (
              <Card key={f.title}>
                <div className="text-2xl mb-3" aria-hidden>{f.icon}</div>
                <atoms.Typography as="h3" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-2">{f.title}</atoms.Typography>
                <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400">{f.detail}</atoms.Typography>
              </Card>
            ))}
          </div>
          <HighlightBox variant="info">
            <atoms.Typography variant="secondary" as="p" size="body_md">
              Evidence of progress = shipped code/design/research + documented impact (e.g., PR merged, component published, research adopted, KPI moved).
            </atoms.Typography>
          </HighlightBox>
        </Section>

        {/* Tools */}
        <Section variant="card">
          <SectionHeader title="Tools & Platforms (used in instruction)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((t) => (
              <Card key={t.name}>
                <div className="text-2xl mb-3" aria-hidden>{t.icon}</div>
                <atoms.Typography as="h3" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-1">{t.name}</atoms.Typography>
                <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400 mb-2">{t.description}</atoms.Typography>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Visit site</a>
              </Card>
            ))}
          </div>
        </Section>

        {/* Outcomes */}
        <Section variant="card">
          <SectionHeader title="Outcomes (What You Leave With)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <Card key={o.title}>
                <div className="text-2xl mb-3" aria-hidden>{o.icon}</div>
                <atoms.Typography as="h3" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-1">{o.title}</atoms.Typography>
                <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400">{o.detail}</atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* Time & Expectations */}
        <Section variant="card">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionHeader title="Time & Expectations" />
            {times.map((t) => (
              <Card key={t.title}>
                <div className="text-2xl mb-3" aria-hidden>{t.icon}</div>
                <atoms.Typography as="h3" variant="primary" size="xl2" textWeight="semi-bold" className="text-white mb-1">{t.title}</atoms.Typography>
                <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-400">{t.detail}</atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* Start Here */}
        <Section variant="card">
          <SectionHeader title="Start Here" />
          <Card hover={false} className="text-center">
            <atoms.Typography as="h3" variant="primary" size="xl3" textWeight="semi-bold" className="text-white mb-2">Get started</atoms.Typography>
            <atoms.Typography as="p" variant="secondary" size="body_md" className="text-gray-300 mb-8">
              Ready to jump in? Explore admissions, meet mentors, or apply now.
            </atoms.Typography>
            <div className="flex flex-wrap justify-center gap-3">
              <atoms.Button     mode="dark" type="secondary"iconPosition="undefined" as="a" href="https://devlaunchers.org/our-mentors-and-instructor-team ">
                Meet the Mentors
              </atoms.Button>
              <atoms.Button     mode="dark" type="Primary" iconPosition="undefined" as="a" href=" https://devlaunchers.org/join">
                View Open Roles
              </atoms.Button>
            </div>
          </Card>
        </Section>

        <div className="h-16" />
      </main>
    </>
  );
}
