import React from 'react';
import { Section } from './Section';

import { sections } from './sections';
import {
  Github,
  Figma,
  TypeScript,
  Tailwind,
  ReactLogo,
  ShadcnLogo,
} from '@devlaunchers/components/assets/icons';
import { styles } from '../styles';

const techStack = [
  {
    name: 'Github',
    src: '/github.svg',
    alt: 'Github Logo',
    link: 'https://github.com/dev-launchers/dev-launchers-platform',
    color: 'text-white hover:text-purple-500 group-hover:fill-purple-500',
    Icon: <Github width="52" height="52" />,
  },
  {
    name: 'React',
    src: '/react.svg',
    alt: 'React Logo',
    link: 'https://reactjs.org',
    color: 'text-white hover:text-purple-500 hover:fill-purple-500',
    Icon: <ReactLogo width="52" height="52" />,
  },
  {
    name: 'Tailwind',
    src: '/tailwind.svg',
    alt: 'Tailwind Logo',
    link: 'https://tailwindcss.com',
    color: 'text-white hover:text-purple-500 group-hover:fill-purple-500',
    Icon: <Tailwind width="52" height="52" />,
  },
  {
    name: 'TypeScript',
    src: '/typescript.svg',
    alt: 'TypeScript Logo',
    link: 'https://www.typescriptlang.org',
    color: 'text-white hover:text-purple-500 group-hover:fill-purple-500',
    Icon: <TypeScript width="52" height="52" />,
  },
  {
    name: 'Figma',
    src: '/figma.svg',
    alt: 'Figma Logo',
    link: 'https://www.figma.com',
    color: 'text-white hover:text-purple-500 group-hover:fill-purple-500',
    Icon: <Figma width="52" height="52" />,
  },
  {
    name: 'Shadcn',
    src: '/shadcn.svg',
    alt: 'Shadcn Logo',
    link: 'https://ui.shadcn.com',
    color: 'text-white hover:text-purple-500 group-hover:fill-purple-500',
    Icon: <ShadcnLogo width="52" height="52" />,
  },
];

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
      {techStack.map(({ name, alt, link, color, Icon }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${styles.section.stackLogo} ${color} transition-colors duration-200`}
        >
          {Icon}
          <span className="text-2xl font-medium mt-2">{name}</span>
        </a>
      ))}
    </div>
  </Section>
);

export default TechStackSection;
