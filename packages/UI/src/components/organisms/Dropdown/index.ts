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
  recieveValue?: (value: { [key: string]: boolean }) => void;
  callbackFn: (text: string) => void;
}
