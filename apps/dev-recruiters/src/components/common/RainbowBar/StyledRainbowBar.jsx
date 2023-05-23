import styled from "styled-components";


export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  align-items: stretch;
`;

export const BarSection = styled.div`
  width: 33.333333%;
  background-color: ${(props) => props.color};
`;
