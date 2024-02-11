import styled from "styled-components";
import profile from './../../../../images/Onboarding/EmailTemplate/powering-profile.png';
import templates from './../../../../images/Onboarding/EmailTemplate/creating-templates.png';
import ideaspace from './../../../../images/Onboarding/EmailTemplate/ideaspace.png';
import learning from './../../../../images/Onboarding/EmailTemplate/learning.png';
import collaboration from './../../../../images/Onboarding/EmailTemplate/collaboration.png';



export const GroupContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const IndividualContainer = styled.div`
  padding: 3% 10%;
  display: flex;
  flex-direction: row;
  align-items:center;
  
  gap: 50px; 
`;

export const TextContainer = styled.div`
  padding: 0px 20px 10px;
  height: 70%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-text: center;
`;

export const IconImg = ({ iconImg }) => {
    switch (iconImg) {
      case 'Journey1':
        return <img src={profile} />
      case 'Journey2':
        return <img src={templates} />
      case 'Journey3':
        return <img src={ideaspace} />
      case 'Journey4':
        return <img src={learning} />
      case 'Journey5':
        return <img src={collaboration} />
      default:
        return <img src={profile} />
    }
  };
  