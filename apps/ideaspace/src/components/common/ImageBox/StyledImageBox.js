import styled from "styled-components";

export const CropperWrapper = styled.div`
height: 16.875rem; 
position: relative; 
margin: 0.5rem auto; 
outline: 1px solid;

@media (max-width: 375px) {
  height: 13rem; 
}
`;

export const Slider = styled.input`
-webkit-appearance: none;
overflow: hidden;
width: 100%;
height: 14px;
background: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
outline: 2px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
border-radius: 3rem;

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

