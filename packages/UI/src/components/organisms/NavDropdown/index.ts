export { default } from './NavDropdown';

export interface NavDropdownProps {
  links: { text: string; href: string }[];
  title: string;
  isOpen?: boolean;
}
