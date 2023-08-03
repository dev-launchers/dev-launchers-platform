// components/CollapsibleContainer.tsx
import React from 'react';
import SelectRole from '../SelectRole';
import DeveloperMode from '../../../../../images/icons/Developer-mode.png';
import PopularMan from '../../../../../images/icons/Popular-Man.png';
import DesignServices from '../../../../../images/icons/Design-services.png';
import CaseStudy from '../../../../../images/icons/Case-Study.png';
import SourceCode from '../../../../../images/icons/Source-Code.png';
import FloorPlan from '../../../../../images/icons/Floor-Plan.png';
import CollapsibleSection from '../CollapsibleSection';
import { RoleContainer, RoleContainerBody } from './styles';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
}

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  openPositions: openPositions,
}) => {
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
            />
            <SelectRole
              src={PopularMan}
              textRole="UX Designer"
              openPositions={openPositions['UxDesigner']}
              openPositionsCount={openPositions['UxDesigner']}
            />
            <SelectRole
              src={CaseStudy}
              textRole="UX Researcher"
              openPositions={openPositions['UxResearcher']}
              openPositionsCount={openPositions['UxResearcher']}
            />
            <SelectRole
              src={FloorPlan}
              textRole="Information Architect"
              openPositions={openPositions['InformationArchitect']}
              openPositionsCount={openPositions['InformationArchitect']}
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
            />
            <SelectRole
              src={SourceCode}
              textRole="Back-End Developer"
              openPositions={openPositions['BackEndDeveloper']}
              openPositionsCount={openPositions['BackEndDeveloper']}
            />
            <SelectRole
              src={SourceCode}
              textRole="Front-End Developer"
              openPositions={openPositions['FrontEndDeveloper']}
              openPositionsCount={openPositions['FrontEndDeveloper']}
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
            />
            <SelectRole
              src={SourceCode}
              textRole="QA Tester"
              openPositions={openPositions['QaTester']}
              openPositionsCount={openPositions['QaTester']}
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
            />
            <SelectRole
              src={SourceCode}
              textRole="Social Media Manager"
              openPositions={openPositions['SocialMediaManager']}
              openPositionsCount={openPositions['SocialMediaManager']}
            />
          </RoleContainerBody>
        </CollapsibleSection>
      </RoleContainer>
    </>
  );
};

export default CollapsibleContainer;
