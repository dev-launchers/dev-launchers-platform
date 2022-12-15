export { default } from './FormField';
import type CSS from 'csstype'
import type { ChangeEvent } from 'react';

export interface InputProps {
  label: string | JSX.Element;
  width?: CSS.Properties['width'];
  id: string;
  name?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  valid?: boolean;
  touched?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}
