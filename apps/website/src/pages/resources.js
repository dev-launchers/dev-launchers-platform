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
import { atoms } from '@devlaunchers/components/components';

const Card = ({ href, imageSrc, title, description }) => (
  <a
    href={href}
    className="group flex flex-col h-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-2"
  >
    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      <img
        src={imageSrc || '/api/placeholder/400/320'}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col flex-grow p-6">
      <atoms.Typography
        as="h3"
        variant="primary"
        size="xl3"
        textWeight="semibold"
        className="mb-3 group-hover:text-purple-400 transition-colors duration-300 text-white"
      >
        {title}
      </atoms.Typography>
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_base"
        className="text-gray-300 flex-grow leading-relaxed"
      >
        {description || 'No description available.'}
      </atoms.Typography>
      <div className="flex items-center mt-6 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
        Learn More
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
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

const ResourceCard = ({ href, title, description, color = 'orange' }) => {
  const colorClasses = {
    orange: 'bg-orange-900 border-orange-500 border-4 text-orange-200',
    teal: 'bg-teal-900 border-teal-500 border-4 text-teal-200',
    yellow: 'bg-yellow-900 border-yellow-500 border-4 text-yellow-200',
    blue: 'bg-blue-900 border-blue-500 border-4 text-blue-200',
    purple: 'bg-purple-900 border-purple-500 border-4 text-purple-200',
  };

  return (
    <a
      href={href}
      className={`group block p-8 rounded-lg ${colorClasses[color]} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <atoms.Typography
        as="h3"
        variant="primary"
        size="xl3"
        textWeight="semibold"
        textAlign="left"
        className="text-white mb-3"
      >
        {title}
      </atoms.Typography>
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_base"
        textAlign="left"
        className="pt-2 leading-relaxed"
      >
        {description}
      </atoms.Typography>
    </a>
  );
};

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
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-4xl pb-6 text-white"
            >
              Resources for Growth
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl pb-4 text-gray-300"
            >
              Embark on a path to expanding your technological prowess. Whether
              you are just starting or looking to refine specific skills, our
              curated resources are here to guide you every step of the way.
              Dive into a comprehensive collection of tools, tutorials, and
              hands-on projects designed to enhance your understanding and
              practical knowledge.
            </atoms.Typography>
          </div>
        </section>

        <section className="flex flex-col flex-wrap max-w-5xl pt-4 pb-16 px-4 md:px-8">
          <div className="flex flex-col flex-wrap justify-center items-center py-">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-full pb-8 text-white"
            >
              Resources by Category
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl py-8 px-8 sm:py-4 text-gray-300"
            >
              Explore a diverse array of resources organized by category to find
              exactly what you need to progress. From coding tools and design
              software to advanced tutorials, our categories are designed to
              cater to learners at all levels.
            </atoms.Typography>
          </div>
          <div className="flex flex-col justify-center items-center py-16">
            <Tabs defaultValue="dev" className="w-full">
              <TabsList className="flex justify-around py-8 px-4 gap-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                <TabsTrigger
                  className="focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  value="dev"
                >
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    className="text-white"
                  >
                    Development
                  </atoms.Typography>
                </TabsTrigger>
                <TabsTrigger
                  className="focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  value="design"
                >
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    className="text-white"
                  >
                    Design
                  </atoms.Typography>
                </TabsTrigger>
                <TabsTrigger
                  className="focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  value="research"
                >
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    className="text-white"
                  >
                    Research
                  </atoms.Typography>
                </TabsTrigger>
                <TabsTrigger
                  className="focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  value="pm"
                >
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    className="text-white"
                  >
                    Project Management
                  </atoms.Typography>
                </TabsTrigger>
              </TabsList>
              <div className="border-b border-gray-700 mt-2"></div>
              <TabsContent value="dev">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl">
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    textAlign="left"
                    className="pb-6 text-white mb-6"
                  >
                    Development
                  </atoms.Typography>
                  <div className="grid gap-6 md:grid-cols-2">
                    <ResourceCard
                      href="https://docs.devlaunchers.org/dl-docs/development/development-at-dev-launchers"
                      title="Dev Launchers Development Docs"
                      description="Comprehensive resource for development practices and guidelines at Dev Launchers."
                      color="orange"
                    />
                    <ResourceCard
                      href="https://github.com/dev-launchers/dev-launchers-platform"
                      title="Dev Launchers Github Repository"
                      description="Central repository for all code and development projects managed by Dev Launchers."
                      color="teal"
                    />
                    <ResourceCard
                      href="https://code.visualstudio.com"
                      title="VS Code"
                      description="A lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux."
                      color="yellow"
                    />
                    <ResourceCard
                      href="https://tailwindcss.com/docs/installation"
                      title="Tailwind CSS Docs"
                      description="Official documentation for installing and using Tailwind CSS, a utility-first CSS framework."
                      color="blue"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl">
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    textAlign="left"
                    className="pb-6 text-white mb-6"
                  >
                    Design
                  </atoms.Typography>
                  <div className="grid gap-6 md:grid-cols-2">
                    <ResourceCard
                      href="https://docs.devlaunchers.org/dl-docs/design/design-at-dev-launchers"
                      title="Dev Launchers Design Docs"
                      description="A guide to the design principles and practices adopted by Dev Launchers for creating engaging user interfaces and experiences."
                      color="purple"
                    />
                    <ResourceCard
                      href="https://www.figma.com"
                      title="Figma"
                      description="A web-based interface design tool that allows real-time collaboration among teams for building interactive and professional designs."
                      color="orange"
                    />
                    <ResourceCard
                      href="https://atomicdesign.bradfrost.com"
                      title="Atomic Design by Brad Frost"
                      description="A methodology for creating design systems composed of atoms, molecules, and organisms to build robust user interfaces."
                      color="teal"
                    />
                    <ResourceCard
                      href="https://www.figma.com/design/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=11483-2356&t=IiSxzdTKtxwEua46-1"
                      title="Dev Launchers Universal Design System"
                      description="This resource showcases the Universal Design System utilized by Dev Launchers, featuring standardized UI components and design tokens."
                      color="yellow"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="research">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl">
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    textAlign="left"
                    className="pb-6 text-white  mb-6"
                  >
                    Research
                  </atoms.Typography>
                  <div className="grid gap-6 md:grid-cols-2">
                    <ResourceCard
                      href="https://docs.devlaunchers.org/dl-docs/research/research-at-dev-launchers"
                      title="Dev Launchers Research Docs"
                      description="Essential reading for understanding the research processes and methodologies utilized by Dev Launchers."
                      color="blue"
                    />
                    <ResourceCard
                      href="https://www.nngroup.com/topic/research-methods/"
                      title="Nielsen Norman Group Research Methods"
                      description="An essential collection of user research methodologies and best practices offered by the Nielsen Norman Group, a leader in the UX field."
                      color="orange"
                    />
                    <ResourceCard
                      href="https://www.userinterviews.com/ux-research-field-guide-chapter/user-interviews"
                      title="The UX Research Field Guide"
                      description="A comprehensive guide to doing UX research by User Interviews"
                      color="teal"
                    />
                    <ResourceCard
                      href="https://www.hotjar.com"
                      title="Hotjar"
                      description="Hotjar offers tools to visualize user behavior on your site through heatmaps, session recordings, and surveys, enabling deeper insights into user interactions and experiences."
                      color="yellow"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="pm">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl">
                  <atoms.Typography
                    as="h3"
                    variant="primary"
                    size="xl3"
                    textWeight="semibold"
                    textAlign="left"
                    className="pb-6 text-white  mb-6"
                  >
                    Project Management
                  </atoms.Typography>
                  <div className="grid gap-6 md:grid-cols-2">
                    <ResourceCard
                      href="https://docs.devlaunchers.org/dl-docs/product-management/product-management-at-dev-launchers"
                      title="Dev Launchers Project Management Docs"
                      description="A resource for project managers at Dev Launchers, detailing workflows, strategies, and tools for effective project oversight and completion."
                      color="purple"
                    />
                    <ResourceCard
                      href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects"
                      title="Github Projects"
                      description="Learn about Github Projects; an adaptable, flexible tool for planning and tracking work on GitHub."
                      color="orange"
                    />
                    <ResourceCard
                      href="https://www.atlassian.com/work-management/project-management/"
                      title="Project Management Guide by Atlassian"
                      description="An extensive guide to project management from basics to strategy breakdowns by Atlassian"
                      color="teal"
                    />
                    <ResourceCard
                      href="https://www.pmi.org/insights"
                      title="Project Management Templates and Insights"
                      description="A curated selection of industry-vetted Project Management Institute templates, guides, and more to help you grow and maximize project success"
                      color="yellow"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="flex flex-col flex-wrap max-w-full md:max-w-5xl pt-4 pb-16 px-4">
          <div className="flex flex-col flex-wrap justify-center items-center py-16">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-full pb-8 text-white"
            >
              Learning and Games
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl px-8 py-8 text-gray-300"
            >
              Learn Code and Design using these games to build conceptual
              learning to prepare for creating software projects and
              applications
            </atoms.Typography>
          </div>
          <div className="flex flex-col max-w-full justify-center items-center py-4">
            <Tabs defaultValue={'Code'} className="w-full">
              <TabsList className="flex flex-wrap justify-around py-8 px-4 gap-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                {Object.keys(learnPageData).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="bg-background focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <atoms.Typography
                      as="h4"
                      variant="primary"
                      size="xl2"
                      textWeight="semibold"
                      className="text-white"
                    >
                      {category}
                    </atoms.Typography>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="border-b border-gray-700 mt-2"></div>
              {Object.entries(learnPageData).map(([category, sections]) => (
                <TabsContent key={category} value={category}>
                  {Object.entries(sections).map(
                    ([sectionTitle, categories]) => (
                      <div
                        key={sectionTitle}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl"
                      >
                        <atoms.Typography
                          as="h3"
                          variant="primary"
                          size="xl3"
                          textWeight="semibold"
                          textAlign="left"
                          className="pb-6 text-white mb-6"
                        >
                          {sectionTitle}
                        </atoms.Typography>
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

        <section className="flex flex-col flex-wrap w-5xl max-w-full md:max-w-5xl pt-4 pb-16 px-4">
          <div className="flex flex-col flex-wrap justify-center items-center py-4">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-full pb-8 text-white"
            >
              Create with Templates
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl px-8 py-8 text-gray-300"
            >
              Ready to test your skills? These templates are great ways to get
              started and reinforce your learning
            </atoms.Typography>
          </div>
          <div className="flex flex-col max-w-full justify-center items-center py-4">
            <Tabs defaultValue={'Templates'} className="px-10 w-full">
              <TabsList className="flex flex-row justify-center py-8 px-4 gap-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                {Object.keys(createPageData).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="focus:bg-purple-600 focus:text-white hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <atoms.Typography
                      as="h4"
                      variant="primary"
                      size="xl2"
                      textWeight="semibold"
                      className="text-white"
                    >
                      {category}
                    </atoms.Typography>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="border-b border-gray-700 mt-2"></div>
              {Object.entries(createPageData).map(([category, sections]) => (
                <TabsContent key={category} value={category}>
                  {Object.entries(sections).map(
                    ([sectionTitle, categories]) => (
                      <div
                        key={sectionTitle}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 items-center rounded-lg shadow-xl"
                      >
                        <atoms.Typography
                          as="h3"
                          variant="primary"
                          size="xl3"
                          textWeight="semibold"
                          textAlign="left"
                          className="pb-6 text-white mb-6"
                        >
                          {sectionTitle}
                        </atoms.Typography>
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

        <section className="flex flex-col flex-wrap max-w-5xl pt-4 pb-16 px-4">
          <div className="flex flex-col justify-center items-center py-10">
            <atoms.Typography
              as="h2"
              variant="primary"
              size="xl4"
              textWeight="semibold"
              textAlign="center"
              className="max-w-full pb-6 text-white"
            >
              Create and Collaborate
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-xl py-4 px-8 text-gray-300"
            >
              Join us in real cross-functional teams to apply your skills to
              real world applications
            </atoms.Typography>
            <div className="flex pt-6">
              <atoms.Button className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-purple-900 hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4">
                Join Today
              </atoms.Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
