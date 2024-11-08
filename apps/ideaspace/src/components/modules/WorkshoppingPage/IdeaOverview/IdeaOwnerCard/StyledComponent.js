import styled from 'styled-components';
import { Card } from '../../../../common/Card';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  padding: 10px;
  @media (max-width: 1280px) {
    margin-right: 0px;
    margin-bottom: 25px;
  }
`;

export const LeftView = styled.div`
  width: 50%
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 8px;
`;

export const StyledName = styled.h4`
  color: var(--Grey-Scale-off-black, #1c1c1c);
  font-family: Helvetica;
  font-size: var(--global-24-px-15-rem, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--font-line-height-body-xl, 36px); /* 150% */
  letter-spacing: var(--font-letter-spacing-body-body, 0px);
`;

export const StyledEmail = styled.h3`
  color: var(--static-content-text-grey-muted, #494949);

  /* body/sm */
  font-family: var(--font-family-secondary, 'Nunito Sans');
  font-size: var(--font-size-body-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--font-line-height-body-sm, 20px); /* 142.857% */
  letter-spacing: var(--font-letter-spacing-body-body, 0px);
`;

export const RightView = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  border-radius: 100%;
  border: 1px solid gray;
`;

export const IdeaOwnerTag = styled.div`
  display: flex;
  width: 98px;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  gap: var(--25, 10px);
  border-radius: 6px;
  background: var(--static-surface-brand-uranus, #d8ecf3);

  color: var(--static-content-text-grey-muted, #494949);

  /* laptop-desktop/p-d-d */
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;
