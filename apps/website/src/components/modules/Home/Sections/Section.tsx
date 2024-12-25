import { styles } from '../styles';

export const Section = ({ children, className = '' }) => (
  <section className={`${styles.section.container} ${className}`}>
    {children}
  </section>
);
