import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';
<<<<<<< HEAD

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';
import { useOpportunitiesContext } from '../../../../../../contexts/SelectRoleContext';
=======
>>>>>>> b4f9e26e (build: work in time commitment)

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';

function SearchRole({ selectedRoleLabel, commitmentRange }) {
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
<<<<<<< HEAD
    console.log(selectedRoleLabel);
    console.log(commitmentRange);
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
=======
>>>>>>> 2bc7ee42 (fix: bug fix)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b4f9e26e (build: work in time commitment)
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
<<<<<<< HEAD
=======
      <OpenRolesText>Open roles ({selectedRole.length})</OpenRolesText>
      <RolesContainer>
        {selectedRole.map((role, index) => (
          <RoleCard key={index} role={role}></RoleCard>
        ))}
      </RolesContainer>
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
=======
>>>>>>> b4f9e26e (build: work in time commitment)
    </>
  );
}

export default SearchRole;
