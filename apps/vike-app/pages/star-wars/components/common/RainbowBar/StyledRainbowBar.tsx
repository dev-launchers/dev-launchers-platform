import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}
export const Wrapper = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  align-items: stretch;
`;

export const BarSection = styled.div<Props>`
  width: 33.333333%;
  background-color: ${(props) => props.color};
`;
