import { Project, ProjectLite } from '@devlaunchers/models/project';
import { useEffect, useState } from 'react';
import { Wrapper } from '../../../../components/modules/OpportunitiesAggregator/filtering/FilteringComponent/StyledFilteringComponent';

import { Opportunity } from '@devlaunchers/models/opportunity';

import RolesList from '../RolesList';
import useProjectRole from '../UseProjectRole';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

export default function RolesComponent({
  projects,
  opportunities,
}: FilteringComponentProps) {
  //const [commitment, setCommitment] = useState({ min: 0, max: 0 });
  const [Mobile, setMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const {
    filteredProjects,
    projectsLoaded,
    opportunitiesLoaded,
    projectParams,
    fetchOpportunities,
    handlePlatformChange,
    handleRemovePlatform,
    handleOpportunityChange,
    handleRemoveOpportunity,
    handleLevelChange,
    handleRemoveLevel,
    handleCommitmentChange,
    handleSearchTermChange,
    fetchProjects,
    resetFilters,
  } = useProjectRole();

  useEffect(() => {
    if (projects && !projectsLoaded) {
      fetchProjects(projects);
    }
  }, [projects, fetchProjects, projectsLoaded]);

  // const getCommitments = useCallback((opportunities: Opportunity[]) => {
  //   const commitments = opportunities.map((o) => o.commitmentHoursPerWeek);
  //   if (commitments && commitments.length > 0) {
  //     const min = Math.min(...commitments);
  //     const max = Math.max(...commitments);
  //     setCommitment({ min, max });

  //     //setCommitmentsLoaded(true);
  //   }
  // }, []);

  useEffect(() => {
    if (opportunities && !opportunitiesLoaded) {
      fetchOpportunities(opportunities);
      // getCommitments(opportunities);
    }
  }, [opportunities, fetchOpportunities, opportunitiesLoaded]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setMobile(isMobile);
    }
  }, []);

  return (
    <Wrapper>
      {/* 
      <FiltersWrapper>
        
        <Container>
          {!Mobile ? (
            <Section>
              <SectionTitle>Filters</SectionTitle>
              <DropDownContainer>

                {opportunitiesLoaded && (
                  <div id="positions">
                    <CheckboxDropdown
                      title="Positions"
                      keyProperty={'title'}
                      items={opportunities}
                      onChange={handleOpportunityChange}
                      selectedItems={projectParams?.opportunity as string[]}
                    />
                  </div>
                )}
                <div id="level">
                  <CheckboxDropdown
                    title="Level"
                    keyProperty={'name'}
                    items={EnumToArray(SkillLevel)}
                    onChange={handleLevelChange}
                    selectedItems={projectParams.level as SkillLevel[]}
                  />
                </div>
              </DropDownContainer>
            </Section>
          ) : (
            <>
              <FiltersMenu
                resetFilters={resetFilters}
                projectParams={projectParams}
                handleLevelChange={handleLevelChange}
                handleOpportunityChange={handleOpportunityChange}
                handlePlatformChange={handlePlatformChange}
                opportunities={opportunities}
                isVisible={visible}
                onClose={() => setVisible(false)}
              />
            </>
          )}

          <CommitmentSection>
            <SectionTitle Mobile={true}>Time Commitment</SectionTitle>
            <div id="sliderContainer">
              <Slider
                min={3}
                max={10}
                onChange={(value) =>
                  handleCommitmentChange({ min: 1, max: value })
                }
                prefix="hrs"
                initialValue={10}
              />
            </div>
          </CommitmentSection>
          <FilterMenuButton onClick={() => setVisible(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Filters
          </FilterMenuButton>
          <Section>
            <SectionTitle>Search</SectionTitle>
            <SearchComponent
              value={projectParams.searchTerm as string}
              onChange={handleSearchTermChange}
            />
          </Section>
        </Container>
      

        <ChipsList>
          {projectParams.opportunity &&
            projectParams.opportunity.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveOpportunity(item)}
                key={`position${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">x</button>
              </ChipsListItem>
            ))}
          {projectParams.projectType &&
            projectParams.projectType.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemovePlatform(item)}
                key={`platform${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={7}
                    width={7}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </ChipsListItem>
            ))}
          {projectParams.level &&
            projectParams.level.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveLevel(SkillLevel[item])}
                key={`level${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">x</button>
              </ChipsListItem>
            ))}
        </ChipsList>
      </FiltersWrapper>
      */}
      {projectsLoaded && (
        <RolesList
          projects={filteredProjects as ProjectLite[]}
          projectsLoaded={projectsLoaded}
        />
      )}
    </Wrapper>
  );
}



export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(max-width: 768px)').matches;
  } else {
    return false;  
  }
};