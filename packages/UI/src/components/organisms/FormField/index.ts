export { default } from './FormField';

export interface InputProps {
  label: string | JSX.Element;
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  valid?: boolean;
  touched?: boolean;
}
