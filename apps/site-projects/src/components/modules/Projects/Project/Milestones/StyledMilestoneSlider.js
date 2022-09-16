import Styled from "styled-components";
import theme from "../../../../../styles/theme";

export const TaskContentWrapper = Styled.div``;
export const TaskContent = Styled.div`
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
  padding-left:0.5rem;
  padding-bottom:0.2rem;
  box-sizing: border-box;
  `;

export const CustomArrow = Styled.div`
  :before {
    color: black;
  }
`;
