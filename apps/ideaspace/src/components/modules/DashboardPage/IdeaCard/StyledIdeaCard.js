import styled from "styled-components";

export const ImgButton = styled.button`
  cursor: pointer;
  border: 0 none;
  padding: 0;
  background-color: #FFFFFF;
  width: 360px;
  height: 270px;
  @media (max-width: 424px) {
    width: 100%;
    height: 100%;
  }
`;

export const IdeaInfo = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
align-items: center;
margin-top: 1.5rem;
`;

export const IdeaName = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1C1C1C;
  text-align: left;
  width: 240px;

  @media (max-width: 424px) {
    width: calc(100% - 120px);
  }
`;

export const StatuBox = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 120px;
height: 40px;
background: #C0E1EB;
border-radius: 24px;
z-index: 1;
position: relative;
left: 224px;
top: -261px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-transform: uppercase;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;