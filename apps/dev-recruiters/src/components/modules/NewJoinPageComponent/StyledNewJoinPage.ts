import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
  margin: 0;
  row-gap: 1rem;
  margin-top: 100px;
`;

export const HeadingText = styled.div`
  width: 50%;
  word-wrap: break-word;
  font-size: 44px;
  font-family: 'Abel', sans-serif;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const HeadingSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
  margin: 0;
  row-gap: 0.5rem;
  height: 100px;
`;

export const HeadingSubText = styled.div`
  width: 75%;
  word-wrap: break-word;
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const SelectRoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
`;

export const SelectRoleText = styled.div`
  font-size: 40px;
  font-family: 'Abel', sans-serif;
`;

export const AreaImage = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Footer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const FooterFirstText = styled.div`
  font-size: 40px;
  font-family: 'Abel', sans-serif;
`;

export const FooterSecondText = styled.div`
  font-size: 20px;
  font-family: 'Abel', sans-serif;
`;

export const BtnSignUp = styled.button`
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  background-color: ${({ theme }) => theme?.colors?.BLUE_700};
  text-decoration: none;
`;
