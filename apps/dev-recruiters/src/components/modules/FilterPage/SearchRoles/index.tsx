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
        <RoleCard
          key={index}
          title={role.title}
          time={role.commitmentHoursPerWeek}
        ></RoleCard>
      ))}
    </>
  );
}

export default SearchRole;
