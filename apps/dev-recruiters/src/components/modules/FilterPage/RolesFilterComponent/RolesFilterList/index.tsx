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
import { useOpenPositions } from './UseOpenPositions';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
}

export default function RolesFilterList({ projects, projectsLoaded }: Props) {
  if (!projectsLoaded) return <div>loading please wait</div>;

  const [selectRoleLabel, setSelectRoleLabel] = useState(null);
  const [commitmentRange, setCommitmentRange] = useState(null);
  const [isCommitmentFilterActive, setIsCommitmentFilterActive] =
    useState(false);

  function handleRoleSelection(roleLabel) {
    setSelectRoleLabel(roleLabel);
    console.log(roleLabel);
  }

  /*
  function handleCommitmentFilterToggle() {
    setIsCommitmentFilterActive(!isCommitmentFilterActive);
    if (!isCommitmentFilterActive) {
      handleCommitmentFilter({ min: 0, max: 4 }); // Aplica o filtro ao ativar o checkbox
    } else {
      handleCommitmentFilter(null); // Desativa o filtro ao desativar o checkbox
    }
  }*/

  console.log('Roles', selectRoleLabel);

  // Usando o hook personalizado para obter os openPositions
  const openPositions = useOpenPositions(projects);

  return (
    <List>
      <SearchResult>Search Results</SearchResult>
      <ResultContainer>
        <FilterConatiner>
          <CollapsibleContainerFilter
            openPositions={openPositions}
            onRoleSelection={handleRoleSelection}
            selectRoleLabel={selectRoleLabel}
            isFilterActive={isCommitmentFilterActive}
          />
        </FilterConatiner>
        <RolesContainer>
          <SearchRole selectedRoleLabel={selectRoleLabel} />
        </RolesContainer>
      </ResultContainer>
    </List>
  );
}
