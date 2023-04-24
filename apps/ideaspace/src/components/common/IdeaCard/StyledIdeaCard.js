import styled from "styled-components";
import { atoms } from '@devlaunchers/components/src/components';

export const IdeaCardButton = styled((props)=>
  <atoms.Button
    buttonSize='standard'
    buttonType='alternative'
    {...props} 
  />
)`
  margin: 0rem 2rem 1.5rem;
`;

export const ImgButton = styled.button`
  cursor: pointer;
  border: 0 none;
  padding: 0;
  margin-top: -1.9rem;
  width: 22.5rem;
`;

export const StatuBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: #C0E1EB;
border-radius: 1rem;
z-index: 1;
position: relative;
left: 1.5rem;
top: 1.5rem;
padding: 0.2rem 0.5rem;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1.5rem;
text-transform: uppercase;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;