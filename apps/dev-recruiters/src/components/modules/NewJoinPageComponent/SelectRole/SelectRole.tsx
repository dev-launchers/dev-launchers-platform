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
  return (
    <>
      <SelectRoleContainer>
        <AreaIconImage>
          <IconImage width={props.width} src={props.src} />
        </AreaIconImage>
        <TextRole>{props.textRole}</TextRole>

        <SelectRoleContainerBottom>
          <TextRoleSituation>{`${props.openPositions} roles open`}</TextRoleSituation>
        </SelectRoleContainerBottom>
      </SelectRoleContainer>
    </>
  );
}

export default SelectRole;
