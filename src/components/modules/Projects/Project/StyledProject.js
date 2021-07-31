import styled from "styled-components";

export const Wrapper = styled.div`
  p {
    padding-left: 1rem;
  }

  h4 {
    margin-top: 5rem;
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (orientation: portrait) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h3`
  font-family: Abel;
  margin: 0;
  padding: 0 0 0 0.5rem;
  text-decoration: underline;
`;
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
