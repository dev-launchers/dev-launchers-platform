import Styled from "styled-components";

import theme from "../../../styles/theme";

export const Wrapper = Styled.div`
  display: flex;
  grid-area: WeeksGlance;
  flex-direction: row;
  width: 100%;
background-color: #DAD8D9;

  @media (orientation: portrait) {
    flex-direction: column;
  }
;`;

export const Day = Styled.div`
    display: flex;
    color: #1c1c1c;
    font-weight: 500;
    padding-bottom: .5rem;
    flex-direction: column;
    font-size: 20px;
    background-color: transparent;
    width: 15%;

    @media (orientation: portrait) {
      width:100%;
    }
`;

export const Event = Styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  white-space: nowrap;
  background: bisque;
 color: #f0edee;
  width: 98%;
  background-color: #ff7f0e;
  margin-top: 1rem;
  font-size: .9rem;
 justify-content: center;
 text-align: center;
 padding-top: .3rem;
 padding-bottom: .3rem;
 font-family: roboto;
`;

export const WeekdayTitle = Styled.div`
  font-family: ${theme.fonts.headline};
  background-color: #f0edee;
  color: #1c1c1c;
  font-weight: 500;
  padding-left: .5rem;
  
`;
