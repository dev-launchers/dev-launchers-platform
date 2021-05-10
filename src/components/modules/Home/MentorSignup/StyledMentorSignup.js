import styled from "styled-components";

export const ContentArea = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

export const CtaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const NameInput = styled.input`
  width: 20%;
  display: flex;
`;

export const EmailInput = styled.input`
  width: 20%;
  display: flex;
`;

export const ExperienceText = styled.textarea`
  width: 50%;
  height: 200px;
  display: flex;
`;

export const Submit = styled.input.attrs(() => ({
  type: "submit",
  value: "Submit"
}))`
  font-family: "Holtwood One SC", serif;
  background-color: #ff7f0e;
  color: black;
  border: 0px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1.5%;
  padding-left: 3%;
  padding-right: 3%;

  :hover {
    background-color: rgb(255, 217, 0);
    color: rgb(58, 58, 58);
  }
`;
