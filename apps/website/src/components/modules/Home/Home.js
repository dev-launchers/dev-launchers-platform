import React from 'react';
import { CardImagePair } from '@devlaunchers/components/components/CardImagePair';
import Image from 'next/image';

const Home = () => {
  const opportunities = [
    {
      title: 'Build Your Beginning',
      description:
        'Start your tech career or switch paths with hands-on experience at Dev Launchers. Participate in impactful projects and receive mentorship to gain confidence and skills needed in the tech industry.',
      buttonText: 'Apply | Level Beginner',
    },
    {
      title: 'Launch to Leadership',
      description:
        'Lead teams and mentor emerging talent. Share your experience, guide projects, and help shape the future of tech innovation. Develop leadership skills and advance your career with us.',
      buttonText: 'Learn More',
    },
    {
      title: 'Shape the Future',
      description:
        'Become a catalyst for change by becoming a mentor or partnering with us. Help us build an inclusive and innovative tech sector through resources and expertise.',
      buttonText: 'Leadership Opportunities',
    },
  ];

  const testimonials = [
    {
      text: 'This program has been transformative for my career. The hands-on experience and mentorship were invaluable.',
      author: 'Sophie M.',
      role: 'Software Engineer',
    },
    {
      text: 'The community support and practical projects helped me transition into tech successfully.',
      author: 'Jason R.',
      role: 'Product Manager',
    },
    {
      text: 'An incredible platform that truly empowers tech professionals to reach their full potential.',
      author: 'Alex K.',
      role: 'Tech Lead',
    },
  ];

  const features = [
    {
      title: "Shape Tomorrow's Tech",
      description:
        "Explore, contribute, and refine innovative project ideas with our community. Whether you're sharing your own concepts or helping others evolve theirs, every perspective helps turn great ideas into reality.",
      buttonText: 'Explore Ideas',
    },
    {
      title: 'Meet Our Community',
      description:
        "Our diverse members support each other to achieve remarkable things. From launching new careers to building innovative solutions, we're creating positive change through technology. Discover the stories and projects shaping our community's success",
      buttonText: 'See Our Impact',
    },
    {
      title: 'Hands-on Learning',
      description:
        "Grow your skills through our collection of resources and hands-on projects. Whether you're exploring development, design, product management, QA, or research, build confidence with real-world examples and guided challenges.",
      buttonText: 'Explore Resources',
    },
  ];

  const sections = {
    join: {
      title: 'Join Us',
      description:
        "Create your profile, discover opportunities, and join our community—all for free! Whether you're just starting out, looking to switch careers, or seeking new challenges, our community is here to support you every step of the way.",
      buttonText: 'Join Today',
      styles: {
        container: 'border-2 border-white rounded-xl p-8',
        heading: 'font-bold text-center',
        description: 'text-base mb-4 text-gray-500 font-normal text-center',
        buttonWrapper: 'flex justify-center',
        button:
          'text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700',
      },
    },

    supportMission: {
      title: 'Transform Tech Today',
      description:
        "Together, we're building pathways into technology careers for everyone. Your tax-deductible donation helps create an inclusive community where aspiring developers, designers, product managers, researchers, and QA professionals can turn their potential into impact.",
      buttonText: 'Donate Today',
      styles: {
        container: 'border-2 border-white rounded-xl p-8',
        heading: 'font-bold text-center',
        description: 'text-base mb-4 text-gray-500 font-normal text-center',
        buttonWrapper: 'flex justify-center',
        button:
          'text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700',
      },
    },
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="items-center max-w-4xl py-16 gap-4 text-center">
          <h1
            style={{ fontSize: '4rem', lineHeight: '1.25' }}
            className="text-4xl font-bold border-0 m-0"
          >
            Collaborate, Build, and Thrive in Tech
          </h1>
          <p className="text-xl mb-4 px-12 max-w-3xl text-gray-500 font-normal">
            Join our global community of 200+ members who’ve launched their
            careers to the next level through collaborative, real-world
            projects.
          </p>
        </div>
        <div>
          <button className="text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
            Explore Opportunities
          </button>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-y-4 pt-6 pb-12 mx-auto text-center max-w-3xl">
          <h2 style={{ fontSize: '3rem' }} className="font-bold text-center">
            Opportunities for Everyone
          </h2>
          <p className="text-lg mb-4 text-gray-500 font-normal">
            Whether you’re starting your journey, leading teams, or seeking to
            give back, we provide the hands-on experience, mentorship, and
            community you need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl border border-purple-500"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="mb-6 text-gray-300">{item.description}</p>
              <button className="text-base text-purple-300 hover:text-purple-100">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className={sections.join.styles.container}>
          <h2
            style={{ fontSize: '3rem' }}
            className={sections.join.styles.heading}
          >
            {sections.join.title}
          </h2>
          <p className={sections.join.styles.description}>
            {sections.join.description}
          </p>
          <div className={sections.join.styles.buttonWrapper}>
            <button className={sections.join.styles.button}>
              {sections.join.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* Build Section*/}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-y-4 pt-6 pb-12 mx-auto text-center max-w-3xl">
          <h2 style={{ fontSize: '3rem' }} className="font-bold text-center">
            We Build with the Best
          </h2>
          <p className="text-base mb-4 text-gray-500 font-normal">
            {' '}
            We collaborate and build using the best tools and software including
            Figma, React, Next.js and more to launch our members to the next
            level. Learn how we leverage these technologies in real-world
            projects and develop competitive skills that keep you at the
            forefront of the industry.
          </p>
        </div>
        <div>
          <img src="/images/home/logo-tailwind.png" />
          <img src="/images/home/logo-react.png" />
          <img src="/images/home/logo-github.png" />
          <img src="/images/home/logo-typescript.png" />
          <img src="/images/home/logo-figma.png" />
          <img src="/images/home/logo-schadcn.png" />
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-orange-500 rounded-xl p-6 bg-black"
            >
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Dev Launchers?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl border border-purple-500"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="mb-6 text-gray-300">{feature.description}</p>
              <button className="text-base text-purple-300 hover:text-purple-100">
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Support Mission Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className={sections.supportMission.styles.container}>
          <h2
            style={{ fontSize: '3rem' }}
            className={sections.supportMission.styles.heading}
          >
            {sections.supportMission.title}
          </h2>
          <p className={sections.supportMission.styles.description}>
            {sections.supportMission.description}
          </p>
          <div className={sections.supportMission.styles.buttonWrapper}>
            <button className={sections.supportMission.styles.button}>
              {sections.supportMission.buttonText}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
