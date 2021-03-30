import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const TimeLineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: bisque;
  width: fit-content;
  margin: auto;
`;
export const TimeStamp = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  flex: 1 1 5em;
`;
export const LabsContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-areas:
    "general inHouse web game"
    "general landing landing landing";
  @media (orientation: portrait) {
    grid-template-areas:
      "general inHouse"
      "web game"
      "landing landing";
  }
`;

export const Lab = styled.div`
  background: #c4c4c4;
  display: grid;
  gap: 5px;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
  align-content: center;
  grid-template-rows: repeat(4, 1fr);
`;
export const Time = styled.strong`
  color: red;
`;
export const Title = styled.span`
  grid-row: 2;
  align-self: end;
`;
export const Room = styled.button`
  padding: 0 50px;
  grid-row: 3;
  justify-self: center;
  align-self: start;
`;
export const Progress = styled.progress`
  grid-row: 4;
  width: 100%;
  align-self: end;
  height: 10px;
`;
