/* eslint-disable react/no-unescaped-entities */
import { atoms } from '@devlaunchers/components/components';
import Image from 'next/image';

const teamMembers = {
  'chung-ting-huang': {
    name: 'Chung-Ting Huang',
    title: 'Co-Founder; President; Product Department Manager',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FAiWklDJ4AcEszC8yfvJB%252Fchung-ting-profile.jpg%3Falt%3Dmedia%26token%3D2a2178d4-a030-45fd-aec3-aa8f8c676af4&width=300&dpr=2&quality=100&sign=785e0024&sv=2',
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
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FFVorvYOsFCp2CiqNBTP6%252Flinkedin_pic.JPG%3Falt%3Dmedia%26token%3Dd97e54cf-6aba-43cd-b3ed-8a2a361224d7&width=300&dpr=2&quality=100&sign=84af1e8&sv=2',
    shortBio:
      'Anna leads Dev Launchers’ Universal Design System (UDS) — a multi-project, token-driven component library that unifies accessibility and visual consistency across product teams. She mentors members in advanced Figma workflows (variables, theming, component governance) and accessibility-conscious UI. As a Board member, Anna shapes visual strategy and embeds design best practices across IdeaSpace, Dev Recruit, and User Profile.',
    fullBio:
      'As Director of Design and Product Owner for UDS, Anna steers the architecture and governance of a scalable, token-based library used across products. She coaches members on systems thinking in Figma—variables, semantic tokens, variants, library governance—and partners with Product and Engineering to ensure smooth design-to-dev handoff. On the Board of Directors, she reinforces accessibility (WCAG-minded patterns), component reuse, and measurable design quality.',
    teachings: [
      'Figma variables, tokens, and semantic theming',
      'Component library governance & contribution workflows',
      'Accessible UI patterns (WCAG) & Dev Mode handoff',
      'AI-assisted design workflows and documentation',
    ],
    focusAreas:
      'Accessibility & inclusive practices • Design systems & component governance • AI for personalization & accessibility workflows',
    degrees: [
      'B.A., User Experience Design — St. Edwards University',
      'A.A., Architecture — Blinn College',
    ],
    certifications: [
      'Intro to AI Ethics (Kaggle) • 5-Day GenAI Intensive Badge (Google/Kaggle) • Cert Prep: Scrum Master (LinkedIn Learning) • Designing Accessible Components in Figma; Simplifying Web Dev with Accessibility (LinkedIn Learning) • Foundations of UX Design (Coursera)',
    ],
    links: {
      linkedin: 'annaisaacks',
      figma_community: '@annaisaacks',
      portfolio: 'annaisaacks.com',
    },
    contact: 'anna.isaacks@devlaunchers.com',
  },

  'dave-bradham': {
    name: 'Dave Bradham',
    title: 'Director of Development; Treasurer; Board of Directors',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252F0mqVga836opumxooiP0o%252Fdave-b-profile.jpg%3Falt%3Dmedia%26token%3Dad5f601f-e59e-4fef-923f-e1b7f2f6d4f6&width=300&dpr=2&quality=100&sign=3b055a55&sv=2',
    shortBio:
      'Dave leads engineering for Dev Launchers’ open-source projects and serves as Treasurer on the Board of Directors. He sets technical direction, ensures quality and maintainability, and partners with Product and Design to translate Figma into reliable, accessible builds. He mentors developers in code quality, GitHub workflows, and cross-functional delivery. Outside Dev Launchers, he is a Lead Software Engineer at Banyan Water.',
    fullBio:
      'As Director of Development, Dave oversees the technical health of Dev Launchers’ product ecosystem—guiding architecture, review practices, and design-to-dev collaboration across IdeaSpace, Dev Recruit, and the User Profile platform. He promotes readable, testable code and a strong feedback culture through issues, PR reviews, and paired problem-solving, ensuring teams ship maintainable, accessible, and performant features on a predictable cadence. As Treasurer, he supports organizational planning through budget stewardship and operational transparency, aligning engineering capacity with strategic priorities.',
    teachings: [
      'Front-end architecture & component systems (React/TypeScript, Storybook)',
      'Code review hygiene, testing basics, and PR best practices',
      'GitHub workflows (issues, branches, CI basics)',
      'Design-to-dev collaboration, accessibility & performance checks',
    ],
    focusAreas:
      'Front-end architecture & component systems • Code quality & reviews • GitHub workflows • Design-to-dev collaboration • Accessibility & performance',
    degrees: [
      'B.A., Geographic Information Science & Cartography — The University of Texas at Austin (2016–2019)',
    ],
    links: {
      linkedin: 'david-bradham-1a926b9a',
      github: 'dbradham',
    },
    contact: 'dave.b@devlaunchers.com',
  },

  'rijul-saxena': {
    name: 'Rijul Saxena',
    title: 'Research Department Lead',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FRtwr7eJ0GcKKw06xsk81%252FSOIC-professional.jpeg%3Falt%3Dmedia%26token%3Dfb6c1002-b616-4718-bfbc-21427fd5ab14&width=300&dpr=2&quality=100&sign=b5e01f4&sv=2',
    shortBio:
      'Rijul leads Research, running studies that directly inform product decisions. With a background in Psychology and an MS in HCI, he fosters collaboration via research workshops, mentoring on methods and analysis, and process refinements—creating open spaces where ideas become actionable insights that drive progress.',
    fullBio:
      'Rijul oversees end-to-end research at Dev Launchers—planning studies, selecting methods, and translating evidence into prioritized design and product changes. He mentors members in study design and analysis, and builds repeatable pipelines that turn findings into decision-ready recommendations tied to backlogs and design artifacts. He runs collaborative workshops, coaches methods and analysis, and refines research processes so work is efficient, ethical, and impactful. His facilitation emphasizes accessibility and psychological insight, cultivating a culture where evidence drives the roadmap.',
    teachings: [
      'Study design & recruiting (interviews, surveys, usability testing)',
      'Analysis & synthesis (coding, affinity mapping, triangulation)',
      'Insight → recommendation pipelines & readout storytelling',
      'Workshops, mentoring, and research ops/ethics',
    ],
    focusAreas:
      'Mixed-methods research • Evidence-to-action pipelines • Research ops & ethics • Accessibility in evaluation',
    degrees: [
      'M.S., Human–Computer Interaction — Indiana University Indianapolis',
      'M.A., Psychology — Banaras Hindu University',
      'B.A., Psychology — University of Delhi',
    ],
    certifications: [
      'CITI Program (Biomedical Researcher; GCP; Responsible Conduct of Research—Biomedical & Social/Behavioral) • Intro to UX Principles & Processes (Coursera) • Intro to Data Science in Python (Coursera) • UGC NET (Assistant Professorship qualification)',
    ],
    links: {
      linkedin: 'risaxe',
      portfolio: 'risaxe.com',
    },
    contact: 'rijul.s@devlaunchers.com',
  },

  'alina-ulybina': {
    name: 'Alina Ulybina',
    title: 'IdeaSpace Product Owner & Lead Designer',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FuR5atYWO7hgM74H0ShPM%252Falina-u-profile.jpeg%3Falt%3Dmedia%26token%3D95bc8c04-41e3-40fd-9526-eb6293337e5f&width=300&dpr=2&quality=100&sign=9376d37c&sv=2',
    shortBio:
      'Alina leads IdeaSpace, Dev Launchers’ internal platform for project ideation and collaboration. She guides members end-to-end—from concept maps and user journeys to high-fidelity Figma prototypes and developer handoff—emphasizing creative problem-solving, UI craft, and cross-department collaboration. She also contributes to org-wide design initiatives and the Universal Design System.',
    fullBio:
      'As Product Owner & Lead Designer for IdeaSpace, Alina runs discovery through delivery: facilitating workshops, mapping flows and journeys, prioritizing backlogs, and translating insights into shippable designs. She mentors members in modern Figma workflows (auto layout, variants, variables, component governance), thoughtful interaction patterns, accessible UI, and developer-ready annotations/Dev Mode. Her sessions blend creativity with rigor—pairing pixel-level craft with clear acceptance criteria—so teams move from ideas to reliable releases.',
    teachings: [
      'Discovery facilitation: problem framing, flows & journey maps',
      'Figma systems: auto layout, variants, variables, library hygiene',
      'Hi-fi prototyping, UI polish, and interaction patterns',
      'Dev handoff: annotations, acceptance criteria, and specs',
    ],
    focusAreas:
      'Product discovery & facilitation • UI systems & visual polish • Figma prototyping & developer handoff • Cross-department collaboration',
    degrees: [
      'M.A./M.Ed., Education — Moscow Pedagogical State University (2020–2023)',
      'M.A./M.Ed., Education — Moscow Pedagogical State University (2020–2023)',
    ],
    certifications: [
      'Google UX Design Professional Certificate — Coursera (Jul 2024) • Build Dynamic UIs for Websites — Coursera (Jan 2024) • Create High-Fidelity Designs & Prototypes in Figma — Coursera (Dec 2023) • Project Execution: Running the Project — Google/Coursera (Jul 2025) • EF SET English Certificate 73/100 (C2 Proficient) — EF SET (Apr 2025)',
    ],
    links: {
      linkedin: 'alina-ulybina-9b191722a',
      portfolio: 'https://alinauportfolio.framer.website/',
    },
    contact: 'alina.u@devlaunchers.com',
  },

  'francis-anigbogu': {
    name: 'Francis Aniebogu',
    title: 'Product Manager; User Profile & Community Development',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FIqk5uhocmr5nR2ENK8Jp%252FIMG_5001%2520%281%29.jpg%3Falt%3Dmedia%26token%3Df4f06968-c8bd-42f7-ab78-92bb0de4e442&width=300&dpr=2&quality=100&sign=d8ebcc77&sv=2',
    shortBio:
      'Francis leads the User Profile & Community team, driving the roadmap for member profiles and engagement tools. He mentors designers and developers through discovery → delivery, sets clear acceptance criteria, and uses lightweight KPIs to track onboarding, engagement, and feature adoption. With an M.S. in Engineering Management focused on data engineering, he bridges technical depth with product strategy for SaaS/community platforms',
    fullBio:
      'As Product Manager for User Profile & Community, Francis defines strategy, prioritizes backlogs, and facilitates cross-functional delivery across Design, Research, and Development. He collaborates with Research to run discovery, translates insights into decision-ready requirements, and maintains transparent cadence (planning, estimation, sprint reviews, retros). He supports open-source contributors with clear specs and product-side PR reviews, and mentors early-career technologists in outcome-driven product thinking. His focus: secure, accessible, and scalable community tools that improve onboarding flow, contributor retention, and feature adoption.',
    teachings: [
      'Writing user stories & acceptance criteria that tie to KPIs',
      'Discovery interviews/surveys and feedback loops for community tools',
      'Funnel analytics: onboarding, engagement, and feature adoption',
      'Open-source product ops: specs, PR review, contributor mentorship',
    ],
    focusAreas:
      'Community & profile platforms • Product discovery & roadmapping • KPI design & analytics • Agile program management • Privacy & compliance',
    degrees: [
      'M.S., Engineering/Industrial Management — University of Houston–Clear Lake (2023–2024; GPA 3.82)',
      'B.S., Medical Technology — University of Nigeria, Nsukka',
    ],
    certifications: [
      'AI for Product Management — Pendo (Jun 2025) • Fundamentals of Agile Project Management; Fundamentals of Predictive Project Management — PMI (Jun 2025) • Atlassian Agile PM Professional Certificate — Atlassian (May 2025) • Career Essentials in Project Management — Microsoft & LinkedIn (May 2025) • Cert Prep: PMI-ACP — LinkedIn Learning (May 2025) • Data Engineering Foundations — LinkedIn Learning (May 2025) • Product Management: Building a Product Roadmap — LinkedIn Learning (May 2025) • Joint Certificate: PM & Six Sigma Green Belt (PMSS) — UHCL (Dec 2024) • Supply Chain & Analytics Certificate (SCA) — UHCL (Dec 2024) • Data Analyst Associate — DataCamp • JavaScript Algorithms & Data Structures; Responsive Web Design — freeCodeCamp',
    ],
    links: {
      linkedin: 'francis-anigbogu',
    },
    contact: 'francis.a@devlaunchers.com',
  },

  'thomas-narendra': {
    name: 'Thejas Narendra',
    title: 'Product Manager; Dev Recruit',
    image:
      'https://docs.devlaunchers.org/dl-docs/~gitbook/image?url=https%3A%2F%2F2977404816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FeXJoJnQUFdJ4YZ9kGUck%252Fuploads%252FjcqEG6Src35b53xPj4hx%252Fthejas-profile.jpg%3Falt%3Dmedia%26token%3Daae47f18-cd86-4f87-ac9c-bd5123e8aede&width=300&dpr=2&quality=100&sign=a3de1f4&sv=2',
    shortBio:
      'Thejas leads Dev Recruit, the internal platform that streamlines recruiting and onboarding. He owns the roadmap, aligns PMs on openings and capacity, and mentors the team in data-driven product decisions—from intake and screening to matching and onboarding. His background in engineering management and process optimization translates insights into features that reduce time-to-placement and improve candidate experience.',
    fullBio:
      'As Product Manager for Dev Recruit, Thejas drives strategy and delivery for our recruiting and onboarding pipeline. He partners with Design, Research, and Engineering to run discovery, write decision-ready requirements, and prioritize a transparent backlog. He facilitates agile cadence (planning, estimation, reviews, retros), builds lightweight analytics to track conversion and placement rates, and emphasizes clear acceptance criteria so teams ship reliably. His work centers on scalable, compliant workflows that help project managers publish openings, simplify screening, and onboard members efficiently.',
    teachings: [
      'Recruiting funnel design: intake → screening → matching → onboarding',
      'Writing requirements and acceptance criteria for platform workflows',
      'Funnel analytics & dashboards (conversion, time-to-placement)',
      'Agile ceremonies and cross-functional delivery',
    ],
    focusAreas:
      'Recruiting & onboarding platforms • Product discovery & analytics • Process optimization • Agile program management • Cross-functional delivery',
    degrees: [
      'M.S., Engineering Management (Industrial Engineering Management) — Texas State University (Aug 2022–May 2024; GPA 3.80)',
      'B.E., Mechanical Engineering — Visvesvaraya Technological University',
    ],
    certifications: [
      'Data Analytics • Design of Experiments • Product Design & Development • Project Management • SAP ERP — Texas State University',
    ],
    links: {
      linkedin: 'thejasnarendra',
    },
    contact: 'thejas.n@devlaunchers.com',
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
              loader={({ src }) => src}
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
            {member.links.linkedin && (
              <>
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
              </>
            )}
            {member.links.github && (
              <>
                GitHub:
                <a
                  href={`https://github.com/${member.links.github}`}
                  className="text-blue-400 hover:text-blue-300 ml-2 mr-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.links.github} ↗
                </a>
                <br />
              </>
            )}
            {member.links.figma_community && (
              <>
                Figma Community:
                <a
                  href={`https://www.figma.com/${member.links.figma_community}`}
                  className="text-blue-400 hover:text-blue-300 ml-2 mr-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.links.figma_community} ↗
                </a>
                <br />
              </>
            )}
            {member.links.portfolio && (
              <>
                Portfolio:
                <a
                  href={`https://${member.links.portfolio}`}
                  className="text-blue-400 hover:text-blue-300 ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.links.portfolio} ↗
                </a>
              </>
            )}
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
