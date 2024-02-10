import styled from "styled-components";


export const Wrapper = styled.div`
   font-family: "Abel";
  align-content: center;
  text-align: center;
  display: grid;
  /* flex-wrap: wrap ; */
  row-gap: 1rem;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  h3 {
    align-content: center;
    text-align: center;
    margin: auto;
    font-size: 2rem;
    }
 p {
    align-content: center;
    text-align: center;
    margin: auto;
    /* flex: 4; */
  }
  @media (max-width: 52em) {
    flex-direction: row;
  }
`;

export const ButtonsContainer = styled.div`
 display: flex;
  flex-direction: row;
  column-gap: 2rem;
  
  margin: auto;
  i {
    font-size: 1.5rem;
  }

  @media (max-width: 52em) {
    flex-direction: row;
  }
`;

export const Button = styled.a`
  font-size: 1.13rem;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  gap: 0.5rem;
  width: 12em;
  padding: 0.5rem;
  background-color: ${({ bgColor }) =>
  bgColor || "4A9D48"};
  color: #F0EDEE;
  white-space: nowrap;
  border-radius: 5px;
  word-wrap: no;
`;
