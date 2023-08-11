import React from 'react';
import {
  AreaIconImage,
  IconImage,
  SelectRoleContainer,
  SelectRoleContainerBottom,
  TextRole,
  TextRoleSituation,
} from './styles';

function SelectRoleFilter({ textRole, onClick }) {
  // For the selected role, the list of open positions in the catagory of that role can be found in props.openPositions
  return (
    <>
      <SelectRoleContainer onClick={onClick}>
        <TextRole>{textRole}</TextRole>
      </SelectRoleContainer>
    </>
  );
}

export default SelectRoleFilter;
