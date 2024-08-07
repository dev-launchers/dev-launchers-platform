import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  color:${({theme})=>theme.colors.GREYSCALE_WHITE};

  #background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 22rem;
    background-color: #3c3b3c;
    z-index: -1;
  }

  & > *:not(#background) {
    max-width: 71.3rem;
    margin: 0 auto;
  }
  h2 {
    margin: 0;
  }
  h3 {
    margin-top: 0;
  }
`;

export const CategoryTitle = styled.h3``;
export const CategoryContainer = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  h4 {
    margin: 1rem 0 0.5rem 0;
  }
  p {
    margin: 0;
  }
  ul {
    margin: 0.5rem;
    padding: 0 0 0 1rem;
  }
`;
