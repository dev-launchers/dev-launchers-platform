import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
const TechStackSection = () => (
  <Section>
    <div className={styles.section.header}>
      <h2 className={styles.section.heading}>{sections.build.title}</h2>
      <p className={styles.section.subHeading}>{sections.build.description}</p>
    </div>
    <div className={styles.section.buttonContainer}>
      <a href="https://github.com/dev-launchers/dev-launchers-platform">
        <button className={styles.section.button}>
          {sections.build.buttonText}
        </button>
      </a>
    </div>
    <div className={styles.section.logoContainer}>
      {['Tailwind', 'React', 'Github', 'TypeScript', 'Figma', 'Shadcn'].map(
        (tech) => (
          <div key={tech} className={styles.section.stackLogo}>
            <img
              src={`/${tech.toLowerCase().replace(/\s/g, '')}.svg`}
              alt={tech}
            />
            <span className="text-xl font-medium">{tech}</span>
          </div>
        )
      )}
    </div>
  </Section>
);

export default TechStackSection;
