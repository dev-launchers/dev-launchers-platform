import { useEffect, useState } from 'react';
import RoleCard from '../../../RoleCard';

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

  return (
    <>
      {selectedRole.map((role, index) => (
        <RoleCard key={index} role={role}></RoleCard>
      ))}
    </>
  );
}

export default SearchRole;
