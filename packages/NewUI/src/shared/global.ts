import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typographyStyles } from '../components/Typography/Styled.Typography';

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
  width: 20px;
}
::placeholder {
  ${typographyStyles.placeHolder}
}
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
  border-top: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  background-clip: content-box;
}

strong {
  font-weight: bold;
}

`;
export default GlobalStyle;
