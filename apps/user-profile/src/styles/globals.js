import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

html,
body {
  padding: 0;
  margin: 0;
  /*font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;*/
  font-family: sans-serif;
  font-family: "Nunito", sans-serif;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
}

html {
  display: flex;
  width: 100%;
  min-height: 100%;
  scroll-behavior: smooth;
  /*overflow: auto;*/
}

body {
  min-height: 100%;
  margin: 0px;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}

::-webkit-scrollbar {
  width: 20px;
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

#root {
  overflow-x: hidden;
}

.App {
  font-family: sans-serif;
  font-family: "Nunito Sans", sans-serif;
  text-align: left;
}

a {
  width: auto;
  display: inline;
  color: ${({ theme }) => theme.colors.BLUE};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE};
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h1 {
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  line-height: 1em;
  margin-top: 4%;
  margin-bottom: 4%;

  width: fit-content;
  padding: 1rem;
  // background-color:${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  // color:${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};

  border-bottom: .3rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
}

p {
  white-space: pre-wrap; /* or pre-line */
}

h2 {
  font-family: "Abel", sans-serif;
}

h3 {
  font-family: "Abel", sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
}

h4 {
  font-family: "Abel", sans-serif;
}

@media (orientation: portrait) {
  html {
    /* Scale all font down */
    font-size: 75%;
  }

  .App {
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.2rem;
  }

}

`;
export default GlobalStyle;
