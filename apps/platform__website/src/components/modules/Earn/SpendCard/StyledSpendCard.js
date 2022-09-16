import styled from "styled-components";

export const Entry = styled.div`
  margin: 1.5%;
  /*border: 2px solid #1c1c1c;*/
  width: 30%;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-top: 1%;
  background-color: #ecda56;
`;

export const EntryTitle = styled.div`
  margin-left: 4%;
  font-size: 2rem;
  font-weight: 700;
`;

export const EntryContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
`;

export const EntryCost = styled.b`
  font-family: "Abel", sans-serif;
  color: #806400;
  font-weight: 900;
`;
