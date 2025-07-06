export { default } from './Typography';
export { typographyStyles } from './Styled.Typography';
import type { styles } from './style';

export interface TypographyProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subtitle'
    | 'pLarge'
    | 'p'
    | 'pSmall'
    | 'button'
    | 'label'
    | 'labelSmall'
    | 'link'
    | 'navLink';
  size?: keyof typeof styles.size;
  variant?: keyof typeof styles.variant;
  leading?: keyof typeof styles.leading;
  textalign?: keyof typeof styles.textalign;
  textcase?: keyof typeof styles.textcase;
  textweight?: keyof typeof styles.textweight;
  textstyle?: keyof typeof styles.textstyle;
  textdecoration?: keyof typeof styles.textdecoration;
}
