// components/WhyDevLaunchers.js
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import { atoms } from '@devlaunchers/components/components';

const DonateSection = () => {
  return (
    <Section className="">
      <div className={styles.section.header}>
        <atoms.Typography
          as="h1"
          variant="primary"
          size="xl6"
          textWeight="bold"
          textAlign="center"
          className="max-w-7xl pb-10"
        >
          {sections.donate.title}
        </atoms.Typography>
        <atoms.Typography
          as="p"
          variant="secondary"
          size="body_lg"
          textAlign="center"
          className={styles.section.subHeading}
        >
          {sections.donate.description}
        </atoms.Typography>
      </div>
      <div className={styles.section.buttonContainer}>
        <a href="/support-us">
          <atoms.Button type="primary" color="nebula">
            {sections.donate.buttonText}
          </atoms.Button>
        </a>
      </div>
    </Section>
  );
};

export default DonateSection;
