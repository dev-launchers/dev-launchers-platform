import styled from "styled-components";
import { Card } from "../../../../common/Card";

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
  margin-bottom: 6px;
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

