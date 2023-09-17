import styled, { keyframes } from 'styled-components';
import { m } from 'framer-motion';

export const CongratulationsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CongratulationsTitle = styled.div`
    margin-top: 50px;
    flex: 1;
`;

export const CongratulationsBody = styled.div`
    flex: 1;
    width: 450px;   
    height: 88px;
    text-align: center;
`;

export const AnimationContainer = styled.div`
    flex: 1;
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
`;

// Create pulse animation
const pulse = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
`;

//create anamation  
export const CongratulationsAnamation = styled(m.div)`
  opacity: 1;
  color: black;
  animation: ${pulse} 2s infinite;
`;

// create shadow
export const CongratulationsShadow = styled.div`
    background-color: black;
    border-radius: 50%;
    z-index: 1;
    color: black;
`;


export const CongratulationsImg = styled(m.img)`
    margin-top: 50px;
    font-color: black;
    width: 150px;
    height: 150px;
`;

