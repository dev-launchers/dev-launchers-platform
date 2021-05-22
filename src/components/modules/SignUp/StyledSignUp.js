import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  input[type="submit"] {
    font-family: "Abel", sans-serif;
    background-color: #ff7f0e;
    border: 0px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5em;
  }

  & > * {
    margin: 5px;
  }
`;
export const DiscordAuthWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
