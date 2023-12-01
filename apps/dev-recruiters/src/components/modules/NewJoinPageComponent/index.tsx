import React from 'react';
import { useRouter } from 'next/router';
import {
  BtnSignUp,
  Footer,
  Wrapper,
  AreaImage,
  SelectRoleContainer,
  SelectRoleText,
  FooterFirstText,
  FooterSecondText,
} from './StyledNewJoinPage';
import BoxContainer from '../../common/BoxContainer';
import ContainerImage from './ContainerImage/containerImage';
import JoinPLeft from '../../../images/JoinPage/Join-page-image-left.png';
import JoinPRight from '../../../images/JoinPage/Join-page-image-right.png';

import RolesComponent, { FilteringComponentProps } from './RolesComponent';
import { HeaderJoinPage } from './HeaderJoinPage';

interface Props extends FilteringComponentProps {}

const NewJoinPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const router = useRouter();
  const routeChange = (e) => {
    e.preventDefault();
    router.push('join/second');
  };
  return (
    <Wrapper>
      <BoxContainer paddingVertical={20}>
        <HeaderJoinPage />
      </BoxContainer>

      <AreaImage>
        <ContainerImage src={JoinPLeft} width="100%" loading="lazy" />
        <ContainerImage src={JoinPRight} width="100%" loading="lazy" />
      </AreaImage>

      <BoxContainer paddingVertical={75}>
        <SelectRoleContainer>
          <SelectRoleText>
            Select the role that you're interested in:
          </SelectRoleText>
        </SelectRoleContainer>
      </BoxContainer>

      <BoxContainer paddingHorizontal={85}>
        <RolesComponent projects={projects} opportunities={opportunities} />
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
          {/* <BtnSignUp as="a" type="submit" href="/second"> */}
          <BtnSignUp as="a" type="submit" onClick={routeChange}>
            Join the Talent Community
          </BtnSignUp>
        </Footer>
      </BoxContainer>
    </Wrapper>
  );
};

// href={
//   process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
//   '?redirectURL=https://devlaunchers.org/users/me'}
export default NewJoinPageComponent;
