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
    margin: 50px 10px 0px;
    /* Components */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    gap: 10px;
    width: 220px;
    height: 250px;
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

    .title {
        font-weight: 900;

        &.theme1 {
        color: #295774;
        }

        &.theme2 {
            color: #3A7CA5;
        }

        &.theme3 {
            color: #FF7F0E;
        }
    };
`;



