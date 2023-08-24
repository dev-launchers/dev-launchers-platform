import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Abel";
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  p {
    flex: 4;
  }
  @media (max-width: 52em) {
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  i {
    font-size: 1.5rem;
  }

  @media (max-width: 52em) {
    flex-direction: row;
  }
`;

export const Button = styled.a`
  font-size: 1.13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 8em;
  padding: 0.5rem;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme?.colors?.GREYSCALE_OFF_WHITE|| ""};
  color: #353535;
  border-radius: 5px;

  &:hover{
    color: ${({ theme }) =>theme?.colors?.GREYSCALE_BLACK};
  }
`;
