export { default } from './Checkbox';
import type { ChangeEvent } from 'react';

type Theme = 'brand' | 'grey' | 'error';
type Size = 'base' | 'small';

export interface CheckboxProps {
  disabled?: boolean;
  label?: string;
  onChange?: (e: ChangeEvent, label: string) => void;
  required?: boolean;
  checked?: boolean;
  theme?: Theme;
  size?: Size;
}
