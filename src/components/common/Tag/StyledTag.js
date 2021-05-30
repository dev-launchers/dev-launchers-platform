import styled, { css } from "styled-components";

export const Container = styled.span`
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.NEUTRAL_2};

  ${({ filled }) => filled && css`
    padding: 0.3rem 0.5rem;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.ACCENT_1};
    border: 0;
    font-size: small;
  `}
`;
