import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
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
  background-color: ${({ theme }) => theme.colors.OuterSpace};
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 30px;
  background-color: ${({ theme }) => theme?.colors?.Crayola};
  border-radius: 30px;
  width: 80%;
  word-wrap: break-word;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme?.colors?.White};
  font-family: ${({ theme }) => theme?.fonts?.normal};
`;
export const Button = styled.button`
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
