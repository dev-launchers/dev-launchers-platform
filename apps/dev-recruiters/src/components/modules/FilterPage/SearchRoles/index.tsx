import { useEffect, useState } from 'react';
import RoleCard from '../RoleCard';

function SearchRole() {
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    const roleJsonString = localStorage.getItem('selectedRole');
    const selectedRole = JSON.parse(roleJsonString);
    setSelectedRole(selectedRole);
  }, []);

  return (
    <>
      {selectedRole.map((role, index) => (
        <RoleCard key={index} role={role}></RoleCard>
      ))}
    </>
  );
}

export default SearchRole;
