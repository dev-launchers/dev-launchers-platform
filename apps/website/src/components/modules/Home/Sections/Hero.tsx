/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Section } from './Section';
import { styles } from '../styles';
import { sections } from './sections';
import Typography from '@devlaunchers/components/components/atoms/Typography/Typography';

const HeroSection = () => (
  <Section className={styles.section.container}>
    <div className={styles.section.headerHero}>
      <Typography
        as="h1"
        variant="primary"
        size="xl6"
        textWeight="bold"
        textAlign="center"
        className={styles.section.headingHero}
      >
        {sections.hero.title}
      </Typography>
      <Typography
        as="p"
        variant="secondary"
        size="body_lg"
        textAlign="center"
        className={styles.section.subHeading}
      >
        {sections.hero.description}
      </Typography>
    </div>
    <div className={styles.section.buttonContainer}>
      <a href="#opportunities">
        <button className={styles.section.button}>
          {sections.hero.buttonText}
        </button>
      </a>
    </div>
    <div className={styles.section.partnerContainer}>
      <Typography
        as="p"
        variant="secondary"
        size="body_base"
        textAlign="center"
        className={styles.section.label}
      >
        {sections.hero.label}
      </Typography>
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
