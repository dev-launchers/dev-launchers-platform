import styled from "styled-components";

export const Portal = styled.div`
  background-color: #f0f0f0;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Alfa Slab One";
  & > * {
    padding: 5px;
  }
  padding: 15px 0;
  border: 1px solid black;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: "bold";
  border-bottom: 0.15rem solid black;
`;

export const BeginnerAndIntermediateLabSignUp = styled.button`
  hover {
    border: 1;
  }
  margin-bottom: 50px;
`;

export const AdvancedAndIntermediateLabSignUp = styled.button`
  hover {
    border: 1;
  }
  margin-bottom: 50px;
`;

export const OneOnOneSignUp = styled.button`
  hover {
    border: 1;
  }
  margin-bottom: 50px;
`;

export const SubmitTimeCapsule = styled.button`
  hover {
    border: 1;
  }
  margin-bottom: 50px;
`;

export const ViewTimeCapsule = styled.button`
  hover {
    border: 1;
  }
  margin-bottom: 50px;
`;
