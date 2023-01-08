export { default } from './Layer';

export interface LayersProps {
  /**
   * Adds rainbow beneath the layer
   */
  hasRainbow?: boolean;
  /**
   * If true adds hover interactivity!
   */
  interactive?: boolean;
  /**
   * The layer's background color, ignore to have transparent background
   */
  type?: 'white' | 'black';
}
