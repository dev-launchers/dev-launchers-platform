import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';
import { useOpportunitiesContext } from '../../../../../../contexts/SelectRoleContext';
import { Opportunity } from '@devlaunchers/models';

interface Props {
  selectedRoleLabel: any;
  opportunities?: Opportunity[];
}
function SearchRole({ selectedRoleLabel, opportunities }: Props) {
  const [selectedRole, setSelectedRole] = useState([]);

  const { commitmentRange } = useOpportunitiesContext();

  useEffect(() => {
    if (!selectedRoleLabel) {
      const roleJsonString = localStorage.getItem('selectedRole');
      const selectedRole = JSON.parse(roleJsonString);
      setSelectedRole(selectedRole);
    } else if (commitmentRange !== null) {
      const filteredRoles = selectedRoleLabel.filter(
        (role) =>
          role.commitmentHoursPerWeek >= commitmentRange.min &&
          role.commitmentHoursPerWeek <= commitmentRange.max
      );
      setSelectedRole(filteredRoles);
    } else {
      setSelectedRole(selectedRoleLabel);
    }
  }, [selectedRoleLabel, commitmentRange]);

  /*
  useEffect(() => {
    if (commitmentRange !== null) {
      const filteredRoles = selectedRoleLabel.filter(
        (role) =>
          role.commitmentHoursPerWeek >= commitmentRange.min &&
          role.commitmentHoursPerWeek <= commitmentRange.max
      );
      setSelectedRole(filteredRoles);
    } else {
      setSelectedRole(selectedRoleLabel);
    }
  }, [commitmentRange, selectedRoleLabel]);
  */
  return (
    <>
      <>
        <OpenRolesText>Open roles ({selectedRole.length})</OpenRolesText>
        {selectedRole.length === 0 ? (
          <>
            <EmptyRolesContainer>
              Oops, there are currently no matching roles. Check out other
              suggested roles below!
            </EmptyRolesContainer>
            <OpenRolesText>Suggested roles(1)</OpenRolesText>
            <SuggestedRole />
          </>
        ) : (
          <RolesContainer>
            {selectedRole.map((role, index) => {
              return (
                <RoleCard
                  key22={index}
                  role={role.attributes}
                  opportunities={opportunities}
                ></RoleCard>
              );
            })}
          </RolesContainer>
        )}
      </>
    </>
  );
}

export default SearchRole;
