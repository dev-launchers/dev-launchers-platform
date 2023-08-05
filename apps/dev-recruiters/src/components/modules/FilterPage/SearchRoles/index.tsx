import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import RoleCard from '../RoleCard';

function SearchRole() {
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    const roleJsonString = localStorage.getItem('selectedRole');
    const selectedRole = JSON.parse(roleJsonString);
    setSelectedRole(selectedRole);
  }, []);

  console.log(selectedRole);

  return (
    <>
      {selectedRole.map((role, index) => (
        <RoleCard key={index} role={role}></RoleCard>
      ))}
    </>
  );
}

export default SearchRole;
