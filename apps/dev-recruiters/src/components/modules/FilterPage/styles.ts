import styled from 'styled-components';
import StarySky from '../../../images/Searchresults/starysky.jpg';
import RocketIll from '../../../images/TalcommPage/rocket-illustration.png';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.Black};
`;

export const Footer = styled.div`
  /* width: 100%; */
  display: flex;
  height: 360px;
  min-height: 360px;
  padding: var(--0, 0px) var(--48, 192px);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--10, 40px);
  align-self: stretch;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${RocketIll});
`;

export const FooterFirstText = styled.div`
  font-size: 40px;
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 200;
  line-height: 120%; /* 48px */
  letter-spacing: 1.6px;
  text-align: center;
  color: white;
`;

export const FooterSecondText = styled.div`
  color: white;
  width: 70%;
  text-align: center;
  /* p-l-d */
  font-family: 'Nunito Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
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
  /* background: rgba(0, 0, 0, 0.63); */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.063) 100%
    ),
    url(${StarySky});
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
