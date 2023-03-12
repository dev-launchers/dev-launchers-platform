export { default } from './Typography';
export { typographyStyles } from './Styled.Typography';
import type CSS from 'csstype';
export interface TypographyProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'pLarge'
    | 'p'
    | 'pSmall'
    | 'button'
    | 'label'
    | 'labelSmall'
    | 'link'
    | 'navlink';
  textAlign?: CSS.Properties['textAlign'];
  children?: JSX.Element | JSX.Element[] | string;
}
