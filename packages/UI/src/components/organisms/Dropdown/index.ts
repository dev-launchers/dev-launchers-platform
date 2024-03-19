export { default } from './Dropdown';

/**
 * @deprecated please import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuRadioGroup} from @devlaunchers/components/src/components/DropdownMenu
 */
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
}
