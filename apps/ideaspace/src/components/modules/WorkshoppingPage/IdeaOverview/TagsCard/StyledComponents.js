import { Card } from '../../../../common/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 25px;
  @media (max-width: 1280px) {
    margin-left: 0px;
    margin-top: 25px;
  }
`;

export const TopView = styled.div`
  display: flex;
  height: 50%
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 40px;
`;

export const StyledTag = styled.h3`
  margin: 4px;
`;

export const BottomView = styled.div`
  display: grid;
  grid-template-rows: 16px 16px;
  grid-auto-rows: 50px;
  height: 50%;
  align-items: center;
  justify-content: start;
`;

