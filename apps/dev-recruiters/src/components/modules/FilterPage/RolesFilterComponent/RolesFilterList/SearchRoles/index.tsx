import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';
import { useOpportunitiesContext } from '../../../../../../contexts/SelectRoleContext';

function SearchRole({ selectedRoleLabel }) {
  const [selectedRole, setSelectedRole] = useState([]);

  const { commitmentRange } = useOpportunitiesContext();

  useEffect(() => {
    if (!selectedRoleLabel) {
      const roleJsonString = localStorage.getItem('selectedRole');
      const selectedRole = JSON.parse(roleJsonString);
      setSelectedRole(selectedRole);
    } else {
      setSelectedRole(selectedRoleLabel);
    }
  }, [selectedRoleLabel]);

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
            {selectedRole.map((role, index) => (
              <RoleCard key={index} role={role}></RoleCard>
            ))}
          </RolesContainer>
        )}
      </>
    </>
  );
}

export default SearchRole;
