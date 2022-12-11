export { default } from './FormField';
import type { ChangeEvent } from 'react';
import type React from 'react';

export interface InputProps {
  label: string | JSX.Element;
  width: React.CSSProperties['width'];
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  valid?: boolean;
  touched?: boolean;
  onChange: (value: ChangeEvent) => void;
}
