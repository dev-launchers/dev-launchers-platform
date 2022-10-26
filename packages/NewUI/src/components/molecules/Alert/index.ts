export interface AlertProps {
  signal?: 'notify' | 'success' | 'error';
  children: string | JSX.Element[];
}
export { default } from './Alert';
