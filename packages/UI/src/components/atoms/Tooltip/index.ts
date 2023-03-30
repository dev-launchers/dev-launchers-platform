export { default } from './Tooltip';

export interface TooltipProps {
  /**
   * The content of the tooltip
   */
  content: string;
  /**
   * The content that the tooltip is triggered upon
   */
  children?: string | JSX.Element;
  /**
   * The delay in milliseconds of when the tooltip content shows
   */
  delay?: number;
  /**
   * The direction of the tooltip arrow
   */
  direction?: 'top' | 'bottom' | 'right' | 'left';
  /**
   * Speech includes an arrow and bubble does not
   */
  type?: 'speech' | 'bubble';
}
