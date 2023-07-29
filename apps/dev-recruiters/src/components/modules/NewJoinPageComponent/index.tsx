import React from 'react';
import {
  BtnSignUp,
  Footer,
  HeadingContainer,
  HeadingSubText,
  HeadingText,
  Wrapper,
  AreaImage,
} from './StyledNewJoinPage';
import BoxContainer from '../../common/BoxContainer';
import ContainerImage from './ContainerImage/containerImage';
import JoinPLeft from '../../../images/JoinPage/Join-page-image-left.png';
import JoinPRight from '../../../images/JoinPage/Join-page-image-right.png';

import RolesComponent, { FilteringComponentProps } from './RolesComponent';

interface Props extends FilteringComponentProps {}

const NewJoinPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  return (
    <Wrapper>
      <BoxContainer paddingVertical={60}>
        <HeadingContainer>
          <HeadingText>
            Want to level up your tech skills and build world-changing products?
          </HeadingText>
        </HeadingContainer>
      </BoxContainer>
      <BoxContainer paddingVertical={20}>
        <HeadingContainer>
          <HeadingSubText>
            <h1>
              Join our collaborative, global team as we build the future of
              technology.
            </h1>
            <h1>Check out our open roles below!</h1>
          </HeadingSubText>
          <AreaImage>
            <ContainerImage src={JoinPLeft} width="100%" loading="lazy" />
            <ContainerImage src={JoinPRight} width="100%" loading="lazy" />
          </AreaImage>
        </HeadingContainer>
      </BoxContainer>

      <BoxContainer paddingHorizontal={85} paddingVertical={32}>
        <RolesComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>

      <BoxContainer paddingVertical={20} paddingHorizontal={50}>
        <Footer>
          <h1>Didn't find what you were looking for?</h1>
          <h3>Create an account to be notified when more roles open up!</h3>
          <BtnSignUp
            as="a"
            href={
              process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
              '?redirectURL=https://devlaunchers.org/users/me'
            }
          >
            Create An Account
          </BtnSignUp>
        </Footer>
      </BoxContainer>
    </Wrapper>
  );
};

export default NewJoinPageComponent;
