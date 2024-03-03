import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
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

export const SearchResult = styled.div`
  width: 100%;
  height: 172px;
  position: relative;
  background: rgba(0, 0, 0, 0.63);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 44px;
  font-family: Abel;
  font-weight: 400;
  word-wrap: break-word;

  color: white;
`;
