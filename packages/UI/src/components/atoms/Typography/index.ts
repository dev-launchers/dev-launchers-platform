export { default } from './Typography';

// Typography interface

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Determines the semantic HTML tag.
   * Example: 'h1', 'p', 'span', etc.
   */
  as?: React.ElementType;

  /**
   * Text to be rendered inside the component.
   */
  children?: React.ReactNode;

  /**
   * Variant determines the typography style.
   * 'primary' for headings, 'secondary' for body text.
   */
  variant?: 'primary' | 'secondary';

  /**
   * Size corresponds to predefined styles, e.g., 'h1', 'body-base', etc.
   */
  size?:
    | 'micro3'
    | 'micro2'
    | 'micro_xs'
    | 'body_sm'
    | 'body_base'
    | 'body_lg'
    | 'body_xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5'
    | 'xl6'
    | 'xl7';

  /**
   * Custom line height for precise vertical spacing.
   */
  leading?: 'tight' | 'snug' | 'normal' | 'relaxed';

  /**
   * Controls text transformation (uppercase, capitalize, etc.).
   */
  textCase?: 'uppercase' | 'capitalize' | 'lowercase' | 'normal';

  /**
   * Text alignment, e.g., 'left', 'center', 'right'.
   */
  textAlign?: 'left' | 'center' | 'right';

  /**
   * Font weight, supporting common weights like 'light' and 'bold'.
   */
  textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

  /**
   * Supports normal and italic for font style.
   */
  textStyle?: 'normal' | 'italic';

  /**
   * Adds underlines or strikethroughs.
   */
  textDecoration?: 'underline' | 'lineThrough' | 'noUnderline';

  /**
   * Additional Tailwind or custom class names.
   */
  className?: string;

  /**
   * Inline styles if needed.
   */
  style?: React.CSSProperties;
}
