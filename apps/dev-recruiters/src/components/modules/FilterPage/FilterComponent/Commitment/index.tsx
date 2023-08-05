import React, { useEffect, useState } from 'react';
import { CommitmentText, IconImage, TimeCommitment } from './styles';
import CheckBox from '../../../../../images/icons/checkbox.png';

function Commitment() {
  return (
    <>
      <TimeCommitment>
        <IconImage src={CheckBox} />
        <CommitmentText>Low (5-10 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <IconImage src={CheckBox} />
        <CommitmentText>Med (11-15 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <IconImage src={CheckBox} />
        <CommitmentText>High (16-20 hrs/wk)</CommitmentText>
      </TimeCommitment>
    </>
  );
}

export default Commitment;
