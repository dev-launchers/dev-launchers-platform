import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import BoxContainer from '../../common/BoxContainer';

import { HeaderJoinPage } from '../NewJoinPageComponent/HeaderJoinPage';
import FilterComponent from './RolesFilterComponent';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Footer,
  FooterFirstText,
  FooterSecondText,
  BtnSignUp,
  SearchResult,
} from './styles';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

interface Props extends FilteringComponentProps {}

const FilterPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const router = useRouter();
  const routeChange = (e) => {
    e.preventDefault();
    router.push('/join/second');
  };
  return (
    <Wrapper>
      <BoxContainer>
        {/* <HeaderJoinPage /> */}
        <SearchResult>Search Results</SearchResult>
      </BoxContainer>
      <BoxContainer paddingVertical={10} paddingHorizontal={20}>
        <FilterComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
      <BoxContainer paddingVertical={0} paddingHorizontal={0}>
        <Footer>
          <FooterFirstText>
            Join the Dev Launchers Talent Community
          </FooterFirstText>
          <FooterSecondText>
            Join the Dev Launchers Talent Community to be notified about new
            volunteering roles that match your skillset!
          </FooterSecondText>
          <BtnSignUp as="a" type="submit" onClick={routeChange}>
            Join the Talent Community
          </BtnSignUp>
        </Footer>
      </BoxContainer>
    </Wrapper>
  );
};

export default FilterPageComponent;
