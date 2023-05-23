import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  color: ${({ theme }) => theme?.colors?.White};
  width: 100%;
  overflow: hidden;
  //padding: 0 2rem;
  user-select: none;
  min-width: 315px;
`;
export const SliderInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;

  margin: 0 0%;
  @media (max-width: 760px) {
    min-width: 0;
  }
`;
export const SliderInput = styled.input.attrs({ type: 'range' })`
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 100%;
  height: 9px;
  background: ${({ theme }) => theme?.colors?.BlackCoral};
  border-radius: 3rem;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme?.colors?.DarkElectricBlue};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme?.colors?.DarkElectricBlue};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const LabelsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  & p {
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-weight: 400;
    font-size: 16px;
  }
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

export const Bubble = styled.div<{ newVal: number }>`
  position: absolute;
  margin: 1rem;
  margin-bottom: 5px;
  width: auto;
  padding: 3px 5px;
  top: 0;
  transform: translateX(-50%);
  left: ${({ newVal }) => `calc(${newVal}% + (${8 - newVal * 0.15}px))`};
  background: ${({ theme }) => theme?.colors?.BlackCoral};
  border-radius: 30px;
  & p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: ${({ theme }) => theme?.fonts?.normal};
    color: ${({ theme }) => theme?.colors?.White};
  }
`;
