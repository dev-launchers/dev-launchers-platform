import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import { atoms } from '@devlaunchers/components/components';

const JoinUsSection = () => (
  <Section className="">
    <div className={styles.section.header}>
      <atoms.Typography
        as="h2"
        variant="primary"
        size="xl4"
        textWeight="semibold"
        textAlign="center"
        className={styles.section.heading}
      >
        {sections.join.title}
      </atoms.Typography>
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_lg"
        textAlign="center"
        className={styles.section.subHeading}
      >
        {sections.join.description}
      </atoms.Typography>
    </div>
    <div className={styles.section.buttonContainer}>
      <a href={`${process.env.NEXT_PUBLIC_FRONT_END_URL}/join`}>
        <atoms.Button type="primary" color="nebula">
          {sections.join.buttonText}
        </atoms.Button>
      </a>
    </div>
  </Section>
);

export default JoinUsSection;
