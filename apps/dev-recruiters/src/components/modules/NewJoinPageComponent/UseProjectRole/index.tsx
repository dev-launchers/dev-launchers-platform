import { useState } from 'react';
import { SkillLevel } from '@devlaunchers/models/level';
import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project, ProjectLite } from '@devlaunchers/models/project';
import { ProjectParams } from '@devlaunchers/models/projectFilters';

export default function useProjectRole() {
  const [projects, setProjects] = useState<ProjectLite[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<ProjectLite[]>();

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [opportunitiesLoaded, setOpportunitiesLoaded] = useState(false);
  const [projectParams, setProjectParams] = useState<ProjectParams>({
    projectType: [],
    opportunity: [],
    level: [],
    maxCommit: 0,
    searchTerm: '',
  });
  // Apply Filters
  const SetProjectParams = (value: ProjectParams) => {
    setFilteredProjects(FilterProjects(projects, value));
  };

  //#region Fetching Operations
  const fetchProjects = (projectsList: Project[]) => {
    if (projectsList?.length > 0) {
      const list = projectsList.map((item: Project) => ({
        id: item.id,
        attributes: {
          slug: item.attributes.slug,
          catchPhrase: item.attributes.catchPhrase,
          title: item.attributes.title,
          description: item.attributes.description,
          commitmentLevel: item.attributes.commitmentLevel,
          opportunities: item.attributes.opportunities,

          //isPlatform: item.attributes.isPlatform,
        },
      }));
      setProjects(list);
      setFilteredProjects(list);
      setProjectsLoaded(true);
    }
  };

  function fetchOpportunities(opportunities: Opportunity[]) {
    if (opportunities.length <= 0) return;
    setOpportunities(opportunities);
    setOpportunitiesLoaded(true);
  }

  //#endregion

  //#region Filters Handlers

  const handleParamsChange = (params: ProjectParams) => {
    setProjectParams(params);
    setFilteredProjects(FilterProjects(projects, params));
  };

  const handlePlatformChange = (value: string[]) => {
    handleParamsChange({ ...projectParams, projectType: value });
  };

  const handleRemovePlatform = (value: string) => {
    const types = projectParams.projectType.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, projectType: types });
  };

  const handleOpportunityChange = (value: string[]) => {
    handleParamsChange({ ...projectParams, opportunity: value });
  };

  const handleRemoveOpportunity = (value: string) => {
    const opportunity = projectParams!.opportunity!.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, opportunity });
  };

  const handleLevelChange = (value: SkillLevel[]) => {
    handleParamsChange({ ...projectParams, level: value });
  };

  const handleRemoveLevel = (value: string) => {
    // @ts-ignore
    const level = projectParams!.level!.filter((p) => p !== SkillLevel[value]);
    handleParamsChange({ ...projectParams, level });
  };

  const handleCommitmentChange = (value: any) => {
    handleParamsChange({
      ...projectParams,
      maxCommit: value.max,
    });
  };

  const handleSearchTermChange = (searchTerm: any) => {
    handleParamsChange({
      ...projectParams,
      searchTerm,
    });
  };

  const resetFilters = () => {
    handleParamsChange({
      projectType: [],
      opportunity: [],
      level: [],
      maxCommit: 0,
      searchTerm: '',
    });
  };
  //#endregion

  return {
    projectParams,
    filteredProjects,
    projectsLoaded,
    opportunities,
    opportunitiesLoaded,
    fetchProjects,
    fetchOpportunities,
    SetProjectParams,
    handlePlatformChange,
    handleRemovePlatform,
    handleOpportunityChange,
    handleRemoveOpportunity,
    handleLevelChange,
    handleRemoveLevel,
    handleCommitmentChange,
    handleSearchTermChange,
    resetFilters,
  };
}

//#region Single Project Filtering
function FilterBySearchTerm(project: ProjectLite, params: ProjectParams) {
  /*if (params.searchTerm) {
    return (
      project.attributes.title
        .toLowerCase()
        .includes(params.searchTerm.toLowerCase()) 
        ||
      project.attributes.opportunities.data.some((o) =>
        o.skills.some((s) =>
          s!
            .interest!.toLowerCase()!
            .includes(params!.searchTerm!.toLowerCase())
        ) 
      )
    );
  } */
  return true;
}

// Filter Projects by Level, Opportunities and commitments at once, reducing enumerations of project opportunities
function FilterProjectOpportunities(
  project: ProjectLite,
  params: ProjectParams
) {
  const filterByLevel = params.level && params.level.length > 0;
  const filterByOpportunity =
    params.opportunity && params.opportunity.length > 0;
  const filterByCommitment = params.maxCommit > 0;

  return project.attributes.opportunities.data.some(
    (op) =>
      (!filterByLevel || params!.level!.includes(op!.attributes.level)) &&
      (!filterByOpportunity ||
        params!.opportunity!.includes(op!.attributes.title)) &&
      (!filterByCommitment ||
        op!.attributes.commitmentHoursPerWeek <= params!.maxCommit)
  );
}

function FilterByLevel(project: ProjectLite, params: ProjectParams) {
  if (params.level && params.level.length > 0) {
    return project.attributes.opportunities.data.some((op) =>
      params!.level!.includes(op!.attributes.level)
    );
  }
  return true;
}
function FilterByOpportunities(project: ProjectLite, params: ProjectParams) {
  if (params.opportunity && params.opportunity.length > 0) {
    return project.attributes.opportunities.data.some((op) =>
      params!.opportunity!.includes(op!.attributes.title)
    );
  }
  return true;
}
function FilterByCommitment(project: ProjectLite, params: ProjectParams) {
  if (params.maxCommit > 0) {
    return project.attributes.opportunities.data.some(
      (op) => op.attributes.commitmentHoursPerWeek <= params.maxCommit
    );
  }
  return true;
}
function FilterByProjectType(project: ProjectLite, params: ProjectParams) {
  if (params.projectType && params.projectType.length > 0) {
    /* const isPlatform =
      params.projectType.includes('Platform') && project.attributes.isPlatform;
    const isIndependent =
      params.projectType.includes('Independent') &&
      !project.attributes.isPlatform;
   */
    return 'isPlatform' || 'isIndependent';
  }
  return true;
}

function FilterProject(project: ProjectLite, params: ProjectParams) {
  return (
    FilterProjectOpportunities(project, params) &&
    FilterByProjectType(project, params) &&
    FilterBySearchTerm(project, params) &&
    FilterByCommitment(project, params)
  );
}
//#endregion

/**
 * Filters projects
 * @param projects the initial list of projects received from the API
 * @param params  contains the filtering criteria
 * @returns project[] a filtered list;
 */
export function FilterProjects(projects: ProjectLite[], params: ProjectParams) {
  if (projects.length > 0) {
    return projects
      .filter((project) => FilterProject(project, params))
      .sort((a, b) => {
        if (a.attributes.title < b.attributes.title) {
          return -1;
        }
        if (a.attributes.title > b.attributes.title) {
          return 1;
        }
        return 0;
      });
  }
}
