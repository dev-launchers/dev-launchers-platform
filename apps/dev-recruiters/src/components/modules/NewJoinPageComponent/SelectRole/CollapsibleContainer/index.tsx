// components/CollapsibleContainer.tsx
import { useRouter } from 'next/router';
import React from 'react';
import CaseStudy from '../../../../../images/icons/Case-Study.png';
import DesignServices from '../../../../../images/icons/Design-services.png';
import DeveloperMode from '../../../../../images/icons/Developer-mode.png';
import FloorPlan from '../../../../../images/icons/Floor-Plan.png';
import PopularMan from '../../../../../images/icons/Popular-Man.png';
import SourceCode from '../../../../../images/icons/Source-Code.png';
import CollapsibleSection from '../CollapsibleSection';
import SelectRole from '../SelectRole';
import { RoleContainer, RoleContainerBody } from './styles';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
}

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
}) => {
  function handleRoleClick(roleName, role, roleCategory) {
    const roleJsonString = JSON.stringify(role);

    localStorage.setItem('selectedRole', roleJsonString);
    localStorage.setItem('roleCategory', roleCategory);
    localStorage.setItem('roleName', roleName);
    router.push('/join/filter');

    // You can also redirect here if needed
  }

  const router = useRouter();

  return (
    <>
      <RoleContainer>
        <CollapsibleSection title="Product / UX">
          <RoleContainerBody>
            <SelectRole
              src={DesignServices}
              textRole="Product Lead"
              openPositions={openPositions['ProductLead']}
              openPositionsCount={openPositions['ProductLead']}
              onClick={() =>
                handleRoleClick(
                  'ProductLead',
                  openPositions['ProductLead'],
                  'Product / UX'
                )
              }
            />

            <SelectRole
              src={PopularMan}
              textRole="UX Designer"
              openPositions={openPositions['UxDesigner']}
              openPositionsCount={openPositions['UxDesigner']}
              onClick={() =>
                handleRoleClick(
                  'UxDesigner',
                  openPositions['UxDesigner'],
                  'Product / UX'
                )
              }
            />
            <SelectRole
              src={CaseStudy}
              textRole="UX Researcher"
              openPositions={openPositions['UxResearcher']}
              openPositionsCount={openPositions['UxResearcher']}
              onClick={() =>
                handleRoleClick(
                  'UxResearcher',
                  openPositions['UxResearcher'],
                  'Product / UX'
                )
              }
            />
            <SelectRole
              src={FloorPlan}
              textRole="Information Architect"
              openPositions={openPositions['InformationArchitect']}
              openPositionsCount={openPositions['InformationArchitect']}
              onClick={() =>
                handleRoleClick(
                  'InformationArchitect',
                  openPositions['InformationArchitect'],
                  'Product / UX'
                )
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="Development">
          <RoleContainerBody>
            <SelectRole
              src={CaseStudy}
              textRole="Lead Developer"
              openPositions={openPositions['LeadDeveloper']}
              openPositionsCount={openPositions['LeadDeveloper']}
              onClick={() =>
                handleRoleClick(
                  'LeadDeveloper',
                  openPositions['LeadDeveloper'],
                  'Development'
                )
              }
            />
            <SelectRole
              src={SourceCode}
              textRole="Back-End Developer"
              openPositions={openPositions['BackEndDeveloper']}
              openPositionsCount={openPositions['BackEndDeveloper']}
              onClick={() =>
                handleRoleClick(
                  'BackEndDeveloper',
                  openPositions['BackEndDeveloper'],
                  'Development'
                )
              }
            />
            <SelectRole
              src={SourceCode}
              textRole="Front-End Developer"
              openPositions={openPositions['FrontEndDeveloper']}
              openPositionsCount={openPositions['FrontEndDeveloper']}
              onClick={() =>
                handleRoleClick(
                  'FrontEndDeveloper',
                  openPositions['FrontEndDeveloper'],
                  'Development'
                )
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="QA">
          <RoleContainerBody>
            <SelectRole
              src={DeveloperMode}
              textRole="QA Lead"
              openPositions={openPositions['QaLead']}
              openPositionsCount={openPositions['QaLead']}
              onClick={() =>
                handleRoleClick('QaLead', openPositions['QaLead'], 'QA')
              }
            />
            <SelectRole
              src={SourceCode}
              textRole="QA Tester"
              openPositions={openPositions['QaTester']}
              openPositionsCount={openPositions['QaTester']}
              onClick={() =>
                handleRoleClick('QaTester', openPositions['QaTester'], 'QA')
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="Operations">
          <RoleContainerBody>
            <SelectRole
              src={DeveloperMode}
              textRole="Volunteer Coordinator"
              openPositions={openPositions['VoulunteerCordinator']}
              openPositionsCount={openPositions['VoulunteerCordinator']}
              onClick={() =>
                handleRoleClick(
                  'VoulunteerCordinator',
                  openPositions['VoulunteerCordinator'],
                  'Operations'
                )
              }
            />
            <SelectRole
              src={SourceCode}
              textRole="Social Media Manager"
              openPositions={openPositions['SocialMediaManager']}
              openPositionsCount={openPositions['SocialMediaManager']}
              onClick={() =>
                handleRoleClick(
                  'SocialMediaManager',
                  openPositions['SocialMediaManager'],
                  'Operations'
                )
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>
      </RoleContainer>
    </>
  );
};

export default CollapsibleContainer;
