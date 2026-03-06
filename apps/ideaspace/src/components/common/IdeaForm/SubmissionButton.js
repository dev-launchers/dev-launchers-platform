import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const SubmissionButton = ({ sending, onClick, style, className }) => {
  return (
    <div style={style} className={className}>
      <atoms.Button
        color="nebula"
        size="standard"
        type="primary"
        mode="light"
        onClick={onClick}
      >
        {sending === true ? 'Wait' : 'Post Idea'}
      </atoms.Button>
    </div>
  );
};

export default SubmissionButton;
