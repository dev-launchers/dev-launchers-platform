import { Card } from '../../../../common/Card/Card'
import styled from '@emotion/styled';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 25px;
`;

export const Cardheading = styled.h3`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
`;

export const TargetAudienceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-bottom: 10px;
  margin: 8px;
`;
