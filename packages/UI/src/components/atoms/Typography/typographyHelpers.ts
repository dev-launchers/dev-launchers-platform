import { styles } from './style';
import type { TypographyProps } from './index';

const secondary = 'secondary';

/**
 * Generates Tailwind classes based on TypographyProps by the following function.
 */
export const generateClasses = (props: TypographyProps) => {
  const size = styles.size[props.size || 'body_base'];
  const variant = styles.variant[props.variant || secondary];
  const leading = styles.leading[props.leading || 'normal'];
  const textCase = styles.textCase[props.textCase || 'normal'];
  const textAlign = styles.textAlign[props.textAlign || 'left'];
  const textWeight = styles.textWeight[props.textWeight || 'light'];
  const textStyle = styles.textStyle[props.textStyle || 'normal'];
  const fontFamily =
    variant == secondary ? "font-['Nunito Sans']" : "font-['Oswald']";
  const textDecoration =
    styles.textDecoration[props.textDecoration || 'noUnderline'];
  return `${size} ${variant} ${leading} ${textCase} ${textAlign} ${textWeight} ${textStyle} ${textDecoration} ${fontFamily}`;
};
