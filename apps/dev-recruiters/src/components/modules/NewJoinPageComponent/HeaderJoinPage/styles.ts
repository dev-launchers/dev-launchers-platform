import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-5xl, 48px);
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
  max-width: var(--content-min-w, 1280px);
  padding: var(--padding-5xl, 64px) var(--padding-none, 0);
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
  color: var(--content-grey-pure, #fff);
  font-family: var(--text-family-primary, Oswald);
  font-size: var(--text-size-6xl, 55px);
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 86.5px */
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
  color: rgb(240, 237, 238);
  font-family: var(--text-family-secondary, 'Nunito Sans');
  font-size: var(--text-size-xl, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 36.864px */
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;
