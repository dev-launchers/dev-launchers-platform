import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  i {
    font-size: 1.5rem;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.colors.NEUTRAL_2};
  color: #353535;
  border-radius: 5px;
`;
