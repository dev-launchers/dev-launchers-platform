export { default } from './OpenResponse';

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
}
