export interface AlertProps {
  signal?: 'notify' | 'success' | 'error';
  handleClose?: () => void;
}
export { default } from './Alert';
