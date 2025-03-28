import React from 'react';
import Vector from '../../../images/Vector.svg';
import { GoBack } from './StyledBackButton';
import { useRouter } from 'next/router';

const BackButton = ({ buttonType, clickHandler, backRoute }) => {
  const router = useRouter();
  const goBack = () => {
    if (backRoute) {
      router.push(backRoute);
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  };

  const goBack2 = () => {
    if (clickHandler) {
      clickHandler('back');
    } else if (backRoute) {
      router.push(backRoute);
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  };

  if (buttonType == 'confirm') {
    return (
      <GoBack onClick={goBack2}>
        <img alt="backButton" src={Vector} />
        Back
      </GoBack>
    );
  } else {
    return (
      <GoBack onClick={goBack}>
        <img alt="backButton" src={Vector} />
        Back
      </GoBack>
    );
  }
};

export default BackButton;
