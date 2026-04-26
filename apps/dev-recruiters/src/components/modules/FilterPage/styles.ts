import styled from 'styled-components';
import StarySky from '../../../images/Searchresults/starysky.jpg';
import RocketIll from '../../../images/TalcommPage/rocket-illustration.png';

/**
 * ISSUE #2819: Global Style Alignment
 * This file has been updated to align the Filter Page UI with the Figma design.
 * Primary focus: Typography consistency, theme token integration, and spacing.
 */

export const Wrapper = styled.div`
  /* Using theme token for background consistency across dark mode */
  background-color: ${({ theme }) => theme?.colors?.Black || '#000000'};
`;

export const Footer = styled.div`
  display: flex;
  min-height: 360px;
  padding: 60px 192px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  background-position: center;
  background-size: cover;
  /* Darkened overlay for better text contrast against the rocket illustration */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${RocketIll});

  @media (max-width: 1024px) {
    padding: 40px 64px;
  }
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

export const FooterFirstText = styled.h3`
  font-size: 42px;
  font-family: 'Abel', sans-serif;
  /* Weight updated from 200 to 600 to match Figma CTA header importance */
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const FooterSecondText = styled.p`
  color: ${({ theme }) => theme?.colors?.NEUTRAL_2 || '#f0edee'};
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  /* Increased line-height for better readability on descriptions */
  line-height: 1.6;
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const BtnSignUp = styled.button`
  border-radius: 8px;
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  /* Standardized button sizing for Dev Recruit module */
  padding: 14px 44px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  font-family: 'Nunito Sans', sans-serif;
  /* Utilizing primary Blue token from design system */
  background-color: ${({ theme }) => theme?.colors?.BLUE_700 || '#173242'};
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => `rgba(23, 50, 66, 0.8)` || 'rgba(23, 50, 66, 0.8)'};
    transform: translateY(-2px);
  }
`;

export const SearchResult = styled.div`
  width: 100%;
  height: 172px;
  position: relative;
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
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
`;
