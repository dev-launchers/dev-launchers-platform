import React from 'react';
import {
  AreaIconImage,
  IconImage,
  SelectRoleContainer,
  SelectRoleContainerBottom,
  TextRole,
  TextRoleSituation,
} from './StyledSelectRole';

function SelectRole(props) {
  const { onClick } = props;
  // For the selected role, the list of open positions in the catagory of that role can be found in props.openPositions
  return (
    <>
      <SelectRoleContainer onClick={onClick}>
        <AreaIconImage>
          <IconImage width={props.width} src={props.src} />
        </AreaIconImage>
        <TextRole>{props.textRole}</TextRole>

        <SelectRoleContainerBottom>
          <TextRoleSituation>{`${props.openPositions.length} roles open`}</TextRoleSituation>
        </SelectRoleContainerBottom>
      </SelectRoleContainer>
    </>
  );
}

export default SelectRole;
