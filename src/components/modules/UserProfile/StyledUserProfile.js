import styled from "styled-components";

export const UserSection = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin: 10px 5px 5px 5px;
  }

  @media (orientation: portrait) {
    & > * {
      margin: 10px 0;
    }
  }
`;
