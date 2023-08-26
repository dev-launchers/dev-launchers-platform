import styled from "styled-components";
import React from 'react';
import Developer from '../../../.././images/Onboarding/RoleCard/developer.svg';
import UX from '../../../.././images/Onboarding/RoleCard/ux-ui.svg';
import Other from '../../../.././images/Onboarding/RoleCard/other.svg';

export const IconImg = ({iconImg}) => {
    switch (iconImg) {
        case 'Developer':
            return (
                <img src={Developer}/>
            )

        case 'UX':
            return (
                <img src={UX}/>
            )

        case 'Other':
            return (
                <img src={Other}/>
            )

        default:
            return (
            <img src={Developer} />
            )
    }
};

export const RoleCardContainer = styled.div`
    margin: 65px 10px 0px;
    /* Components */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6% 2%;
    gap: 10px;
    width: 18vw;
    height: 25vh;
    border: 1px solid #7F7E7F;    
    border-radius: 10px;

    &.selected {
        border: 5px solid #3A7CA5;
    }
`;

export const IconWrapper = styled.div`
    width: 100%;
    img {
        width: 50px;
        height: 50px;
    };
`;


export const TextWrapper = styled.div`
    text-align: center;
    width: 100%;

		p{
			margin: 0px;
			margin-bottom: 10px;
		}
    .title {
			font-weight: 900;
			color: black;
    };

		.card-subtitle{

		}
`;



