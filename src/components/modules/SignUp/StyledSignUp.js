import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin: 5px;
    }
  }

  input[type="submit"] {
    font-family: "Holtwood One SC", serif;
    background-color: #ff7f0e;
    color: black;
    border: 0px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 2.5%;
    padding-left: 6%;
    padding-right: 6%;
  }
`;
export const DiscordAuthWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
