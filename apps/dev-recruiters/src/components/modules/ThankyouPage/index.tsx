import React from 'react';
import {
  BaseText,
  HeaderContainer,
  HeaderText,
  SubHeaderContainer,
  SubHeaderText,
  Wrapper,
} from './styles';
import BoxContainer from '../../common/BoxContainer';
import { Wrap } from '../TalcommunityPage/StyledTalcommunityPage';

export function ThankyouPage() {
  return (
    <>
      <Wrapper>
        <HeaderContainer>Thank you!</HeaderContainer>
        <SubHeaderContainer>
          Your application for the Dev Launchers Talent Community has been
          received.
          <SubHeaderContainer>
            We will email you when a volunteer role that matches your skillsets
            and/or interests opens up!
          </SubHeaderContainer>
        </SubHeaderContainer>
      </Wrapper>
    </>
  );
}
