/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationJump,
  PaginationLink,
} from '@devlaunchers/components/components/Pagination/Pagination';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@devlaunchers/components/components/molecules/Tab/Tab';
import { useSheetsContext } from '../context/SheetsContext';

const Card = ({ href, imageSrc, title, description }) => (
  <a
    href={href}
    className="group flex flex-col h-full overflow-hidden rounded-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
  >
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={imageSrc || '/api/placeholder/400/320'}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col flex-grow p-6">
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm flex-grow">
        {description || 'No description available.'}
      </p>
      <div className="flex items-center mt-4 text-purple-400 text-sm font-medium">
        Learn More
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </a>
);

const PaginatedGrid = ({ items, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-4">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            href={item.href}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationJump
                    destination="first"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationJump
                    destination="previous"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => prev - 1);
                    }}
                  />
                </PaginationItem>
              </>
            )}

            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages && (
              <>
                <PaginationItem>
                  <PaginationJump
                    destination="next"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => prev + 1);
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationJump
                    destination="last"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(totalPages);
                    }}
                  />
                </PaginationItem>
              </>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default function Resources() {
  const { learnPageData, createPageData } = useSheetsContext();

  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto max-w-full min-h-screen bg-black text-white py-16">
        <section className="max-w-5xl py-32 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold max-w-4xl text-5xl lg:text-7xl leading-tight text-center align-center border-none border-0 m-0 pt-0 pb-4 text-white">
              Resources for Growth
            </h1>
            <p className="text-lg md:text-xl text-center max-w-4xl  text-gray-500 pb-4 font-normal">
              Embark on a path to expanding your technological prowess. Whether
              you are just starting or looking to refine specific skills, our
              curated resources are here to guide you every step of the way.
              Dive into a comprehensive collection of tools, tutorials, and
              hands-on projects designed to enhance your understanding and
              practical knowledge.
            </p>
          </div>
        </section>

        <section className=" flex flex-col flex-wrap max-w-5xl  pt-4 pb-10 px-4 md:px-8">
          <div className="flex flex-col flex-wrap justify-center items-center py-4">
            <h2 className="text-4xl lg:text-6xl max-w-full leading-tight font-bold text-center ">
              Resources by Category
            </h2>
            <p className="text-lg lg:text-xl text-center max-w-3xl py-8 px-8 sm:py-4 text-gray-500  font-normal">
              Explore a diverse array of resources organized by category to find
              exactly what you need to progress. From coding tools and design
              software to advanced tutorials, our categories are designed to
              cater to learners at all levels.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-4">
            <Tabs defaultValue="dev" className="w-full">
              <TabsList className="flex justify-around py-8 px-4 gap-8 bg-gray-900">
                <TabsTrigger
                  className="text-xl focus:bg-purple-500"
                  value="dev"
                >
                  Development
                </TabsTrigger>
                <TabsTrigger
                  className="text-xl focus:bg-purple-500"
                  value="design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className="text-xl focus:bg-purple-500"
                  value="research"
                >
                  Research
                </TabsTrigger>
                <TabsTrigger className="text-xl focus:bg-purple-500" value="pm">
                  Project Management
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dev">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-4 text-white">
                    Development
                  </h3>
                  <ul className="text-base text-left text-gray-500 max-w-4xl p-0 font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://docs.devlaunchers.org/dl-docs/development/development-at-dev-launchers"
                      >
                        Dev Launchers Development Docs
                      </a>
                      <p>
                        Comprehensive resource for development practices and
                        guidelines at Dev Launchers.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://github.com/dev-launchers/dev-launchers-platform"
                      >
                        Dev Launchers Github Repository
                      </a>
                      <p>
                        Central repository for all code and development projects
                        managed by Dev Launchers.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://code.visualstudio.com"
                      >
                        VS Code
                      </a>
                      <p>
                        A lightweight but powerful source code editor that runs
                        on your desktop and is available for Windows, macOS, and
                        Linux.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://tailwindcss.com/docs/installation"
                      >
                        Tailwind CSS Docs
                      </a>
                      <p>
                        Official documentation for installing and using Tailwind
                        CSS, a utility-first CSS framework.
                      </p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-4 text-white">
                    Design
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://docs.devlaunchers.org/dl-docs/design/design-at-dev-launchers"
                      >
                        Dev Launchers Design Docs
                      </a>
                      <p>
                        A guide to the design principles and practices adopted
                        by Dev Launchers for creating engaging user interfaces
                        and experiences.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.figma.com"
                      >
                        Figma
                      </a>
                      <p>
                        A web-based interface design tool that allows real-time
                        collaboration among teams for building interactive and
                        professional designs.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://atomicdesign.bradfrost.com"
                      >
                        Atomic Design by Brad Frost
                      </a>
                      <p>
                        A methodology for creating design systems composed of
                        atoms, molecules, and organisms to build robust user
                        interfaces.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.figma.com/design/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=11483-2356&t=IiSxzdTKtxwEua46-1"
                      >
                        Dev Launchers Universal Design System
                      </a>
                      <p>
                        This resource showcases the Universal Design System
                        utilized by Dev Launchers, featuring standardized UI
                        components and design tokens.
                      </p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="research">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-4 text-white">
                    Research
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://docs.devlaunchers.org/dl-docs/research/research-at-dev-launchers"
                      >
                        Dev Launchers Research Docs
                      </a>
                      <p>
                        Essential reading for understanding the research
                        processes and methodologies utilized by Dev Launchers.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.nngroup.com/topic/research-methods/"
                      >
                        Nielsen Norman Group Research Methods
                      </a>
                      <p>
                        An essential collection of user research methodologies
                        and best practices offered by the Nielsen Norman Group,
                        a leader in the UX field.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.userinterviews.com/ux-research-field-guide-chapter/user-interviews"
                      >
                        The UX Research Field Guide
                      </a>{' '}
                      <p>
                        A comprehensive guide to doing UX research by User
                        Interviews
                      </p>
                    </li>
                    <li class="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.hotjar.com"
                      >
                        Hotjar
                      </a>
                      <p>
                        Hotjar offers tools to visualize user behavior on your
                        site through heatmaps, session recordings, and surveys,
                        enabling deeper insights into user interactions and
                        experiences.
                      </p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="pm">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-4 text-white">
                    Project Management
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://docs.devlaunchers.org/dl-docs/product-management/product-management-at-dev-launchers"
                      >
                        Dev Launchers Project Management Docs
                      </a>
                      <p>
                        A resource for project managers at Dev Launchers,
                        detailing workflows, strategies, and tools for effective
                        project oversight and completion.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects"
                      >
                        Github Projects
                      </a>{' '}
                      <p>
                        Learn about Github Projects; an adaptable, flexible tool
                        for planning and tracking work on GitHub.
                      </p>
                    </li>
                    <li className="pb-2">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.atlassian.com/work-management/project-management/"
                      >
                        Project Management Guide by Atlassian
                      </a>{' '}
                      <p>
                        An extensive guide to project management from basics to
                        strategy breakdowns by Atlassian
                      </p>
                    </li>
                    <li className="pb-2 ">
                      <a
                        className="text-white hover:text-purple-300 font-semibold underline underline-offset-4"
                        href="https://www.pmi.org/insights"
                      >
                        Project Management Templates and Insights
                      </a>{' '}
                      <p>
                        A curated selection of industry-vetted Project
                        Management Institute templates, guides, and more to help
                        you grow and maximize project success
                      </p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="flex flex-col flex-wrap max-w-full md:max-w-5xl  px-4">
          <div className="flex flex-col flex-wrap justify-center items-center py-4">
            <h2 className="text-4xl lg:text-6xl max-w-full leading-tight font-bold text-center ">
              Learning and Games
            </h2>
            <p className="text-lg lg:text-xl text-center max-w-3xl px-8 py-8  text-gray-500  font-normal">
              Learn Code and Design using these games to build conceptual
              learning to prepare for creating software projects and
              applications
            </p>
          </div>
          <div class="flex flex-col max-w-full justify-center items-center py-4">
            <Tabs defaultValue={'Code'} className="w-full">
              <TabsList className="flex flex-wrap justify-around py-8 px-4 gap-8 bg-gray-900">
                {Object.keys(learnPageData).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="text-lg bg-background"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(learnPageData).map(([category, sections]) => (
                <TabsContent key={category} value={category}>
                  {Object.entries(sections).map(
                    ([sectionTitle, categories]) => (
                      <div
                        key={sectionTitle}
                        className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg"
                      >
                        <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                          {sectionTitle}
                        </h3>
                        {Object.entries(categories).map(
                          ([categoryTitle, items]) => (
                            <div key={categoryTitle} className="pt-8">
                              <PaginatedGrid items={items} />
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="flex flex-col flex-wrap w-5xl max-w-full md:max-w-5xl py-10 px-4">
          <div className="flex flex-col flex-wrap justify-center items-center pt-16 pb-8">
            <h2 className="text-4xl lg:text-6xl max-w-full leading-tight font-bold text-center  ">
              Create with Templates
            </h2>
            <p className="text-lg lg:text-xl text-center max-w-3xl px-8 py-8 text-gray-500  font-normal">
              Ready to test your skills? These templates are great ways to get
              started and reinforce your learning
            </p>
          </div>
          <div class="flex flex-col max-w-full justify-center items-center py-4">
            <Tabs defaultValue={'Templates'} className="px-10 w-full">
              <TabsList className="flex flex-row justify-center py-8 px-4  gap-8 bg-gray-900">
                {Object.keys(createPageData).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className=" text-xl focus:bg-purple-600"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(createPageData).map(([category, sections]) => (
                <TabsContent key={category} value={category}>
                  {Object.entries(sections).map(
                    ([sectionTitle, categories]) => (
                      <div
                        key={sectionTitle}
                        className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg"
                      >
                        <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                          {sectionTitle}
                        </h3>
                        {Object.entries(categories).map(
                          ([categoryTitle, items]) => (
                            <div key={categoryTitle} className="pt-8">
                              <PaginatedGrid items={items} />
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className=" flex flex-col flex-wrap max-w-5xl px-4  py-10">
          <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-4xl lg:text-6xl max-w-full leading-tight font-bold text-center ">
              Create and Collaborate
            </h2>
            <p className="text-base md:text-lg text-center max-w-xl py-4 px-8 text-gray-500  font-normal">
              Join us in real cross-functional teams to apply your skills to
              real world applications
            </p>
            <div className="flex pt-4">
              <a
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-purple-900 hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/join"
              >
                Join Today
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
