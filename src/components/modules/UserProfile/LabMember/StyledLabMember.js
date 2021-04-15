import styled from "styled-components";

export const Portal = styled.div`
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    padding: 5px;
  }
  padding: 15px 0;
  border: 1px solid black;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  border-bottom: 0.15rem solid black;
`;

export const SignUpButton = styled.button`
  margin-bottom: 50px;
  width: 70%;
  cursor: pointer;
  font-weight: bold;
`;
