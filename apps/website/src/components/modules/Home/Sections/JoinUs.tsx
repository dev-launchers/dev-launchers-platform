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
      <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=164131315429-hcllbtrq77jsc7b3fqviak7148hj8oa9.apps.googleusercontent.com&response_type=code&redirect_uri=https%3A%2F%2Fapiv4.devlaunchers.org%2Fapi%2Fconnect%2Fgoogle%2Fcallback&scope=email%20profile&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow">
        <button className={styles.section.button}>
          {sections.join.buttonText}
        </button>
      </a>
    </div>
  </Section>
);

export default JoinUsSection;
