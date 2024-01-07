import styled from "styled-components";


export const PageTwoContainer = styled.div`
  margin-bottom: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p, h2{
    margin-bottom: 0;
    margin-top: 8px;
  }
`;

export const Header = styled.div`
  align-text: center;
  margin-top: 40px;
`;

export const ImageGroupContainer = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: 84px;
  align-items:center;
  
  gap: 56px; 
  img {
    width: 64px;
    height: 64px;
  }
`;