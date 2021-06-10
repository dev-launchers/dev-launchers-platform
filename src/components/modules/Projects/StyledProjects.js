import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(630px, 1fr));
  place-items: center;
  place-content: center;
  margin: 2em 0;
  row-gap: 2rem;
`;

export const ProjectContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
  width: 70%;
  height: 100%;
  max-width: 530px;

  @media (orientation: portrait) {
    width: 50%;
  }
`;
