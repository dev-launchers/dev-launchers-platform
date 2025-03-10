import TestimonialCarousel from './Carousel';
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';

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
      <h2 className={styles.section.heading}>{sections.community.title}</h2>
      <p className={styles.section.subHeading}>
        {sections.community.description}
      </p>
    </div>
    <div className={styles.section.communityCardContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.section.communityCard}>
          <div className={styles.section.communityMetrics}>
            <span className={styles.section.communityNumber}>
              {stat.number}
            </span>
            <p className={styles.section.communityCardDescription}>
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <TestimonialCarousel />
  </Section>
);

export default CommunitySection;
