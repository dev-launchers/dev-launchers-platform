import styled from "styled-components";

import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
  text-align: center;
  font-family: ${theme.fonts.headline};
  font-weight: bold;
  /* border: 1px solid ${theme.colors.NEUTRAL_1}; */
  & > * {
    padding: 15px;
  }
  @media (orientation: portrait) {
    display: block;
  }
`;
export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.NEUTRAL_1};
  padding: 0;
`;
export const Title = styled.div`
  width: 100%;
  color: ${theme.colors.NEUTRAL_1};
  border-bottom: 0.2rem solid ${theme.colors.NEUTRAL_1};
`;
export const PointsNumber = styled.span`
  color: black;
`;
