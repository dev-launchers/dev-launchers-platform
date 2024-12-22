/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CardImagePair from '@devlaunchers/components/components/CardImagePair';
import Button from '@devlaunchers/components/components/atoms/Button';
import Image from 'next/image';

const Home = () => {
  // Common styles
  const styles = {
    section: {
      container:
        'max-w-screen-xl container mx-auto flex flex-col py-10 pt-16 gap-6 justify-center items-center',
      withBackground:
        'max-w-screen-xl container mx-auto flex flex-col py-16 gap-10 justify-center items-center bg-cover bg-center bg-no-repeat',
      header:
        'flex flex-col items-center justify-center w-full text-center py-6',
      headerHero:
        'flex flex-col items-center justify-center w-full text-center pt-16',
      heading: 'text-6xl font-bold text-center leading-relaxed',
      headingHero: {
        className:
          'font-bold text-center align-center border-none border-0 m-0',
        style: { fontSize: '4.5rem' }, // This approximates what a text-7xl would be
      },
      subHeading: 'text-lg text-gray-600 max-w-3xl mx-auto font-normal',
      label:
        'text-lg text-center uppercase text-gray-400 mx-auto font-normal min-w-full',
      grid: 'grid grid-cols-1 w-full md:grid-cols-3 gap-6',
      button:
        'text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 capitalize',
      buttonContainer: 'flex justify-center ',
      partnerContainer: 'w-full  mx-auto pt-16 px-4',
      cardsContainer: 'flex flex-wrap justify-center my-4 gap-8',
      partnerLogos:
        'flex flex-col md:flex-row items-center justify-around gap-20 mt-8',
      logoStyle: 'h-16 w-auto flex-shrink-0',
      logoContainer:
        'justify-center p-6 grid grid-cols-1 md:grid-cols-3 gap-16 align-items',
    },
    main: 'min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 md:px-6 py-12',
  };

  // Section component
  const Section = ({ children, className = '' }) => (
    <section className={`${styles.section.container} ${className}`}>
      {children}
    </section>
  );

  // Content sections
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
      imagePosition: 'top',
      title: 'Build Your Beginning',
      description:
        'Start your tech career or switch paths with hands-on experience at Dev Launchers. Participate in impactful projects and receive mentorship to gain confidence and skills needed in the tech industry.',
      descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
      btnText: 'Entry-Level Opportunities',
      btnLink: '/projects',
      imageBorderColor: 'hsla(28, 100%, 53%, 1)',
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)',
      onClick: () => console.log('Build Your Beginning clicked'),
    },
    {
      image: '/images/home/lead.png',
      altText:
        'Person presenting to team members in front of a wall covered with colorful sticky notes',
      imagePosition: 'bottom',
      title: 'Launch to Leadership',
      description:
        'Lead teams and mentor emerging talent. Share your experience, guide projects, and help shape the future of tech innovation. Develop leadership skills and advance your career with us.',
      descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
      btnText: 'Leadership Opportunities',
      btnLink: '/projects',
      imageBorderColor: 'hsla(194, 52%, 67%, 1)',
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)',
      onClick: () => console.log('Launch to Leadership clicked'),
    },
    {
      image: '/images/home/partner.png',
      altText:
        'Professional handshake silhouetted against vibrant blue and pink lighting',
      imagePosition: 'top',
      title: 'Shape the Future',
      description:
        'Become a catalyst for change by becoming a mentor or partnering with us. Help us build an inclusive and innovative tech sector through resources and expertise.',
      descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
      btnText: 'Partnership Opportunities',
      btnLink: '/projects',
      imageBorderColor: 'hsla(40, 100%, 50%, 1)',
      cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(270, 41%, 65%, 1)',
      onClick: () => console.log('Shape the Future clicked'),
    },
  ];

  const features = [
    {
      image: '/images/home/ideas.png',
      altText:
        'Group of people working together at a table with laptops, backlit by warm orange lighting',
      imagePosition: 'top',
      title: "Shape Tomorrow's Tech",
      description:
        "Explore, contribute, and refine innovative project ideas with our community. Whether you're sharing your own concepts or helping others evolve theirs, every perspective helps turn great ideas into reality.",
      descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
      btnText: 'Explore Ideas',
      btnLink: '/projects',
      imageBorderColor: 'hsla(40, 100%, 50%, 1)',
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)',
      onClick: () => console.log('Shape Tomorrow clicked'),
    },
    {
      image: '/images/home/map.png',
      altText:
        'Glowing digital world map visualization with interconnected network nodes in pink and purple',
      imagePosition: 'bottom',
      title: 'Meet Our Community',
      description:
        "Our diverse members support each other to achieve remarkable things. From launching new careers to building innovative solutions, we're creating positive change through technology. Discover the stories and projects shaping our community's success",
      descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
      btnText: 'See Our Impact',
      btnLink: '/projects',
      imageBorderColor: 'hsla(194, 52%, 67%, 1)',
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)',
      onClick: () => console.log('Meet Community clicked'),
    },
    {
      image: '/images/home/learning.png',
      altText:
        'People working at computer stations in a modern workspace with colorful ambient lighting',
      imagePosition: 'top',
      title: 'Hands-on Learning',
      description:
        "Grow your skills through our collection of resources and hands-on projects. Whether you're exploring development, design, product management, QA, or research, build confidence with real-world examples and guided challenges.",
      descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
      btnText: 'Explore Resources',
      btnLink: '/projects',
      imageBorderColor: 'hsla(28, 100%, 53%, 1)',
      cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
      cardBorderColor: 'hsla(230, 41%, 63%, 1)',
      onClick: () => console.log('Hands-on Learning clicked'),
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
    <main className={styles.main}>
      {/* Hero Section */}
      <Section>
        <div className={styles.section.headerHero}>
          <h1
            className={styles.section.headingHero.className}
            style={styles.section.headingHero.style}
          >
            {sections.hero.title}
          </h1>
          <p className={styles.section.subHeading}>
            {sections.hero.description}
          </p>
        </div>

        <div className={styles.section.buttonContainer}>
          <Button className={styles.section.button}>
            {sections.hero.buttonText}
          </Button>
        </div>

        <div className={styles.section.partnerContainer}>
          <p className={styles.section.label}>{sections.hero.label}</p>
          <div className={styles.section.partnerLogos}>
            <img
              className={styles.section.logoStyle}
              src="/images/home/google.png"
              alt="Google Logo"
            />
            <img
              className={styles.section.logoStyle}
              src="/images/home/krafties.png"
              alt="Krafties Logo"
            />
            <img
              className={styles.section.logoStyle}
              src="/images/home/microsoft.png"
              alt="Microsoft Logo"
            />
          </div>
        </div>
      </Section>

      {/* Opportunities Section */}
      <Section>
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>
            {sections.opportunities.title}
          </h2>
          <p className={styles.section.subHeading}>
            {sections.opportunities.description}
          </p>
        </div>
        <div className={styles.section.cardsContainer}>
          {opportunities.map((item, index) => (
            <CardImagePair key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* Join Section */}
      <Section backgroundImage="/images/home/background-shape.png">
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>{sections.join.title}</h2>
          <p className={styles.section.subHeading}>
            {sections.join.description}
          </p>
        </div>
        <div className={styles.section.buttonContainer}>
          <Button className={styles.section.button}>
            {sections.join.buttonText}
          </Button>
        </div>
      </Section>

      {/* Build Section */}
      <Section>
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>{sections.build.title}</h2>
          <p className={styles.section.subHeading}>
            {sections.build.description}
          </p>
        </div>
        <div className={styles.section.logoContainer}>
          <img src="/images/home/logo-tailwind.png" alt="Tailwind Logo" />
          <img src="/images/home/logo-react.png" alt="React Logo" />
          <img src="/images/home/logo-github.png" alt="GitHub Logo" />
          <img src="/images/home/logo-typescript.png" alt="TypeScript Logo" />
          <img src="/images/home/logo-figma.png" alt="Figma Logo" />
          <img src="/images/home/logo-shadcn.png" alt="Shadcn Logo" />
        </div>
      </Section>

      {/* Community Section */}
      <Section>
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>
            {sections.opportunities.title}
          </h2>
          <p className={styles.section.subHeading}>
            {sections.opportunities.description}
          </p>
        </div>
        <div className={styles.section.grid}>
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
      <Section>
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>{sections.features.title}</h2>
          <p className={styles.section.subHeading}>
            {sections.features.description}
          </p>
        </div>
        <div className={styles.section.cardsContainer}>
          {features.map((item, index) => (
            <CardImagePair key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* Donate Section */}
      <Section>
        <div className={styles.section.header}>
          <h2 className={styles.section.heading}>{sections.donate.title}</h2>
          <p className={styles.section.subHeading}>
            {sections.donate.description}
          </p>
        </div>
        <div className={styles.section.buttonContainer}>
          <Button className={styles.section.button}>
            {sections.donate.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Home;
