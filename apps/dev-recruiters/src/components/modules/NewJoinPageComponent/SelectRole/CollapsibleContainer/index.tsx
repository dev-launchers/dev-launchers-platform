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
  function handleRoleClick(role) {
    const roleJsonString = JSON.stringify(role);

    console.log('here', openPositions);

    localStorage.setItem('selectedRole', roleJsonString);
    router.push('/join/filter');

    // You can also redirect here if needed
  }

  const router = useRouter();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <>
      <RoleContainer>
        <CollapsibleSection title="Product / UX">
          <RoleContainerBody Mobile={isMobile}>
            <SelectRole
              src={DesignServices}
              textRole="Product Lead"
              openPositions={openPositions['ProductLead']}
              openPositionsCount={openPositions['ProductLead']}
              onClick={() => handleRoleClick(openPositions['ProductLead'])}
            />

            <SelectRole
              src={PopularMan}
              textRole="UX Designer"
              openPositions={openPositions['UxDesigner']}
              openPositionsCount={openPositions['UxDesigner']}
              onClick={() => handleRoleClick(openPositions['UxDesigner'])}
            />
            <SelectRole
              src={CaseStudy}
              textRole="UX Researcher"
              openPositions={openPositions['UxResearcher']}
              openPositionsCount={openPositions['UxResearcher']}
              onClick={() => handleRoleClick(openPositions['UxResearcher'])}
            />
            <SelectRole
              src={FloorPlan}
              textRole="Information Architect"
              openPositions={openPositions['InformationArchitect']}
              openPositionsCount={openPositions['InformationArchitect']}
              onClick={() =>
                handleRoleClick(openPositions['InformationArchitect'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="Development">
          <RoleContainerBody Mobile={isMobile}>
            <SelectRole
              src={CaseStudy}
              textRole="Lead Developer"
              openPositions={openPositions['LeadDeveloper']}
              openPositionsCount={openPositions['LeadDeveloper']}
              onClick={() => handleRoleClick(openPositions['LeadDeveloper'])}
            />
            <SelectRole
              src={SourceCode}
              textRole="Back-End Developer"
              openPositions={openPositions['BackEndDeveloper']}
              openPositionsCount={openPositions['BackEndDeveloper']}
              onClick={() => handleRoleClick(openPositions['BackEndDeveloper'])}
            />
            <SelectRole
              src={SourceCode}
              textRole="Front-End Developer"
              openPositions={openPositions['FrontEndDeveloper']}
              openPositionsCount={openPositions['FrontEndDeveloper']}
              onClick={() =>
                handleRoleClick(openPositions['FrontEndDeveloper'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="QA">
          <RoleContainerBody Mobile={isMobile}>
            <SelectRole
              src={DeveloperMode}
              textRole="QA Lead"
              openPositions={openPositions['QaLead']}
              openPositionsCount={openPositions['QaLead']}
              onClick={() => handleRoleClick(openPositions['QaLead'])}
            />
            <SelectRole
              src={SourceCode}
              textRole="QA Tester"
              openPositions={openPositions['QaTester']}
              openPositionsCount={openPositions['QaTester']}
              onClick={() => handleRoleClick(openPositions['QaTester'])}
            />
          </RoleContainerBody>
        </CollapsibleSection>

        <CollapsibleSection title="Operations">
          <RoleContainerBody Mobile={isMobile}>
            <SelectRole
              src={DeveloperMode}
              textRole="Volunteer Coordinator"
              openPositions={openPositions['VoulunteerCordinator']}
              openPositionsCount={openPositions['VoulunteerCordinator']}
              onClick={() =>
                handleRoleClick(openPositions['VoulunteerCordinator'])
              }
            />
            <SelectRole
              src={SourceCode}
              textRole="Social Media Manager"
              openPositions={openPositions['SocialMediaManager']}
              openPositionsCount={openPositions['SocialMediaManager']}
              onClick={() =>
                handleRoleClick(openPositions['SocialMediaManager'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSection>
      </RoleContainer>
    </>
  );
};

export default CollapsibleContainer;
