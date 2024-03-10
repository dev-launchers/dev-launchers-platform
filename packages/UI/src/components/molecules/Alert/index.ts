export interface AlertProps {
  signal?: 'notify' | 'success' | 'error';
  handleClose?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isInitallyOpen?: boolean;
}
export { default } from './Alert';
