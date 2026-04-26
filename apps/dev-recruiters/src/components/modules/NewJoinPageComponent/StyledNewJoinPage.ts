import styled from 'styled-components';
import RocketIll from '../../../images/TalcommPage/rocket-illustration.png';

/**
 * ISSUE #2819: Global Style Alignment
 * This file has been updated to align the Join Page UI with the Figma design.
 * Primary focus: Typography consistency, theme token integration, and spacing.
 */

export const Wrapper = styled.div`
  /* Using theme token for background consistency across dark mode */
  background-color: ${({ theme }) => theme?.colors?.Black || '#000000'};
`;

export const Wrapjoin = styled.div`
  width: 100%;
  background: linear-gradient(
      92deg,
      rgba(129, 195, 215, 0.2) 7%,
      rgba(143, 97, 189, 0.2) 51.5%,
      rgba(58, 124, 165, 0.2) 75.77%,
      rgba(57, 76, 172, 0.2) 96.6%
    ),
    #000;
  display: flex;
  min-height: 360px;
  /* Simplified padding for layout alignment */
  padding: 0 192px;
  justify-content: center;
  align-self: stretch;

  @media (max-width: 1024px) {
    padding: 0 64px;
  }
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
  margin: 100px 0 0 0;
  row-gap: 1rem;
`;

export const HeadingText = styled.h1`
  width: 60%; 
  word-wrap: break-word;
  /* Updated to 48px to match standard H1 Figma spec */
  font-size: 48px; 
  /* Increased weight to Semi-Bold (600) for better hierarchy */
  font-weight: 600; 
  font-family: 'Abel', sans-serif;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};

  @media (max-width: 768px) {
    font-size: 32px;
    width: 90%;
  }
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
  height: auto; 
  padding-bottom: 20px;
`;

export const HeadingSubText = styled.p`
  width: 75%;
  word-wrap: break-word;
  /* Standardized body font for project descriptions */
  font-size: 18px; 
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.5;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const SelectRoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const SelectRoleText = styled.h2`
  font-size: 40px;
  font-family: 'Abel', sans-serif;
  font-weight: 500;
  /* Using theme variable for 'White' instead of hardcoded hex */
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  text-align: center; 

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const AreaImage = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Footer = styled.section`
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
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1 || '#ffffff'};
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
  background-color: ${({ theme }) => theme?.colors?.BLUE_700 || '#007bff'};
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.BLUE_800};
    transform: translateY(-2px);
  }
`;