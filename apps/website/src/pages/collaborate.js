import Head from 'next/head';

export default function Collaborate() {
  return (
    <>
      <Head>
        <title>Collaborate</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <section className="max-w-full bg-black py-32 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-7xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white"
              style={{ fontSize: '4.5rem' }}
            >
              Collaborate with Us
            </h1>
            <p className="text-xl text-center max-w-3xl  text-gray-500  font-normal">
              Collaborate with us to build real-world projects and gain
              invaluable experience. Whether you're a beginner or a seasoned
              professional your journey starts here!
            </p>
          </div>
        </section>
        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide m-0 pb-4 text-white">
              Choose Your Journey
            </h2>
            <p className="text-lg text-center max-w-4xl pb-10 text-gray-500 font-normal">
              Our community is diverse, and so are the ways you can join us. We
              understand that everyone has different goals and availability,
              which is why we offer a variety of membership pathways to support
              each member uniquely. Select your path at Dev Launchers with our
              tailored membership levels. We have a place for you whether you
              want to grow independently in our Orbit, transition between levels
              as a Traveler, or empower our core initiatives.
            </p>
            <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide text-white">
                  Orbit
                </h3>
                <p className="text-base text-left text-orange-200 font-normal">
                  Engage with our community at your own pace, access resources,
                  and join our network.
                </p>
              </div>
              <div className="bg-teal-900 border-teal-500 border-4 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide text-white">
                  Traveler
                </h3>
                <p className="text-base text-left text-teal-200 font-normal">
                  Dive deeper with flexible project participation and special
                  events that suit your schedule.
                </p>
              </div>
              <div className="bg-yellow-900 border-yellow-500 border-4 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-left leading-relaxed tracking-wide text-white">
                  Core
                </h3>
                <p className="text-base text-left text-yellow-200 font-normal">
                  Take a central role in our projects, working regularly as a
                  team member or leader on impactful software projects. This
                  path accelerates your growth through hands-on,
                  cross-functional team experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white">
              Create your Profile
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Create your profile and connect with like-minded individuals in
              our vibrant community. Engage with other members, share your
              journey, and find partners for your next project. Networking at
              Dev Launchers opens doors to opportunities and collaborations.
            </p>
            <div className="flex pt-8">
              <a
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/users/me"
              >
                Build your Profile
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white">
              Learn with Resources
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Utilize our comprehensive library of resources, templates, and
              tools to enhance your skillset. From beginner to advanced levels,
              our learning materials are designed to support your growth in the
              most dynamic industries.
            </p>
            <div className="flex pt-8">
              <a
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/resources"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white">
              Dream with IdeaSpace
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Members brainstorm, propose, and workshop on software project
              ideas. Got a groundbreaking idea? Bring it to our community and
              see it take shape!
            </p>
            <div className="flex pt-8">
              <a
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/ideaspace"
              >
                Explore Ideas
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-full py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl max-w-3xl font-bold text-center leading-relaxed tracking-wide border-none border-0 m-0 pb-4 text-white">
              Join with Dev Recruit
            </h2>
            <p className="text-lg text-center max-w-3xl  text-gray-500  font-normal">
              Looking to dive deeper into tech and gain practical experience?
              Explore our Dev Recruit platform for available opportunities
              designed to hone your skills through intensive and collaborative
              project work. Gain hands-on experience under the guidance of our
              seasoned mentors and prepare for a career in technology.
            </p>
            <div className="flex pt-8">
              <a
                className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
                href="/join"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
