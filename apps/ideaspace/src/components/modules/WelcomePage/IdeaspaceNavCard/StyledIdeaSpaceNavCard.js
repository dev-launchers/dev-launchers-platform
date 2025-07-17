import styled from 'styled-components';

export const CardBackground = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: initial;
  flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  // color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  padding: 2rem;
  font-size: 2rem;
  font-family: 'Abel';
  // background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  font-color: 'white';

  @media (max-width: 430px) {
    height: 464px;
    min-width: 357px;
    max-width: 700px;
  }

  @media (min-width: 744px) {
    height: 358px;
    min-width: 357px;
    max-width: 700px;
  }

  @media (min-width: 1440px) {
    height: 358px;
    min-width: 357px;
    max-width: 800px;
  }
`;

export const TypographyH = styled.div`
  @media (max-width: 1536px) {
    font-size: var(--font-size-body-base, 32px);
  }
  @media (max-width: 1280px) {
    font-size: var(--font-size-body-base, 28px);
    line-height: var(--font-line-height-headings-h1, 44px);
  }
  @media (max-width: 1024px) {
    font-size: var(--font-size-body-base, 32px);
  }
  @media (max-width: 768px) {
    font-size: var(--font-size-body-base, 32px);
  }
  @media (max-width: 640px) {
    font-size: var(--font-size-body-base, 32px);
    line-height: var(--font-line-height-headings-h1, 44px);
  }
  color: var(--status-default-content-btn-brand-tertiary, #3f1f5f);
  font-size: var(--font-size-headings-h1, 36px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--font-line-height-headings-h1, 48px); /* 150% */
  letter-spacing: var(--font-letter-spacing-headings-h1, 1.6px);

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const TypographyB = styled.div`
  @media (max-width: 1536px) {
    font-size: var(--font-size-body-base, 16px);
  }
  @media (max-width: 1280px) {
    font-size: var(--font-size-body-base, 16px);
  }
  @media (max-width: 1024px) {
    font-size: var(--font-size-body-base, 14px);
  }
  @media (max-width: 768px) {
    font-size: var(--font-size-body-base, 16px);
  }
  @media (max-width: 640px) {
    font-size: var(--font-size-body-base, 14px);
  }
  color: var(--status-default-content-btn-brand-tertiary, #3f1f5f);
  font-family: var(--font-family-secondary, 'Nunito Sans');
  font-size: var(--font-size-body-base, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--font-line-height-body-base, 24px); /* 150% */
  letter-spacing: var(--font-letter-spacing-body-body, 0px);
`;

export const CardTitleDiv = styled.div`
  color: white;
  width: '100%';
  border: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  text-align: start;
  padding-bottom: 25px;
`;

export const CardText = styled.div`
  text-align: start;
  margin-top: 25px;
`;

export const CardContinueDiv = styled.div`
  text-align: right;
  position: relative;
  padding-right: 2%;
  padding-top: 1%;
  align-self: end;
`;
