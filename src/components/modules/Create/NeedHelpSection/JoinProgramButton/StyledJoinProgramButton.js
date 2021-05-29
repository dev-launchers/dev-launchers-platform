import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  padding: 0.5%;
  padding-left: 5%;
  padding-right: 5%;
  margin: 0.5%;
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  text-align: center;
  font-size: 2rem;

  :hover {
    background-color: rgba(0, 0, 0, 1);
    color: rgb(240, 240, 240);
  }

  @media (orientation: portrait) {
    font-size: 5vw;
    width: 90%;
  }
`;
