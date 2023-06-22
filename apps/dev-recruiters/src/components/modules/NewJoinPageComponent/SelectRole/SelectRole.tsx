import React from 'react';
import {
  AreaIconImage,
  IconImage,
  SelectRoleContainer,
  SelectRoleContainerBottom,
  SelectRoleContainerTop,
  TextRole,
  TextRoleSituation,
} from './StyledSelectRole';

function SelectRole(props) {
  return (
    <>
      <SelectRoleContainer>
        <SelectRoleContainerTop>
          <AreaIconImage>
            <IconImage width={props.width} src={props.src} />
          </AreaIconImage>
          <TextRole>{props.textRole}</TextRole>
        </SelectRoleContainerTop>

        <SelectRoleContainerBottom>
          <TextRoleSituation>{props.textRoleSituation}</TextRoleSituation>
        </SelectRoleContainerBottom>
      </SelectRoleContainer>
    </>
  );
}

export default SelectRole;
