import Styled from "styled-components";

import theme from "../../../../styles/theme.js";

export const Wrapper = Styled.div`
  display: flex;
  grid-area: WeeksGlance;
  flex-direction: row;


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
  border-radius: 8px;
  width: 95%;
  background-color: transparent;
  margin-top: .1rem;
  font-size: .9rem;
  border-style:solid;
  border-color: #ff7f0e;
  border-width: .12rem;
`;

export const WeekdayTitle = Styled.div`
text-align: center;
  font-family: ${theme.fonts.headline};
  background-color: ${theme.colors.NEUTRAL_1};
  color: ${theme.colors.NEUTRAL_2};
  font-weight: 500;
  padding-left: .5rem;
  font-size: .9rem;
`;
