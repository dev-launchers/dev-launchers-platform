import styled from 'styled-components';
import JoinPRight from '../../../images/JoinPage/Join-page-image-right.png';
import RocketIll from '../../../images/TalcommPage/rocket-illustration.png';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
`;

export const Wrapjoin = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${JoinPRight});
  display: flex;
  height: 360px;
  min-height: 240px;
  padding: var(--0, 0px) var(--56, 192px);

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--10, 40px);
  align-self: stretch;
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
  text-align: center;
  /* p-l-d */
  font-family: 'Nunito Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  width: 70%;
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
