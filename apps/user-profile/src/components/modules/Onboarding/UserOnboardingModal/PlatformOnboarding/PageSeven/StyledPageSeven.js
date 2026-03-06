import styled, { keyframes } from 'styled-components';
import { m } from 'framer-motion';

export const PageSevenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 108px;
`;

export const Header = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  p,
  h2,
  h3 {
    margin-bottom: 0;
    margin-top: 8px;
  }
  .margin-0 {
    margin: 0;
  }

  .modal-subtitle {
    max-width: 518px;
    color: #1c1c1c;
  }
`;

export const AnimationContainer = styled.div``;

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
  animation: ${pulseCircle} 1.9s infinite;
`;

// create shadow
export const CongratulationsShadow = styled.div`
  background-color: #474747;
  border-radius: 50%;
  z-index: 1;
`;

export const CongratulationsImg = styled(m.img)`
  margin-top: 50px;
  width: 150px;
  height: 150px;
  filter: brightness(15%);
`;
