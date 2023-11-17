import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import BoxContainer from '../../common/BoxContainer';

import { HeaderJoinPage } from '../NewJoinPageComponent/HeaderJoinPage';
import FilterComponent from './RolesFilterComponent';
import {
  Wrapper,
  Footer,
  FooterFirstText,
  FooterSecondText,
  BtnSignUp,
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
  return (
    <Wrapper>
      <BoxContainer>
        <HeaderJoinPage />
      </BoxContainer>
      <BoxContainer paddingVertical={10} paddingHorizontal={20}>
        <FilterComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
      <BoxContainer paddingVertical={0} paddingHorizontal={50}>
        <Footer>
          <FooterFirstText>
            Join the Dev Launchers Talent Community
          </FooterFirstText>
          <FooterSecondText>
            Join the Dev Launchers Talent Community to be notified about new
            volunteering roles that match your skillset!
          </FooterSecondText>
          <BtnSignUp
            as="a"
            href={
              process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
              '?redirectURL=https://devlaunchers.org/users/me'
            }
          >
            Join the Talent Community
          </BtnSignUp>
        </Footer>
      </BoxContainer>
    </Wrapper>
  );
};

export default FilterPageComponent;
