import styled from "styled-components";

export const OtherResourcesContainer = styled.fieldset`
    display:flex;
    flex-direction: row;
    gap:2rem;
    background: white;
    border: 3px solid #528cb0 ;
    border-radius: 1rem;
    padding: 2rem 3rem;
    margin: 4rem 0;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
`;


export const TitleResources = styled.legend`
    font-family: ${({theme})=>(theme.fonts.headline)};
    font-size: 2.3rem;
    font-weight: bold;

`;


export const OtherResourcersCards  = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width : 15.375rem;
 height: 18.9375rem;
 top : 8.9375rem;
 left : 6.1875rem;
 gap : 2rem;
border-radius: 1rem;
border: 3px solid #d2d1d2;

`

export const CardsBtn = styled.button`
background-color: #3E5E65;
border-radius: 5px;
width :148px;
height:40px;
color: white;
cursor:pointer;
border:none;
font-size: 16px;
padding: 8px, 16px, 8px, 16px;

&:hover {
    background-color: #31464E; 
  }
`
export const OtherResourcersIcon = styled.img`
width : 4.375rem;
height :  3.9375rem;
`

export const OtherResourcersIconInfo = styled.img`

cursor:pointer;

`
