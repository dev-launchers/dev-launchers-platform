/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PageBody from '../../common/PageBody';
import SupportUsOverlay from './SupportUsOverlay';

import studentPhoto from '../../../images/support-us/bw-girl-profile.png?webp';
import { Wrapper } from './StyledSupportUs';

import { atoms } from '@devlaunchers/components/components';

export default function SupportUs() {
  return (
    <div className=" bg-black text-white">
      <section className="max-w-7xl bg-black py-32 px-4 md:px-8 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold max-w-4xl text-5xl lg:text-7xl leading-tight text-center align-center border-none border-0 m-0 pt-0 pb-4 text-white">
            Fuel the Future
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl  text-gray-500  font-normal">
            Help Dev Launchers provide resources and opportunity for developers,
            creatives, and innovators from diverse backgrounds to gain the
            skills and knowledge necessary to launch their careers to the next
            level.
          </p>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl lg:text-6xl leading-tight font-bold text-center max-w-7xl pb-6">
            Support Our Mission
          </h2>
          <p className="text-base md:text-lg text-center max-w-3xl  text-gray-500  font-normal">
            Dev Launchers is a 501(c)(3) nonprofit intent on empowering diverse
            creatives, innovators, and leaders. We're working on touching as
            many lives as we possibly can, and need your help to make that
            happen. Any amount helps!
          </p>
          <div className="flex justify-center pt-8">
            <atoms.Button
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E6TSNXLFG3UTY&source=url"
            >
              Donate with PayPal
            </atoms.Button>
          </div>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2
            id="partner"
            className="text-4xl lg:text-6xl leading-tight font-bold text-center max-w-7xl pb-6"
          >
            Partner with Us
          </h2>
          <p className="text-base md:text-lg text-center max-w-3xl  text-gray-500  font-normal">
            At Dev Launchers, we believe in the power of collaboration to create
            transformative experiences. Join us in our mission to bridge
            opportunity gaps in the tech industry by becoming a partner. Your
            involvement can help provide essential resources, mentorship, and
            opportunities to those who are eager to learn and grow in their
            careers. Whether you are a company, a professional group, or an
            individual with a passion for technology and education, your support
            is crucial in building a more inclusive and diverse tech community.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <atoms.Button
              className="bg-black border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:text-black hover:font-semibold hover:border-purple-300 hover:border-4"
              href="mailto:contact@devlaunchers.com"
            >
              Contact Us
            </atoms.Button>
            <atoms.Button
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-purple-900 hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://forms.gle/VLP2YHDsSXmLTqQ8A"
            >
              Apply for Partnership
            </atoms.Button>
          </div>
        </div>
      </section>
      <section className="max-w-full bg-black py-24 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl lg:text-6xl leading-tight font-bold text-center max-w-7xl pb-6">
            Become a Mentor
          </h2>
          <p className="text-base md:text-lg text-center max-w-4xl  text-gray-500  font-normal">
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
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <atoms.Button
              className="bg-black border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:text-black hover:font-semibold hover:border-purple-300 hover:border-4"
              href="mailto:contact@devlaunchers.com"
            >
              Contact Us
            </atoms.Button>
            <atoms.Button
              className="bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:text-black hover:font-semibold  hover:bg-purple-500 hover:border-purple-300 hover:border-4"
              href="https://forms.gle/SrKn5wWAYUNGYmec9"
            >
              Apply to Mentor
            </atoms.Button>
          </div>
        </div>
      </section>
    </div>
  );
}
