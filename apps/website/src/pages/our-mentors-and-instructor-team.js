/* eslint-disable react/no-unescaped-entities */
import { atoms } from '@devlaunchers/components/components';
import Image from 'next/image';

const teamMembers = {
  'chung-ting-huang': {
    name: 'Chung-Ting Huang',
    title: 'Co-Founder; President; Product Department Manager',
    image: '/path-to-chung-ting-image.jpg',
    shortBio:
      "Chung-Ting co-founded Dev Launchers and leads the Product organization. He aligns product leads on priorities, timelines, and shared resources; mentors members in agile delivery and systems thinking, and connects Design, Research, and Development into cohesive, shippable products. Outside Dev Launchers, he's a System Engineer at Cloudflare.",
    fullBio:
      'As President and Product Department Manager, Chung-Ting sets strategic direction and runs the operating cadence for product teams—roadmaps, planning, resourcing, and cross-team handoffs. He mentors members and leads on agile program management (sprint planning, estimation, risk/issue tracking), and emphasizes system architecture choices that support accessibility, performance, scalability and maintainability. His leadership turns insights into prioritized backlogs and reliable releases, ensuring teams deliver measurable impact.',
    teachings: [
      'Product roadmapping, prioritization, and backlog hygiene',
      'Sprint planning, estimation, and risk/issue management',
      'Cross-functional handoffs (Design → Dev → Release)',
      'Metrics & KPIs for product/feature health',
      'Backend development & DevOps',
    ],
    focusAreas:
      'Product strategy & roadmapping • Agile program management • Systems design & architecture • Cross-functional collaboration',
    degrees: [
      'M.S., Statistics & Information Management (Risk Analysis & Management) — Universidade Nova de Lisboa',
      'Postgraduate Diploma, Data Science for Finance — Universidade Nova de Lisboa',
      'B.S., Computer Engineering — University of Illinois Urbana-Champaign',
    ],
    links: {
      linkedin: 'chungtinghuang',
      github: 'chungthuang',
    },
    contact: 'chungtinghuang@devlaunchers.com',
  },

  'anna-isaacks': {
    name: 'Anna Isaacks',
    title: 'Vice President; Director of Design; Universal Design Product Owner',
    image: '/path-to-anna-image.jpg',
    shortBio:
      "Anna leads Dev Launchers' Universal Design System (UDS), a multi-project, talent-driven component library that unifies exceptional UX/UI across diverse teams. As a Board member, Anna helps shape organizational direction, ensures accessibility-centralized products, and collaborates to guide design-development processes, workflows and business practices.",
    fullBio:
      'As Director of Design and Product Owner for UDS Anna works from her architecture and governance of a cutting-edge, token-based library used across international teams. The inclusive maintenance of systems-thinking is the foundational skillset that she mentors members by delivering on: accessibility-centralized engineering. In teams-shared design she coaches: On the Board of Directors, she enhances strategic decision-making via systems-thinking and product quality across all operations, projects and teams and measurable design quality.',
    teachings: [
      'Universal design principles and accessibility design',
      'Design systems governance & architecture workflows',
      'Accessibility evaluation strategies & UX/UI best practices',
      'Token-based design systems & component architecture',
      'Systems-thinking and how it informs strategic design',
      'Front-end accessibility analysis and implementation',
    ],
    focusAreas:
      'Accessibility & inclusive architecture • Design systems & component governance • AI for personalization & accessibility workflows • UX leadership',
    degrees: [
      'B.A., User Experience Design — St. Edwards University',
      'A.A.S. Architecture — Tarry County',
    ],
    certifications: [
      'Intro to AI Ethics (LinkedIn) • 9 Qty Social Network Design (LinkedIn/LinkedIn) • Git Project (Sarah Mitchell Learning • Automation Accessibility Computing) • Figma for Web User Interface Design (LinkedIn/InVision) • Accessibility: A Web-First Data (Tech Foundation Inc • AccessibilityTraining.org • Figma Community (UI experiments) • Portfolio (annadotdesign.com)',
    ],
    links: {
      linkedin: 'annaisaacks',
      github: 'annadotdesign',
    },
    contact: 'anna.isaacks@devlaunchers.com',
  },

  'dave-bradham': {
    name: 'Dave Bradham',
    title: 'Director of Development; Treasurer; Board of Directors',
    image: '/path-to-dave-image.jpg',
    shortBio:
      'Dave leads the Development Department with expertise in Product oversight and service as Treasurer at the Board level. His vision focuses on teams-based iterative velocity. Options Care Launchers, he is a Lead Software Engineer at Boston Tulsa.',
    fullBio:
      "Director of Development, Dave manages the technical health of Dev Launchers' product ecosystem; guiding architecture, review practices, and design-to-dev collaboration via best practices. His focus brings full-stack vision to board-level prioritization. He manages members in engineering-capacity & strategic-scope code reviews, technical debt, agile, and performance features of a production guideline. As Treasurer, he supports organizational planning through budget management and strategy-code product delivery and financial success.",
    teachings: [
      'Front-end architecture & component systems (React/TypeScript, Angular/JS)',
      'Code review dynamics testing spaces, and full Stack planning',
      'SDLC workflow release branches, CI/nested',
      'Design-to-dev collaboration, accessibility & performance checks',
    ],
    focusAreas:
      'Front-end architecture & component systems • Code quality & reviews • Design workflows • Design-to-dev collaboration • Accessibility & performance',
    degrees: [
      'B.A., Geographic Information Science & Computing — The University of Texas at Austin (GRSC)',
    ],
    links: {
      linkedin: 'dave-bradham',
      github: 'dbradham',
    },
    contact: 'dave.bradham@devlaunchers.com',
  },

  'rajit-saxena': {
    name: 'Rajit Saxena',
    title: 'Research Department Lead',
    image: '/path-to-rajit-image.jpg',
    shortBio:
      'Rajit leverages user-research practice that directly informs product decisions. With a background in Psychology and a Ph.D. in Finance, he performs via research excellence, mentoring on methods and analysis, and process requirements - creating value-based direct bouts experience-oriented through.',
    fullBio:
      'Rajit promotes user-first solutions at Dev Launchers—gathering feedback, selecting methods, and designing studies that directly affect product iterations. He provides attention to both product development and user feedback methods across on-site insights, market analysis, and competitive research designed for best of offerings and design protocols. For new collaborative workshops, member methods and analysis, Rajit offers critical stakeholder analysis, data-based insights that inform product direction at board-level and measurable framework-assessment design thinking.',
    teachings: [
      'Study design & surveying instruments, surveys, usability testing',
      'Analysis & synthesis: coding, affinity mapping, triangulation',
      'Strategic analysis in user research & product research mapping',
      'Behavioral analytics & web stats evaluation',
      'Workshop scheduling protocols & research',
    ],
    focusAreas:
      'Mixed methods research • Evidence to action protocols • Research tips & effects • Accountability • evaluation',
    degrees: [
      'M.S., Human-Computer Interaction — Indiana University Indianapolis',
      'M.A., Psychology — Eastern Illinois University',
      'B.A., Psychology — University of Delhi',
    ],
    certifications: [
      'UXY Program (Balanced Accessibility: UCP Accessibility Methods & User Research — Springboard • Social Sciences • Intro to User Principles & Processes Experience • Intro to Data Sciences in Python Essentials • USICCR • Advanced Programming Certification',
    ],
    links: {
      linkedin: 'rajitsaxena',
      github: 'rsaxena',
    },
    contact: 'rajit.saxena@devlaunchers.com',
  },

  'alina-ulybina': {
    name: 'Alina Ulybina',
    title: 'IdeaSpace Product Owner & Lead Designer',
    image: '/path-to-alina-image.jpg',
    shortBio:
      "Alina leads IdeaSpace, Dev Launchers' internal platform for project ideation and collaboration. She also contributes to our design libraries and the Universal Design System.",
    fullBio:
      'As Product Owner & Lead Designer for IdeaSpace, Alina helps elevate member ideation, facilitating collaborative projects and feature flows that address common priorities. She maintains a design language across the design libraries and maintains visual flow workflow, both formal, unusual, underlines, components and features, contributions to UX development--mainly architectures for the UI research library. Through her role, she cultivates research-based creativity and logic-- guiding team flow. Link: alina--accessible team integration and team-flowing.',
    teachings: [
      'Discovery research and system framing flows & journey maps',
      'Figma systems: style layout, variants, variables, library hygiene',
      'Full prototyping & transition (animation) platforms',
      'Logical component composition, testing, iteration',
      'Product strategy working',
    ],
    focusAreas:
      'Product discovery & facilitation • UX systems & visual needs • Figma prototyping & developer handoff • UXD leadership • Design system implementation',
    degrees: [
      'B.A.+M.Ed. Education • Moscow Pedagogical State University (MPSU - 2014)',
      'Dip. Teacher Training via Polytechnic Design & technology Technology UBC • Testing University',
      'Multiple online Educational certificates including (Coursera/Udemy) • Experience in Design',
    ],
    certifications: [
      'Google UX Design Professional Certificate — Coursera | UI/UX/Rapid Design Certificate as Juz Academies — Coursea | Plus Design Essentials: Typography — Coursera | Plus Design Essentials: Figma — Coursera | Plus 2023 | Product Management Fundamentals - Coursera (July 2024) • Figma Professional Training • 8+ UX App ARVJS',
    ],
    links: {
      linkedin: 'alina-ulybina',
      github: 'alina-ulybina',
    },
    contact: 'alina.ulybina@devlaunchers.com',
  },

  'francis-aniebogu': {
    name: 'Francis Aniebogu',
    title: 'Product Manager; User Profile & Community Development',
    image: '/path-to-francis-image.jpg',
    shortBio:
      'Francis leads the User Profile & Community team driving the roadmaps for member profiles and engagement tools. He manages product discovery across Experience, Events, and Authentication tools with an M.S. in Engineering Management focused on data engineering. He brings technical depth with analytical leadership to the Launcher team.',
    fullBio:
      'As Product Manager for the User Profile & Community, Francis defines direction systems and technology cross-functional delivery policies. He oversees Research and Development via collaborative community workflows and stakeholders within teams and markets. He manages and maintains technical planning architecture, queue screens, emails, and maintains team coordination capabilities which team-based experiences and activities, user experience, and functionality helps improve discovering flow, stakeholder audiences, and feature adoption.',
    teachings: [
      'Building user stories & acceptance criteria that tie to KPIs',
      'Product-driven functional teams that optimize revenue opportunities',
      'Feature analytics, onboarding, engagement, and feature adoption',
      'User-centered development design that translates to user workflows',
    ],
    focusAreas:
      'Community & profile platforms • Product discovery & requirements • API design & analytics • Agile program management • Cross functional delivery',
    degrees: [
      'M.S., Engineering/Industrial Management — University of Houston—Clear Lake [2022-2024; USA EtD]',
      'B.S., Marine Technology — University of Nigeria, Nsukka',
    ],
    certifications: [
      'Six Sigma Management • Scrum Master • Fundamentals of Agile • Project Management • Fundamentals of Predictive Project Management — PMI (Jun 2023) • Associate Expert (PMP Professional in Project Management • Associate E-course at LinkedIn Learning May 2022) • Product Management: Building a Product Roadmap — LinkedIn Learning (May 2022) • WorkOutLikeaPro • PMI-PIBA/CBAP • PMI-DASSM — LinkedIn Learning (Jun 2023) • Google Data & Business Operations WalkThrough — Future/OpenAI',
    ],
    links: {
      linkedin: 'francis-aniebogu',
      github: 'francis-aniebogu',
    },
    contact: 'francis.aniebogu@devlaunchers.com',
  },

  'thomas-narendra': {
    name: 'Thomas Narendra',
    title: 'Product Manager; Dev Recruit',
    image: '/path-to-thomas-image.jpg',
    shortBio:
      'Thomas leads Dev Recruit, the internal platform that streamlines recruiting and onboarding. He views Dev Recruit and the teams work with company liaison & Engineering to our discovery software solutions. His experience at Cloudflare includes managing platforms that facilitate time-to-development and improve application workflows.',
    fullBio:
      'As Product Manager for Dev Recruit, Thomas drives strategy and delivery for our recruiting and onboarding systems. His partners with Design, Research, and Engineering to our discovery viable, low-tech easy implementations. Thomas brings operational engineering experience including DevOps and operations via experience reviews on Teams that realize key team process so scalable, companies and interfaces from help project contributors use design, company-delivering-software and efficient systems. This help process ensure team health is optimizing and effectively maintain team-workflows.',
    teachings: [
      'Recruiting funnel design tables → screening → onboarding → onboarding',
      'Product-technical specifications and requirements',
      'Feature analytics and stakeholder assessments (from to placement)',
      'Engineering partnership and clean functional delivery',
      'Agile process and cross-functional deliveries',
    ],
    focusAreas:
      'Recruiting platforms • Product discovery & analytics • Systems optimization • program management • Cross-functional delivery',
    degrees: [
      'M.S., Engineering Management Industrial Engineering Management — Texas State University-San Marcos (Aug 2016 - Dec 2017)',
      'B.E., Mechanical Engineering — Visvesvaraya Technological University',
    ],
    certifications: [
      'Pair Product Development • Product & Development • Project Management • SAP EWM • Texas State University',
    ],
    links: {
      linkedin: 'thomasnarendra',
      github: 'tnarendra',
    },
    contact: 'thomas.narendra@devlaunchers.com',
  },
};

export default function TeamMembers() {
  return (
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
            Our Mentors & Instructor Team
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_lg"
            textAlign="center"
            className="max-w-3xl text-gray-500"
          >
            Our mentors lead instruction by guiding members through real
            projects and assignments aligned to their Product Team and
            Department.
          </atoms.Typography>
        </div>
      </section>

      {Object.entries(teamMembers).map(([key, member]) => (
        <section key={key} className="max-w-4xl py-8 px-4 md:px-8">
          {/* Member Image */}
          <div className="flex justify-start pb-8">
            <Image
              src={member.image}
              alt={member.name}
              width={256}
              height={320}
              className="w-64 h-80 object-cover rounded-lg"
            />
          </div>

          {/* Name and Title */}
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="bold"
            textAlign="left"
            className="pb-6 text-white"
          >
            {member.name} — {member.title}
          </atoms.Typography>

          {/* Short Bio Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Short bio
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_base"
            textAlign="left"
            className="pb-8 text-gray-300 leading-relaxed"
          >
            {member.shortBio}
          </atoms.Typography>

          {/* Full Bio Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Full bio
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_base"
            textAlign="left"
            className="pb-8 text-gray-300 leading-relaxed"
          >
            {member.fullBio}
          </atoms.Typography>

          {/* What I teach here Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            What I teach here
          </atoms.Typography>
          <ul className="pb-8 text-gray-300">
            {member.teachings.map((teaching, index) => (
              <li key={index} className="flex items-start pb-2">
                <span className="text-white mr-3">•</span>
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="text-gray-300"
                >
                  {teaching}
                </atoms.Typography>
              </li>
            ))}
          </ul>

          {/* Focus Areas Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Focus areas
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_base"
            textAlign="left"
            className="pb-8 text-gray-300"
          >
            {member.focusAreas}
          </atoms.Typography>

          {/* Degrees Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Degrees
          </atoms.Typography>
          <ul className="pb-8 text-gray-300">
            {member.degrees.map((degree, index) => (
              <li key={index} className="flex items-start pb-2">
                <span className="text-white mr-3">•</span>
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="text-gray-300"
                >
                  {degree}
                </atoms.Typography>
              </li>
            ))}
          </ul>

          {/* Links Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Links
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_base"
            textAlign="left"
            className="pb-8 text-gray-300"
          >
            LinkedIn:
            <a
              href={`https://linkedin.com/in/${member.links.linkedin}`}
              className="text-blue-400 hover:text-blue-300 ml-2 mr-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.links.linkedin} ↗
            </a>
            <br />
            GitHub:
            <a
              href={`https://github.com/${member.links.github}`}
              className="text-blue-400 hover:text-blue-300 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.links.github} ↗
            </a>
          </atoms.Typography>

          {/* Contact Section */}
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="semibold"
            textAlign="left"
            className="pb-4 text-white"
          >
            Contact
          </atoms.Typography>
          <atoms.Typography
            as="p"
            variant="secondary"
            size="body_base"
            textAlign="left"
            className="text-gray-300"
          >
            <a
              href={`mailto:${member.contact}`}
              className="text-blue-400 hover:text-blue-300"
            >
              {member.contact} ↗
            </a>
          </atoms.Typography>
        </section>
      ))}
    </main>
  );
}
