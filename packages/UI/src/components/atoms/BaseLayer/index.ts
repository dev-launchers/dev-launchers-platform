export { default } from './BaseLayer';

export interface BaseLayersProps {
  /**
   * If true adds hover interactivity!
   */
  interactive?: boolean;
  /**
   * The base layer's background color, ignore to have transparent background
   */
  type?: 'light' | 'dark';
}
