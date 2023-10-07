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
  color?: 'light' | 'dark';
  recieveValue?: (value: { [key: string]: boolean }) => void;
}
