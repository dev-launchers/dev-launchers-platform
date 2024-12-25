// components/WhyDevLaunchers.js
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';

const DonateSection = () => {
  return (
    <Section className="bg-[url('/background-shape.png')] bg-cover bg-bottom bg-no-repeat">
      <div className={styles.section.header}>
        <h2 className={styles.section.heading}>{sections.donate.title}</h2>
        <p className={styles.section.subHeading}>
          {sections.donate.description}
        </p>
      </div>
      <div className={styles.section.buttonContainer}>
        <button className="bg-[#52287A] border-2 text-base border-[#996FC3] text-white py-3 px-6 rounded-lg transition-colors duration-200">
          {sections.donate.buttonText}
        </button>
      </div>
    </Section>
  );
};

export default DonateSection;
