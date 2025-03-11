import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const SubmissionButton = ({ sending, onClick }) => {
  return (
    <atoms.Button
      buttonSize="standard"
      buttonType="primary"
      type="submit"
      onClick={onClick}
    >
      {' '}
      {sending === true ? 'Wait' : 'Post Idea'}{' '}
    </atoms.Button>
  );
};

export default SubmissionButton;
