import styled from 'styled-components';

/**
 * ISSUE #2819: Global Style Alignment
 * This file has been updated to align the Talent Community Header UI with the Figma design.
 * Primary focus: Typography consistency, theme token integration, and spacing.
 */

export const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(
      92deg,
      rgba(129, 195, 215, 0.2) 7%,
      rgba(143, 97, 189, 0.2) 51.5%,
      rgba(58, 124, 165, 0.2) 75.77%,
      rgba(57, 76, 172, 0.2) 96.6%
    ),
    ${({ theme }) => theme?.colors?.Black || '#000'};
  display: flex;
  min-height: 240px;
  padding: 0px 192px;
  justify-content: center;
  align-self: stretch;

  @media (max-width: 1024px) {
    padding: 0px 64px;
  }
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    padding: 0 64px;
  }
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const SubHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1280px;
  padding: 64px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const TypeSet = styled.div`
  display: flex;
  max-width: 950px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const BaseText = styled.div`
  word-wrap: break-word;
  align-self: stretch;
`;

export const HeaderText = styled(BaseText)`
  margin-bottom: 24px;
  color: ${({ theme }) => theme?.colors?.White || '#fff'};
  font-family: 'Oswald', sans-serif;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2.768px;

  @media (max-width: 768px) {
    .desktop-break {
      display: none;
    }
    font-size: 34px;
    max-width: 100%;
    text-align: center;
  }
`;

export const SubHeaderText = styled(BaseText)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_2 || '#f0edee'};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;
