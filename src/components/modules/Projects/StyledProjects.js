import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  gap: 30px;
  margin: 2em 0;

  @media (orientation: portrait) {
    grid-template-columns: auto;
  }
`;

export const ProjectContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  @media (orientation: portrait) {
    &[style] {
      justify-self: center !important;
    }
  }
`;