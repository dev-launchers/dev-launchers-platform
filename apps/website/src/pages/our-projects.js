/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';
import Link from 'next/link';

export default function OurProjects() {
  return (
    <>
      <Head>
        <title>Our Projects</title>
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
              Our Projects
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              We believe in learning by doing — inside a collaborative,
              supportive community. Explore the live products our members are
              building.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-7xl pb-8"
            >
              Our Projects
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl pb-8 text-gray-500"
            >
              We build real, open-source products that power our community and
              curriculum. Each product team is cross-functional (Design,
              Development, Research, Product) and led by a mentor who guides
              members through discovery → delivery.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl pb-8 text-gray-500 italic"
            >
              Time is precious — each section shows what the product is, what’s
              being worked on, and who mentors the team.
            </atoms.Typography>

            <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semibold"
                  textAlign="left"
                  className="text-white"
                >
                  IdeaSpace
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-orange-200"
                >
                  Our internal platform for idea capture, evaluation, and
                  prioritization. Members propose ideas, collaborate on problem
                  framing, and move the best concepts into active roadmaps.
                </atoms.Typography>
              </div>

              <div className="bg-teal-900 border-teal-500 border-4 p-6 rounded-lg">
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semibold"
                  textAlign="left"
                  className="text-white"
                >
                  Dev Recruit
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-teal-200"
                >
                  Dev Launchers’ recruiting and onboarding platform. PMs post
                  openings, prospective members apply, and the system
                  streamlines matching and placement.
                </atoms.Typography>
              </div>

              <div className="bg-yellow-900 border-yellow-500 border-4 p-6 rounded-lg">
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semibold"
                  textAlign="left"
                  className="text-white"
                >
                  Universal Design (UDS)
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-yellow-200"
                >
                  A cross-project design system: token-driven components,
                  accessibility patterns, and documented usage that keep every
                  product consistent and scalable.
                </atoms.Typography>
              </div>

              <div className="bg-purple-900 border-purple-500 border-4 p-6 rounded-lg">
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semibold"
                  textAlign="left"
                  className="text-white"
                >
                  AI Ally
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-purple-200"
                >
                  An exploration space for AI-assisted tools that augment
                  design, research, and development (e.g., content scaffolds,
                  handoff helpers, accessibility checks).
                </atoms.Typography>
              </div>

              <div className="bg-pink-900 border-pink-500 border-4 p-6 rounded-lg">
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semibold"
                  textAlign="left"
                  className="text-white"
                >
                  User Profile & Community
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-pink-200"
                >
                  Member profiles and engagement: contributions, badges, team
                  history, and ways to connect across the community.
                </atoms.Typography>
              </div>
            </div>
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
              IdeaSpace
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What it is: </span>
              Our internal platform for idea capture, evaluation, and
              prioritisation. Members propose ideas, collaborate on problem
              framing, and move the best concepts into active roadmaps.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What you’ll work on</span>
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>
                  Discovery workshops (problem statements, flows, journey maps)
                </li>
                <li>
                  Submission &amp; triage UX (scoring, tagging, moderation)
                </li>
                <li>Roadmap visibility (from concept → sprint backlog)</li>
                <li>Accessibility &amp; performance improvements</li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Tech &amp; Tooling: </span>
              Figma / FigJam • React + TypeScript • GitHub Projects • (select
              areas) Strapi • Storybook
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Mentor: </span>
              <Link
                href="/our-mentors-and-instructor-team#alina-ulybina"
                className="text-blue-600 underline"
              >
                Alina Ulybina — Product Owner &amp; Lead Designer
              </Link>
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
              Dev Recruit
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What it is: </span>
              Dev Launchers’ recruiting and onboarding platform. PMs post
              openings, prospective members apply, and the system streamlines
              matching and placement.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What you’ll work on</span>
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>
                  Openings board & application funnel (conversion,
                  time-to-placement)
                </li>
                <li>Screening, matching, and offer flows</li>
                <li>PM dashboards and capacity planning</li>
                <li>Metrics: onboarding success, retention, adoption</li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Tech &amp; Tooling: </span>
              Figma • React + TypeScript • GitHub Projects • (select areas)
              Strapi • Storybook
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Mentor: </span>
              <Link
                href="/our-mentors-and-instructor-team#thejas-narendra"
                className="text-blue-600 underline"
              >
                Thejas Narendra — Product Manager
              </Link>
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
              Universal Design (UDS)
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What it is: </span>A cross-project
              design system: token-driven components, accessibility patterns,
              and documented usage that keep every product consistent and
              scalable.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What you’ll work on</span>
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>
                  Design tokens/variables, theming, and typography/spacing
                  scales
                </li>
                <li>Component specs, states, and accessibility behaviors</li>
                <li>Storybook documentation and contribution workflows</li>
                <li>Governance (versioning, adoption, deprecation)</li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Tech &amp; Tooling: </span>
              Figma (variables, libraries, Dev Mode) • Storybook • React +
              TypeScript • GitHub
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Mentor: </span>
              <Link
                href="/our-mentors-and-instructor-team#anna-isaacks"
                className="text-blue-600 underline"
              >
                Anna Isaacks — Director of Design & UDS Product Owner
              </Link>
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
              AI Ally
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What it is: </span>
              An exploration space for AI-assisted tools that augment design,
              research, and development (e.g., content scaffolds, handoff
              helpers, accessibility checks).
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What you’ll work on</span>
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>Concept tests and rapid prototypes</li>
                <li>
                  Data + UX guardrails (privacy, transparency, evaluation)
                </li>
                <li>
                  Integration experiments that reduce manual toil in our
                  workflows
                </li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Tech &amp; Tooling: </span>
              Figma • React + TypeScript • GitHub • Experimentation utilities
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <span className="font-bold">Mentor: </span>
              Currently in active exploration; interim guidance from:
              <div className="max-w-4xl text-gray-500 pb-8">
                <ul className="list-disc pl-6">
                  <li>
                    <Link
                      href="/our-mentors-and-instructor-team#anna-isaacks"
                      className="text-blue-600 underline"
                    >
                      Design Systems: Anna Isaacks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-mentors-and-instructor-team#dave-bradham"
                      className="text-blue-600 underline"
                    >
                      Development: Dave Bradham
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-mentors-and-instructor-team#rijul-saxena"
                      className="text-blue-600 underline"
                    >
                      Research: Rijul Saxena
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
              User Profile & Community
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What it is: </span>
              Member profiles and engagement: contributions, badges, team
              history, and ways to connect across the community.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">What you’ll work on</span>
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>Profile data model & privacy settings</li>
                <li>Contribution history, badges, and public artifacts</li>
                <li>Onboarding improvements and community features</li>
                <li>Metrics: engagement, adoption, contributor retention</li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Tech &amp; Tooling: </span>
              Figma • React + TypeScript • Storybook • GitHub • (select areas)
              Strapi
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Mentor: </span>
              <Link
                href="/our-mentors-and-instructor-team#francis-anigbogu"
                className="text-blue-600 underline"
              >
                Francis Anigbogu — Product Manager
              </Link>
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
              How Projects & Departments Fit Together
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Projects (Product Teams): </span>
              Where you ship real features. Teams evolve as ideas mature and
              products grow.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">
                Departments (Learning Communities){' '}
              </span>
              Your primary instruction home—peers and mentors in the same craft:
              Design, Development, Research, Product Management. Departments run
              role-specific sessions (critiques, PR reviews, readouts, planning)
              and set your learning outcomes.
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">
                → See role outcomes and weekly rhythm on{' '}
              </span>
              <Link href="/curriculum" className="text-blue-600 underline">
                Curriculum
              </Link>
            </atoms.Typography>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">Mentor: </span>
              <Link
                href="/our-mentors-and-instructor-team#francis-anigbogu"
                className="text-blue-600 underline"
              >
                Francis Anigbogu — Product Manager
              </Link>
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
              How to Join a Project Team
            </atoms.Typography>

            <div className="max-w-4xl text-gray-500 pb-8">
              <ul className="list-disc pl-6">
                <li>
                  Get the gist. Skim our Curriculum and Admissions & Tuition
                  (Tuition: $0).
                </li>
                <li>Apply. Submit the form on Open Opportunities.</li>
                <li>
                  Get placed. We’ll match you to a product team based on your
                  goals, skills, and team capacity.
                </li>
                <li>
                  Start shipping. Begin with a well-scoped issue, meet your
                  mentor, and join the sprint cadence.
                </li>
              </ul>
            </div>

            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              <span className="font-bold">
                → See role outcomes and weekly rhythm on{' '}
              </span>
              <Link href="/curriculum" className="text-blue-600 underline">
                Curriculum
              </Link>
            </atoms.Typography>
          </div>
        </section>
      </main>
    </>
  );
}
