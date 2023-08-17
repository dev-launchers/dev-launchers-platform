import React, { useEffect, useState, useContext } from 'react';
import { CommitmentText, IconImage, TimeCommitment } from './styles';
import CheckBox from '../../../../../../../images/icons/checkbox.png';
import StyledCheckbox from './checkBox';
import { useOpportunitiesContext } from '../../../../../../../contexts/SelectRoleContext';

function Commitment() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [checkBoxLow, setCheckBoxLow] = useState(null);
  const [checkBoxMed, setCheckBoxMed] = useState(null);
  const [checkBoxHigh, setCheckBoxHigh] = useState(null);

  const { selectedRole, setCommitmentRange, commitmentRange } =
    useOpportunitiesContext();

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

  console.log(selectedCheckbox);

  useEffect(() => {
    console.log('commitmentRange:', commitmentRange);
  }, [commitmentRange]);

  console.log(selectedRole);

  return (
    <>
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
    </>
  );
}

export default Commitment;
