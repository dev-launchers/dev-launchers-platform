import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';
import Link from 'next/link';

const renderSection = (title, listItems) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function HowWeWork() {
  return (
    <>
      <Head>
        <title>How We Work</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <section className="max-w-full bg-black py-32 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-4xl pb-4 text-white"
            >
              How We Work
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              Dev Launchers is a remote, mentor-led community where you learn by
              shipping. We organize around product teams, run 4-week sprints,
              and use the same tools you’ll see in modern software orgs—not a
              classroom. Sessions run in Central Time (CT) with global
              participation.
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              Org Structure & Process
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Structure Board of Directors → Leadership (President, VP,
              Directors) → Departments (Design, Development, Research, Product)
              → Product Teams (e.g., IdeaSpace, Dev Recruit, Universal Design,
              AI Ally, User Profile) → Members guided by Mentors (team leads).
              How we operate Remote-first. Async by default; two 1-hour live
              sessions weekly. 4-week sprints. Plan → Build → Review → Retro.
              Work is tracked in GitHub. Project-based learning. Every
              assignment maps to a real deliverable and your SMART goals.
              Definition of Done. Clear acceptance criteria, accessibility
              checks, code/design review, and brief documentation. Design ↔ Dev
              handshake Design provides components, tokens/variables, and
              prototype behaviors in Figma (Dev Mode). Dev implements with
              React/TypeScript, documents in Storybook, and links PRs back to
              issues/design. Research produces actionable readouts that become
              backlog items.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              Sprint Rhythm (What a Month Looks Like)
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Plan (Week 1) — Set sprint goals, write/estimate issues, define
              acceptance criteria and dependencies. Build (Weeks 1–3) — Async
              work, mid-sprint reviews, optional pairing. Review (Week 4) —
              Demos, QA, research readouts, merge/ship. Retro (Week 4) — FigJam
              retro; decisions roll into next sprint. Time commitment: ~5–10
              hours/week (2 hours live + 3–8 async).
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              Tech Stack (What We Use & Why)
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Figma & FigJam Source of truth for product design and
              collaboration. We use variables/tokens, components, and library
              governance to keep UI consistent. Dev Mode and comments make
              handoff concrete; FigJam powers retros, user journeys, and
              cross-department workshops. GitHub (Issues, Projects, PRs,
              Actions) Where work happens. Issues carry acceptance criteria,
              estimation, and status on project boards. Pull requests drive
              review quality; Actions handles basic CI so changes stay healthy.
              React Primary UI framework for fast, reusable components. We
              prioritize accessibility (ARIA, focus management) and performance
              (sensible rendering, code-splitting where appropriate). TypeScript
              Static typing that clarifies data contracts between product
              requirements, designs, and code—improving safety, readability, and
              collaboration. Storybook A living catalog of components and
              patterns. Designers and developers verify states, accessibility,
              and usage here. We document props, examples, and guardrails for
              reuse. GitBook Public docs and curriculum. Onboarding guides,
              playbooks, and design-system usage live here so knowledge isn’t
              trapped in chat threads. tl;dv Lightweight recording and highlight
              tool for workshops and demos. We capture key moments, tag
              follow-ups, and share snippets with members in other time zones.
              Google Workspace Docs, sheets, and slides for planning, research
              notes, and org-wide announcements—easy to share and archive.
              Discord Day-to-day HQ. Channels mirror product teams and
              departments; standups, checkpoints, and quick design/dev questions
              happen here. Strapi Headless CMS for content that needs
              first-class handling (site sections, learning resources,
              campaigns). Keeps content updates out of the code deploy loop.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              Curriculum (Overview)
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Our curriculum is project-driven and mentor-guided. You’ll set
              SMART goals at onboarding, then work through role-based
              assignments (Design, Development, Research, Product) aligned to
              your team’s stage (discovery → iteration → finalization).
              Instruction happens inside the work—critiques, PR reviews,
              readouts, and sprint ceremonies. → See the full weekly cadence,
              learning pathways, and outcomes on{' '}
              <Link href="/curriculum">Curriculum</Link>.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              What to Expect When You Join
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Onboarding & placement: We place you on a product team based on
              your goals, skills, and team capacity. First issue: Start with a
              well-scoped task to learn our workflow and tools. Regular
              feedback: Mentors review your work during sprints; quarterly
              check-ins track progress against your SMART goals. Portfolio
              artifacts: Real designs, PRs, research readouts, and component
              stories that showcase collaboration and impact.
            </atoms.Typography>
          </div>
        </section>
      </main>
    </>
  );
}
