import styled from "styled-components";

export const IdeaCardWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap; 
column-gap: 4rem;
row-gap: 1rem;
margin-top: 1.5rem;

@media (max-width: 1278px) {
  column-gap: 1.5rem;
}
`;

export const SubmitButton = styled.button`
width: 22.5rem;
position: relative;
flex-direction: column;
overflow: hidden;
border: 0 none;
padding: 0;
background-color: #FFFFFF;
`;
