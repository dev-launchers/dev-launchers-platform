import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import BoxContainer from '../../common/BoxContainer';

import { HeaderJoinPage } from '../NewJoinPageComponent/HeaderJoinPage';
import FilterComponent from './RolesFilterComponent';
import { Wrapper } from './styles';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

interface Props extends FilteringComponentProps {}

const FilterPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  return (
    <Wrapper>
      <BoxContainer>
        <HeaderJoinPage />
      </BoxContainer>
      <BoxContainer paddingVertical={10} paddingHorizontal={20}>
        <FilterComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
    </Wrapper>
  );
};

export default FilterPageComponent;
