import React, { useEffect, useState } from 'react';
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
  onRoleSelection: (roleLabel: string, roleCategory: string) => void;
  selectRoleLabel: string;
}

const CollapsibleContainerFilter: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
  onRoleSelection,
}) => {
  const [roleActive, setRoleActive] = useState(null);

  useEffect(() => {
    const roleName = localStorage.getItem('roleName');
    setRoleActive(roleName);
  }, []);

  function handleRoleClick(roleName, roleLabel, roleCategory) {
    const roleJsonString = JSON.stringify(roleLabel);

    localStorage.setItem('selectedRole', roleJsonString);
    localStorage.setItem('roleCategory', roleCategory);
    localStorage.setItem('roleName', roleName);
    onRoleSelection(roleLabel, roleCategory);
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
                handleRoleClick(
                  'ProductLead',
                  openPositions['ProductLead'],
                  'Product / UX'
                )
              }
              isActive={roleActive === 'ProductLead'}
            />
            <RolesButtons
              textRole="UX Designer"
              onClick={() =>
                handleRoleClick(
                  'UxDesigner',
                  openPositions['UxDesigner'],
                  'Product / UX'
                )
              }
              isActive={roleActive === 'UxDesigner'}
            />
            <RolesButtons
              textRole="UX Researcher"
              onClick={() =>
                handleRoleClick(
                  'UxResearcher',
                  openPositions['UxResearcher'],
                  'Product / UX'
                )
              }
              isActive={roleActive === 'UxResearcher'}
            />
            <RolesButtons
              textRole="Info Architect"
              onClick={() =>
                handleRoleClick(
                  'InformationArchitect',
                  openPositions['InformationArchitect'],
                  'Product / UX'
                )
              }
              isActive={roleActive === 'InformationArchitect'}
            />
            <RolesButtons
              textRole="QA Lead"
              onClick={() =>
                handleRoleClick('QaLead', openPositions['QaLead'], 'QA')
              }
              isActive={roleActive === 'QaLead'}
            />
            <RolesButtons
              textRole="QA Tester"
              onClick={() =>
                handleRoleClick('QaTester', openPositions['QaTester'], 'QA')
              }
              isActive={roleActive === 'QaTester'}
            />
            <RolesButtons
              textRole="Lead Dev"
              onClick={() =>
                handleRoleClick(
                  'LeadDeveloper',
                  openPositions['LeadDeveloper'],
                  'Development'
                )
              }
              isActive={roleActive === 'LeadDeveloper'}
            />
            <RolesButtons
              textRole="Front-End Dev"
              onClick={() =>
                handleRoleClick(
                  'FrontEndDeveloper',
                  openPositions['FrontEndDeveloper'],
                  'Development'
                )
              }
              isActive={roleActive === 'FrontEndDeveloper'}
            />
            <RolesButtons
              textRole="Back-End Dev"
              onClick={() =>
                handleRoleClick(
                  'BackEndDeveloper',
                  openPositions['BackEndDeveloper'],
                  'Development'
                )
              }
              isActive={roleActive === 'BackEndDeveloper'}
            />
            <RolesButtons
              textRole="Volunteer Coord."
              onClick={() =>
                handleRoleClick(
                  'VoulunteerCordinator',
                  openPositions['VoulunteerCordinator'],
                  'Operations'
                )
              }
              isActive={roleActive === 'VoulunteerCordinator'}
            />
            <RolesButtons
              textRole="Social Media Mgr."
              onClick={() =>
                handleRoleClick(
                  'SocialMediaManager',
                  openPositions['SocialMediaManager'],
                  'Operations'
                )
              }
              isActive={roleActive === 'SocialMediaManager'}
            />
          </ContainerRoles>
          <ContainerCommitment>
            <Commitment />
          </ContainerCommitment>
        </ContainerBody>
      </ContainerMain>
    </>
  );
};

export default CollapsibleContainerFilter;
