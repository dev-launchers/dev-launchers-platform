import styled from "styled-components";
import theme from "../../../styles/theme.js";

export const HomePageBody = styled.div`
  /*margin-top: 45vw;*/
  width: 100%;
  color: black;
  min-height: 40vh;

  @media (orientation: portrait) {
    width: 100%;
    padding: 0%;
  }
`;

export const ColoredCtaWrapper = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  border-bottom: 1rem solid ${theme.colors.NEUTRAL_1};
`;
export const ColoredCtaEntry = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ColoredCtaEntryImage = styled.div`
  width: 80%;
  height: 70%;
  background-color: lightgray;
`;
export const ColoredCtaEntryTitle = styled.div`
  text-align: center;
  font-size: 2.5rem;
  width: 100%;
  height: 4rem;
  background-color: ${theme.colors.NEUTRAL_1};
  color: ${theme.colors.NEUTRAL_2};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
