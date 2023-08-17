import React, { useState } from 'react';
import RolesButtons from './RolesButtons';
import Commitment from './Commitment';
import {
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
  isFilterActive: any;
}

const CollapsibleContainerFilter: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
  onRoleSelection,
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
<<<<<<< HEAD
<<<<<<< HEAD
              isActive={roleActive === 'QaLead'}
=======
              isActive={selectedRole === 'QaLead'}
>>>>>>> 1fc468f4 (feat: creating logic to change the button color when active)
=======
              isActive={roleActive === 'QaLead'}
>>>>>>> 79e3fb90 (feat: create the logic of time commitment)
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
<<<<<<< HEAD
            <Commitment />
=======
            <CommitmentText>Time Commitment</CommitmentText>

<<<<<<< HEAD
<<<<<<< HEAD
            <Commitment selectRoleLabel={selectRoleLabel} />
>>>>>>> b4f9e26e (build: work in time commitment)
=======
            <Commitment
              handleCommitmentFilter={handleCommitmentFilter}
              isFilterActive={isFilterActive}
            />
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
            <Commitment />
>>>>>>> 79e3fb90 (feat: create the logic of time commitment)
          </ContainerCommitment>
        </ContainerBody>
      </ContainerMain>
    </>
  );
};

export default CollapsibleContainerFilter;
