import { ProjectLite } from '@devlaunchers/models/project';
import { useState } from 'react';
import CollapsibleContainerFilter from './CollapsibleContainerFilter';
import { List } from '../../../../../components/modules/OpportunitiesAggregator/filtering/ProjectsList/StyledProjectsList';
import SearchRole from './SearchRoles';
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

  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedRoleCategory, setSelectedRoleCategory] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function handleRoleSelection(
    searchQuery: any,
    roleCategory: string,
    activeFilters: string[]
  ) {
    setSearchQuery(searchQuery);
    setActiveFilters(activeFilters);
    setSelectedRoleCategory(roleCategory);
  }

  const openPositions = useOpenPositions({
    projects,
    projectsLoaded,
    opportunities,
  });

  return (
    <div className="w-full min-h-screen">
      {/* Filter Section at Top */}
      <CollapsibleContainerFilter
        openPositions={openPositions}
        onRoleSelection={handleRoleSelection}
        selectRoleLabel={searchQuery}
      />

      {/* Roles Display Section */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <SearchRole
          searchQuery={searchQuery}
          opportunities={opportunities}
          activeFilters={activeFilters}
          selectedRoleCategory={selectedRoleCategory}
        />
      </div>
    </div>
  );
}
