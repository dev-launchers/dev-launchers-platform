import styled, { css } from "styled-components";

export const UserProjectsContainer = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  padding: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  }
`;
