export { default } from './Layer';

export interface LayersProps {
  /**
   * Adds rainbow beneath the layer
   */
  hasRainbowBottom?: boolean;
  /**
   * Adds rainbow at the top of the layer
   */
  hasRainbowTop?: boolean;
  /**
   * If true adds hover interactivity!
   */
  interactive?: boolean;
  /**
   * The layer's background color, ignore to have transparent background
   */
  type?: 'light' | 'dark';
}
