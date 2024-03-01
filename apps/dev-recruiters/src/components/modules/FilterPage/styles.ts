import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
`;

export const Footer = styled.div`
  width: 100%;
  height: 13.75rem;
  border-radius: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5625rem;
  margin-bottom: 3.125rem;
  @media not all and (min-width: 640px) {
    margin: 2.5rem 0;
  }
`;

export const FooterFirstText = styled.div`
  font-size: 2.5rem;
  font-family: 'Abel', sans-serif;
  @media not all and (min-width: 640px) {
   text-align: center;
  }
`;

export const FooterSecondText = styled.div`
  font-size: 1.25rem;
  font-family: 'Abel', sans-serif;
`;

export const BtnSignUp = styled.button`
  background-color: black;
  border-radius: 0.625rem;
  color: white;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  background-color: ${({ theme }) => theme?.colors?.BLUE_700};
  text-decoration: none;
`;
