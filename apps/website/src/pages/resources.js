import Head from 'next/head';
import React from 'react';
import 'react-tabs/style/react-tabs.css'; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import {
  Tabs as Tabs2,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@devlaunchers/components/components/molecules/Tab/Tab';
import CardImagePair from '../components/modules/Home/Sections/CardImagePair';
import { useSheetsContext } from '../context/SheetsContext';

import PageBody from '../../src/components/common/PageBody';
import Section from '../../src/components/common/Section';

export default function Resources() {
  const { learnPageData, createPageData } = useSheetsContext();
  console.log(createPageData);
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <section className="max-w-7xl py-32 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-7xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white"
              style={{ fontSize: '4.5rem' }}
            >
              Resources for Growth
            </h1>
            <p className="text-xl text-center max-w-4xl  text-gray-500  font-normal">
              Embark on a path to expanding your technological prowess. Whether
              you're just starting or looking to refine specific skills, our
              curated resources are here to guide you every step of the way.
              Dive into a comprehensive collection of tools, tutorials, and
              hands-on projects designed to enhance your understanding and
              practical knowledge.
            </p>
          </div>
        </section>

        <section className="max-w-7xl  pt-4 pb-10 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white">
              Resources by Category
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Explore a diverse array of resources organized by category to find
              exactly what you need to progress. From coding tools and design
              software to advanced tutorials, our categories are designed to
              cater to learners at all levels.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-4">
            <Tabs2 defaultValue="dev" className="w-full">
              <TabsList className="flex flex-row justify-center py-8 px-4 gap-8 bg-gray-900">
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
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Development
                  </h3>
                  <ul className="text-base text-left text-gray-500 max-w-4xl p-0 font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Design
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Research
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Project Management
                  </h3>
                  <ul className="text-base text-left text-gray-500 p-0 max-w-4xl font-normal">
                    <li className="pb-2">
                      <a
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
                        className="text-white font-semibold underline underline-offset-4"
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
            </Tabs2>
          </div>
        </section>

        <section className="max-w-7xl  py-24  md:px-8">
          <div className="flex flex-col justify-center items-center py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Learning and Games
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Learn Code and Design using these games to build conceptual
              learning to prepare for creating software projects and
              applications
            </p>
          </div>

          <div class="flex flex-col justify-center items-center py-4">
            <Tabs2
              defaultValue={Object.keys(learnPageData)[0]}
              className="w-full"
            >
              <TabsList className="flex flex-row justify-center py-8 px-4  gap-8 bg-gray-900">
                {Object.keys(learnPageData).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className=" text-xl focus:bg-purple-600"
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
                            <div
                              key={categoryTitle}
                              className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"
                            >
                              {items.map((item, index) => (
                                <CardImagePair
                                  key={index}
                                  image={
                                    item.imageSrc ||
                                    'https://via.placeholder.com/150'
                                  }
                                  altText={item.title}
                                  imagePosition="bottom"
                                  title={item.title}
                                  description={
                                    item.description ||
                                    'No description available.'
                                  }
                                  btnText="Learn More"
                                  btnLink={item.href}
                                  cardBackgroundColor="#1F2937"
                                  cardBorderColor="#374151"
                                  descriptionTextColor="#9CA3AF"
                                />
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </TabsContent>
              ))}
            </Tabs2>
          </div>
        </section>
        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Create with Templates
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Ready to test your skills? These templates are great ways to get
              started and reinforce your learning
            </p>
          </div>

          <div>
            <Tabs2
              defaultValue={Object.keys(createPageData)[0]}
              className="w-full"
            >
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
                            <div
                              key={categoryTitle}
                              className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"
                            >
                              {items.map((item, index) => (
                                <CardImagePair
                                  key={index}
                                  image={
                                    item.imageSrc ||
                                    'https://via.placeholder.com/150'
                                  }
                                  altText={item.title}
                                  imagePosition="bottom"
                                  title={item.title}
                                  description={
                                    item.description ||
                                    'No description available.'
                                  }
                                  btnText="Learn More"
                                  btnLink={item.href}
                                  cardBackgroundColor="#1F2937"
                                  cardBorderColor="#374151"
                                  descriptionTextColor="#9CA3AF"
                                />
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </TabsContent>
              ))}
            </Tabs2>
          </div>
        </section>
        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Create and Collaborate
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Join us in real cross-functional teams to apply your skills to
              real world applications
            </p>
            <div className="flex pt-8">
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
