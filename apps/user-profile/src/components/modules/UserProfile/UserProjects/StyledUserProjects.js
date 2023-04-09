import styled, { css } from "styled-components";

export const UserProjectsContainer = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  padding: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
  }
`;
