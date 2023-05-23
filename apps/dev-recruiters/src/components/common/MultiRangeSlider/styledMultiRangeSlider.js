import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.normal}, sans-serif;
  margin-top: 34px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  /* min-height: 4.5rem; */
`;

export const Slider = styled.div`
  position: relative;
  width: 12.5rem;
`;

export const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #5b6068;
  width: 100%;
  z-index: 1;
`;

export const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #fff;
  z-index: 2;
`;

export const SliderLeftValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 20px;
  margin-top: 20px;
  left: 6px;
`;

export const SliderRightValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 20px;
  margin-top: 20px;
  right: -4px;
`;

export const ThumbRight = styled.input.attrs({ type: 'range' })`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  z-index: 4;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: #59687b;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.8125rem;
    width: 1.8125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  &::-moz-range-thumb {
    background: #59687b;
    color: yellow;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.8125rem;
    width: 1.8125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
    -webkit-appearance: none;
  }
`;

export const ThumbLeft = styled.input<{ minVal,maxVal }>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 12.5rem;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  z-index: ${(props) => (props.minVal > props.maxVal - 100 ? 5 : 3)};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: #59687b;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.8125rem;
    width: 1.8125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background: #59687b;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.8125rem;
    width: 1.8125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
