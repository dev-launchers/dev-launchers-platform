export { default as Checkbox } from './Checkbox';

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'disable' | undefined;
  checked?: boolean;
}
