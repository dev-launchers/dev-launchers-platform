/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import { atoms } from '@devlaunchers/components/components';

const HeroSection = () => (
  <Section className={styles.section.container}>
    <div className={styles.section.headerHero}>
      <h1 className={styles.section.headingHero}>{sections.hero.title}</h1>
      <p className={styles.section.subHeading}>{sections.hero.description}</p>
    </div>
    <div className={styles.section.buttonContainer}>
      <a href="#opportunities">
        <atoms.Button className={styles.section.button}>
          {sections.hero.buttonText}
        </atoms.Button>
      </a>
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
