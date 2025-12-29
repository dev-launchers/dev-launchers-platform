import { useEffect, useState } from 'react';
import RoleCard from './RoleCard';

import { EmptyRolesContainer, OpenRolesText } from './styles';
import { RolesContainer } from './styles';
import { useOpportunitiesContext } from '../../../../../../contexts/SelectRoleContext';
import { Opportunity, SkillLevel } from '@devlaunchers/models';

interface Props {
  searchQuery: any;
  opportunities?: Opportunity[];
  activeFilters: string[];
  selectedRoleCategory?: String;
}
function SearchRole({
  searchQuery,
  opportunities,
  activeFilters,
  selectedRoleCategory,
}: Props) {
  const [selectedRoles, setSelectedRoles] = useState<Opportunity[]>([]);
  const { commitmentRange } = useOpportunitiesContext();

  // useEffect(() => {
  //   if (!selectedRoleLabel) {
  //     const roleJsonString = localStorage.getItem('selectedRole');
  //     const selectedRole = JSON.parse(roleJsonString);
  //     const selectedCategory = localStorage.getItem('roleCategory');
  //     setSelectedRoles(selectedRole);
  //     handleSuggestedRole(selectedCategory);
  //   } else if (commitmentRange !== null) {
  //     const filteredRoles = selectedRoleLabel.filter(
  //       (role) =>
  //         role?.attributes?.commitmentHoursPerWeek >= commitmentRange.min &&
  //         role?.attributes?.commitmentHoursPerWeek <= commitmentRange.max
  //     );
  //     setSelectedRoles(filteredRoles);
  //     handleSuggestedRole(selectedRoleCategory);
  //   } else {
  //     setSelectedRoles(selectedRoleLabel);
  //     handleSuggestedRole(selectedRoleCategory);
  //   }
  // }, [selectedRoleLabel, commitmentRange]);

  useEffect(() => {
    let filteredRoles = opportunities || [];

    // Filter by search query (selectedRoleLabel is the search string)
    if (searchQuery && searchQuery.trim() !== '') {
      filteredRoles = filteredRoles.filter(
        (role) =>
          role?.attributes?.title
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          role?.attributes?.description
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          role?.attributes?.roleType
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // Filter by active filters
    if (activeFilters && activeFilters.length > 0) {
      filteredRoles = filteredRoles.filter((role) => {
        return activeFilters.every((filter) => {
          // Parse the filter string (e.g., "roleTitle=Development")
          const [key, value] = filter.split('=');

          if (key === 'roleTitle') {
            return (
              role?.attributes?.roleCategory?.includes(value) ||
              role?.attributes?.roleType?.includes(value)
            );
          }
          if (key === 'experienceLevel') {
            return role?.attributes?.level === (value as unknown as SkillLevel);
          }
          return true;
        });
      });
    } else if (localStorage.getItem('roleCategory')) {
      const roleCategory = localStorage.getItem('roleCategory');
      filteredRoles = filteredRoles.filter(
        (role) => role?.attributes?.roleCategory === roleCategory
      );
    }

    // Filter by commitment range
    if (commitmentRange) {
      filteredRoles = filteredRoles.filter(
        (role) =>
          role?.attributes?.commitmentHoursPerWeek >= commitmentRange.min &&
          role?.attributes?.commitmentHoursPerWeek <= commitmentRange.max
      );
    }

    setSelectedRoles(filteredRoles);
  }, [searchQuery, activeFilters, commitmentRange, opportunities]);

  return (
    <>
      <>
        <OpenRolesText>Open roles ({selectedRoles?.length || 0})</OpenRolesText>
        {selectedRoles?.length === 0 ? (
          <>
            <EmptyRolesContainer>
              Oops, there are currently no matching roles.
            </EmptyRolesContainer>
          </>
        ) : (
          <RolesContainer>
            {selectedRoles?.map((role, index) => {
              return (
                <RoleCard
                  key={index}
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
