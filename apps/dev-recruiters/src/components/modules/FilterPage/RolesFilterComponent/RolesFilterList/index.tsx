import { ProjectLite } from '@devlaunchers/models/project';
import { useState } from 'react';
import CollapsibleContainerFilter from './CollapsibleContainerFilter';
import { List } from '../../../../../components/modules/OpportunitiesAggregator/filtering/ProjectsList/StyledProjectsList';
import SearchRole from './SearchRoles';
import {
  FilterConatiner,
  ResultContainer,
  RolesContainer,
  SearchResult,
} from './styles';
import useOpenPositions from './UseOpenPositions';
//import useOpenPositions from './UseOpenPositions';
import { Opportunity } from '@devlaunchers/models';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
  opportunities?: Opportunity[];
}

export default function RolesFilterList({
  projects,
  projectsLoaded,
  opportunities,
}: Props) {
  if (!projectsLoaded) return <div>loading please wait</div>;

  const [selectRoleLabel, setSelectRoleLabel] = useState(null);
  const [selectedRoleCategory, setSelectedRoleCategory] = useState('');

  function handleRoleSelection(roleLabel: any, roleCategory: string) {
    setSelectRoleLabel(roleLabel);
    setSelectedRoleCategory(roleCategory);
  }

  const openPositions = useOpenPositions({
    projects,
    projectsLoaded,
    opportunities,
  });
  {
    return (
      <List>
        {/* <SearchResult>Search Results</SearchResult> */}
        <ResultContainer>
          <FilterConatiner>
            <CollapsibleContainerFilter
              openPositions={openPositions}
              onRoleSelection={handleRoleSelection}
              selectRoleLabel={selectRoleLabel}
            />
          </FilterConatiner>
          <RolesContainer>
            <SearchRole
              selectedRoleLabel={selectRoleLabel}
              opportunities={opportunities}
              selectedRoleCategory={selectedRoleCategory}
            />
          </RolesContainer>
        </ResultContainer>
      </List>
    );
  }
}
