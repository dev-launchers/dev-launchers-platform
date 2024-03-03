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

  function handleRoleSelection(roleLabel) {
    setSelectRoleLabel(roleLabel);
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const openPositions = useOpenPositions(projects);
=======
  // Usando o hook personalizado para obter os openPositions
  const openPositions = useOpenPositions(projects);

  console.log('openPositions', selectRoleLabel);
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)

=======
=======
  function handleCommitmentFilter(range) {
    setCommitmentRange(range);
  }

=======
  /*
>>>>>>> 79e3fb90 (feat: create the logic of time commitment)
  function handleCommitmentFilterToggle() {
    setIsCommitmentFilterActive(!isCommitmentFilterActive);
    if (!isCommitmentFilterActive) {
      handleCommitmentFilter({ min: 0, max: 4 }); // Aplica o filtro ao ativar o checkbox
    } else {
      handleCommitmentFilter(null); // Desativa o filtro ao desativar o checkbox
    }
  }*/

>>>>>>> 2bc7ee42 (fix: bug fix)
  console.log('Roles', selectRoleLabel);

  // Usando o hook personalizado para obter os openPositions
=======
>>>>>>> e99587eb (fix: fixing the design)
  const openPositions = useOpenPositions(projects);

>>>>>>> b4f9e26e (build: work in time commitment)
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
          <SearchRole selectedRoleLabel={selectRoleLabel} />
        </RolesContainer>
      </ResultContainer>
    </List>
  );
}
