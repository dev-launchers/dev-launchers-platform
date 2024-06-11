import React from 'react';
import {
  HeaderContainer,
  SubHeaderContainer,
  Wrapper,
  BtnSignUp,
} from './styles';
import BoxContainer from '../../common/BoxContainer';
import { useRouter } from 'next/router';

export function ThankyouPage() {
  const router = useRouter();
  const routeChange = (e) => {
    e.preventDefault();
    router.push('/join/filter');
  };
  return (
    <>
      <Wrapper>
        <BoxContainer paddingVertical={16}>
          <HeaderContainer>Thank you!</HeaderContainer>
          <SubHeaderContainer>
            Your application for the Dev Launchers Talent Community has been
            received.
          </SubHeaderContainer>
          <SubHeaderContainer>
            We will email you when a volunteer role that matches your skillsets
            and/or interests opens up!
          </SubHeaderContainer>
          <BoxContainer paddingVertical={80} paddingHorizontal={520}>
            <BtnSignUp as="a" type="submit" onClick={routeChange}>
              VIEW CURRENT OPEN ROLES
            </BtnSignUp>
          </BoxContainer>
        </BoxContainer>
      </Wrapper>
    </>
  );
}
