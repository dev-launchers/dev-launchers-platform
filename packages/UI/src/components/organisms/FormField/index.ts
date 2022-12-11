export { default } from './FormField';
import type { ChangeEvent } from 'react';
import type React from 'react';

export interface InputProps {
  width: React.CSSProperties['width'];
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  valid?: boolean;
  touched?: boolean;
  onChange: (value: ChangeEvent) => void;
}
