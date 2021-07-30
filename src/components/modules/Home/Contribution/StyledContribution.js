import styled from "styled-components";
import Button from "../../../common/Button";

export const CtaSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: auto;
`;

export const CtaSectionDescription = styled.div`
  text-align: center;
`;

export const CtaSectionButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${Button} {
    margin: 1rem 1rem 0 1rem;
  }
`;
