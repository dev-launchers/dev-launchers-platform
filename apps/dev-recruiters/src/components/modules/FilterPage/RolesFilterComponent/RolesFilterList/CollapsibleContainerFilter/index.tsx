// components/CollapsibleContainer.tsx
import { useRouter } from 'next/router';
import React from 'react';
import CaseStudy from '../../../../../../images/icons/Design-services.png';
import DesignServices from '../../../../../../images/icons/Design-services.png';
import DeveloperMode from '../../../../../../images/icons/Developer-mode.png';
import FloorPlan from '../../../../../../images/icons/Floor-Plan.png';
import PopularMan from '../../../../../../images/icons/Popular-Man.png';
import SourceCode from '../../../../../../images/icons/Source-Code.png';

import { RoleContainer, RoleContainerBody } from './styles';
import CollapsibleSectionFilter from './CollapsibleSectionFilter';
import SelectRoleFilter from './SelectRoleFilter';

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
      <RoleContainer>
        <CollapsibleSectionFilter title="Product / UX">
          <RoleContainerBody>
            <SelectRoleFilter
              src={DesignServices}
              textRole="Product Lead"
              openPositions={openPositions['ProductLead']}
              openPositionsCount={openPositions['ProductLead']}
              onClick={() => handleRoleClick(openPositions['ProductLead'])}
            />

            <SelectRoleFilter
              src={PopularMan}
              textRole="UX Designer"
              openPositions={openPositions['UxDesigner']}
              openPositionsCount={openPositions['UxDesigner']}
              onClick={() => handleRoleClick(openPositions['UxDesigner'])}
            />
            <SelectRoleFilter
              src={CaseStudy}
              textRole="UX Researcher"
              openPositions={openPositions['UxResearcher']}
              openPositionsCount={openPositions['UxResearcher']}
              onClick={() => handleRoleClick(openPositions['UxResearcher'])}
            />
            <SelectRoleFilter
              src={FloorPlan}
              textRole="Information Architect"
              openPositions={openPositions['InformationArchitect']}
              openPositionsCount={openPositions['InformationArchitect']}
              onClick={() =>
                handleRoleClick(openPositions['InformationArchitect'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSectionFilter>

        <CollapsibleSectionFilter title="Development">
          <RoleContainerBody>
            <SelectRoleFilter
              src={CaseStudy}
              textRole="Lead Developer"
              openPositions={openPositions['LeadDeveloper']}
              openPositionsCount={openPositions['LeadDeveloper']}
              onClick={() => handleRoleClick(openPositions['LeadDeveloper'])}
            />
            <SelectRoleFilter
              src={SourceCode}
              textRole="Back-End Developer"
              openPositions={openPositions['BackEndDeveloper']}
              openPositionsCount={openPositions['BackEndDeveloper']}
              onClick={() => handleRoleClick(openPositions['BackEndDeveloper'])}
            />
            <SelectRoleFilter
              src={SourceCode}
              textRole="Front-End Developer"
              openPositions={openPositions['FrontEndDeveloper']}
              openPositionsCount={openPositions['FrontEndDeveloper']}
              onClick={() =>
                handleRoleClick(openPositions['FrontEndDeveloper'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSectionFilter>

        <CollapsibleSectionFilter title="QA">
          <RoleContainerBody>
            <SelectRoleFilter
              src={DeveloperMode}
              textRole="QA Lead"
              openPositions={openPositions['QaLead']}
              openPositionsCount={openPositions['QaLead']}
              onClick={() => handleRoleClick(openPositions['QaLead'])}
            />
            <SelectRoleFilter
              src={SourceCode}
              textRole="QA Tester"
              openPositions={openPositions['QaTester']}
              openPositionsCount={openPositions['QaTester']}
              onClick={() => handleRoleClick(openPositions['QaTester'])}
            />
          </RoleContainerBody>
        </CollapsibleSectionFilter>

        <CollapsibleSectionFilter title="Operations">
          <RoleContainerBody>
            <SelectRoleFilter
              src={DeveloperMode}
              textRole="Volunteer Coordinator"
              openPositions={openPositions['VoulunteerCordinator']}
              openPositionsCount={openPositions['VoulunteerCordinator']}
              onClick={() =>
                handleRoleClick(openPositions['VoulunteerCordinator'])
              }
            />
            <SelectRoleFilter
              src={SourceCode}
              textRole="Social Media Manager"
              openPositions={openPositions['SocialMediaManager']}
              openPositionsCount={openPositions['SocialMediaManager']}
              onClick={() =>
                handleRoleClick(openPositions['SocialMediaManager'])
              }
            />
          </RoleContainerBody>
        </CollapsibleSectionFilter>
      </RoleContainer>
    </>
  );
};

export default CollapsibleContainerFilter;
