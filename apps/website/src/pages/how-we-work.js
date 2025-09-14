import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';
import Link from 'next/link';

// Icon components for visual enhancement
const Icon = ({ children, className = "" }) => (
  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl ${className}`}>
    {children}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description, className = "" }) => (
  <Card className={`text-center ${className}`}>
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </Card>
);

const ProcessStep = ({ step, title, description, isLast = false }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
        {step}
      </div>
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
    {!isLast && (
      <div className="hidden md:block absolute left-4 top-8 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-600"></div>
    )}
  </div>
);

export default function HowWeWork() {
  return (
    <>
      <Head>
        <title>How We Work</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                  🚀 Remote-First Learning Community
                </div>
              </div>
              <atoms.Typography
                as="h1"
                variant="primary"
                size="xl6"
                textWeight="bold"
                textAlign="center"
                className="max-w-4xl pb-6 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                How We Work
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="center"
                className="max-w-3xl text-gray-300 leading-relaxed"
              >
                Dev Launchers is a remote, mentor-led community where you learn by
                shipping. We organize around product teams, run 4-week sprints,
                and use the same tools you'll see in modern software orgs—not a
                classroom. Sessions run in Central Time (CT) with global
                participation.
              </atoms.Typography>
            </div>
          </div>
        </section>

        {/* Org Structure & Process */}
        <section className="py-24 px-4 md:px-8">
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
                Org Structure & Process
              </atoms.Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <div className="flex items-center mb-4">
                  <Icon>🏗️</Icon>
                  <h3 className="text-xl font-semibold text-white ml-4">Organizational Structure</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Board of Directors → Leadership (President, VP, Directors)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Departments (Design, Development, Research, Product)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Product Teams (IdeaSpace, Dev Recruit, Universal Design, AI Ally, User Profile)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span>Members guided by Mentors (team leads)</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Icon>⚡</Icon>
                  <h3 className="text-xl font-semibold text-white ml-4">How We Operate</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Remote-first with async by default</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Two 1-hour live sessions weekly</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>4-week sprints: Plan → Build → Review → Retro</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span>Work tracked in GitHub with project-based learning</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="flex items-center mb-4">
                  <Icon>✅</Icon>
                  <h3 className="text-lg font-semibold text-white ml-3">Definition of Done</h3>
                </div>
                <p className="text-gray-300 text-sm">Clear acceptance criteria, accessibility checks, code/design review, and brief documentation.</p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Icon>🤝</Icon>
                  <h3 className="text-lg font-semibold text-white ml-3">Design ↔ Dev Handshake</h3>
                </div>
                <p className="text-gray-300 text-sm">Design provides components and tokens in Figma. Dev implements with React/TypeScript and documents in Storybook.</p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Icon>🔬</Icon>
                  <h3 className="text-lg font-semibold text-white ml-3">Research Integration</h3>
                </div>
                <p className="text-gray-300 text-sm">Research produces actionable readouts that become backlog items for product development.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* Sprint Rhythm */}
        <section className="py-24 px-4 md:px-8 bg-gray-900/30">
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
                Sprint Rhythm (What a Month Looks Like)
              </atoms.Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="relative">
                  <ProcessStep
                    step="1"
                    title="Plan (Week 1)"
                    description="Set sprint goals, write/estimate issues, define acceptance criteria and dependencies."
                  />
                </div>
                <div className="relative">
                  <ProcessStep
                    step="2"
                    title="Build (Weeks 1–3)"
                    description="Async work, mid-sprint reviews, optional pairing sessions with mentors."
                  />
                </div>
                <div className="relative">
                  <ProcessStep
                    step="3"
                    title="Review (Week 4)"
                    description="Demos, QA testing, research readouts, merge and ship completed features."
                  />
                </div>
                <div className="relative">
                  <ProcessStep
                    step="4"
                    title="Retro (Week 4)"
                    description="FigJam retrospective; decisions and learnings roll into next sprint planning."
                    isLast={true}
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Icon>⏰</Icon>
                  <h3 className="text-xl font-semibold text-white ml-4">Time Commitment</h3>
                </div>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">~5–10 hours/week</span> total
                  <br />
                  <span className="text-sm text-gray-400">2 hours live sessions + 3–8 hours async work</span>
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* Tech Stack */}
        <section className="py-24 px-4 md:px-8">
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
                Tech Stack (What We Use & Why)
              </atoms.Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Icon>🎨</Icon>}
                title="Figma & FigJam"
                description="Source of truth for product design and collaboration. We use variables/tokens, components, and library governance to keep UI consistent. Dev Mode and comments make handoff concrete."
              />
              
              <FeatureCard
                icon={<Icon>🐙</Icon>}
                title="GitHub"
                description="Where work happens. Issues carry acceptance criteria, estimation, and status on project boards. Pull requests drive review quality; Actions handles basic CI."
              />
              
              <FeatureCard
                icon={<Icon>⚛️</Icon>}
                title="React"
                description="Primary UI framework for fast, reusable components. We prioritize accessibility (ARIA, focus management) and performance (sensible rendering, code-splitting)."
              />
              
              <FeatureCard
                icon={<Icon>📘</Icon>}
                title="TypeScript"
                description="Static typing that clarifies data contracts between product requirements, designs, and code—improving safety, readability, and collaboration."
              />
              
              <FeatureCard
                icon={<Icon>📚</Icon>}
                title="Storybook"
                description="A living catalog of components and patterns. Designers and developers verify states, accessibility, and usage here. We document props, examples, and guardrails for reuse."
              />
              
              <FeatureCard
                icon={<Icon>📖</Icon>}
                title="GitBook"
                description="Public docs and curriculum. Onboarding guides, playbooks, and design-system usage live here so knowledge isn't trapped in chat threads."
              />
              
              <FeatureCard
                icon={<Icon>🎥</Icon>}
                title="tl;dv"
                description="Lightweight recording and highlight tool for workshops and demos. We capture key moments, tag follow-ups, and share snippets with members in other time zones."
              />
              
              <FeatureCard
                icon={<Icon>💬</Icon>}
                title="Discord"
                description="Day-to-day HQ. Channels mirror product teams and departments; standups, checkpoints, and quick design/dev questions happen here."
              />
              
              <FeatureCard
                icon={<Icon>🗄️</Icon>}
                title="Strapi"
                description="Headless CMS for content that needs first-class handling (site sections, learning resources, campaigns). Keeps content updates out of the code deploy loop."
              />
            </div>
          </div>
        </section>
        {/* Comprehensive Curriculum Section */}
        <section className="py-24 px-4 md:px-8 bg-gray-900/30">
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
                Comprehensive Learning Curriculum
              </atoms.Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our curriculum is project-driven and mentor-guided. You'll set SMART goals at onboarding, 
                then work through role-based assignments aligned to your team's stage and your learning objectives.
              </p>
            </div>

            {/* Learning Pathways */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">Learning Pathways</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon>🎨</Icon>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Design Track</h4>
                  <ul className="text-gray-300 text-sm space-y-2 text-left">
                    <li>• User Research & Personas</li>
                    <li>• Wireframing & Prototyping</li>
                    <li>• Design Systems & Tokens</li>
                    <li>• Accessibility Standards</li>
                    <li>• Figma Mastery</li>
                    <li>• Design-Dev Handoff</li>
                  </ul>
                </Card>

                <Card className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon>💻</Icon>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Development Track</h4>
                  <ul className="text-gray-300 text-sm space-y-2 text-left">
                    <li>• React & TypeScript</li>
                    <li>• Component Architecture</li>
                    <li>• Git & GitHub Workflow</li>
                    <li>• Testing & QA</li>
                    <li>• Performance Optimization</li>
                    <li>• Code Review Process</li>
                  </ul>
                </Card>

                <Card className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon>🔬</Icon>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Research Track</h4>
                  <ul className="text-gray-300 text-sm space-y-2 text-left">
                    <li>• User Interview Techniques</li>
                    <li>• Data Analysis & Insights</li>
                    <li>• Usability Testing</li>
                    <li>• Competitive Analysis</li>
                    <li>• Research Documentation</li>
                    <li>• Stakeholder Communication</li>
                  </ul>
                </Card>

                <Card className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon>📊</Icon>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Product Track</h4>
                  <ul className="text-gray-300 text-sm space-y-2 text-left">
                    <li>• Product Strategy & Vision</li>
                    <li>• User Story Writing</li>
                    <li>• Sprint Planning & Estimation</li>
                    <li>• Stakeholder Management</li>
                    <li>• Metrics & Analytics</li>
                    <li>• Product Roadmapping</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Learning Stages */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">Learning Stages</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <h4 className="text-xl font-semibold text-white">Discovery Phase</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Understanding user needs, market research, and defining product requirements.</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• User interviews and surveys</li>
                    <li>• Competitive analysis</li>
                    <li>• Problem definition</li>
                    <li>• Initial wireframes</li>
                  </ul>
                </Card>

                <Card>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <h4 className="text-xl font-semibold text-white">Iteration Phase</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Building, testing, and refining features based on user feedback and data.</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Rapid prototyping</li>
                    <li>• User testing sessions</li>
                    <li>• Feature development</li>
                    <li>• Continuous feedback loops</li>
                  </ul>
                </Card>

                <Card>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <h4 className="text-xl font-semibold text-white">Finalization Phase</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Polishing, optimizing, and preparing for launch with comprehensive testing.</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Performance optimization</li>
                    <li>• Accessibility compliance</li>
                    <li>• Launch preparation</li>
                    <li>• Documentation & handoff</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Learning Methods */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">How Learning Happens</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <div className="flex items-center mb-4">
                    <Icon>👥</Icon>
                    <h4 className="text-xl font-semibold text-white ml-4">Mentor-Led Learning</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Experienced industry professionals guide your learning journey through:
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Weekly 1-on-1 mentorship sessions</li>
                    <li>• Code and design reviews</li>
                    <li>• Career guidance and portfolio building</li>
                    <li>• Industry insights and best practices</li>
                  </ul>
                </Card>

                <Card>
                  <div className="flex items-center mb-4">
                    <Icon>🚀</Icon>
                    <h4 className="text-xl font-semibold text-white ml-4">Project-Based Learning</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Learn by building real products that solve actual problems:
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Work on live projects with real users</li>
                    <li>• Contribute to open-source initiatives</li>
                    <li>• Build portfolio-worthy projects</li>
                    <li>• Experience full product lifecycle</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Assessment & Progress */}
            <div className="text-center">
              <Card className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Assessment & Progress Tracking</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      📈
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">SMART Goals</h4>
                    <p className="text-gray-300 text-sm">Set specific, measurable goals at onboarding and track progress quarterly.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      🎯
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Portfolio Artifacts</h4>
                    <p className="text-gray-300 text-sm">Build a portfolio of real work including designs, code, and research.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      🏆
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Peer Reviews</h4>
                    <p className="text-gray-300 text-sm">Regular feedback from mentors and peers through code reviews and critiques.</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/curriculum" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    View Full Curriculum Details →
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* What to Expect When You Join */}
        <section className="py-24 px-4 md:px-8">
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
                What to Expect When You Join
              </atoms.Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon>🎯</Icon>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Onboarding & Placement</h3>
                <p className="text-gray-300 text-sm">
                  We place you on a product team based on your goals, skills, and team capacity. 
                  You'll be matched with a mentor who aligns with your learning objectives.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon>🚀</Icon>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">First Issue</h3>
                <p className="text-gray-300 text-sm">
                  Start with a well-scoped task to learn our workflow and tools. 
                  This helps you understand our processes while contributing meaningfully.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon>💬</Icon>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Regular Feedback</h3>
                <p className="text-gray-300 text-sm">
                  Mentors review your work during sprints; quarterly check-ins track 
                  progress against your SMART goals and career development.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon>📁</Icon>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Portfolio Artifacts</h3>
                <p className="text-gray-300 text-sm">
                  Build real designs, PRs, research readouts, and component stories 
                  that showcase collaboration and impact for your professional portfolio.
                </p>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join a community of learners building real products while developing industry-relevant skills. 
                  Our mentor-led approach ensures you get the guidance and experience needed to advance your career.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Apply Now →
                  </Link>
                  <Link href="/curriculum" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300">
                    View Curriculum
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
