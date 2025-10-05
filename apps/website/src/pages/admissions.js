/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';

// --- Reusable UI ---
const Section = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'py-24',
    hero: 'py-32 mb-8 min-h-80 bg-black',
    card: 'py-24',
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
  <div className={`mb-10 ${className}`}>
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

const Card = ({ children, className = '', hover = true }) => (
  <div
    className={`bg-black backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-8 ${
      hover
        ? 'transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70'
        : ''
    } ${className}`}
  >
    {children}
  </div>
);

const InfoCard = ({ icon, title, value, detail }) => (
  <Card>
    <div className="text-2xl mb-3">{icon}</div>
    <atoms.Typography
      as="h3"
      variant="primary"
      size="xl2"
      textWeight="bold"
      className="text-white mb-2"
    >
      {title}
    </atoms.Typography>
    {value && (
      <atoms.Typography
        as="p"
        variant="primary"
        size="body_lg"
        textWeight="bold"
        className="text-blue-400 mb-2"
      >
        {value}
      </atoms.Typography>
    )}
    <atoms.Typography
      as="p"
      variant="secondary"
      size="body_sm"
      className="text-gray-400"
    >
      {detail}
    </atoms.Typography>
  </Card>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
      {number}
    </div>
    <div>
      {title && (
        <atoms.Typography
          as="h4"
          variant="primary"
          size="xl2"
          textWeight="bold"
          className="text-white mb-2"
        >
          {title}
        </atoms.Typography>
      )}
      {description && (
        <atoms.Typography
          as="p"
          variant="secondary"
          size="body_md"
          className="text-gray-400"
        >
          {description}
        </atoms.Typography>
      )}
    </div>
  </div>
);

const HighlightBox = ({ children, variant = 'info' }) => {
  const variants = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-200 mt-8',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200 mt-8',
    success: 'bg-green-500/10 border-green-500/30 text-green-200 mt-8',
  };
  return (
    <div className={`p-6 border rounded-xl ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default function Admissions() {
  // --- Content data ---
  const atAGlanceItems = [
    {
      icon: '💰',
      title: 'Tuition',
      value: '$0',
      detail: 'Dev Launchers is a 501(c)(3) nonprofit',
    },
    {
      icon: '📝',
      title: 'Admissions',
      value: 'Rolling',
      detail: 'We review weekly and place as capacity opens',
    },
    {
      icon: '⏰',
      title: 'Time',
      value: '5–10 hrs/week',
      detail: '2 live + 3–8 async hours',
    },
    {
      icon: '🌍',
      title: 'Sessions',
      value: 'Central Time',
      detail: 'Global participation welcome',
    },
    {
      icon: '👥',
      title: 'Cohorts',
      value: 'Quarterly',
      detail: 'Q1–Q4 reporting periods',
    },
  ];

  const startingOptions = [
    {
      title: 'Apply to an open opportunity',
      description:
        "If there's a role that fits, apply on our Open Opportunities page.",
      icon: '🎯',
      cta: 'View Opportunities',
      link: 'https://devlaunchers.org/join',
    },
    {
      title: 'Join the Talent Network',
      description:
        'If nothing fits (or teams are full), join our Talent Network to be considered for future roles that match your skills and goals.',
      icon: '🌟',
      cta: 'Join',
      link: 'https://devlaunchers.org/join/second',
    },
  ];

  const admissionsProcess = [
    {
      label: 'Rolling admissions',
      detail:
        'We accept applications year-round, based on mentor availability and team capacity.',
    },
    { label: 'Review cadence', detail: 'Applications are reviewed weekly.' },
    {
      label: 'Placement timing',
      detail: 'Most placements align to the start of the next 4-week sprint.',
    },
    {
      label: 'Placement factors',
      detail:
        'Skills, goals, time commitment, and open roles on product teams. If teams are full, you can join our talent community to be considered for new openings.',
    },
  ];

  const afterApplySteps = [
    'We review your materials against current openings and near-term needs.',
    "If there's a match, we place you on a product team and share onboarding steps.",
    'If not, we keep you in the Talent Network for future roles (you can update your info anytime).',
  ];

  const requirements = [
    { title: 'Time commitment', detail: 'Minimum 5–10 hours/week', icon: '⏱️' },
    {
      title: 'Synchronous sessions',
      detail:
        'Attend weekly mentor-led collaboration sessions (Central Time; recordings/notes shared when possible)',
      icon: '🎥',
    },
    {
      title: 'Asynchronous communication',
      detail:
        'Maintain regular updates and check-ins via our team channels (Discord, GitHub)',
      icon: '💬',
    },
    {
      title: 'Collaboration standards',
      detail:
        'Contribute respectfully in a diverse, global community and align to shared goals',
      icon: '🤝',
    },
  ];

  const cohortCriteria = [
    {
      title: 'Synchronous participation',
      detail: 'Attended ≥2 live collaboration sessions during the quarter',
      icon: '🎬',
    },
    {
      title: 'Async participation',
      detail:
        'Posted ≥2 meaningful async updates in official channels (Discord/GitHub)',
      icon: '💻',
    },
    {
      title: 'Sprint progress',
      detail:
        'Demonstrated progress toward completing at least one assigned issue',
      icon: '📊',
    },
  ];

  const includedItems = [
    {
      icon: '🧑‍🏫',
      title: 'Mentor-led sessions',
      detail:
        'Design Collaboration and Cross-Department Collaboration each week.',
    },
    {
      icon: '✅',
      title: 'Project assignments',
      detail: 'GitHub issues with clear acceptance criteria and DoD.',
    },
    {
      icon: '🧰',
      title: 'Design system access',
      detail: 'Use our component libraries and tokens in real work.',
    },
    {
      icon: '🔍',
      title: 'Reviews & retros',
      detail:
        'Code/design reviews, research readouts, and sprint retrospectives.',
    },
    {
      icon: '🗂️',
      title: 'Portfolio artifacts',
      detail: 'PRs, prototypes, reports, and component stories you can show.',
    },
  ];

  const applicationSteps = [
    { title: 'Review', description: 'Review the Curriculum and this page' },
    {
      title: 'Choose',
      description: 'Apply to Open Roles or Join the Talent Network',
    },
    {
      title: 'Placement',
      description:
        "We'll place you based on your goals, skills, and team capacity",
    },
    {
      title: 'Start',
      description:
        'Start with a well-scoped issue, meet your mentor, and join the sprint cadence',
    },
  ];

  // --- Render ---
  return (
    <>
      <Head>
        <title>Admissions & Tuition</title>
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
              Admissions & Tuition
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              className="text-gray-300 max-w-3xl mx-auto"
            >
              Who can join, how placement works, time expectations — and
              Tuition: $0 for everyone.
            </atoms.Typography>
          </div>
        </Section>

        {/* At a Glance */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SectionHeader title="At a Glance" />
            {atAGlanceItems.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Section>

        {/* Who Can Apply */}
        <Section variant="card">
          <SectionHeader title="Who Can Apply" />
          <div className="text-center gap-6">
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              className="text-gray-300"
            >
              We welcome learners worldwide who are interested in design,
              technology, and creative collaboration — from beginners and career
              changers to experienced professionals seeking real, project-based
              growth.
            </atoms.Typography>
            <HighlightBox variant="warning">
              <atoms.Typography as="p" variant="secondary" size="body_md">
                <span className="font-bold">Note:</span> We cannot sponsor visas
                for international members; international participants are
                welcome to join remotely.
              </atoms.Typography>
            </HighlightBox>
          </div>
        </Section>

        {/* Two Ways to Get Started */}
        <Section variant="card">
          <SectionHeader title="Two Ways to Get Started" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {startingOptions.map((option) => (
              <Card key={option.title}>
                <div className="text-3xl mb-4">{option.icon}</div>
                <atoms.Typography
                  as="h3"
                  variant="primary"
                  size="xl3"
                  textWeight="semi-bold"
                  className="text-white mb-4"
                >
                  {option.title}
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_lg"
                  className="mb-4 text-gray-400"
                >
                  {option.description}
                </atoms.Typography>
                <atoms.Button
                  mode="dark"
                  type="secondary"
                  iconPosition="undefined"
                  as="a"
                  status="default"
                  href={option.link}
                >
                  {option.cta}
                </atoms.Button>
              </Card>
            ))}
          </div>
          <HighlightBox variant="warning">
            <atoms.Typography as="p" variant="secondary" size="body_md">
              <span className="font-bold">Capacity note:</span> Mentor bandwidth
              limits how many members we can onboard at a time. Placement isn't
              guaranteed, even for strong applicants.
            </atoms.Typography>
          </HighlightBox>
        </Section>

        {/* Admissions & Placement */}
        <Section variant="card">
          <SectionHeader title="Admissions (Rolling) & Placement" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {admissionsProcess.map((item) => (
              <Card key={item.label}>
                <atoms.Typography
                  as="h4"
                  variant="primary"
                  size="xl2"
                  textWeight="semi-bold"
                  className=" text-purple-400 mb-2"
                >
                  {item.label}
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_sm"
                  className="text-gray-400"
                >
                  {item.detail}
                </atoms.Typography>
              </Card>
            ))}
          </div>

          <Card hover={false} className="mb-2">
            <atoms.Typography
              as="h3"
              variant="primary"
              size="xl4"
              textWeight="semi-bold"
              className="text-white mb-4"
            >
              What happens after you apply
            </atoms.Typography>
            <div className="flex flex-col gap-4">
              {afterApplySteps.map((step, i) => (
                <ProcessStep key={i} number={i + 1} description={step} />
              ))}
            </div>
          </Card>
        </Section>

        {/* Participation Requirements */}
        <Section variant="card">
          <SectionHeader title="Participation Requirements" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req) => (
              <Card key={req.title}>
                <div className="text-2xl mb-3">{req.icon}</div>
                <atoms.Typography
                  as="h4"
                  variant="primary"
                  size="xl2"
                  textWeight="semi-bold"
                  className="text-white mb-3"
                >
                  {req.title}
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_md"
                  className="text-gray-400"
                >
                  {req.detail}
                </atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* Cohorts */}
        <Section variant="card">
          <SectionHeader
            title="Cohorts (How We Count Learners)"
            subtitle="We report enrollment using quarterly cohorts aligned to calendar quarters — Q1 (Jan–Mar), Q2 (Apr–Jun), Q3 (Jul–Sep), Q4 (Oct–Dec). A learner is counted as active in a quarter if they meet all three requirements below:"
          />

          {/* Criteria cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {cohortCriteria.map((criteria, index) => (
              <Card key={criteria.title}>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <atoms.Typography
                      as="h4"
                      variant="primary"
                      size="xl2"
                      textWeight="semi-bold"
                      className="text-white mb-2"
                    >
                      {criteria.title}
                    </atoms.Typography>
                    <atoms.Typography
                      as="p"
                      variant="secondary"
                      size="body_sm"
                      className="text-gray-400"
                    >
                      {criteria.detail}
                    </atoms.Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cohort Metric Cards*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card hover={false} className="mb-2">
              <atoms.Typography
                as="p"
                variant="primary"
                size="xl3"
                textWeight="semi-bold"
                className="text-blue-400"
              >
                10–50
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_sm"
                className="text-gray-400"
              >
                Typical cohort size
              </atoms.Typography>
            </Card>
            <Card hover={false} className="mb-2">
              <atoms.Typography
                as="p"
                variant="primary"
                size="xl3"
                textWeight="semi-bold"
                className="text-purple-400"
              >
                34
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_sm"
                className="text-gray-400"
              >
                Current Q3
              </atoms.Typography>
            </Card>
          </div>
        </Section>

        {/* Tuition & Fees */}
        <Section variant="card">
          <SectionHeader title="Tuition & Fees" />
          <Card hover={false} className="text-center mb-4">
            <atoms.Typography
              as="p"
              variant="primary"
              size="xl5"
              textWeight="semi-bold"
              className="text-green-400 mb-2"
            >
              $0 Tuition
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              className="text-gray-400 mb-6"
            >
              No tuition. No fees.
            </atoms.Typography>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card hover={false} className="text-center">
              <atoms.Typography
                as="h4"
                variant="primary"
                size="xl2"
                textWeight="semi-bold"
                className="text-white mb-2"
              >
                Funding
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_md"
                className="text-gray-400"
              >
                Donations, grants, and volunteer time.
              </atoms.Typography>
            </Card>
            <Card hover={false} className="text-center">
              <atoms.Typography
                as="h4"
                variant="primary"
                size="xl2"
                textWeight="semi-bold"
                className="text-white mb-2"
              >
                Use
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_md"
                className="text-gray-400"
              >
                Educational and portfolio — non‑commercial.
              </atoms.Typography>
            </Card>
          </div>
        </Section>

        {/* What's Included */}
        <Section variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionHeader title="What's Included" />
            {includedItems.map((item) => (
              <Card key={item.title}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <atoms.Typography
                  as="h4"
                  variant="primary"
                  size="xl2"
                  textWeight="semi-bold"
                  className="text-white mb-2"
                >
                  {item.title}
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_md"
                  className="text-gray-400"
                >
                  {item.detail}
                </atoms.Typography>
              </Card>
            ))}
          </div>
        </Section>

        {/* How to Apply */}
        <Section variant="card">
          <SectionHeader title="How to Apply" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationSteps.map((step, index) => (
              <Card key={step.title}>
                <ProcessStep
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                />
                {index === 1 && (
                  <div className="pt-6 px-8 flex flex-wrap gap-6">
                    <atoms.Button
                      mode="dark"
                      type="secondary"
                      iconPosition="undefined"
                      as="a"
                      href="https://devlaunchers.org/join/second "
                    >
                      Join Talent Network
                    </atoms.Button>
                    <atoms.Button
                      mode="dark"
                      type="Primary"
                      iconPosition="undefined"
                      as="a"
                      href=" https://devlaunchers.org/join"
                    >
                      Open Roles
                    </atoms.Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
          <div className="mt-6 py-6 text-center">
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_md"
              className="text-grey-400"
            >
              Questions? Contact us at{' '}
              <a
                href="mailto:contact@devlaunchers.com"
                className="underline text-purple-400"
              >
                contact@devlaunchers.com
              </a>
            </atoms.Typography>
          </div>
        </Section>

        <div className="h-16" />
      </main>
    </>
  );
}
