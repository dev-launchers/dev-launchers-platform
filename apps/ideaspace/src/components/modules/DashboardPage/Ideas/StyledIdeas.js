import styled from "styled-components";

export const IdeaCardWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap; 
column-gap: 3.8rem;
row-gap: 2rem;
margin-top: 1.5rem;

@media (max-width: 1278px) {
  column-gap: 1.2rem;
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
