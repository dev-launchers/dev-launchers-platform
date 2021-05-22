import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  grid-area: WeeksGlance;
  flex-direction: row;


;`;

export const Event = Styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  white-space: nowrap;
  background: bisque;
  border-radius: 8px;
  width: 95%;
  background-color: transparent;
  margin-top: .1rem;
  font-size: 1.1rem;
  border-style:solid;
  border-color: #ff7f0e;
  border-width: .12rem;
`;

export const Day = Styled.div`
    display: flex;
    color: #1c1c1c;
    font-weight: 500;
    padding-bottom: .5rem;
    flex-direction: column;
    font-size: 20px;
    background-color: transparent;
    width: 200px;
`;
export const WeekdayTitle = Styled.div`
background-color:#ff7f0e;
color: #1c1c1c;
font-weight: 600;
`;
