export { default } from './Typography';
export { typographyStyles } from './Styled.Typography';
import type CSS from 'csstype';
export interface TypographyProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle'
    | 'pLarge'
    | 'p'
    | 'pSmall'
    | 'button'
    | 'label'
    | 'labelSmall';
  textAlign?: CSS.Properties['textAlign'];
}
