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
const pulseRocket = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;
const pulseCircle = keyframes`
  0% {
    transform: scale(0.25);
    opacity: 1;
  }
  50% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(0.25);
    opacity: 1;
  }
`;

//create anamation  
export const RocketAnamation = styled(m.div)`
  opacity: 1;
  animation: ${pulseRocket} 1.9s infinite;
`;

export const CircleAnamation = styled(m.div)`
  opacity: 1;
  color: black;
  animation: ${pulseCircle} 1.9s infinite;
`;

// create shadow
export const CongratulationsShadow = styled.div`
    background-color: black;
    border-radius: 50%;
    z-index: 1;
    color: darkgray ;
`;


export const CongratulationsImg = styled(m.img)`
    margin-top: 50px;
    font-color: black;
    width: 150px;
    height: 150px;
`;

