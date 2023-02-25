export { default } from './Overlay';

export interface OverlayProps {
  /**
   * The overlay's background color, ignore to have transparent background
   */
  type?: 'light' | 'dark';
  /**
   * Select a color based off the status
   */
  status?: 'default' | 'error' | 'success' | 'notification';
}
