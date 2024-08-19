import styled from "styled-components";
import React from 'react';
import Developer from '../../../.././images/Onboarding/RoleCard/developer.svg';
import UX from '../../../.././images/Onboarding/RoleCard/ux-ui.svg';
import Other from '../../../.././images/Onboarding/RoleCard/other.svg';
import juniorExperienceSvg from '../../../.././images/Onboarding/RoleCard/junior-experience.svg';
import midExperienceSvg from '../../../.././images/Onboarding/RoleCard/mid-experience.svg'
import onboardingFoldersSvg from '../../../.././images/Onboarding/RoleCard/onboarding-folders.svg';
import seniorExperienceSvg from '../../../.././images/Onboarding/RoleCard/senior-experience.svg'
import userProfileSvg from '../../../.././images/Onboarding/RoleCard/user-profile.svg';

export const RoleCardContainer = styled.div`

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input:checked ~ .custom-radio-btn{
      border: 5px solid #3A7CA5;
    }
`

export const RadioCardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 35px 18px;
    cursor: pointer;
    width: 224px;
    border: 1px solid rgba(127,126,127, 0.25); 
    border-radius: 10px;
		box-shadow: 0px 7px 18px 5px rgba(127,127, 127, 0.2);
    height: 208px;

`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
    img {
        width: 32px;
        height: 32px;
    };
`;

export const TextWrapper = styled.div`
  .card-subtitle {
    color: #7F7E7F;
    margin-top: 8px;
  }

  p {
    margin: 0;
  }
`;

export const GroupRoleCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    gap: 20px;
    align-items: flex-end;
`

export const IconImg = ({ iconImg }) => {
  switch (iconImg) {
    case 'Junior':
      return <img src={juniorExperienceSvg} />
    case 'Mid-Level':
      return <img src={midExperienceSvg} />
    case 'Senior':
      return <img src={seniorExperienceSvg} />
    case 'Onboarding':
      return <img src={onboardingFoldersSvg} />
    case 'Developer':
      return <img src={Developer} />
    case 'UX':
      return <img src={UX} />
    case 'Other':
      return <img src={Other} />
    default:
      return <img src={Developer} />
  }
};



