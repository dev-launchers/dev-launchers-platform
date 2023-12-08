import type { HTMLAttributes, ReactNode } from 'react';

export { default } from './NavDropdown';

export interface NavDropdownProps {
  links: ({
    text: string | ReactNode;
    href?: string;
    hasUnderline?: boolean;
  } & HTMLAttributes<unknown>)[];
  title: string;
  isOpen?: boolean;
  toggleElementProps?: Record<string, unknown>;
}
