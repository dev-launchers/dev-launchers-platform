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
      <main className="min-h-screen bg-black text-white">
        <section className="max-w-full bg-black py-32 px-4 md:px-8">
          <h1
            className="text-7xl max-w-3xl font-bold text-left leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white"
            style={{ fontSize: '4.5rem' }}
          >
            Resources for Growth
          </h1>
          <p className="text-xl text-left max-w-3xl  text-gray-500  font-normal">
            Embark on a path to expanding your technological prowess. Whether
            you're just starting or looking to refine specific skills, our
            curated resources are here to guide you every step of the way. Dive
            into a comprehensive collection of tools, tutorials, and hands-on
            projects designed to enhance your understanding and practical
            knowledge.
          </p>
        </section>

        <section className="max-w-full bg-black pt-4 pb-10 px-4 md:px-8">
          <div className="py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-left leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Resources by Category
            </h2>
            <p className="text-lg text-left max-w-4xl  text-gray-500  font-normal">
              Explore a diverse array of resources organized by category to find
              exactly what you need to progress. From coding tools and design
              software to advanced tutorials, our categories are designed to
              cater to learners at all levels.
            </p>
          </div>
          <div>
            <Tabs2 defaultValue="code" className="w-[400px]">
              <TabsList className="w-[400px] py-8 px-4  gap-8 bg-gray-900">
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="dev"
                >
                  Development
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="research"
                >
                  Research
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="pm"
                >
                  Project Management
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dev">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Development
                  </h3>
                  <ul className="text-base text-left text-blue-200 p-0 font-normal">
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Design
                  </h3>
                  <ul className="text-base text-left text-blue-200 p-0 font-normal">
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="research">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Research
                  </h3>
                  <ul className="text-base text-left text-blue-200 p-0 font-normal">
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="pm">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Project Management
                  </h3>
                  <ul className="text-base text-left text-blue-200 p-0 font-normal">
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                    <li>
                      <a>item</a>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs2>
          </div>
        </section>

        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-left leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Learning and Games
            </h2>
            <p className="text-lg text-left max-w-4xl  text-gray-500  font-normal">
              Learn Code and Design using these games to build conceptual
              learning to prepare for creating software projects and
              applications
            </p>
          </div>

          <div class="">
            <Tabs2 defaultValue="code" className="w-[400px]">
              <TabsList className="w-[400px] py-8 px-4  gap-8 bg-gray-900">
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="code"
                >
                  Code
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="phaser"
                >
                  Phaser3
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="react"
                >
                  React
                </TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Development
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2">
                    {learnPageData.map((item, index) => (
                      <CardImagePair key={index} {...item} />
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Design
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(learnPageData)}
                </div>
              </TabsContent>
              <TabsContent value="phaser">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Phaser3
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(learnPageData)}
                </div>
              </TabsContent>
              <TabsContent value="react">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    React
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(learnPageData)}
                </div>
              </TabsContent>
            </Tabs2>

            <Tabs defaultFocus={true} defaultIndex="0">
              <TabList style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {
                  // Have to do this hack for some reason (create empty tab if page not loaded)...
                  // otherwise tabs break
                  Object.entries(learnPageData || {}).length === 0 ? (
                    <Tab></Tab>
                  ) : (
                    ''
                  )
                }
                {
                  // Render tabs from our dynamically built learnPageData object
                  Object.keys(learnPageData || {}).map((key) => (
                    <Tab key={`tab${key}`}>{key}</Tab>
                  ))
                }
              </TabList>
              {
                // Render sections and groups from our dynamically built learnPageData object
                // Render tab panels from our dynamically built learnPageData object
                Object.values(learnPageData || {}).map((tab, i) => (
                  // render all sections for this tab
                  <TabPanel key={i}>
                    {Object.keys(tab).map((sectionTitle) => {
                      const section = tab[sectionTitle];
                      return (
                        <Section key={i} data={section} title={sectionTitle} />
                      );
                    })}
                  </TabPanel>
                ))
              }
            </Tabs>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="py-16">
            <h2 className="text-6xl max-w-3xl font-bold text-left leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
              Create with Templates
            </h2>
            <p className="text-lg text-left max-w-4xl  text-gray-500  font-normal">
              Ready to test your skills? These templates are great ways to get
              started and reinforce your learning
            </p>
          </div>

          <div>
            <Tabs2 defaultValue="code" className="w-[400px]">
              <TabsList className="w-[400px] py-8 px-4  gap-8 bg-gray-900">
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="game"
                >
                  Games
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="app"
                >
                  Apps
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className=" text-xl focus:bg-purple-400"
                  value="research"
                >
                  Research
                </TabsTrigger>
              </TabsList>
              <TabsContent value="game">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Games
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(createPageData)}
                </div>
              </TabsContent>
              <TabsContent value="app">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Apps
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(createPageData)}
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Design
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(createPageData)}
                </div>
              </TabsContent>
              <TabsContent value="research">
                <div className="bg-gray-900 border-gray-800 border-4 p-8 items-center rounded-lg">
                  <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide pb-0 text-white">
                    Research
                  </h3>
                  <div class="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2"></div>
                  {JSON.stringify(createPageData)}
                </div>
              </TabsContent>
            </Tabs2>
            <Tabs defaultFocus={true} defaultIndex="0">
              <TabList style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {
                  // Have to do this hack for some reason (create empty tab if page not loaded)...
                  // otherwise tabs break
                  Object.entries(createPageData || {}).length === 0 ? (
                    <Tab></Tab>
                  ) : (
                    ''
                  )
                }
                {
                  // Render tabs from our dynamically built pageData object
                  Object.keys(createPageData || {}).map((key) => (
                    <Tab key={`tab${key}`}>{key}</Tab>
                  ))
                }
              </TabList>
              {
                // Render sections and groups from our dynamically built pageData object
                // Render tab panels from our dynamically built pageData object
                Object.values(createPageData || {}).map((tab, i) => (
                  // render all sections for this tab
                  <TabPanel key={i}>
                    {Object.keys(tab || {}).map((sectionTitle) => {
                      const section = tab[sectionTitle];
                      return (
                        <Section data={section} title={sectionTitle} key={i} />
                      );
                    })}
                  </TabPanel>
                ))
              }
            </Tabs>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <h2 className="text-6xl max-w-3xl font-bold text-left leading-relaxed tracking-wide border-none border-0 m-0 p-0 text-white">
            Create and Collaborate
          </h2>
          <p className="text-lg text-left max-w-4xl  text-gray-500  font-normal">
            Join us in real cross-functional teams to apply your skills to real
            world applications
          </p>
          <div className="flex pt-8">
            <a
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-purple-900 hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="/join"
            >
              Join Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
