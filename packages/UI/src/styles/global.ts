import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typographyStyles } from '../components/atoms/Typography/Styled.Typography';

const GlobalStyle = createGlobalStyle`
    ${normalize}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100%;
}

html {
  display: flex;
  scroll-behavior: smooth;
  /*overflow: auto;*/
}

body {
  height: 100%;
}

::-webkit-scrollbar {
  width: 8px;
  border: 1px solid red;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border-radius: 100px;
  /* 
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent; 
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  DOESN'T SEEM NECCESSARY REMOVE IF YOU REVIEW
  */
  background-clip: content-box;
  border: 2px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
}
::-webkit-scrollbar-track {
  border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  border-radius: 100px;
}
::placeholder {
  ${typographyStyles.placeHolder}
}
strong {
  font-weight: bold;
}

`;
export default GlobalStyle;
