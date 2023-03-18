// import original module declarations
import type { DOMAttributes } from 'react';
import type { CSSProp, DefaultTheme } from 'styled-components';
import type { ThemeType } from './styles/theme';

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface Attributes  {
    css?: CSSProp<DefaultTheme>;
  }
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp<DefaultTheme>;
  }
}
