import React, { useEffect, useState } from 'react';
import { CommitmentText, IconImage, TimeCommitment } from './styles';
import CheckBox from '../../../../../../../images/icons/checkbox.png';
import StyledCheckbox from './checkBox';

function Commitment({ handleCommitmentFilter, isFilterActive }) {
  const handleCheckboxChange = (min, max) => {
    if (isFilterActive) {
      handleCommitmentFilter(null);
    } else {
      handleCommitmentFilter({ min, max });
    }
  };

  return (
    <>
      <TimeCommitment>
        <StyledCheckbox
          isChecked={isFilterActive}
          onChange={() => handleCheckboxChange(0, 4)}
        />
        <CommitmentText>Low (0-4 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <StyledCheckbox
          isChecked={isFilterActive}
          onChange={() => handleCheckboxChange(5, 9)}
        />
        <CommitmentText>Med (5-9 hrs/wk)</CommitmentText>
      </TimeCommitment>

      <TimeCommitment>
        <StyledCheckbox
          isChecked={isFilterActive}
          onChange={() => handleCheckboxChange(10, 20)}
        />
        <CommitmentText>High (10-20 hrs/wk)</CommitmentText>
      </TimeCommitment>
    </>
  );
}

export default Commitment;
