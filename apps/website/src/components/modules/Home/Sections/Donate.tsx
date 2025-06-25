// components/WhyDevLaunchers.js
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

const DonateSection = () => {
  return (
    <Section className="">
      <div className={styles.section.header}>
        <Typography
          as="h1"
          variant="primary"
          size="xl6"
          textWeight="bold"
          textAlign="center"
          className="max-w-7xl pb-10"
        >
          {sections.donate.title}
        </Typography>
        <Typography
          as="p"
          variant="secondary"
          size="body_lg"
          textAlign="center"
          className={styles.section.subHeading}
        >
          {sections.donate.description}
        </Typography>
      </div>
      <div className={styles.section.buttonContainer}>
        <a href="/support-us">
          <button className={styles.section.button}>
            {sections.donate.buttonText}
          </button>
        </a>
      </div>
    </Section>
  );
};

export default DonateSection;
