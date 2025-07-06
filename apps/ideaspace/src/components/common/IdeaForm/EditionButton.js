import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const EditionButton = ({ clickHandlerButton, sending, disabling }) => {
  const goBack = () => {
    clickHandlerButton('back');
  };

  return (
    <>
      <atoms.Button
        size="medium"
        type="secondary"
        mode="light"
        color="nebula"
        onClick={goBack}
      >
        CANCEL
      </atoms.Button>
      <atoms.Button
        buttonSize="medium"
        type="primary"
        mode="light"
        color="nebula"
        disabled={disabling}
      >
        {' '}
        {sending === true ? 'Wait' : 'Save edits'}{' '}
      </atoms.Button>
    </>
  );
};

export default EditionButton;
