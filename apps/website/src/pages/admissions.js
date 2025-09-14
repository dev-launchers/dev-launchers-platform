/* eslint-disable react/no-unescaped-entities */
import { Donate } from '../../../website/src/components/modules/Home/Sections';
import Head from 'next/head';
import { atoms } from '@devlaunchers/components/components';

export default function Admissions() {
  return (
    <>
      <Head>
        <title>Admissions & Tuition</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <section className="bg-black py-32 max-w-7xl px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-4xl pb-4 text-white"
            >
              
            Admissions & Tuition
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              Who can join, how placement works, time expectations—and Tuition: $0 for everyone.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-7xl bg-black py-24 px-4 md:px-8 justify-center">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-4"
            >
              Our Story
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl  text-gray-500"
            >
              Founded in 2019 in Austin, Texas, Dev Launchers began as a
              Saturday program teaching coding and game development to local
              teenagers. What started as a small group of passionate volunteers
              at the Austin Central Library has grown into a global community of
              developers, designers, and technology enthusiasts. When the world
              shifted in 2020, so did we – transitioning to a fully online
              platform that opened our doors to members worldwide. This pivot
              allowed us to expand our mission beyond geographical boundaries
              and age restrictions, creating a truly inclusive space for anyone
              interested in technology. Today, Dev Launchers operates with 6
              dedicated teams and over 50 active members across the globe, from
              the United States to Australia, united by our mission to
              democratize access to technology careers and launch our members to
              the next level in their careers through experience and community.
            </atoms.Typography>
          </div>
        </section>
        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-10"
            >
              What We Do
            </atoms.Typography>
          </div>

          <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
            <div className="bg-orange-900 border-orange-500 border-4 p-8 items-center rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Create
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-2"
              >
                We're developing a platform to foster new projects, where ideas
                come to life through collaboration and shared learning. Our
                members work on real-world projects, gaining practical
                experience in software development, design, and project
                management.
              </atoms.Typography>
            </div>
            <div className="bg-teal-900 border-teal-500 border-4 p-8 items-center rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Connect
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-2"
              >
                We build professional networks and forge friendships across the
                globe. Our community spans multiple continents, bringing
                together diverse perspectives and experiences. We believe great
                accomplishments come from teamwork.
              </atoms.Typography>
            </div>
            <div className="bg-yellow-900 border-yellow-500 border-4 items-center  p-8 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Grow
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-yellow-200 pt-2"
              >
                We mentor new members, encourage leadership development, and
                expand our community. Learning from mistakes is part of our
                journey, and we celebrate both the successes and the learning
                opportunities along the way.
              </atoms.Typography>
            </div>
            <div className="bg-blue-900 border-blue-500 border-4 p-8 items-center rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Have Fun!
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-blue-200 pt-2"
              >
                We believe that engagement is the gateway to learning, and
                learning should be enjoyable. While we tackle challenging
                problems, we maintain an environment that promotes creativity,
                curiosity, and enjoyment.
              </atoms.Typography>
            </div>
          </div>
        </section>

        <section className="max-w-7xl py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-10"
            >
              Our Values
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-4xl pb-10 text-gray-500"
            >
              At Dev Launchers, our values shape how we work, learn, and grow
              together. We believe that the best experiences come from combining
              excitement and intention - making learning fun while staying
              committed to continuous improvement. We foster deep connections
              and emphasize teamwork, knowing that our greatest achievements
              come from working together. Our community is built on the
              foundation of mutual support, where asking for help is celebrated
              and every success is shared.
            </atoms.Typography>
          </div>

          <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-2">
            <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Excitement
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-2"
              >
                Excitement drives engagement and fuels learning. When you're
                genuinely excited about what you're creating, learning happens
                naturally. We create an environment where curiosity is
                celebrated and enthusiasm is contagious.
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
                Intention
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-2"
              >
                Success isn't about being the smartest or the most talented –
                it's about showing up every day with purpose and dedication. We
                approach challenges methodically, knowing that persistent,
                intentional effort leads to breakthrough solutions.
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
                Connection
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-yellow-200 pt-2"
              >
                In our community, reaching out for help is a sign of strength,
                not weakness. Strong connections form the foundation of
                effective learning and innovation. We celebrate collaboration
                and understand that our diverse perspectives make us stronger
                together.
              </atoms.Typography>
            </div>
            <div className="bg-blue-900 border-blue-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Building
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-blue-200 pt-2"
              >
                Progress isn't always linear, and success looks different for
                everyone. We encourage thoughtful self-assessment and believe in
                setting meaningful, personal benchmarks for growth. Through
                iterative development, we build both our projects and ourselves.
              </atoms.Typography>
            </div>
            <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Teamwork
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-2"
              >
                Individual achievements are team victories. We foster an
                environment where success is shared and celebrated collectively.
                Respect isn't just an ideal – it's woven into how we collaborate
                and support each other every day.
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
                Leadership
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-2"
              >
                Leadership isn't about titles; it's about taking initiative and
                responsibility. Whether you're mentoring others, leading a
                project, or suggesting improvements, we encourage everyone to
                step into leadership roles and make positive changes.
              </atoms.Typography>
            </div>
          </div>
        </section>
        <section className="max-w-7xl bg-black py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-10"
            >
              Partner with Us
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl text-gray-500"
            >
              At Dev Launchers, we believe in the power of collaboration to
              create transformative experiences. Join us in our mission to
              bridge opportunity gaps in the tech industry by becoming a
              partner. Your involvement can help provide essential resources,
              mentorship, and opportunities to those who are eager to learn and
              grow in their careers. Whether you are a company, a professional
              group, or an individual with a passion for technology and
              education, your support is crucial in building a more inclusive
              and diverse tech community.
            </atoms.Typography>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <atoms.Button
              className="bg-black border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:text-black hover:border-purple-300 hover:border-4"
              href="mailto:contact@devlaunchers.com"
            >
              Contact Us
            </atoms.Button>
            <atoms.Button
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://forms.gle/VLP2YHDsSXmLTqQ8A"
            >
              Apply for Partnership
            </atoms.Button>
          </div>
        </section>
        <section className="max-w-7xl bg-black py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center pb-10">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-10"
            >
              Our Partners and Sponsors
            </atoms.Typography>
          </div>

          <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-1">
            <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Powered by Leaders
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-4"
              >
                Dev Launchers is proud to be supported by grants from industry
                leaders who share our vision of making technology careers
                accessible to everyone. Through the generous support of Google
                and Microsoft, we're able to expand our reach and enhance our
                programs while maintaining our commitment to providing free,
                high-quality technology education and project-based learning
                opportunities.
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
                Community Partnerships
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-4"
              >
                Our roots in the Austin community run deep, starting with our
                founding partnership with the Austin Public Library. This
                collaboration helped launch our initial programming and
                continues to inspire our mission of democratizing access to
                technology education. We're also proud to partner with
                organizations like Aseprite and Krafties, who help us provide
                our members with the tools and resources they need to bring
                their creative visions to life.
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
                Building Together
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-yellow-200 pt-4"
              >
                These partnerships represent more than just financial support –
                they're relationships that help us create meaningful
                opportunities for our community. Our partners share our
                commitment to making technology education accessible to
                everyone, supporting diverse talent in the tech industry,
                creating hands-on learning opportunities, building pathways to
                technology careers, and fostering an inclusive tech community.
                Together with our partners, we're working to break down barriers
                and create a more equitable tech ecosystem where everyone has
                the opportunity to learn, grow, and succeed.
              </atoms.Typography>
            </div>
          </div>
        </section>

        <section className="max-w-7xl bg-black py-24 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center">
            <atoms.Typography
              as="h1"
              variant="primary"
              size="xl6"
              textWeight="bold"
              textAlign="center"
              className="max-w-7xl pb-10"
            >
              Our Teams
            </atoms.Typography>
            <atoms.Typography
              as="p"
              variant="secondary"
              size="body_lg"
              textAlign="center"
              className="max-w-3xl pb-10 text-gray-500"
            >
              Our organization is entirely powered by our volunteer members
              dedicated to launching their own careers as well as supporting
              others building our collective, supportive and innovative
              community.
            </atoms.Typography>
          </div>

          <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 md:grid-rows-1">
            <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Dev Recruit
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-2"
              >
                Our internal recruitment platform that powers our teams through
                providing recruitment management and support.
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
                IdeaSpace
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-2"
              >
                Turn dreams into software ideas, a place to discover new ideas
                or workshop your ideas and turn them into reality.
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
                Platform
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-yellow-200 pt-2"
              >
                Our core development team that supports our community platform
                through full-stack developed assets.
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
                User Profile
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-teal-200 pt-2"
              >
                Powering the profile features and enabling connection and
                collaboration support for our membership community.
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
                AI Ally
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-yellow-200 pt-2"
              >
                Leveraging AI capabilities to improve our internal processes and
                member workflow.
              </atoms.Typography>
            </div>
            <div className="bg-orange-900 border-orange-500 border-4 p-6 rounded-lg">
              <atoms.Typography
                as="h3"
                variant="primary"
                size="xl3"
                textWeight="semibold"
                textAlign="left"
                className="text-white"
              >
                Universal Design
              </atoms.Typography>
              <atoms.Typography
                as="p"
                variant="secondary"
                size="body_lg"
                textAlign="left"
                className="text-orange-200 pt-2"
              >
                Building and maintaining our design system and brand identity
                for the organization while providing assets and framework to
                power our teams creativity to build unlocked
              </atoms.Typography>
            </div>
          </div>
        </section>

        <Donate />
      </main>
    </>
  );
}
