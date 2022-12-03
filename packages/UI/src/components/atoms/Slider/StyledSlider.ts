import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  max-width: 360px;
  user-select: none;
`;

export const SliderInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  @media (max-width: 760px) {
    min-width: 0;
  }
`;
export const SliderInput = styled.input.attrs({ type: 'range' })`
  box-sizing: border-box;
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;
  height: 14px;
  background: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  outline: 2px solid black;
  border-radius: 50px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -500px 0px 0px 492px
      ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -500px 0px 0px 492px
      ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
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
    font-family: ${({ theme }) => theme.fonts.normal};
    font-weight: 400;
    font-size: 16px;
  }
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

export const Bubble = styled.div<{ newVal: number }>`
  position: absolute;
  width: auto;
  padding: 4px;
  top: 0;
  transform: translateX(-50%);
  left: ${({ newVal }) => `calc(${newVal}% + (${8 - newVal * 0.15}px))`};

  & p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
`;
