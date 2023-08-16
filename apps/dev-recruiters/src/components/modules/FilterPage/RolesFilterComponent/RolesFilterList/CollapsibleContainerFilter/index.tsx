import React, { useState } from 'react';
import RolesButtons from './RolesButtons';
import Commitment from './Commitment';
import {
  CommitmentText,
  ContainerBody,
  ContainerCommitment,
  ContainerHead,
  ContainerMain,
  ContainerRoles,
} from './styles';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
  onRoleSelection: (roleLabel: string) => void;
  selectRoleLabel: string;
  handleCommitmentFilter: any;
  isFilterActive: any;
}

const CollapsibleContainerFilter: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
  onRoleSelection,
  handleCommitmentFilter,
  isFilterActive,
}) => {
  const [roleActive, setRoleActive] = useState(null);

  function handleRoleClick(roleName, roleLabel) {
    const roleJsonString = JSON.stringify(roleLabel);

    localStorage.setItem('selectedRole', roleJsonString);
    onRoleSelection(roleLabel);
    setRoleActive(roleName);

    // You can also redirect here if needed
  }

  const selectedRole = JSON.parse(localStorage.getItem('selectedRole'));
  return (
    <>
      <ContainerMain>
        <ContainerHead>Search Filter</ContainerHead>
        <ContainerBody>
          <ContainerRoles>
            <RolesButtons
              textRole="Product Lead"
              onClick={() =>
                handleRoleClick('ProductLead', openPositions['ProductLead'])
              }
              isActive={roleActive === 'ProductLead'}
            />
            <RolesButtons
              textRole="UX Designer"
              onClick={() =>
                handleRoleClick('UxDesigner', openPositions['UxDesigner'])
              }
              isActive={roleActive === 'UxDesigner'}
            />
            <RolesButtons
              textRole="UX Researcher"
              onClick={() =>
                handleRoleClick('UxResearcher', openPositions['UxResearcher'])
              }
              isActive={roleActive === 'UxResearcher'}
            />
            <RolesButtons
              textRole="Info Architect"
              onClick={() =>
                handleRoleClick(
                  'InformationArchitect',
                  openPositions['InformationArchitect']
                )
              }
              isActive={roleActive === 'InformationArchitect'}
            />
            <RolesButtons
              textRole="QA Lead"
              onClick={() => handleRoleClick('QaLead', openPositions['QaLead'])}
              isActive={selectedRole === 'QaLead'}
            />
            <RolesButtons
              textRole="QA Tester"
              onClick={() =>
                handleRoleClick('QaTester', openPositions['QaTester'])
              }
              isActive={roleActive === 'QaTester'}
            />
            <RolesButtons
              textRole="Lead Dev"
              onClick={() =>
                handleRoleClick('LeadDeveloper', openPositions['LeadDeveloper'])
              }
              isActive={roleActive === 'LeadDeveloper'}
            />
            <RolesButtons
              textRole="Front-End Dev"
              onClick={() =>
                handleRoleClick(
                  'FrontEndDeveloper',
                  openPositions['FrontEndDeveloper']
                )
              }
              isActive={roleActive === 'FrontEndDeveloper'}
            />
            <RolesButtons
              textRole="Back-End Dev"
              onClick={() =>
                handleRoleClick(
                  'BackEndDeveloper',
                  openPositions['BackEndDeveloper']
                )
              }
              isActive={roleActive === 'BackEndDeveloper'}
            />
            <RolesButtons
              textRole="Volunteer Coord."
              onClick={() =>
                handleRoleClick(
                  'VoulunteerCordinator',
                  openPositions['VoulunteerCordinator']
                )
              }
              isActive={roleActive === 'VoulunteerCordinator'}
            />
            <RolesButtons
              textRole="Social Media Mgr."
              onClick={() =>
                handleRoleClick(
                  'SocialMediaManager',
                  openPositions['SocialMediaManager']
                )
              }
              isActive={roleActive === 'SocialMediaManager'}
            />
          </ContainerRoles>
          <ContainerCommitment>
            <CommitmentText>Time Commitment</CommitmentText>

            <Commitment
              handleCommitmentFilter={handleCommitmentFilter}
              isFilterActive={isFilterActive}
            />
          </ContainerCommitment>
        </ContainerBody>
      </ContainerMain>
    </>
  );
};

export default CollapsibleContainerFilter;
