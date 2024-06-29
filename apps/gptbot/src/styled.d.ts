// import original module declarations
import { Theme } from '@styles/theme';
import {} from 'styled-components/cssprop'
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
