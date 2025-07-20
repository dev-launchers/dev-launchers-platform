import TestimonialCarousel from './Carousel';
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

const stats = [
  {
    number: '200+',
    description: "Alumni and members who've been part of our journey",
  },
  { number: '8+', description: 'Countries represented in our community' },
  { number: '5', description: 'Continents united through technology' },
];

const CommunitySection = () => (
  <Section className={styles.section.container}>
    <div className={styles.section.header}>
      <Typography
        as="h2"
        variant="primary"
        size="xl4"
        textWeight="semibold"
        textAlign="center"
        className={styles.section.heading}
      >
        {sections.community.title}
      </Typography>
      <Typography
        as="p"
        variant="secondary"
        size="body_lg"
        textAlign="center"
        className={styles.section.subHeading}
      >
        {sections.community.description}
      </Typography>
    </div>
    <div className={styles.section.communityCardContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.section.communityCard}>
          <div className={styles.section.communityMetrics}>
            <Typography
              as="span"
              variant="primary"
              size="xl5"
              textWeight="bold"
              textAlign="center"
              className={styles.section.communityNumber}
            >
              {stat.number}
            </Typography>
            <Typography
              as="p"
              variant="secondary"
              size="body_base"
              textAlign="center"
              className={styles.section.communityCardDescription}
            >
              {stat.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
    <TestimonialCarousel />
  </Section>
);

export default CommunitySection;
