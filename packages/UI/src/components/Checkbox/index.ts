export { default as Checkbox } from './Checkbox';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  state?: 'disable' | undefined;
  checked?: boolean;
}
