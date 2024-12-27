// components/WhyDevLaunchers.js
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';

const DonateSection = () => {
  return (
    <Section className={styles.section.withBackground}>
      <div className={styles.section.header}>
        <h2 className={styles.section.heading}>{sections.donate.title}</h2>
        <p className={styles.section.subHeading}>
          {sections.donate.description}
        </p>
      </div>
      <div className={styles.section.buttonContainer}>
        <button className={styles.section.button}>
          {sections.donate.buttonText}
        </button>
      </div>
    </Section>
  );
};

export default DonateSection;
