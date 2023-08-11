<<<<<<< HEAD
import React, { useState } from 'react';
import {
  CommitmentMain,
  CommitmentText,
  CommitmentTimeContainer,
  CommitmentTitle,
  TimeCommitment,
} from './styles';
import StyledCheckbox from './checkBox';
import { useOpportunitiesContext } from '../../../../../../../contexts/SelectRoleContext';

function Commitment() {
  const [checkBoxLow, setCheckBoxLow] = useState(null);
  const [checkBoxMed, setCheckBoxMed] = useState(null);
  const [checkBoxHigh, setCheckBoxHigh] = useState(null);

  const { setCommitmentRange } = useOpportunitiesContext();

  const handleCheckboxChange = (min, max) => {
    setCheckBoxLow(min === checkBoxLow ? null : min);
    setCheckBoxMed(min === checkBoxMed ? null : min);
    setCheckBoxHigh(min === checkBoxHigh ? null : min);

    if (min === checkBoxLow || min === checkBoxMed || min === checkBoxHigh) {
      setCommitmentRange(null);
    } else {
      setCommitmentRange({ min, max });
    }
  };

  return (
    <>
      <CommitmentMain>
        <CommitmentTitle>TIME COMMITMENT:</CommitmentTitle>
        <CommitmentTimeContainer>
          <TimeCommitment>
            <StyledCheckbox
              isChecked={checkBoxLow === 0}
              onChange={() => handleCheckboxChange(0, 4)}
            />
            <CommitmentText>Low (0-4 hrs/wk)</CommitmentText>
          </TimeCommitment>

          <TimeCommitment>
            <StyledCheckbox
              isChecked={checkBoxMed === 5}
              onChange={() => handleCheckboxChange(5, 9)}
            />
            <CommitmentText>Med (5-9 hrs/wk)</CommitmentText>
          </TimeCommitment>

          <TimeCommitment>
            <StyledCheckbox
              isChecked={checkBoxHigh === 10}
              onChange={() => handleCheckboxChange(10, 20)}
            />
            <CommitmentText>High (10-20 hrs/wk)</CommitmentText>
          </TimeCommitment>
        </CommitmentTimeContainer>
      </CommitmentMain>
=======
import React, { useEffect, useState } from 'react';
import { CommitmentText, IconImage, TimeCommitment } from './styles';
import CheckBox from '../../../../../../../images/icons/checkbox.png';

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
>>>>>>> d03a4c35 (fix: cleaning the code)
    </>
  );
}

export default Commitment;
