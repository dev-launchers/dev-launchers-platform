import React from 'react';
import CardImagePair from '@devlaunchers/components/components/CardImagePair';
import Image from 'next/image';

const Home = () => {
  // Common styles that can be reused
  const commonStyles = {
    section: {
      container: 'max-w-screen-lg container mx-auto flex flex-col',
      padding: 'px-4 py-16',
      gap: 'gap-6',
      alignment: 'justify-center items-center',
    },
    headerContainer:
      'flex flex-col items-center justify-center w-full text-center ga',
    headingHero:
      'text-6xl font-bold text-center align-center border-none border-0 m-0 ',
    headingSection: 'text-5xl font-bold text-center',
    subHeading: 'text-lg text-gray-600 max-w-3xl mx-auto font-normal',
    label: 'text-lg text-gray-400 max-w-3xl mx-auto font-normal min-w-full',
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-2 pt-6 ',
    button:
      'text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700',
    buttonContainer: 'flex justify-center p-6',
    logoContainer:
      ' justify-center p-6 grid grid-cols-1 md:grid-cols-3 gap-8 align-items',
    plogoContainer: 'flex flex-row justify-between flex-grow flex-wrap',
    partnerContainer: ' flex flex-col max-w-full',
  };

  // Common card styles for opportunities and features

  const cardStyles = {
    getStyle: (index) => ({
      // Alternates based on imagePosition: (index % 3 === 1) ? 'top' : 'bottom', index
      imageFit: 'cover',
      imageAspectRatio: '16/9',
    }),
  };

  const mainStyles = {
    container:
      'min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 md:px-6 pt-32',
  };
  // Section component for reusable section layouts
  const Section = ({ children, className = '' }) => (
    <section
      className={`
      ${commonStyles.section.container}
      ${commonStyles.section.padding}
      ${commonStyles.section.gap}
      ${commonStyles.section.alignment}
      ${className}
    `}
    >
      {children}
    </section>
  );

  const sections = {
    hero: {
      title: 'Collaborate, Build, and Thrive in Tech',
      description:
        "Join our global community of 200+ members who've launched their careers to the next level through collaborative, real-world projects.",
      label: 'Partners and Sponsors',
      buttonText: 'Explore Opportunities',
    },
    opportunities: {
      title: 'Opportunities for Everyone',
      description:
        "Whether you're starting your journey, leading teams, or seeking to give back, we provide the hands-on experience, mentorship, and community you need to succeed.",
    },
    join: {
      title: 'Join Us',
      description:
        "Create your profile, discover opportunities, and join our community—all for free! Whether you're just starting out, looking to switch careers, or seeking new challenges, our community is here to support you every step of the way.",
      buttonText: 'Join Today',
    },
    features: {
      title: 'Why Dev Launchers?',
      description:
        "Transform your tech career through real-world experience, collaborative projects, and supportive community. We provide the hands-on opportunities and resources you need to succeed in today's tech industry.",
    },
    build: {
      title: 'We Build with the Best',
      description:
        'We collaborate and build using the best tools and software including Figma, React, Next.js and more to launch our members to the next level. Learn how we leverage these technologies in real-world projects and develop competitive skills that keep you at the forefront of the industry.',
    },
    community: {
      title: 'Our Community',
      description:
        'From career-launching success stories to global collaborations, our tight-knit community drives innovation in tech. Our alumni work at industry leaders like Amazon, Microsoft, Meta, and J.P. Morgan, while our active members collaborate across five continents to build impactful solutions.',
    },
    donate: {
      title: 'Transform Tech Today',
      description:
        "Together, we're building pathways into technology careers for everyone. Your tax-deductible donation helps create an inclusive community where aspiring developers, designers, product managers, researchers, and QA professionals can turn their potential into impact.",
      buttonText: 'Donate Today',
    },
  };

  const opportunities = [
    {
      image: '/images/home/build.png',
      altText:
        'Close-up of a finger interacting with a glowing blue digital circuit interface',
      title: 'Build Your Beginning',
      description:
        'Start your tech career or switch paths with hands-on experience at Dev Launchers. Participate in impactful projects and receive mentorship to gain confidence and skills needed in the tech industry.',
      btnText: 'Entry-Level Opportunities',
      imageBorderColor: 'hsla(28, 100%, 53%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)', // Border color of the card
      onClick: () => console.log('Build Your Beginning clicked'),
      ...cardStyles,
    },
    {
      image: '/images/home/lead.png',
      altText:
        'Person presenting to team members in front of a wall covered with colorful sticky notes',
      title: 'Launch to Leadership',
      description:
        'Lead teams and mentor emerging talent. Share your experience, guide projects, and help shape the future of tech innovation. Develop leadership skills and advance your career with us.',
      btnText: 'Leadership Opportunities',
      imageBorderColor: 'hsla(194, 52%, 67%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)', // Border color of the card
      onClick: () => console.log('Launch to Leadership clicked'),
      ...cardStyles,
    },
    {
      image: '/images/home/partner.png',
      altText:
        ' Professional handshake silhouetted against vibrant blue and pink lighting',
      title: 'Shape the Future',
      description:
        'Become a catalyst for change by becoming a mentor or partnering with us. Help us build an inclusive and innovative tech sector through resources and expertise.',
      btnText: 'Partnership Opportunities',
      imageBorderColor: 'hsla(40, 100%, 50%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)', // Border color of the card
      onClick: () => console.log('Shape the Future clicked'),
      ...cardStyles,
    },
  ];

  const features = [
    {
      image: '/images/home/ideas.png',
      altText:
        'Group of people working together at a table with laptops, backlit by warm orange lighting',
      title: "Shape Tomorrow's Tech",
      description:
        "Explore, contribute, and refine innovative project ideas with our community. Whether you're sharing your own concepts or helping others evolve theirs, every perspective helps turn great ideas into reality.",
      btnText: 'Explore Ideas',
      imageBorderColor: 'hsla(40, 100%, 50%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)', // Border color of the card
      onClick: () => console.log('Shape Tomorrow clicked'),
      ...cardStyles,
    },
    {
      image: '/images/home/map.png',
      altText:
        'Glowing digital world map visualization with interconnected network nodes in pink and purple',
      title: 'Meet Our Community',
      description:
        "Our diverse members support each other to achieve remarkable things. From launching new careers to building innovative solutions, we're creating positive change through technology. Discover the stories and projects shaping our community's success",
      btnText: 'See Our Impact',
      imageBorderColor: 'hsla(194, 52%, 67%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)', // Border color of the card
      onClick: () => console.log('Meet Community clicked'),
      ...cardStyles,
    },
    {
      image: '/images/home/learning.png',
      altText:
        'People working at computer stations in a modern workspace with colorful ambient lighting',
      title: 'Hands-on Learning',
      description:
        "Grow your skills through our collection of resources and hands-on projects. Whether you're exploring development, design, product management, QA, or research, build confidence with real-world examples and guided challenges.",
      btnText: 'Explore Resources',
      imageBorderColor: 'hsla(28, 100%, 53%, 1)', // Border color of the image
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.4)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)', // Border color of the card
      onClick: () => console.log('Hands-on Learning clicked'),
      ...cardStyles,
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

  return (
    <main className={mainStyles.container}>
      {/* Hero Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h1 className={commonStyles.headingHero}>{sections.hero.title}</h1>
          <p className={commonStyles.subHeading}>{sections.hero.description}</p>
        </div>
        <div className={commonStyles.buttonContainer}>
          <button className={commonStyles.button}>
            {sections.hero.buttonText}
          </button>
        </div>
        <div className={commonStyles.partnerContainer}>
          <p className={commonStyles.label}>{sections.hero.label}</p>
          <div className={commonStyles.plogoContainer}>
            <img src="/images/home/google.png" alt="Google Logo" />
            <img src="/images/home/krafties.png" alt="Krafties Logo" />
            <img src="/images/home/microsoft.png" alt="Microsoft Logo" />
          </div>
        </div>
      </Section>

      {/* Opportunities Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>
            {sections.opportunities.title}
          </h2>
          <p className={commonStyles.subHeading}>
            {sections.opportunities.description}
          </p>
        </div>
        <div className={commonStyles.grid}>
          {opportunities.map((item, index) => (
            <CardImagePair key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* Join Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>{sections.join.title}</h2>
          <p className={commonStyles.subHeading}>{sections.join.description}</p>
        </div>
        <div className={commonStyles.buttonContainer}>
          <button className={commonStyles.button}>
            {sections.join.buttonText}
          </button>
        </div>
      </Section>

      {/* Build Section*/}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>
            {sections.build.title}
          </h2>
          <p className={commonStyles.subHeading}>
            {sections.build.description}
          </p>
        </div>
        <div className={commonStyles.logoContainer}>
          <img src="/images/home/logo-tailwind.png" alt="Tailwind Logo" />
          <img src="/images/home/logo-react.png" alt="React Logo" />
          <img src="/images/home/logo-github.png" alt="GitHub Logo" />
          <img src="/images/home/logo-typescript.png" alt="TypeScript Logo" />
          <img src="/images/home/logo-figma.png" alt="Figma Logo" />
          <img src="/images/home/logo-shadcn.png" alt="Shadcn Logo" />
        </div>
      </Section>

      {/* Community Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>
            {sections.opportunities.title}
          </h2>
          <p className={commonStyles.subHeading}>
            {sections.opportunities.description}
          </p>
        </div>
        <div className={commonStyles.grid}>
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
      </Section>

      {/* Features Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>
            {sections.features.title}
          </h2>
          <p className={commonStyles.subHeading}>
            {sections.features.description}
          </p>
        </div>
        <div className={commonStyles.grid}>
          {features.map((item, index) => (
            <CardImagePair key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* Donate Section */}
      <Section className={commonStyles.section}>
        <div className={commonStyles.headerContainer}>
          <h2 className={commonStyles.headingSection}>
            {sections.donate.title}
          </h2>
          <p className={commonStyles.subHeading}>
            {sections.donate.description}
          </p>
        </div>
        <div className={commonStyles.buttonContainer}>
          <button className={commonStyles.button}>
            {sections.donate.buttonText}
          </button>
        </div>
      </Section>
    </main>
  );
};

export default Home;
