import Styled from "styled-components";

import theme from "../../../../styles/theme";

export const Wrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;

  @media (orientation: portrait) {
    flex-direction: column;
  }
;`;

export const TaskGroup = Styled.div`
  flex: 1;
  font-family: ${theme.fonts.headline};
  margin: -0.5rem 0;
  padding: 5px;
  border-radius: 16px;
`;

export const Title = Styled.div`
  font-size: 2rem;
  margin: 0.5rem;
  flex: 1;
`;

export const Task = Styled.div`
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: -fit-content;
  color: white;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  flex: 1;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 0;
  border-radius: 16px;
  background-color: ${theme.colors.ACCENT_3};
  border: 5px solid ${theme.colors.ACCENT_4};
`;
