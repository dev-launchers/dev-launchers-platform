import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import SuggestedRole from './SuggestedRole';
import { useOpportunitiesContext } from '../../../../../../contexts/SelectRoleContext';

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
=======
  }, [selectedRoleLabel]);
>>>>>>> 79e3fb90 (feat: create the logic of time commitment)
=======
    console.log(selectedRoleLabel);
    console.log(commitmentRange);
  }, [selectedRoleLabel, commitmentRange]);
>>>>>>> e99587eb (fix: fixing the design)

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
