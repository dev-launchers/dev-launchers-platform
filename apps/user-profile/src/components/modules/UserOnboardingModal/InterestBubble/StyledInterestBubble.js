import styled from "styled-components";

export const UserInterestsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 24px;
`;


export const Bubble = styled.div`
background-color: white;
  padding: 10px 30px;
  color: #295774;
  border: 2px solid #295774;
  border-radius: 24px;
  font-family: Nunito Sans;
  font-size: 16px;  
  cursor: pointer;
  &.selected {
    background-color: #295774;
    color: white;
  }
`;
