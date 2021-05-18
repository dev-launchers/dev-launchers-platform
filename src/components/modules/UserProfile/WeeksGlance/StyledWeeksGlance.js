import Styled from "styled-components";
export const Wrapper = Styled.div`
    display: flex;

  grid-area: WeeksGlance;
  flex-direction: row;
  justify-content:

;`;

export const Day = Styled.div`
    display: flex;
  flex-wrap: wrap;
overflow: hidden;
white-space: nowrap;
  background: bisque;
  background-color: #ff7f0e;
  width: 50%;
  border-radius: 8px;
  width: 200px;
;`;

export const Week = Styled.div`
    display: flex;
    color: white;
padding: 3px;
    flex-direction: column;
    font-size: 20px;
    background-color: #3a7ca5;
    width: 200px;

`;
