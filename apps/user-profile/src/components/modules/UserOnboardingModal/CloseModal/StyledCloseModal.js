import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  width: 500px;
  height: 258px;
  padding: 24px 32px 13px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  
  .custom-button {
    cursor: pointer;
    margin-left: auto; 
margin-right: 0;

  }
  & > Button:first-child {
    margin-left: auto;
  }
  
`;


export const Header = styled.div`
  width: 100%;
  
`;

export const Body = styled.div`
  ${'' /* Enter styling */}
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 21px;
  position: absolute;
  right: 43px;
  bottom: 24px;
.custom-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
  }
`
