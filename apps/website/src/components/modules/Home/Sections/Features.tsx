import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import CardImagePair from './CardImagePair';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

const features = [
  {
    image: '/dev_image (3).png',
    altText:
      'Group of people working together at a table with laptops, backlit by warm orange lighting',
    imagePosition: 'top',
    title: "Shape Tomorrow's Tech",
    description:
      "Explore, contribute, and refine innovative project ideas with our community. Whether you're sharing your own concepts or helping others evolve theirs, every perspective helps turn great ideas into reality.",
    descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
    btnText: 'Explore Ideas',
    btnLink: '/ideaspace',
    imageBorderColor: 'hsla(40, 100%, 50%, 1)',
    cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(230, 41%, 63%, 1)',
    onClick: () => console.log('Shape Tomorrow clicked'),
  },
  {
    image: '/dev_image (4).png',
    altText:
      'Glowing digital world map visualization with interconnected network nodes in pink and purple',
    imagePosition: 'bottom',
    title: 'Meet Our Community',
    description:
      "Our diverse members support each other to achieve remarkable things. From launching new careers to building innovative solutions, we're creating positive change through technology. Discover the stories and projects shaping our community's success",
    descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
    btnText: 'See Our Impact',
    btnLink: '/about',
    imageBorderColor: 'hsla(194, 52%, 67%, 1)',
    cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(230, 41%, 63%, 1)',
    onClick: () => console.log('Meet Community clicked'),
  },
  {
    image: '/dev_image (5).png',
    altText:
      'People working at computer stations in a modern workspace with colorful ambient lighting',
    imagePosition: 'top',
    title: 'Hands-on Learning',
    description:
      "Grow your skills through our collection of resources and hands-on projects. Whether you're exploring development, design, product management, QA, or research, build confidence with real-world examples and guided challenges.",
    descriptionTextColor: 'hsla(230, 41%, 63%, 1)',
    btnText: 'Explore Resources',
    btnLink: '/resources',
    imageBorderColor: 'hsla(28, 100%, 53%, 1)',
    cardBackgroundColor: 'hsla(230, 51%, 25%, 0.25)',
    cardBorderColor: 'hsla(230, 41%, 63%, 1)',
    onClick: () => console.log('Hands-on Learning clicked'),
  },
];

const Features = () => {
  return (
    <Section className={styles.section.withBackground02}>
      <div className={styles.section.header}>
        <Typography
          as="h2"
          variant="primary"
          size="xl4"
          textWeight="semibold"
          textAlign="center"
          className={styles.section.heading}
        >
          {sections.features.title}
        </Typography>
        <Typography
          as="p"
          variant="secondary"
          size="body_lg"
          textAlign="center"
          className={styles.section.subHeading}
        >
          {sections.features.description}
        </Typography>
      </div>
      <div className={styles.section.cardsContainer}>
        {features.map((item, index) => (
          <CardImagePair key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Features;
