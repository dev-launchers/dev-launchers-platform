import styled from "styled-components";
import React from 'react';
import juniorExperienceSvg from '../../../../images/junior-experience.svg';
import midExperienceSvg from '../../../../images/mid-experience.svg'
import onboardingFoldersSvg from '../../../../images/onboarding-folders.svg';
import seniorExperienceSvg from '../../../../images/senior-experience.svg'
import userProfileSvg from '../../../../images/user-profile.svg';

export const IconImg = ({iconImg}) => {
    switch (iconImg) {
        case 'Junior':
            return <img src={juniorExperienceSvg}/>
				case 'Mid-Level':
					return <img src={midExperienceSvg}/>
				case 'Senior':
					return <img src={seniorExperienceSvg}/>	
				case 'Onboarding':
					return <img src={onboardingFoldersSvg}/>
        default:
            return <img src={userProfileSvg} />
      }
} ;

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
    width: 50%;
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



