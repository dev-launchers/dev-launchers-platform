import React, { useEffect, useState } from 'react';
import { CommitmentText, IconImage, TimeCommitment } from './styles';
import CheckBox from '../../../../../../../images/icons/checkbox.png';

function Commitment(selectRoleLabel) {
  function handleComitmment(min, max) {
    console.log(min, max);

    console.log('Commitment', selectRoleLabel);
  }

  return (
    <>
      <TimeCommitment>
        <IconImage src={CheckBox} />
        <button onClick={() => handleComitmment(0, 4)}>0 a 4</button>
        <CommitmentText>Low (0-4 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <IconImage src={CheckBox} />
        <CommitmentText>Med (5-9 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <IconImage src={CheckBox} />
        <CommitmentText>High (10-20 hrs/wk)</CommitmentText>
      </TimeCommitment>
    </>
  );
}

export default Commitment;
