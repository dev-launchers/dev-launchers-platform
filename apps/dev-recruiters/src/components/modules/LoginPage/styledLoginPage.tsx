import styled from 'styled-components';

export const IconWrapper = styled.div`
  box-shadow: 0px 10px 18px 10px rgba(127, 126, 127, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme?.colors?.White};
  cursor: pointer;
`;
export const Header = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme?.colors?.Black};
  font-family: ${({ theme }) => theme.fonts.headline};
  border-bottom: none;
  font-weight: 300;

  @media (max-width: 640px) {
    font-size: 24px;
    text-align: center;
  }
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme?.colors?.Black};
  font-family: ${({ theme }) => theme.fonts.normal};
  border-bottom: none;
  text-align: center;
  font-weight: 400;
  margin: 16px 0px 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 100%;
  height: 100%;
  // background-color: ${({ theme }) => theme?.colors?.White};
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px 32px 32px;
  // margin: 30px;
  background-color: ${({ theme }) => theme?.colors?.White};
  border-radius: 16px;
  width: 100%;
  max-width: 488px;
  word-wrap: break-word;
  box-shadow: 0px 4px 6px 3px rgba(51, 51, 51, 0.1);
`;
export const ButtonWrapper = styled.div`
  // padding: 30px;
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LoginButton = styled.a`
  background-color: ${({ theme }) => theme.colors.White};
  color: ${({ theme }) => theme?.colors?.BrandAltNebula600};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  border: 2px solid ${({ theme }) => theme.colors.BrandAltNebula600};
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: fit-content;
  }
`;
export const CreateAccountButton = styled.a`
  background-color: ${({ theme }) => theme.colors.BrandAltNebula600};
  color: ${({ theme }) => theme?.colors?.White};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  border: none;
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  margin: 10px;
  cursor: pointer;
`;
