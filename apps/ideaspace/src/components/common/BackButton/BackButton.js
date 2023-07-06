import React from 'react';
import Vector from '../../../images/Vector.svg';
import {
  GoBack,
  GoBackTerms,
} from './StyledBackButton';

const BackButton = ({
  buttonType,
  clickHandler,
}) => {

  const goBack = () => {
    window.history.back(-1);
  };

  const goBack2 = () => {
    clickHandler("back");
  };

  if (buttonType == "terms") {
    return (
      <GoBackTerms onClick={goBack}>
        <img alt='backButton' src={Vector} />
        Back
      </GoBackTerms>
    );
  } else if (buttonType == "confirm") {
    return (
      <GoBack onClick={goBack2}>
        <img alt='backButton' src={Vector} />
        Back
      </GoBack>
    );
  } else {
    return (
      <GoBack onClick={goBack}>
        <img alt='backButton' src={Vector} />
        Back
      </GoBack>
    );
  }
};

export default BackButton;