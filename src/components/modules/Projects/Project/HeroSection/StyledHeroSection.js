import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  text-align: center;

  @media (orientation: portrait) {
    span {
      font-size: 1.2rem;
    }
  }
`;
