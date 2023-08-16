import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';

function SearchRole({ selectedRoleLabel, commitmentRange }) {
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    if (!selectedRoleLabel) {
      const roleJsonString = localStorage.getItem('selectedRole');
      const selectedRole = JSON.parse(roleJsonString);
      setSelectedRole(selectedRole);
    } else {
      setSelectedRole(selectedRoleLabel);
    }

    // Apply commitment filter if commitmentRange is provided
    if (commitmentRange) {
      const filteredRoles = selectedRole.filter(
        (role) =>
          role.commitmentHoursPerWeek >= commitmentRange.min &&
          role.commitmentHoursPerWeek <= commitmentRange.max
      );
      setSelectedRole(filteredRoles);
    }
  }, [selectedRoleLabel, commitmentRange]);

  console.log('teste', selectedRole);
  console.log(selectedRole.length);

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
