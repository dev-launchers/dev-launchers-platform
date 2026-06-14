import React from 'react';
import {
  Wrap,
  HeaderContainer,
  SubHeaderContainer,
  TypeSet,
  HeaderText,
  SubHeaderText,
} from './styles';

export function HeaderTalPage() {
  return (
    <Wrap>
      <HeaderContainer>
        <SubHeaderContainer>
          <TypeSet>
            <HeaderText>Dev Launchers Talent Community</HeaderText>
            <SubHeaderText>
              At Dev Launchers, volunteers build real projects, grow their
              skills, expand their portfolios, and connect with like-minded
              people — all while working on something that matters. Join our
              Talent Community to get notified about new volunteer roles that
              match your interests and strengths!
            </SubHeaderText>
            <SubHeaderText>Check out our open roles below!</SubHeaderText>
          </TypeSet>
        </SubHeaderContainer>
      </HeaderContainer>
    </Wrap>
  );
}
