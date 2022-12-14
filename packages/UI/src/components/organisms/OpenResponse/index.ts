export { default } from './OpenResponse';
import type { ChangeEvent } from 'react';
import type React from 'react';

export interface OpenResponseProps {
  width?: React.CSSProperties['width'];
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
