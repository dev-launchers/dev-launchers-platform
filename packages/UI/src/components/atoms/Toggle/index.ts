export { default } from './Toggle';
import type { ChangeEventHandler } from 'react';

export interface ToggleProps {
  disabled: boolean;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
