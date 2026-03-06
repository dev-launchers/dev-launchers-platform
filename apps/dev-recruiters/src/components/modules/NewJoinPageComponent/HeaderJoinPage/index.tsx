import React from 'react';
import {
  HeaderContainer,
  SubHeaderContainer,
  TypeSet,
  HeaderText,
  SubHeaderText,
} from './styles';

export function HeaderJoinPage() {
  return (
    <>
      <HeaderContainer>
        <SubHeaderContainer>
          <TypeSet>
            <HeaderText>
              Level up your skills and build
              <br className="desktop-break" />
              world-changing products
            </HeaderText>
            <SubHeaderText>
              Join our collaborative, global team as we build the future of
              technology.
            </SubHeaderText>
            <SubHeaderText>Check out our open roles below!</SubHeaderText>
          </TypeSet>
        </SubHeaderContainer>
      </HeaderContainer>
    </>
  );
}
