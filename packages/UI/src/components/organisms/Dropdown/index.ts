export { default } from './Dropdown';

export interface DropdownProps {
  width?: 'sm' | 'md' | 'lg';
  options?: {
    text: string;
    disabled: boolean;
  }[];
  title?: string;
  isOpen?: boolean;
  type?: 'radio' | 'checkbox';
  // Allow color change for dropdown menu
  color?: 'light' | 'dark';
  //Allow dropdown to receive the current button
  checked?: { [key: string]: boolean };
  recieveValue?: (value: { [key: string]: boolean }) => void;
}
