import React from 'react';
import Vector from '../../../images/Vector.svg';
import { GoBack } from './StyledBackButton';
import { useRouter } from 'next/router';

const BackButton = ({ buttonType, clickHandler, backRoute }) => {
  const router = useRouter();
  const goBack = () => {
    if (backRoute) {
      router.push(backRoute);
    } else {
      window.history.back(-1);
    }
  };

  const goBack2 = () => {
    if (clickHandler) {
      clickHandler('back');
    } else if (backRoute) {
      router.push(backRoute);
    } else {
      window.history.back(-1);
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
