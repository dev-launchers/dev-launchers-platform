import "styled-components";

declare module "styled-components" {
  export interface RainbowBarTheme {
    colors: {
      ACCENT_1: string;
      ACCENT_2: string;
      ACCENT_3: string;
      ACCENT_4: string;
    };
  }
}
