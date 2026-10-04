import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const DialogBoxButton = ({
  handleConfirmButton,
  handleCancelButton,
  buttonDetail,
  variant,
}) => {
  const isDark = variant === 'dark';
  const primaryProps = isDark
    ? { type: 'primary', size: 'small', mode: 'dark', color: 'error' }
    : { buttonSize: 'standard', buttonType: 'primary' };
  const alternativeProps = isDark
    ? { type: 'secondary', size: 'small', mode: 'light', color: 'nebula' }
    : { buttonSize: 'standard', buttonType: 'alternative' };

  if (buttonDetail[0] == 'alternative primary') {
    return (
      <>
        <atoms.Button {...alternativeProps} onClick={handleCancelButton}>
          {buttonDetail[1]}
        </atoms.Button>
        <atoms.Button {...primaryProps} onClick={handleConfirmButton}>
          {buttonDetail[2]}
        </atoms.Button>
      </>
    );
  } else if (buttonDetail[0] == 'primary alternative') {
    return (
      <>
        <atoms.Button {...primaryProps} onClick={handleConfirmButton}>
          {buttonDetail[1]}
        </atoms.Button>
        <atoms.Button {...alternativeProps} onClick={handleCancelButton}>
          {buttonDetail[2]}
        </atoms.Button>
      </>
    );
  } else if (buttonDetail[0] == 'primary') {
    return (
      <>
        <atoms.Button {...primaryProps} onClick={handleCancelButton}>
          {buttonDetail[1]}
        </atoms.Button>
      </>
    );
  }
};

export default DialogBoxButton;
