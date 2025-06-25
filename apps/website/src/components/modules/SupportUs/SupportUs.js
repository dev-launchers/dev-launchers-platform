/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PageBody from '../../common/PageBody';
import SupportUsOverlay from './SupportUsOverlay';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

import studentPhoto from '../../../images/support-us/bw-girl-profile.png?webp';
import { Wrapper } from './StyledSupportUs';

export default function SupportUs() {
  return (
    <div className=" bg-black text-white">
      <section className="max-w-7xl mx-auto bg-black py-32 px-4 md:px-8 ">
        <div className="flex flex-col justify-center items-center">
          <Typography
            as="h1"
            variant="primary"
            size="xl6"
            textWeight="bold"
            textAlign="center"
            className="max-w-4xl pb-4 text-white text-center"
          >
            Fuel the Future
          </Typography>
          <Typography
            as="p"
            variant="secondary"
            size="body_lg"
            textAlign="center"
            className="max-w-3xl text-gray-500 text-center"
          >
            Help Dev Launchers provide resources and opportunity for developers,
            creatives, and innovators from diverse backgrounds to gain the
            skills and knowledge necessary to launch their careers to the next
            level.
          </Typography>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="semibold"
            textAlign="center"
            className="max-w-7xl pb-6 text-center"
          >
            Support Our Mission
          </Typography>
          <Typography
            as="p"
            variant="secondary"
            size="body_lg"
            textAlign="center"
            className="max-w-3xl text-gray-500 text-center"
          >
            Dev Launchers is a 501(c)(3) nonprofit intent on empowering diverse
            creatives, innovators, and leaders. We're working on touching as
            many lives as we possibly can, and need your help to make that
            happen. Any amount helps!
          </Typography>
          <div className="flex justify-center pt-8">
            <a
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E6TSNXLFG3UTY&source=url"
            >
              Donate with PayPal
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="semibold"
            textAlign="center"
            className="max-w-7xl pb-6 text-center"
            id="partner"
          >
            Partner with Us
          </Typography>
          <Typography
            as="p"
            variant="secondary"
            size="body_lg"
            textAlign="center"
            className="max-w-3xl text-gray-500 text-center"
          >
            At Dev Launchers, we believe in the power of collaboration to create
            transformative experiences. Join us in our mission to bridge
            opportunity gaps in the tech industry by becoming a partner. Your
            involvement can help provide essential resources, mentorship, and
            opportunities to those who are eager to learn and grow in their
            careers. Whether you are a company, a professional group, or an
            individual with a passion for technology and education, your support
            is crucial in building a more inclusive and diverse tech community.
          </Typography>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <a
              className="bg-black border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:text-black hover:font-semibold hover:border-purple-300 hover:border-4"
              href="mailto:contact@devlaunchers.com"
            >
              Contact Us
            </a>
            <a
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-purple-900 hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://forms.gle/VLP2YHDsSXmLTqQ8A"
            >
              Apply for Partnership
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="semibold"
            textAlign="center"
            className="max-w-7xl pb-6 text-center"
          >
            Become a Mentor
          </Typography>
          <Typography
            as="p"
            variant="secondary"
            size="body_lg"
            textAlign="center"
            className="max-w-4xl text-gray-500 text-center"
          >
            Share your expertise and inspire tech enthusiasts at every career
            stage by becoming a mentor at Dev Launchers. As a mentor, you play a
            crucial role in helping our diverse members navigate the
            complexities of technology and design, guiding them to the next
            level in their careers. Your involvement not only shapes their
            professional journey but also enhances your leadership and teaching
            skills within a collaborative and supportive environment. Whether
            you're leading workshops or guiding a team, your contribution helps
            turn potential into significant career growth. Join us to foster a
            space where every interaction is an opportunity for mutual learning
            and every challenge a chance to advance together.
          </Typography>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <a
              className="bg-black border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:text-black hover:font-semibold hover:border-purple-300 hover:border-4"
              href="mailto:contact@devlaunchers.com"
            >
              Contact Us
            </a>
            <a
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://forms.gle/SrKn5wWAYUNGYmec9"
            >
              Apply to Mentor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
