import styled from "styled-components";

export interface CardTagProps {
  dark?: boolean;
  uppercase?: boolean
}

export const CardTagContainer = styled.div<CardTagProps>`
  background: ${(props) => (props.dark ? "#454d58" : "transparent")};
  color: ${(props) => (props.dark ? "#C4C4C4" : "#454d58")};
  font-family: ${({ theme }) => theme?.fonts?.normal}, sans-serif;
  font-size: 1.12rem;
  padding: .25rem 1.5rem;
  border: 1px solid #454d58;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
`;