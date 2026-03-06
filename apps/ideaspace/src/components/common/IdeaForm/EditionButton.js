import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const EditionButton = ({
  clickHandlerButton,
  sending,
  onClick,
  style,
  className,
  disabling,
}) => {
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
      <div style={style} className={className}>
        <atoms.Button
          buttonSize="medium"
          type="primary"
          mode="light"
          color="nebula"
          onClick={onClick}
          disabled={disabling || sending}
        >
          {sending === true ? 'Wait' : 'Save edits'}
        </atoms.Button>
      </div>
    </>
  );
};

export default EditionButton;
