export { default } from './NavDropdown';

export interface NavDropdownProps {
  links: { text: string; href: string; hasUnderline?: boolean }[];
  title: string;
  isOpen?: boolean;
}
