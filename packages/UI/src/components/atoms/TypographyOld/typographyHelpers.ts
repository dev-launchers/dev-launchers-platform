import { styles } from './style';
import type { TypographyProps } from './index';

/**
 * Generates Tailwind classes based on TypographyProps by the following function.
 */
export const generateClasses = (props: TypographyProps) => {
  const size = styles.size[props.size || 'base'];
  const variant = styles.variant[props.variant || 'secondary'];
  const leading = styles.leading[props.leading || 'normal'];
  const textCase = styles.textcase[props.textcase || 'normal'];
  const textAlign = styles.textalign[props.textalign || 'left'];
  const textWeight = styles.textweight[props.textweight || 'light'];
  const textStyle = styles.textstyle[props.textstyle || 'italic'];
  const textDecoration =
    styles.textdecoration[props.textdecoration || 'noUnderline'];
  return `${size} ${variant} ${leading} ${textCase} ${textAlign} ${textWeight} ${textStyle} ${textDecoration}`;
};
