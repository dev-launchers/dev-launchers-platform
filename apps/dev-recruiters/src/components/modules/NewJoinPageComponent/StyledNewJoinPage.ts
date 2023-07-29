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
`;

export const HeadingText = styled.div`
  width: 100%;
  word-wrap: break-word;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const HeadingSubText = styled.div`
  width: 75%;
  word-wrap: break-word;
  font-size: 10px;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const AreaImage = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Footer = styled.div`
  width: 100%;
  height: 315px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
`;

export const BtnSignUp = styled.button`
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 10px 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme?.colors?.BLUE_700};
  text-decoration: none;
`;
