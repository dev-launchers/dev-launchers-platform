import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import CardImagePair from './CardImagePair';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

const opportunities = [
  {
    image: '/dev_image.png',
    altText:
      'Close-up of a finger interacting with a glowing blue digital circuit interface',
    imagePosition: 'top' as const,
    title: 'Build Your Beginning',
    description:
      'Start your tech career or switch paths with hands-on experience at Dev Launchers. Participate in impactful projects and receive mentorship to gain confidence and skills needed in the tech industry.',
    descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
    btnText: 'Entry-Level Opportunities',
    btnLink: '/join',
    imageBorderColor: 'hsla(28, 100%, 53%, 1)',
    cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(270, 41%, 65%, 1)',
    onClick: () => console.log('Build Your Beginning clicked'),
  },
  {
    image: '/dev_image (1).png',
    altText:
      'Person presenting to team members in front of a wall covered with colorful sticky notes',
    imagePosition: 'bottom' as const,
    title: 'Launch to Leadership',
    description:
      'Lead teams and mentor emerging talent. Share your experience, guide projects, and help shape the future of tech innovation. Develop leadership skills and advance your career with us.',
    descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
    btnText: 'Leadership Opportunities',
    btnLink: '/join',
    imageBorderColor: 'hsla(194, 52%, 67%, 1)',
    cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(270, 41%, 65%, 1)',
    onClick: () => console.log('Launch to Leadership clicked'),
  },
  {
    image: '/dev_image (2).png',
    altText:
      'Professional handshake silhouetted against vibrant blue and pink lighting',
    imagePosition: 'top' as const,
    title: 'Shape the Future',
    description:
      'Become a catalyst for change by becoming a mentor or partnering with us. Help us build an inclusive and innovative tech sector through resources and expertise.',
    descriptionTextColor: 'hsla(271, 50%, 74%, 1)',
    btnText: 'Partnership Opportunities',
    btnLink: '/support-us',
    imageBorderColor: 'hsla(40, 100%, 50%, 1)',
    cardBackgroundColor: 'hsla(270, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(270, 41%, 65%, 1)',
    onClick: () => console.log('Shape the Future clicked'),
  },
];

const Opportunities = () => {
  return (
    <Section className={styles.section.container}>
      <div id="opportunities" className={styles.section.header}>
        <Typography
          as="h2"
          variant="primary"
          size="xl4"
          textWeight="semibold"
          textAlign="center"
          className={styles.section.heading}
        >
          {sections.opportunities.title}
        </Typography>
        <Typography
          as="p"
          variant="secondary"
          size="body_lg"
          textAlign="center"
          className={styles.section.subHeading}
        >
          {sections.opportunities.description}
        </Typography>
      </div>
      <div className={styles.section.cardsContainer}>
        {opportunities.map((item, index) => (
          <CardImagePair key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Opportunities;
