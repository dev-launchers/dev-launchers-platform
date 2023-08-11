import { Project, ProjectLite } from '@devlaunchers/models/project';
import { useEffect, useState } from 'react';
import { Wrapper } from '../../../../components/modules/OpportunitiesAggregator/filtering/FilteringComponent/StyledFilteringComponent';

import { Opportunity } from '@devlaunchers/models/opportunity';

import useProjectRole from '../../NewJoinPageComponent/UseProjectRole/index';
import RolesFilterList from '../RolesFilterComponent/RolesFilterList';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

export default function FilterComponent({
  projects,
  opportunities,
}: FilteringComponentProps) {
  const {
    filteredProjects,
    projectsLoaded,
    opportunitiesLoaded,
    fetchOpportunities,
    fetchProjects,
  } = useProjectRole();

  useEffect(() => {
    if (projects && !projectsLoaded) {
      fetchProjects(projects);
    }
  }, [projects, fetchProjects, projectsLoaded]);

  useEffect(() => {
    if (opportunities && !opportunitiesLoaded) {
      fetchOpportunities(opportunities);
    }
  }, [opportunities, fetchOpportunities, opportunitiesLoaded]);

  return (
    <Wrapper>
      {projectsLoaded && (
        <RolesFilterList
          projects={filteredProjects as ProjectLite[]}
          projectsLoaded={projectsLoaded}
        />
      )}
    </Wrapper>
  );
}
