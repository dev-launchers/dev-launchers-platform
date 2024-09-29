import 'styled-components';

declare module 'styled-components' {
  export interface RainbowBarTheme {
    colors: {
      ORANGE: string;
      YELLOW: string;
      LIGHT_BLUE: string;
      BLUE: string;
    };
  }
}
