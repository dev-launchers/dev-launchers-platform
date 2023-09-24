import styled from "styled-components";
import React from 'react';
import Buttonshape from '../../../.././images/Onboarding/InterestButton/buttonshape.svg';

export const IconImg = ({ iconImg }) => {
  switch (iconImg) {
    
    case 'Buttonshape':
      return <img src={Buttonshape} />
   
    default:
      return <img src={Buttonshape} />
  }
};


export const ButtonContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 17px 25px;
    align-items: flex-start;
    border: 2.39px solid #295774; 
    border-radius: 25px;
    height: 25px;
    margin: 9px;
    &.selected {
        border: 4px solid #295774;
    }
`;

export const TextWrapper = styled.div`
    text-align: center;
    padding: 10px 5px;
		p {
			margin: 0px;
			margin-bottom: 0px;
      
		}
    .title {
			font-weight: 500;
			color: #295774;
    }
`;

export const GroupButtonsContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap; 
    justify-content: space-around;
    align-items: flex-start;
    max-width: 700px; 
    
`;





