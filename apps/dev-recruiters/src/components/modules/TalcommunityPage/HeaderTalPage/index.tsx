import { Wrap } from '../StyledTalcommunityPage';
import React from 'react';
import {
  HeaderContainer,
  HeaderText,
  SubHeaderContainer,
  SubHeaderText,
} from './styles';

export function HeaderTalPage() {
  return (
    <Wrap>
      <HeaderContainer>
        <HeaderText>Dev Launchers Talent Community</HeaderText>
      </HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderText>
          Join our Talent Community to be notified about new volunteer roles
          that match your skillset!
        </SubHeaderText>
        <SubHeaderText>
          {' '}
          Volunteers at Dev Launchers get the chance to learn valuable skills,
          expand their portfolios, mentor talents, and network with like-minded
          people while building something that matters.
        </SubHeaderText>
      </SubHeaderContainer>
    </Wrap>
  );
}
