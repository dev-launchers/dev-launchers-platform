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
  selectedRoleCategory?: String;
}
function SearchRole({
  selectedRoleLabel,
  opportunities,
  selectedRoleCategory,
}: Props) {
  const [selectedRole, setSelectedRole] = useState([]);
  const [suggestedRole, setSuggestedRole] = useState([]);
  const { commitmentRange } = useOpportunitiesContext();

  useEffect(() => {
    if (!selectedRoleLabel) {
      const roleJsonString = localStorage.getItem('selectedRole');
      const selectedRole = JSON.parse(roleJsonString);
      const selectedCategory = localStorage.getItem('roleCategory');
      setSelectedRole(selectedRole);
      handleSuggestedRole(selectedCategory);
    } else if (commitmentRange !== null) {
      const filteredRoles = selectedRoleLabel.filter(
        (role) =>
          role?.attributes?.commitmentHoursPerWeek >= commitmentRange.min &&
          role?.attributes?.commitmentHoursPerWeek <= commitmentRange.max
      );
      setSelectedRole(filteredRoles);
      handleSuggestedRole(selectedRoleCategory);
    } else {
      setSelectedRole(selectedRoleLabel);
      handleSuggestedRole(selectedRoleCategory);
    }
  }, [selectedRoleLabel, commitmentRange]);

  function handleSuggestedRole(roleCategory) {
    if (roleCategory !== '') {
      const suggestedRoleList = opportunities.filter(
        (role) => role?.attributes?.roleCategory === roleCategory
      );
      setSuggestedRole(suggestedRoleList);
    }
  }

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
            <OpenRolesText>
              Suggested roles({suggestedRole.length})
            </OpenRolesText>
            <RolesContainer>
              {suggestedRole?.map((role, index) => {
                return (
                  <RoleCard
                    key22={index}
                    role={role}
                    opportunities={opportunities}
                  ></RoleCard>
                );
              })}
            </RolesContainer>
          </>
        ) : (
          <RolesContainer>
            {selectedRole?.map((role, index) => {
              return (
                <RoleCard
                  key22={index}
                  role={role}
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
