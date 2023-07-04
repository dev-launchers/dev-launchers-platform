import React from 'react';
import {
  BtnShowRoles,
  BtnSignUp,
  Footer,
  HeadingContainer,
  HeadingSubText,
  HeadingText,
  RoleContainer,
  RoleContainerBody,
  RoleContainerHead,
  SelectRoles,
  SelectRolesContainer,
  Wrapper,
  AreaImage,
} from './StyledNewJoinPage';
import BoxContainer from '../../common/BoxContainer';
import ContainerImage from './ContainerImage/containerImage';
import Logo from '../../../images/logo-monogram.png';

import SelectRole from './SelectRole/SelectRole';

import CaseStudy from '../../../images/icons/Case-Study.png';
import DesignServices from '../../../images/icons/Design-services.png';
import DeveloperMode from '../../../images/icons/Developer-mode.png';
import FloorPlan from '../../../images/icons/Floor-Plan.png';
import PopularMan from '../../../images/icons/Popular-Man.png';
import SourceCode from '../../../images/icons/Source-Code.png';

export default function NewJoinPageComponent() {
  return (
    <Wrapper>
      <BoxContainer paddingVertical={65} bgColor="Gray">
        <HeadingContainer>
          <HeadingText>
            Want to level up your tech skills and build world-changing products?
          </HeadingText>
        </HeadingContainer>
      </BoxContainer>
      <BoxContainer paddingVertical={35}>
        <HeadingContainer>
          <HeadingSubText>
            <h1>
              Join our collaborative, global team as we build the future of
              technology.
            </h1>
            <h1>Check out our open roles below!</h1>
          </HeadingSubText>
          <AreaImage>
            <ContainerImage src={Logo} width="45%" />
            <ContainerImage src={Logo} width="45%" />
          </AreaImage>
        </HeadingContainer>
      </BoxContainer>
      <BoxContainer>
        <SelectRolesContainer>
          <SelectRoles>
            <h1>Select the role you are interested in:</h1>
            <BtnShowRoles>SHOW ME OPEN ROLES</BtnShowRoles>
          </SelectRoles>
        </SelectRolesContainer>
      </BoxContainer>
      <BoxContainer paddingVertical={45} paddingHorizontal={50}>
        <RoleContainer>
          <RoleContainerHead>
            <h1>Product UX/UI</h1>
          </RoleContainerHead>
          <RoleContainerBody>
            <SelectRole
              src={DesignServices}
              textRole="Product Lead"
              textRoleSituation="2 role open"
            />
            <SelectRole
              src={PopularMan}
              textRole="UX Designer"
              textRoleSituation="2 role open"
            />
            <SelectRole
              src={CaseStudy}
              textRole="UX Researcher"
              textRoleSituation="2 role open"
            />
            <SelectRole
              src={FloorPlan}
              textRole="Information Architect"
              textRoleSituation="0 role open"
            />
          </RoleContainerBody>
        </RoleContainer>

        <RoleContainer>
          <RoleContainerHead>
            <h1>Development</h1>
          </RoleContainerHead>
          <RoleContainerBody>
            <SelectRole
              src={DeveloperMode}
              textRole="Lead Developer"
              textRoleSituation="1 role open"
            />
            <SelectRole
              src={SourceCode}
              textRole="Backend Developer"
              textRoleSituation="2 role open"
            />
            <SelectRole
              src={DeveloperMode}
              textRole="Frontend Developer"
              textRoleSituation="0 role open"
            />
          </RoleContainerBody>
        </RoleContainer>

        <RoleContainer>
          <RoleContainerHead>
            <h1>QA</h1>
          </RoleContainerHead>
          <RoleContainerBody>
            <SelectRole
              src={DeveloperMode}
              textRole="QA Lead"
              textRoleSituation="2 role open"
            />
            <SelectRole
              src={SourceCode}
              textRole="QA Tester"
              textRoleSituation="2 role open"
            />
          </RoleContainerBody>
        </RoleContainer>

        <RoleContainer>
          <RoleContainerHead>
            <h1>Operations</h1>
          </RoleContainerHead>
          <RoleContainerBody>
            <SelectRole
              src={DeveloperMode}
              textRole="Volunteer Coorinator"
              textRoleSituation="1 role open"
            />
            <SelectRole
              src={SourceCode}
              textRole="Social Media Manager"
              textRoleSituation="1 role open"
            />
          </RoleContainerBody>
        </RoleContainer>
      </BoxContainer>
      <BoxContainer paddingVertical={45} paddingHorizontal={50}>
        <Footer>
          <h1>Didn't find what you were looking for?</h1>
          <h3>Sing up to be notified when more roles open up!</h3>
          <BtnSignUp>SIGN UP</BtnSignUp>
        </Footer>
      </BoxContainer>
    </Wrapper>
  );
}
