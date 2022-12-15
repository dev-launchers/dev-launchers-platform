export { default } from './Checkbox';
import type { ChangeEvent } from 'react';

export interface CheckboxProps {
  disabled: boolean;
  label?: string;
  onChange?: (e: ChangeEvent, label: string) => void;
  required?: boolean;
}
