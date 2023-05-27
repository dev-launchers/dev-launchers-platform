import styled from 'styled-components';
import { Card } from '../../../../common/Card';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const TopView = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  margin-bottom: 8px;
  width: 100%;
`;

export const LeftView = styled.div`
  display: flex;
  width: 30%;
  border-radius: 16px;
`;

export const StyledDiv = styled.div`
  width: 100%;
  border-radius: 16px;
  margin: 10px;
  margin-right: 0px;
  background-color: black;
`;

export const RightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 6px;
  margin: 10px;
  height: 100%;
  width: 70%;
`;

export const IdeaName = styled.h3`
  display: flex;
  padding-top: 20px;
  padding-bottom: 6px;
  margin: 8px;
  font-size: 30px;
  text-align: start;
`;

export const IdeaTagLine = styled.h6`
  display: flex;
  margin: 6px;
`;

export const BottomView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50%;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const Button = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px;
  padding: 6px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px 0px rgba(127, 126, 127, 0.25);
`;

export const StyledText = styled.h6`
  margin: 4px; 
`;