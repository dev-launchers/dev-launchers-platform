import styled from "styled-components";

export const ProgramArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;

  @media (orientation: portrait) {
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
`;

export const ProgramImageArea = styled.div`
  width: 40%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: 100%;
  }
`;

export const ProgramImageContainer = styled.div`
  width: 80%;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProgramImage = styled.img`
  width: 80%;
  padding: 5%;
`;

export const ProgramDescriptionArea = styled.div`
  width: 60%;
  @media (orientation: portrait) {
    width: 100%;
  }
`;
