/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';

export default function Admissions() {
  return (
    <>
      <Head>
        <title>Admissions & Tuition</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <section className="bg-black py-32 max-w-7xl px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-4xl pb-4 text-white"
            >
              Admissions & Tuition
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              Who can join, how placement works, time expectations—and Tuition: $0 for everyone.
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              At a Glance
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  <span className="font-bold">Tuition: $0 </span>(Dev Launchers is a 501(c)(3) nonprofit)
                </li>
                <li>
                  <span className="font-bold">Admissions: </span> Rolling — we review weekly and place as capacity opens
                </li>
                <li>
                  <span className="font-bold">Time: </span>~5–10 hours/week (2 live + 3–8 async)
                </li>
                <li>
                  <span className="font-bold">Sessions: </span>Central Time (CT), with global participation
                </li>
                <li>
                  <span className="font-bold">Cohorts:</span> Quarterly (Q1–Q4) for reporting; see how we count learners below
                </li>
              </ul>
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Who Can Apply
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl text-gray-500"
            >
              We welcome learners worldwide who are interested in design, technology, and creative collaboration — from beginners and career changers to experienced professionals seeking real, project-based growth. 
              <br /><br />
              Note: We cannot sponsor visas for international members; international participants are welcome to join remotely.
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Two Ways to Get Started
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  <span className="font-bold">Apply to an open opportunity — </span>If there's a role that fits, apply on our Open Opportunities page.
                </li>
                <li>
                  <span className="font-bold">Join the Talent Network — </span>If nothing fits (or teams are full), join our Talent Network to be considered for future roles that match your skills and goals.
                </li>
              </ul>
              <br />
              <span>
                Capacity note: Mentor bandwidth limits how many members we can onboard at a time. Placement isn't guaranteed, even for strong applicants.
              </span>
            </atoms.Typography>
          </div>
        </section>
        
        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Admissions (Rolling) & Placement
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  <span className="font-bold">Rolling admissions: </span>We accept applications year-round, based on mentor availability and team capacity.
                </li>
                <li>
                  <span className="font-bold">Review cadence: </span>Applications are reviewed weekly.
                </li>
                <li>
                  <span className="font-bold">Placement timing: </span>Most placements align to the start of the next 4-week sprint; we may place mid-sprint if it won't disrupt the team.
                </li>
                <li>
                  <span className="font-bold">Placement factors: </span>Skills, goals, time commitment, and open roles on product teams.
                </li>
                <li>
                  <span className="font-bold">If teams are full: </span>We'll offer the next sprint start or add you to a short waitlist and keep you updated.
                </li>
              </ul>
            </atoms.Typography>
            <atoms.Typography
              as="h3"
              variant="primary"
              size="xl5"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl py-4"
            >
              What happens after you apply
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ol className="list-decimal">
                <li>
                  We review your materials against current openings and near-term needs.
                </li>
                <li>
                  If there's a match, we place you on a product team and share onboarding steps.
                </li>
                <li>
                  If not, we keep you in the Talent Network for future roles (you can update your info anytime).
                </li>
              </ol>
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Participation Requirements
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  <span className="font-bold">Time commitment: </span>Minimum 5–10 hours/week
                </li>
                <li>
                  <span className="font-bold">Synchronous sessions: </span>Attend weekly mentor-led collaboration sessions (scheduled in Central Time; recordings/notes shared when possible)
                </li>
                <li>
                  <span className="font-bold">Asynchronous communication: </span>Maintain regular updates and check-ins via our team channels (Discord, GitHub)
                </li>
                <li>
                  <span className="font-bold">Collaboration standards: </span>Contribute respectfully in a diverse, global community and align to shared goals
                </li>
              </ul>
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Cohorts (How We Count Learners)
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              We report enrollment using quarterly cohorts aligned to calendar quarters — Q1 (Jan–Mar), Q2 (Apr–Jun), Q3 (Jul–Sep), Q4 (Oct–Dec).
              <br /><br />
              <span class="font-bold">A learner is counted as active in a quarter if they meet all three:
              </span>
              <br /><br />
              <ol className="list-decimal">
                <li>
                  <span className="font-bold">Synchronous participation: </span>attended ≥2 live collaboration sessions during the quarter.
                </li>
                <li>
                  <span className="font-bold">Async participation: </span>in at least one sprint during the quarter, posted ≥2 meaningful async updates in official channels (Discord/GitHub) — e.g., standups/progress notes, review comments, or blockers.
                </li>
                <li>
                  <span className="font-bold">Sprint progress vs. estimate: </span>at a sprint retrospective within the quarter, demonstrated progress toward completing at least one assigned issue in line with the estimate defined at sprint planning (e.g., issue completed within the estimated effort, or carries over with an updated estimate and documented blockers).
                </li>
              </ol>
              <br />
              <span className="font-bold">Typical cohort size:</span> 10–25 learners.
              <br />
              <span className="font-bold">Current cohort:</span> Total Cohort Count Q3: 22
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Tuition & Fees
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  <span className="font-bold">Tuition: $0 </span>— our programs are free for all participants.
                </li>
                <li>
                  <span className="font-bold">Funding: </span>Supported by donations, grants, and volunteer contributions.
                </li>
                <li>
                  <span className="font-bold">Included: </span>Mentorship, curriculum, access to our design/development tools, and real-world project opportunities.
                </li>
              </ul>
              <br />
              <span className="font-bold">Non-commercial use:</span> We use Figma and related tools strictly for education and portfolio projects — no client/agency services and no revenue-generating work.
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              What's Included
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ul className="list-disc">
                <li>
                  Weekly mentor-led collaboration sessions (Design Collaboration, Cross-Department Collaboration)
                </li>
                <li>
                  Project-based assignments in GitHub with clear acceptance criteria
                </li>
                <li>
                  Access to our design system and component libraries
                </li>
                <li>
                  Code/design reviews, research readouts, and sprint retrospectives
                </li>
                <li>
                  Portfolio-ready artifacts (PRs, prototypes, research reports, component stories)
                </li>
              </ul>
            </atoms.Typography>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              How to Apply
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="left"
              className="max-w-4xl text-gray-500"
            >
              <ol className="list-decimal">
                <li>
                  Review the Curriculum and this page.
                </li>
                <li>
                  Choose your path: Apply to Open Roles or Join the Talent Network.
                </li>
                <li>
                  We'll place you based on your goals, skills, and team capacity.
                </li>
                <li>
                  Start with a well-scoped issue, meet your mentor, and join the sprint cadence.
                </li>
              </ol>
              <br />
              <span>Questions? Check our FAQ or contact us at [contact email]</span>
            </atoms.Typography>
          </div>
        </section>
      </main>
    </>
  );
}