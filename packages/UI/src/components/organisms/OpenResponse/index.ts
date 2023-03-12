export { default } from './OpenResponse';
import type CSS from 'csstype';
import type { ChangeEvent } from 'react';

export interface OpenResponseProps {
  width?: CSS.Properties['width'];
  rows: number;
  cols: number;
  label: string;
  name?: string;
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error: string;
  valid?: boolean;
  touched?: boolean;
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
