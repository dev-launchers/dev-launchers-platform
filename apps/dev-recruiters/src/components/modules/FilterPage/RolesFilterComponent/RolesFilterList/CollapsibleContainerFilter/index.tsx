import React from 'react';
import { RoleContainer, RoleContainerBody } from './styles';
import CollapsibleSectionFilter from './CollapsibleSectionFilter';
import SelectRoleFilter from './SelectRoleFilter';
import {
  FilterConatiner,
  ResultContainer,
  ResultProjects,
  ResultTitle,
  RolesContainer,
} from '../../../../../../components/modules/FilterPage/styledFilterPage';
import FilterComponent from '../../../../../../components/modules/FilterPage/FilterComponent';
import {
  CommitmentText,
  ContainerBody,
  ContainerCommitment,
  ContainerHead,
  ContainerMain,
  ContainerRoles,
} from '../../../../../../components/modules/FilterPage/FilterComponent/styles';
import RolesButtons from '../../../../../../components/modules/FilterPage/FilterComponent/RolesButtons';
import Commitment from '../../../../../../components/modules/FilterPage/FilterComponent/Commitment';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
  onRoleSelection: (roleLabel: string) => void;
}

const CollapsibleContainerFilter: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
  onRoleSelection,
}) => {
  function handleRoleClick(roleLabel) {
    const roleJsonString = JSON.stringify(roleLabel);

    localStorage.setItem('selectedRole', roleJsonString);
    onRoleSelection(roleLabel);

    // You can also redirect here if needed
  }

  return (
    <>
      <ContainerMain>
        <ContainerHead>Search Filter</ContainerHead>
        <ContainerBody>
          <ContainerRoles>
            <RolesButtons
              textRole="Product Lead"
              onClick={() => handleRoleClick(openPositions['ProductLead'])}
            />
            <RolesButtons
              textRole="UX Designer"
              onClick={() => handleRoleClick(openPositions['UxDesigner'])}
            />
            <RolesButtons
              textRole="UX Researcher"
              onClick={() => handleRoleClick(openPositions['UxResearcher'])}
            />
            <RolesButtons
              textRole="Information Architect"
              onClick={() =>
                handleRoleClick(openPositions['InformationArchitect'])
              }
            />
            <RolesButtons
              textRole="Lead Developer"
              onClick={() => handleRoleClick(openPositions['LeadDeveloper'])}
            />
            <RolesButtons
              textRole="Back-End Developer"
              onClick={() => handleRoleClick(openPositions['BackEndDeveloper'])}
            />
            <RolesButtons
              textRole="Front-End Developer"
              onClick={() =>
                handleRoleClick(openPositions['FrontEndDeveloper'])
              }
            />
            <RolesButtons
              textRole="QA Lead"
              onClick={() => handleRoleClick(openPositions['QaLead'])}
            />
            <RolesButtons
              textRole="QA Tester"
              onClick={() => handleRoleClick(openPositions['QaTester'])}
            />
            <RolesButtons
              textRole="Volunteer Coordinator"
              onClick={() =>
                handleRoleClick(openPositions['VoulunteerCordinator'])
              }
            />
            <RolesButtons
              textRole="Social Media Manager"
              onClick={() =>
                handleRoleClick(openPositions['SocialMediaManager'])
              }
            />
          </ContainerRoles>
          <ContainerCommitment>
            <CommitmentText>Time Commitment</CommitmentText>

            <Commitment />
          </ContainerCommitment>
        </ContainerBody>
      </ContainerMain>
    </>
  );
};

export default CollapsibleContainerFilter;
