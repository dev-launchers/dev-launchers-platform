import queryString from 'query-string';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { atoms } from '@devlaunchers/components/components';
import { Typography } from '@devlaunchers/components/components/atoms';
import Link from 'next/link';

const renderSection = (listItems) => {
  return (
    <ul style={{ listStyle: 'disc' }}>
      {listItems.map((item) => (
        <li style={{ listStyleType: 'disc' }}>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_lg"
            className="text-gray-300 max-w-3xl mx-auto"
          >
            {item}
          </atoms.Typography>
        </li>
      ))}
    </ul>
  );
};

const renderSectionOrder = (listItems) => {
  return (
    <ol style={{ listStyle: 'number' }}>
      {listItems.map((item) => (
        <li style={{ listStyleType: 'number' }}>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_lg"
            className="text-gray-300 max-w-3xl mx-auto"
          >
            {item}
          </atoms.Typography>
        </li>
      ))}
    </ol>
  );
};

const Section = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'py-24',
    hero: 'py-32 mb-8 min-h-80 bg-black',
    card: 'py-4',
  };

  return (
    <section
      className={`${variants[variant]} px-4 md:px-8 w-full ${className}`}
    >
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
      className="mb-8"
    >
      {title}
    </atoms.Typography>
    {subtitle && (
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_lg"
        className="text-gray-400"
      >
        {subtitle}
      </atoms.Typography>
    )}
  </div>
);

const HighlightBox = ({ children, variant = 'info' }) => {
  const variants = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-200',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200',
    success: 'bg-green-500/10 border-green-500/30 text-green-200',
  };
  return (
    <div className={`p-6 border rounded-xl ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default function CreateRoute() {
  const router = useRouter();
  // Need to use GET params to get a specific variable
  const params = queryString.parse(router.locale);
  // console.log("router locale", router.locale);

  const glance = [
    'Format: Remote, mentor-led, project-based',
    'Cadence: 4-week sprints (plan → build → review → retro)',
    'Sessions: Two 1-hour live collaboration sessions weekly (Central Time), plus async work',
    'Time: ~5–10 hours/week minimum',
    'Teams: Cross-functional product teams (Design, Development, Research, Product Management)',
    'Tools: Figma, GitHub, React/TypeScript, Storybook, GitBook, Discord, Google Workspace, Strapi',
    'Cost: Tuition $0 (nonprofit) → see Admissions & Tuition',
  ];

  const sprints = [
    'Plan: scope goals, estimate issues, set acceptance criteria and dependencies.',
    'Build: execute assignments, mid-sprint check-ins, research as needed.',
    'Review: demos, QA, research readouts; align design ↔ dev; merge/ship.',
    'Retro: FigJam retrospective; action items feed the next sprint plan.',
  ];

  const rythItems = [
    'Design Collaboration (1 hr): progress review, technique demos (e.g., prototyping, design systems, accessibility), critique, next steps tailored to goals.',
    'Cross-Department Collaboration (1 hr): Design × Research × Product × Dev working session (flows, wireframes, prototypes, implementation reviews).',
    'Async Work (3–8 hrs): issues in GitHub, branch/PR workflow, check-ins on Discord, optional pairing and office hours.',
  ];
  const ryhthm = renderSection(rythItems);

  const desSkills = [
    'Beginner: interface basics; styles; components; critiques',
    'Intermediate: auto layout; variants; tokens/variables; accessibility checks',
    'Advanced: multi-page systems; complex prototyping; component governance; handoff at scale',
  ];
  const desLearns = [
    'Work with design systems (tokens/variables, components, library governance)',
    'Produce flows, wireframes, and hi-fi prototypes in Figma',
    'Apply accessibility standards (WCAG-minded patterns, contrast, focus)',
    'Deliver developer-ready specs (Dev Mode, annotations, behaviors)',
  ];

  const devLearnsRaw = [
    'Ship features in React + TypeScript with accessible, performant UI',
    'Use GitHub effectively (issues, branches, reviews, CI)',
    'Build and document components in Storybook',
    'Collaborate with designers and researchers; implement from Figma Dev Mode',
  ];
  const devSkillsRaw = [
    'Beginner: repo hygiene; PR basics; JSX/TS fundamentals',
    'Intermediate: state management; testing; accessibility (ARIA, focus)',
    'Advanced: component architecture; performance; CI workflows; Storybook docs',
  ];

  const resLearnsRaw = [
    'Plan and run studies (interviews, surveys, usability tests, heuristic reviews)',
    'Analyze and synthesize findings (coding, affinity mapping, triangulation)',
    'Produce decision-ready readouts with prioritized recommendations',
    'Operationalize research (recruiting, consent, data handling, templates)',
  ];
  const resSkillsRaw = [
    'Beginner: method selection; scripts; notetaking; light analysis',
    'Intermediate: mixed-methods planning; synthesis; readout storytelling',
    'Advanced: research ops; metrics; influencing roadmaps; workshop facilitation',
  ];

  const prodLearnsRaw = [
    'Translate goals into roadmaps and prioritized backlogs',
    'Write clear user stories and acceptance criteria',
    'Run agile ceremonies (planning, estimation, reviews, retros)',
    'Track KPI/OKR progress and manage cross-team dependencies',
  ];
  const prodSkillsRaw = [
    'Beginner: story writing; backlog hygiene; sprint cadence',
    'Intermediate: estimation; risk/issue tracking; metrics literacy',
    'Advanced: roadmap strategy; cross-functional alignment; delivery forecasting',
  ];

  const feedbacks = renderSection([
    'SMART Goals: set at onboarding with your mentor; reviewed quarterly.',
    'In-sprint Feedback: critiques, PR reviews, and readouts provide continuous guidance.',
    'Checkpoints: mentors track progress toward outcomes and adjust assignments.',
    'Participation: target ≥ 80% attendance for required live/async touchpoints to stay on a team.',
  ]);

  const tools = [
    'Figma & FigJam: design systems, prototypes, critiques, retros.',
    'GitHub (Issues, Projects, PRs, Actions): task tracking, code reviews, CI.',
    'React & TypeScript: front-end implementation.',
    'Storybook: component documentation and accessibility checks.',
    'GitBook: public docs and curriculum.',
    'Discord: daily communication and async check-ins.',
    'Google Workspace: planning docs, sheets, slides.',
    'Strapi: headless CMS for content-driven features.',
  ];

  const outcomes = [
    'Portfolio-ready artifacts that reflect real collaboration',
    'Demonstrated proficiency in industry tools and workflows',
    'Experience working in cross-functional teams and agile sprints',
    'A mentor’s verification of participation/contributions upon request',
  ];

  const times = [
    'Time: ~5–10 hours/week (2 live, 3–8 async)',
    'Timezone: Central Time (CT) for live sessions; recordings/notes shared when possible',
    'Conduct: collaborative, inclusive, supportive learning environment',
  ];

  const starts = [
    <Link href="admissions">Admissions & Tuition (Tuition: $0)</Link>,
    <Link href="our-mentors-and-instructor-team">Meet the Mentors</Link>,
    <Link href="join">Open Opportunities (Apply)</Link>,
  ];

  return (
    <>
      <Head>
        <title>Dev Launchers Curriculum</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <Section variant="hero">
          <div className="text-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textAlign="center"
              textWeight="semi-bold"
              className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text "
            >
              Dev Launchers Curriculum
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              className="text-gray-300 max-w-3xl mx-auto"
            >
              Learn through collaboration—mentor-led sessions, async work, and
              real projects with feedback tailored to your goals. Let’s launch
              you to the next level.
            </atoms.Typography>
          </div>
        </Section>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="mb-4"
            >
              Curriculum
            </atoms.Typography>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        <Section variant="card">
          <div className="text-center">
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              className="text-gray-300 mb-6"
            >
              Mentor-led. Project-based. Remote. You learn by shipping real
              features with a product team. This page explains exactly how our
              curriculum works and what you’ll learn.
            </atoms.Typography>
          </div>
        </Section>

        <SectionHeader title="At a Glance" />
        <div>{renderSection(glance)}</div>

        <SectionHeader title="How the Program Works" />

        <Typography variant="primary" as="h3" size="xl2">
          Weekly Rhythm
        </Typography>
        <div>{ryhthm}</div>

        <Typography variant="primary" as="h3" size="xl2">
          Sprint Cycle (4 Weeks)
        </Typography>
        <div>{renderSectionOrder(sprints)}</div>
        <Typography variant="secondary" as="p">
          Definition of Done: acceptance criteria met, accessibility checks
          completed, review approved (design/PR), light documentation added.
        </Typography>
        <Section variant="card"></Section>

        <SectionHeader title="Learning Pathways" />
        <Section variant="card">
          <div className="text-center">
            <atoms.Typography
              variant="secondary"
              size="body_lg"
              className="text-gray-300 mb-6"
            >
              You’ll join a Department (Design, Development, Research, or
              Product Management) and a Product Team (e.g., IdeaSpace, Dev
              Recruit, Universal Design, AI Ally, User Profile & Community).
              Assignments match your goals, your role, and your team’s stage
              (discovery → iteration → finalization).
            </atoms.Typography>
          </div>
        </Section>

        <Typography variant="primary" as="h3" size="xl5">
          Design
        </Typography>
        <Typography variant="primary" as="h3" size="xl2">
          You will learn to:
        </Typography>
        <div>{renderSection(desLearns)}</div>
        <Typography variant="primary" as="h3" size="xl2">
          Skill progression:
        </Typography>
        <div>{renderSection(desSkills)}</div>
        <Typography variant="secondary" as="p">
          Typical artifacts: component sets in Figma, interaction prototypes,
          system tokens, acceptance-criteria-aligned specs.
        </Typography>

        <Typography variant="primary" as="h3" size="xl5">
          Development
        </Typography>
        <Typography variant="primary" as="h3" size="xl2">
          You will learn to:
        </Typography>
        <div>{renderSection(devLearnsRaw)}</div>
        <Typography variant="primary" as="h3" size="xl2">
          Skill progression:
        </Typography>
        <div>{renderSection(devSkillsRaw)}</div>
        <Typography variant="secondary" as="p">
          Typical artifacts: merged PRs, Storybook stories, test coverage, issue
          → PR traceability.
        </Typography>

        <Typography variant="primary" as="h3" size="xl5">
          Research
        </Typography>
        <Typography variant="primary" as="h3" size="xl2">
          You will learn to:
        </Typography>
        <div>{renderSection(resLearnsRaw)}</div>
        <Typography variant="primary" as="h3" size="xl2">
          Skill progression:
        </Typography>
        <div>{renderSection(resSkillsRaw)}</div>
        <Typography variant="secondary" as="p">
          Typical artifacts: study plans, highlight reels/notes, insight →
          recommendation readouts tied to backlog items.
        </Typography>

        <Typography variant="primary" as="h3" size="xl5">
          Product Management
        </Typography>
        <Typography variant="primary" as="h3" size="xl2">
          You will learn to:
        </Typography>
        <div>{renderSection(prodLearnsRaw)}</div>
        <Typography variant="primary" as="h3" size="xl2">
          Skill progression:
        </Typography>
        <div>{renderSection(prodSkillsRaw)}</div>
        <Typography variant="secondary" as="p">
          Typical artifacts: roadmaps, prioritized backlogs, KPI dashboards,
          sprint reports.
        </Typography>

        <Section></Section>

        <SectionHeader title="Assessment & Feedback" />
        <div>{feedbacks}</div>
        <Typography variant="secondary" as="p">
          Evidence of progress = shipped code/design/research + documented
          impact (e.g., PR merged, component published, research adopted, KPI
          moved).
        </Typography>

        <Section></Section>

        <SectionHeader title="Tools & Platforms (used in instruction)" />
        <div>{renderSection(tools)}</div>

        <SectionHeader title="Outcomes (What You Leave With)" />
        <div>{renderSection(tools)}</div>

        <SectionHeader title="Time & Expectations" />
        <div>{renderSection(times)}</div>

        <SectionHeader title="Start Here" />
        <div>{renderSection(starts)}</div>
      </main>
    </>
  );
}
