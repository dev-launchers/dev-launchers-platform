// import original module declarations
import { ThemeType } from './styles/theme';
import {} from 'styled-components/cssprop';
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
