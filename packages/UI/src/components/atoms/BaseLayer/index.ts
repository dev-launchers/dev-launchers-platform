export { default } from './BaseLayer';

export interface BaseLayersProps {
  /**
   * The base layer's background color, ignore to have transparent background
   */
  type?: 'light' | 'dark';
  /**
   * Select between white, off white, black, and off black colors
   */
  color?: 'base' | 'offbase';
}
