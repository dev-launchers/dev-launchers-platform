/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';

export default function Collaborate() {
  return (
    <>
      <Head>
        <title>Collaborate</title>
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
              Collaborate with Us
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              Collaborate with us to build real-world projects and gain
              invaluable experience. Whether you're a beginner or a seasoned
              professional your journey starts here!
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
              Choose Your Journey
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl pb-8 text-gray-500"
            >
              Our community is diverse, and so are the ways you can join us. We
              understand that everyone has different goals and availability,
              which is why we offer a variety of membership pathways to support
              each member uniquely. Select your path at Dev Launchers with our
              tailored membership levels. We have a place for you whether you
              want to grow independently in our Orbit, transition between levels
              as a Traveler, or empower our core initiatives.
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
                  Orbit
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-orange-200"
                >
                  Engage with our community at your own pace, access resources,
                  and join our network.
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
                  Traveler
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-teal-200"
                >
                  Dive deeper with flexible project participation and special
                  events that suit your schedule.
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
                  Core
                </atoms.Typography>
                <atoms.Typography
                  as="p"
                  variant="secondary"
                  size="body_base"
                  textAlign="left"
                  className="pt-4 text-yellow-200"
                >
                  Take a central role in our projects, working regularly as a
                  team member or leader on impactful software projects. This
                  path accelerates your growth through hands-on,
                  cross-functional team experiences.
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
              Create your Profile
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Create your profile and connect with like-minded individuals in
              our vibrant community. Engage with other members, share your
              journey, and find partners for your next project. Networking at
              Dev Launchers opens doors to opportunities and collaborations.
            </atoms.Typography>
            <div className="flex pt-8">
              <atoms.Button
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/users/me"
              >
                Build your Profile
              </atoms.Button>
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
              Learn with Resources
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Utilize our comprehensive library of resources, templates, and
              tools to enhance your skillset. From beginner to advanced levels,
              our learning materials are designed to support your growth in the
              most dynamic industries.
            </atoms.Typography>
            <div className="flex pt-8">
              <atoms.Button
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/resources"
              >
                Explore Resources
              </atoms.Button>
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
              Dream with IdeaSpace
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Members brainstorm, propose, and workshop on software project
              ideas. Got a groundbreaking idea? Bring it to our community and
              see it take shape!
            </atoms.Typography>
            <div className="flex pt-8">
              <atoms.Button
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/ideaspace"
              >
                Explore Ideas
              </atoms.Button>
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
              Join with Dev Recruit
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-8 text-gray-500"
            >
              Looking to dive deeper into tech and gain practical experience?
              Explore our Dev Recruit platform for available opportunities
              designed to hone your skills through intensive and collaborative
              project work. Gain hands-on experience under the guidance of our
              seasoned mentors and prepare for a career in technology.
            </atoms.Typography>
            <div className="flex pt-8">
              <atoms.Button
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/join"
              >
                Explore Opportunities
              </atoms.Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
