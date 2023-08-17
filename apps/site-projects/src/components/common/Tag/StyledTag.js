import styled, { css } from "styled-components";

export const Container = styled.span`
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme?.colors?.GREYSCALE_WHITE};
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: bold;
  ${({ filled }) =>
    filled &&
    css`
      padding: 0.3rem 0.5rem;
      margin-left: 1rem;
      background-color: rgba(0, 0, 0, 0.6);
      /* border: 0; */
      font-size: 1rem;
    `}
`;
