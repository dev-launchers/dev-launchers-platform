import styled from "styled-components";
import BaseDropdown from "../../../common/Dropdown";

export const Wrapper = styled.div`
  grid-area: LabCampus;
  text-align: center;
`;

export const TimeLineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: bisque;
`;
export const TimeStamp = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  flex: 1 1 7em;
`;
export const LabsContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-areas:
    "General Beginner Web Game"
    "General Landing Landing Landing";
  @media (orientation: portrait) {
    grid-template-areas:
      "General Beginner"
      "Web Game"
      "Landing Landing";
  }
`;
export const AlignedDropdown = styled(BaseDropdown)``;
export const Lab = styled.div`
  background: #c4c4c4;
  display: grid;
  gap: 5px;
  align-items: center;
  align-content: center;
  grid-template-rows: repeat(4, 1fr);

  & > ${AlignedDropdown} {
    align-self: baseline;
    justify-self: center;
  }
`;

export const Time = styled.strong`
  color: red;
`;
export const Title = styled.span`
  grid-row: 2;
  align-self: end;
`;
