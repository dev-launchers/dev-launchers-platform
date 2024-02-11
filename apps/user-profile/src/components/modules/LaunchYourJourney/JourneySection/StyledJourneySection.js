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

  .journey-text {
    color: white;
  }

  .journey-button {
    padding: 3% 5%;
    width: 70%;
    color: #7F7E7F;
  }
`;

export const IconImg = ({ iconImg }) => {

    switch (iconImg) {
      case 'Journey1':
        return <img src={profile} style={{width: "50%", height:"70%"}}/>
      case 'Journey2':
        return <img src={templates} style={{width: "50%", height:"70%"}}/>
      case 'Journey3':
        return <img src={ideaspace} style={{width: "50%", height:"70%"}}/>
      case 'Journey4':
        return <img src={learning} style={{width: "50%", height:"70%"}}/>
      case 'Journey5':
        return <img src={collaboration} style={{width: "50%", height:"70%"}}/>
      default:
        return <img src={profile} style={{width: "50%", height:"70%"}}/>
    }
  };
  