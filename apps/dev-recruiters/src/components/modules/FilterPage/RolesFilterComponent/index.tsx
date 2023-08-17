import { Project, ProjectLite } from '@devlaunchers/models/project';
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
=======
import { useEffect } from 'react';
>>>>>>> e1eeac24 (fix: bug fix)
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
    <>
      {projectsLoaded && (
        <RolesFilterList
          projects={filteredProjects as ProjectLite[]}
          projectsLoaded={projectsLoaded}
        />
      )}
    </>
  );
}
