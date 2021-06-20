import styled from "styled-components";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  padding-top: 7.5%;
  padding-bottom: 7.5%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border-bottom: 2rem solid ${theme.colors.NEUTRAL_1}; */
`;

export const CenteredTitle = styled.div`
  font-family: "Abel", sans-serif;
  font-size: 3rem;
  width: 50%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  //padding-bottom: 0.3%;
`;

export const CenteredIntro = styled.div`
  font-family: "Abel", sans-serif;
  font-size: 1.8rem;
  font-weight: -100;
  line-height: 1.4;
  width: 70%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.3%;
  //padding-bottom: 0.1%;
`;

export const IntroDescriptionWrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const IntroSummaryBox = styled.div`
  font-family: "Abel";
  width: 20%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.NEUTRAL_1};
  color: ${theme.colors.NEUTRAL_2};
  font-size: 1rem;
  padding: 1rem;

  @media (orientation: portrait) {
    text-align: center;
    width: 100%;
  }
`;

export const IntroDescription = styled.div`
  width: 65%;
  text-align: left;

  li {
    margin-top: 2rem;
  }

  @media (orientation: portrait) {
    width: 100%;
  }
`;
