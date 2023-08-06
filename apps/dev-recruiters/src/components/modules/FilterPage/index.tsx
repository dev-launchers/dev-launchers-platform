import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import React, { useEffect, useState } from 'react';
import BoxContainer from '../../common/BoxContainer';
import {
  HeadingContainer,
  HeadingSubContainer,
  HeadingSubText,
  HeadingText,
  Wrapper,
} from '../NewJoinPageComponent/StyledNewJoinPage';
import FilterComponent from './FilterComponent';
import SearchRole from './SearchRoles';
import {
  FilterConatiner,
  ResultContainer,
  ResultProjects,
  ResultTitle,
  RolesContainer,
} from './styledFilterPage';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

interface Props extends FilteringComponentProps {}

const FilterPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    const roleJsonString = localStorage.getItem('selectedRole');
    const selectedRole = JSON.parse(roleJsonString);
    setSelectedRole(selectedRole);
  }, []);

  return (
    <Wrapper>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>
            Want to level up your tech skills and build world-changing products?
          </HeadingText>
        </HeadingContainer>
        <HeadingSubContainer>
          <HeadingSubText>
            Join our collaborative, global team as we build the future of
            technology.
          </HeadingSubText>
          <HeadingSubText>Check out our open roles below!</HeadingSubText>
        </HeadingSubContainer>
      </BoxContainer>
      <BoxContainer paddingVertical={10} paddingHorizontal={20}>
        <ResultTitle>Search Result</ResultTitle>
        <ResultContainer>
          <FilterConatiner>
            <FilterComponent />
          </FilterConatiner>
          <RolesContainer>
            <ResultProjects>Open Roles({selectedRole.length})</ResultProjects>
            <SearchRole />
          </RolesContainer>
        </ResultContainer>
      </BoxContainer>
    </Wrapper>
  );
};

export default FilterPageComponent;
