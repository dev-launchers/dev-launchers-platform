export { default } from './OpenResponse';
import type { ChangeEvent } from 'react';

export interface OpenResponseProps {
  rows: number;
  cols: number;
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error: string;
  valid?: boolean;
  touched?: boolean;
  onChange: (value: ChangeEvent) => void;
}
