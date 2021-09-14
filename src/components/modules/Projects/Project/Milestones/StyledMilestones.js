import Styled from "styled-components";

import theme from "../../../../../styles/theme";

export const Wrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
  white-space: nowrap;

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const TaskGroup = Styled.div`
  flex: 1;
  font-family: ${theme.fonts.headline};
  margin: 1rem 0;
  padding: 5px;
  border-radius: 16px;
`;

export const Title = Styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 0.5rem;
  flex: 1;
`;

export const Description = Styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  word-break: break-word;
  white-space: normal;
`;

export const Task = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 11rem;
  margin: 1rem 0.5rem;
  flex: 1 1 1%;
  border-radius: 16px;
  border: 5px solid;
  background-color: ${(props) =>
    props.primary ? theme.colors.ACCENT_3 : theme.colors.ACCENT_6};
  color: white;
  border-color: ${(props) =>
    props.primary ? theme.colors.ACCENT_3 : theme.colors.ACCENT_6};
`;
