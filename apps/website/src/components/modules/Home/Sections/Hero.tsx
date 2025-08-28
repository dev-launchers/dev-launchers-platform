/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import { atoms } from '@devlaunchers/components/components';

const HeroSection = () => (
  <Section className={styles.section.container}>
    <div className={styles.section.headerHero}>
      <atoms.Typography
        as="h1"
        variant="primary"
        size="xl6"
        textWeight="bold"
        textAlign="center"
        className={styles.section.headingHero}
      >
        {sections.hero.title}
      </atoms.Typography>
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_lg"
        textAlign="center"
        className={styles.section.subHeading}
      >
        {sections.hero.description}
      </atoms.Typography>
    </div>
    <div className={styles.section.buttonContainer}>
      <a href="#opportunities">
        <atoms.Button type="primary" color="nebula">
          {sections.hero.buttonText}
        </atoms.Button>
      </a>
    </div>
    <div className={styles.section.partnerContainer}>
      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_base"
        textAlign="center"
        className={styles.section.label}
      >
        {sections.hero.label}
      </atoms.Typography>
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
