import React from 'react';
import { styles } from '../styles';

export const Section = ({ children, className = '', style = {} }) => (
  <section className={`${styles.section.container} ${className}`} style={style}>
    {children}
  </section>
);
