import { useEffect, useState } from 'react';
import RoleCard from '../../../RoleCard';

import { OpenRolesText } from './styles';
import { RolesContainer } from './styles';

function SearchRole({ selectedRoleLabel }) {
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    if (!selectedRoleLabel) {
      const roleJsonString = localStorage.getItem('selectedRole');
      const selectedRole = JSON.parse(roleJsonString);
      setSelectedRole(selectedRole);
    } else {
      setSelectedRole(selectedRoleLabel);
    }
  }, [selectedRoleLabel]);

  console.log(selectedRole);

  return (
    <>
      <OpenRolesText>Open roles ({selectedRole.length})</OpenRolesText>
      <RolesContainer>
        {selectedRole.map((role, index) => (
          <RoleCard key={index} role={role}></RoleCard>
        ))}
      </RolesContainer>
    </>
  );
}

export default SearchRole;
