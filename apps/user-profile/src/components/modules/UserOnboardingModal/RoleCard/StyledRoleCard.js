import styled from "styled-components";
import React from 'react';
import Developer from '../../../.././images/Onboarding/RoleCard/developer.svg';
import UX from '../../../.././images/Onboarding/RoleCard/ux-ui.svg';
import Other from '../../../.././images/Onboarding/RoleCard/other.svg';
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
        case 'Developer':
          return <img src={Developer}/>
        case 'UX':
          return <img src={UX}/>
        case 'Other':
          return <img src={Other}/>
        default:
          return <img src={Developer} />
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
    padding: 4% 2% 6% 2%;
    gap: 10px;
    width: 18vw;
    height: 25vh;
    border: 1px solid rgba(127,126,127, 0.25); 
    border-radius: 10px;
		box-shadow: 0px 7px 18px 5px rgba(127,127, 127, 0.2);

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



