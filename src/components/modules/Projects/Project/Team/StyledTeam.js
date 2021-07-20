import styled from "styled-components";
import { withTheme } from "styled-components";

export const Wrapper = styled.div``;

export const TeamContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  h4 {
    margin-top: 0;
  }
  p {
    margin: 0;
  }
`;

export const MembersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li {
    margin-right: 5rem;
    margin-bottom: 1rem;
  }
`;
