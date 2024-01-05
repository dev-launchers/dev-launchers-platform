import type { ReactNode } from 'react';

export { default } from './SubNavLink';

export interface SubNavLinkProps {
  href?: string;
  text?: string | ReactNode;
}
