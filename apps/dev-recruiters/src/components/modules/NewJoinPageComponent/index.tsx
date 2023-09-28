import React, { useEffect, useState } from 'react';
import {
  BtnSignUp,
  Footer,
  Wrapper,
  SelectRoleContainer,
  SelectRoleText,
  FooterFirstText,
  FooterSecondText,
  HeaderImage,
  HeaderContent,
} from './StyledNewJoinPage';
import BoxContainer from '../../common/BoxContainer';
import HDRImage from '../../../images/JoinPage/headerImage.png';

import RolesComponent, {
  FilteringComponentProps,
  isMobile,
} from './RolesComponent';
import { HeaderJoinPage } from './HeaderJoinPage';
import Image from 'next/image';

interface Props extends FilteringComponentProps {}

const NewJoinPageComponent: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  return (
    <Wrapper>
      <HeaderImage>
        <Image
          src={HDRImage}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          quality={100}
        />
        <HeaderContent>
          <HeaderJoinPage />
        </HeaderContent>
      </HeaderImage>

      <BoxContainer paddingVertical={75}>
        <SelectRoleContainer>
          <SelectRoleText>
            Select the role that you're interested in:
          </SelectRoleText>
        </SelectRoleContainer>
      </BoxContainer>

      <BoxContainer paddingHorizontal={isMobile() ? 0 : 85}>
        <RolesComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>

      <BoxContainer paddingVertical={0} paddingHorizontal={50}>
        <Footer>
          <FooterFirstText>
            Didn't find what you were looking for?
          </FooterFirstText>
          <FooterSecondText>
            Create an account to be notified when more roles open up!
          </FooterSecondText>
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
