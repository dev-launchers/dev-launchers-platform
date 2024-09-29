import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme?.colors?.NEUTRAL_2};
  color: ${({ txtColor, theme }) =>
    txtColor ? theme?.colors?.SUCCESS_300 : theme?.colors?.GREYSCALE_WHITE};

  p {
    margin: 0;
  }
`;

export const Headline = styled.h3`
  font-size: 2rem;
  padding: 2rem 0 1rem 2rem;
`;

export const ContentContainer = styled.div`
  font-size: 1.5rem;
  padding: 0 2rem 2rem 2rem;
`;
