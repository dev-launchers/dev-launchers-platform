import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: max-content;
  text-align: center;
  font-family: "Alfa Slab One";
  & > * {
    padding: 15px;
  }
  @media (orientation: portrait) {
    display: block;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  color: #ff7f0e;
`;
export const PointsNumber = styled.span`
  color: black;
`;
