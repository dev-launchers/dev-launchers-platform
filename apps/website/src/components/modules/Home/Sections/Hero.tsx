import kraftiesImage from '../../../../images/home-page/krafties.png?webp';
import googleImage from '../../../../images/home-page/google.png?webp';
import microsoftImage from '../../../../images/home-page/microsoft.png?webp';
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';

const HeroSection = () => (
  <Section className={styles.section.withBackground}>
    <div className={styles.section.headerHero}>
      <h1
        className={styles.section.headingHero.className}
        style={styles.section.headingHero.style}
      >
        {sections.hero.title}
      </h1>
      <p className={styles.section.subHeading}>{sections.hero.description}</p>
    </div>
    <div className={styles.section.buttonContainer}>
      <button className={styles.section.button}>
        {sections.hero.buttonText}
      </button>
    </div>
    <div className={styles.section.partnerContainer}>
      <p className={styles.section.label}>{sections.hero.label}</p>
      <div className={styles.section.partnerLogos}>
        <img
          alt="Google Logo"
          className={styles.section.logoStyle}
          src="/images/home/google.png"
        />
        <img
          alt="Krafties Logo"
          className={styles.section.logoStyle}
          src="/images/home/krafties.png"
        />
        <img
          alt="Microsoft Logo"
          className={styles.section.logoStyle}
          src="/images/home/microsoft.png"
        />
      </div>
    </div>
  </Section>
);

export default HeroSection;
