import * as React from 'react';
import { ButtonCSS } from './Styled.ButtonMeeting';

const ButtonMeeting = ({bgColor, radius, padding, text}) => {
  return <ButtonCSS bgColor={bgColor}>{text}</ButtonCSS>;
};

export default ButtonMeeting;
