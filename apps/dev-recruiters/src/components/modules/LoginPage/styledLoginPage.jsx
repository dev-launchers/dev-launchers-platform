import styled from "styled-components";

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme?.colors?.LightGray};
  font-family: ${({ theme }) => theme.fonts.headline};
  border-bottom: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme?.colors?.OuterSpace};
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 30px;
  background-color: ${({ theme }) => theme?.colors?.Crayola};
  border-radius: 30px;
  width: 60%;
  word-wrap: break-word;
`;
export const ButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
`;
export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_3};
  color: ${({ theme }) => theme?.colors?.White};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  border: none;
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
`;
