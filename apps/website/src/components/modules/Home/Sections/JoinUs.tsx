import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';

const JoinUsSection = () => (
  <Section className={styles.section.withBackground03}>
    <div className={styles.section.header}>
      <h2 className={styles.section.heading}>{sections.join.title}</h2>
      <p className={styles.section.subHeading}>{sections.join.description}</p>
    </div>
    <div className={styles.section.buttonContainer}>
      <button className={styles.section.button}>
        {sections.join.buttonText}
      </button>
    </div>
  </Section>
);

export default JoinUsSection;
