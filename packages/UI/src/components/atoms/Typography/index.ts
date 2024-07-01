export { default } from './Typography';
export { typographyStyles } from './Styled.Typography';

export const css2obj = (css: string) => {
  const r = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g,
    o = {};
  css.replace(r, (m, p, v) => (o[p] = v));
  return o;
};

import type CSS from 'csstype';
import type { ComponentProps } from 'react';
export interface TypographyProps extends ComponentProps<'p'> {
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
    | 'labelSmall'
    | 'link'
    | 'navLink';
  textAlign?: CSS.Properties['textAlign'];
}
