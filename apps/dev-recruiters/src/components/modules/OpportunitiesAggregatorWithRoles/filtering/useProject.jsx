import { useState } from 'react';
import { SkillLevel } from '@devlaunchers/models/level';
import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project, ProjectLite } from '@devlaunchers/models/project';
import { ProjectParams } from '@devlaunchers/models/projectFilters';

export default function useProjects() {
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
  const SetProjectParams = (value) => {
    setFilteredProjects(FilterProjects(projects, value));
  };

  //#region Fetching Operations
  const fetchProjects = (projectsList) => {
    if (projectsList.length > 0) {
      let list = projectsList.map((item) => ({
        id: item.id,
        slug: item.slug,
        catchPhrase: item.catchPhrase,
        title: item.title,
        description: item.description,
        commitmentLevel: item.commitmentLevel,
        opportunities: item.opportunities,
        isPlatform: item.isPlatform,
      }));
      // Kris hack: Duplicate product entries for each embedded opportunity
      list = list.reduce((accumulator, project, index) => {
        accumulator = [...accumulator, ...project.opportunities.map((opportunity) => {
          return {...project, opportunities:[opportunity]};
        })];
        return accumulator;
      }, []);
      setProjects(list);
      setFilteredProjects(list);
      setProjectsLoaded(true);
    }
  };

  function fetchOpportunities(opportunities) {
    if (opportunities.length <= 0) return;
    setOpportunities(opportunities);
    setOpportunitiesLoaded(true);
  }

  //#endregion

  //#region Filters Handlers

  const handleParamsChange = (params) => {
    setProjectParams(params);
    setFilteredProjects(FilterProjects(projects, params));
  };

  const handlePlatformChange = (value) => {
    handleParamsChange({ ...projectParams, projectType: value });
  };

  const handleRemovePlatform = (value) => {
    const types = projectParams.projectType.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, projectType: types });
  };

  const handleOpportunityChange = (value) => {
    handleParamsChange({ ...projectParams, opportunity: value });
  };

  const handleRemoveOpportunity = (value) => {
    const opportunity = projectParams.opportunity.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, opportunity });
  };

  const handleLevelChange = (value) => {
    handleParamsChange({ ...projectParams, level: value });
  };

  const handleRemoveLevel = (value) => {
    // @ts-ignore
    const level = projectParams.level.filter((p) => p !== SkillLevel[value]);
    handleParamsChange({ ...projectParams, level });
  };

  const handleCommitmentChange = (value) => {
    handleParamsChange({
      ...projectParams,
      maxCommit: value.max,
    });
  };

  const handleSearchTermChange = (searchTerm) => {
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
function FilterBySearchTerm(project, params) {
  if (params.searchTerm) {
    return (
      project.title.toLowerCase().includes(params.searchTerm.toLowerCase()) ||
      project.opportunities.some((o) =>
        o.skills.some((s) =>
          s.interest.toLowerCase().includes(params.searchTerm.toLowerCase())
        )
      )
    );
  }
  return true;
}

// Filter Projects by Level, Opportunities and commitments at once, reducing enumerations of project opportunities
function FilterProjectOpportunities(
  project,
  params
) {
  const filterByLevel = params.level && params.level.length > 0;
  const filterByOpportunity =
    params.opportunity && params.opportunity.length > 0;
  const filterByCommitment = params.maxCommit > 0;

  return project.opportunities.some(
    (op) =>
      (!filterByLevel || params.level.includes(op.level)) &&
      (!filterByOpportunity || params.opportunity.includes(op.title)) &&
      (!filterByCommitment || op.commitmentHoursPerWeek <= params.maxCommit)
  );
}

function FilterByLevel(project, params) {
  if (params.level && params.level.length > 0) {
    return project.opportunities.some((op) => params.level.includes(op.level));
  }
  return true;
}
function FilterByOpportunities(project , params) {
  if (params.opportunity && params.opportunity.length > 0) {
    return project.opportunities.some((op) =>
      params.opportunity.includes(op.title)
    );
  }
  return true;
}
function FilterByCommitment(project, params) {
  if (params.maxCommit > 0) {
    return project.opportunities.some(
      (op) => op.commitmentHoursPerWeek <= params.maxCommit
    );
  }
  return true;
}
function FilterByProjectType(project, params) {
  if (params.projectType && params.projectType.length > 0) {
    const isPlatform =
      params.projectType.includes('Platform') && project.isPlatform;
    const isIndependent =
      params.projectType.includes('Independent') && !project.isPlatform;

    return isPlatform || isIndependent;
  }
  return true;
}

function FilterProject(project, params) {
  return (
    FilterProjectOpportunities(project, params) &&
    FilterByProjectType(project, params) &&
    FilterBySearchTerm(project, params)
  );
}
//#endregion

/**
 * Filters projects
 * @param projects the initial list of projects received from the API
 * @param params  contains the filtering criteria
 * @returns project[] a filtered list;
 */
export function FilterProjects(projects, params) {
  if (projects.length > 0) {
    return projects
      .filter((project) => FilterProject(project, params))
      .sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
  }
}
