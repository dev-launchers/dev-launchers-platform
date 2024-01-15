export { default as Checkbox } from './Checkbox';

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'focus' | 'disable' | 'hover' | undefined;
  checked?: boolean;
}
